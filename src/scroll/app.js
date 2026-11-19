// scroll/app.js — スクロール連動版 SCENE 03（札幌・大通公園／さっぽろテレビ塔）の起動とメインループ。
import * as THREE from 'three';
import { ScrollRenderer } from './renderer.js';
import { SapporoScrollScene } from './scene.js';
import { DebugPanel } from './debug.js';
import { hazeFromQuery } from './haze.js';
import { progressFromScroll, tOfP, portraitWeight, CAPTIONS, windowOpacity, TIERS, SNOW, fitBudget, isPhone, defaultTier, follow } from './math.js';

const $ = (id) => document.getElementById(id);
const q = new URLSearchParams(location.search);
const DEBUG = q.get('debug') === '1';
const FREEZE = q.get('freeze') === '1'; // 検証用：自動ループを止め、フック経由でのみ描画する
const coarse = matchMedia('(pointer: coarse)').matches;

async function main() {
  const track = $('track'), stage = $('stage'), cv = $('cv');
  const meta = await (await fetch('metadata/cities.json')).json();
  const m = meta.cities.find((c) => c.id === 'sapporo');

  const renderer = new ScrollRenderer(cv, { width: 320, height: 568 });
  const city = new SapporoScrollScene(m, m.displayOrder, meta.cities.length, { renderer: renderer.gl, tiled: q.get('tiles') === '0' ? false : (q.get('tiles') || true), haze: hazeFromQuery(q) });
  await city.build();
  renderer.setCity(city);
  const dbg = DEBUG ? new DebugPanel() : null;
  const gpu = renderer.gpuString();

  const state = { p: 0, t: 0, w: 0, width: 0, height: 0, dpr: 1, scale: 1 };

  // ---- 品質ティア：?tier=T0..T3 で固定。未指定なら スマホ=T1 / それ以外=T2。実行中の自動切替はしない。
  const tierById = (id) => TIERS.find((t) => t.id === id);
  let tier = tierById((q.get('tier') || '').toUpperCase()) || tierById(defaultTier(stage.clientWidth || innerWidth, stage.clientHeight || innerHeight, coarse));
  const snowMode = () => (q.get('snow') === 'normal' ? 'normal' : q.get('snow') === 'light' ? 'light' : (isPhone(stage.clientWidth || innerWidth, stage.clientHeight || innerHeight, coarse) ? 'light' : 'normal'));

  function fitSize() {
    const cssW = stage.clientWidth || innerWidth, cssH = stage.clientHeight || innerHeight;
    const dpr = Math.min(devicePixelRatio || 1, 3);
    const { w, h, scale } = fitBudget(cssW, cssH, dpr, tier.mp);
    renderer.applyQuality({ w, h, samples: tier.samples, dof: tier.dof });
    const mode = snowMode(); city.setSnowCount(SNOW[mode]);
    Object.assign(state, { width: w, height: h, dpr, scale, aspect: cssW / cssH, snowMode: mode });
    state.w = portraitWeight(state.aspect);
    city.setLayoutWeight(state.w);
    dirty = true;
  }
  /** ティアを変更する（履歴は ?debug=1 パネルに残る）。 */
  function setTier(id, reason = 'manual') {
    const t = tierById(id); if (!t || t === tier) return;
    dbg?.logTier(tier.id, t.id, reason); tier = t; fitSize();
  }

  let dirty = true;
  let pinned = null; // 検証用：p を固定して決定的に描画する間だけ使う
  const readP = () => progressFromScroll(track.getBoundingClientRect().top, track.offsetHeight, stage.offsetHeight);
  addEventListener('scroll', () => { dirty = true; }, { passive: true });

  // 回転・リサイズで p が飛ばないようにする（旧版には 0.5→0.81 に飛ぶバグがあった）。
  //   リサイズ中は直前の安定した p（pStable）を保持して描画し、レイアウトが落ち着いたらその p へスクロール位置を戻す。
  let pStable = 0, pShown = null, resizing = false, rzT = 0;
  const applyP = (p) => { const max = track.offsetHeight - stage.offsetHeight; window.scrollTo(0, p * max); };
  let lastW = 0, lastH = 0;
  const onResize = () => {
    // ステージ（svh/幅）の大きさが変わらないリサイズ（iOS のアドレスバー伸縮など）では何もしない。
    // scrollTo で慣性スクロールを止めたり、再描画サイズを作り直したりしないため。
    if (stage.clientWidth === lastW && stage.clientHeight === lastH) return;
    if (!resizing) { resizing = true; }
    clearTimeout(rzT);
    rzT = setTimeout(() => { fitSize(); applyP(pStable); resizing = false; }, 160);
    lastW = stage.clientWidth; lastH = stage.clientHeight;
  };
  addEventListener('resize', onResize);
  addEventListener('orientationchange', onResize);
  fitSize();
  lastW = stage.clientWidth; lastH = stage.clientHeight;

  const panelState = () => ({
    tierLabel: `${tier.id} 予算${tier.mp}MP MSAA${tier.samples} DoF${tier.dof ? 'あり' : 'なし'} 雪${SNOW[state.snowMode]}`, width: state.width, height: state.height, dpr: state.dpr,
    scale: state.scale, p: state.p, target: state.target, t: state.t, wPortrait: state.w,
    calls: renderer.lastInfo.calls, triangles: renderer.lastInfo.triangles, gpu, haze: city.haze?.cfg,
  });
  // ---- キャプション：不透明度は p だけで決まる（同じ p なら同じ見え方。逆スクロールでも対称）
  const capEls = CAPTIONS.map((c) => ({ ...c, el: $(c.id), last: -1 }));
  const captionOpacity = (p) => capEls.map((c) => windowOpacity(c.a, c.b, p));
  function updateCaptions(p) {
    for (const c of capEls) {
      const o = windowOpacity(c.a, c.b, p);
      if (Math.abs(o - c.last) < 0.004) continue;
      c.last = o;
      c.el.style.opacity = o.toFixed(3);
      c.el.style.transform = `translateY(${((1 - o) * 8).toFixed(1)}px)`;
    }
  }

  const clock0 = performance.now();
  let frame = 0;
  function loop(now) {
    requestAnimationFrame(loop);
    if (FREEZE) return;
    if (!resizing) pStable = pinned ?? readP();       // pStable = スクロール位置から求めた目標 p
    const dt = Math.min(0.1, Math.max(0, (now - (loop.last ?? now)) / 1000)); loop.last = now;
    pShown = pinned !== null || pShown === null ? pStable : follow(pShown, pStable, dt); // カメラ側の p に減衰（行き過ぎ・ワープなし）
    state.p = pShown; state.target = pStable;
    state.t = tOfP(state.p);
    updateCaptions(state.p);
    // 雪・車などは実時間で動かし、スクロールを止めても画面が生きているようにする
    const ambient = pinned !== null ? state.t : (now - clock0) / 1000;
    renderer.renderAt(state.t, frame++, ambient);
    dbg?.tick(now);
    if (dbg && frame % 6 === 0) {
      dbg.update(panelState());
    }
  }
  requestAnimationFrame(loop);
  $('loading').classList.add('hide');

  // ---- 検証用フック（ヘッドレス撮影・確認用。UI には出さない）
  window.__scroll = {
    state: () => ({ ...state }),
    tileStats: () => city.tileStats ?? null,
    /** p を直接指定して決定的に 1 フレーム描画（ambient は t に固定） */
    renderAtProgress(p) { pinned = p; pShown = p; state.p = p; state.t = tOfP(p); updateCaptions(p); renderer.renderAt(state.t, 0, state.t); dbg?.update(panelState()); },
    unpin() { pinned = null; },
    setTier, tier: () => tier.id,
    renderer, city, THREE,
    /** 指定 p・アスペクト比のカメラ（検証用） */
    cameraAt(p, aspect) { const w = portraitWeight(aspect); return city.rig.sample(11 + tOfP(p), w); },
    pStable: () => pStable,
    captionOpacity,
    captionDom: () => capEls.map((c) => ({ id: c.id, opacity: +getComputedStyle(c.el).opacity, text: c.el.textContent })),
  };
  window.__ready = true;
}

main().catch((e) => { console.error(e); window.__bootError = String(e.stack || e); const el = $('loadMsg'); if (el) el.textContent = 'エラー: ' + (e.message || e); });
