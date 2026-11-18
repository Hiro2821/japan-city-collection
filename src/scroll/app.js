// scroll/app.js — スクロール連動版 SCENE 03（札幌・大通公園／さっぽろテレビ塔）の起動とメインループ。
import * as THREE from 'three';
import { ScrollRenderer } from './renderer.js';
import { SapporoScrollScene } from './scene.js';
import { DebugPanel } from './debug.js';
import { progressFromScroll, tOfP, portraitWeight } from './math.js';

const $ = (id) => document.getElementById(id);
const q = new URLSearchParams(location.search);
const DEBUG = q.get('debug') === '1';
const FREEZE = q.get('freeze') === '1'; // 検証用：自動ループを止め、フック経由でのみ描画する
const FIXED_MP = 0.55; // ステップ2時点の暫定固定予算（ティア方式はステップ5で導入）

async function main() {
  const track = $('track'), stage = $('stage'), cv = $('cv');
  const meta = await (await fetch('metadata/cities.json')).json();
  const m = meta.cities.find((c) => c.id === 'sapporo');

  const renderer = new ScrollRenderer(cv, { width: 320, height: 568 });
  const city = new SapporoScrollScene(m, m.displayOrder, meta.cities.length, { renderer: renderer.gl });
  await city.build();
  renderer.setCity(city);
  const dbg = DEBUG ? new DebugPanel() : null;
  const gpu = renderer.gpuString();

  const state = { p: 0, t: 0, w: 0, width: 0, height: 0, dpr: 1, scale: 1 };

  function fitSize() {
    const cssW = stage.clientWidth || innerWidth, cssH = stage.clientHeight || innerHeight;
    const dpr = Math.min(devicePixelRatio || 1, 3);
    const nativePx = cssW * dpr * cssH * dpr;
    const scale = Math.min(1, Math.sqrt((FIXED_MP * 1e6) / nativePx));
    const w = Math.max(2, Math.round(cssW * dpr * scale)), h = Math.max(2, Math.round(cssH * dpr * scale));
    renderer.setSize(w, h);
    Object.assign(state, { width: w, height: h, dpr, scale, aspect: cssW / cssH });
    state.w = portraitWeight(state.aspect);
    dirty = true;
  }

  let dirty = true;
  let pinned = null; // 検証用：p を固定して決定的に描画する間だけ使う
  const readP = () => progressFromScroll(track.getBoundingClientRect().top, track.offsetHeight, stage.offsetHeight);
  addEventListener('scroll', () => { dirty = true; }, { passive: true });
  let rzT = 0;
  addEventListener('resize', () => { clearTimeout(rzT); rzT = setTimeout(fitSize, 120); });
  fitSize();

  const panelState = () => ({
    tierLabel: `fixed ${FIXED_MP}MP (step2・ティア方式は未実装)`, width: state.width, height: state.height, dpr: state.dpr,
    scale: state.scale, p: state.p, t: state.t, wPortrait: state.w,
    calls: renderer.lastInfo.calls, triangles: renderer.lastInfo.triangles, gpu,
  });
  const clock0 = performance.now();
  let frame = 0;
  function loop(now) {
    requestAnimationFrame(loop);
    if (FREEZE) return;
    state.p = pinned ?? readP();
    state.t = tOfP(state.p);
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
    /** p を直接指定して決定的に 1 フレーム描画（ambient は t に固定） */
    renderAtProgress(p) { pinned = p; state.p = p; state.t = tOfP(p); renderer.renderAt(state.t, 0, state.t); dbg?.update(panelState()); },
    unpin() { pinned = null; },
    renderer, city, THREE,
    setAspectTarget() {},
  };
  window.__ready = true;
}

main().catch((e) => { console.error(e); window.__bootError = String(e.stack || e); const el = $('loadMsg'); if (el) el.textContent = 'エラー: ' + (e.message || e); });
