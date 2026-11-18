// main.js — 起動・プレビュー(UI)・書き出し・ヘッドレス用フック
import { CityRenderer } from './renderer.js';
import { exportWebM, pickCodec } from './exporter.js';

const $ = (id) => document.getElementById(id);
const q = new URLSearchParams(location.search);
const isExportMode = q.get('export') === '1';
const FPS = 30;

const stage = $('stage');
const statusEl = $('status');
const setStatus = (s) => { statusEl.textContent = s; };

const cityModules = {
  sapporo: () => import('./scenes/sapporo.js'),
  // sendai: () => import('./scenes/sendai.js'), … 都市を追加するときはここに1行足す
};

async function main() {
  const meta = await (await fetch('metadata/cities.json')).json();
  const cities = [...meta.cities].sort((a, b) => a.displayOrder - b.displayOrder);
  const total = cities.length;

  // 都市セレクタ（未制作の都市は選べない）
  const sel = $('citySel');
  cities.forEach((c) => {
    const o = document.createElement('option');
    o.value = c.id; o.textContent = `${String(c.displayOrder).padStart(2, '0')}  ${c.englishName}（${c.name}）${cityModules[c.id] ? '' : ' — 未制作'}`;
    o.disabled = !cityModules[c.id];
    sel.appendChild(o);
  });
  const wanted = q.get('city') && cityModules[q.get('city')] ? q.get('city') : 'sapporo';
  sel.value = wanted;

  const scale = isExportMode ? parseFloat(q.get('scale') || '1') : null;
  const startH = isExportMode ? Math.round(1080 * scale) : parseInt($('resSel').value, 10);
  const renderer = new CityRenderer(stage, { width: Math.round((startH * 16) / 9), height: startH });
  const gl = renderer.gl.getContext();
  const ext = gl.getExtension('WEBGL_debug_renderer_info');
  const gpu = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : 'unknown GPU';
  window.__gpu = gpu;

  let current = null;
  async function loadCity(id) {
    $('loading').classList.remove('hide');
    $('loadMsg').textContent = `${id} を構築中…`;
    await new Promise((r) => setTimeout(r, 30));
    const mod = await cityModules[id]();
    const m = meta.cities.find((c) => c.id === id);
    const Scene = mod.default;
    const sc = new Scene(m, m.displayOrder, total, { renderer: renderer.gl, shot: q.get('shot') || undefined });
    const t0 = performance.now();
    await sc.build();
    renderer.setCity(sc);
    current = sc;
    $('loading').classList.add('hide');
    setStatus(`Three.js r${(await import('three')).REVISION} / ソース: ${window.__threeSource} / GPU: ${gpu} / 構築 ${(performance.now() - t0).toFixed(0)}ms`);
    return sc;
  }

  await loadCity(wanted);

  // ---- ヘッドレス（Node側 tools/export.mjs）用の決定的フック
  window.__meta = { frameCount: current.timeline.frameCount, fps: FPS, width: renderer.width, height: renderer.height };
  window.__renderFrame = async (i) => { renderer.renderAt(i / FPS, i); await new Promise((r) => requestAnimationFrame(() => r())); };
  window.__renderer = renderer;
  window.__ready = true;
  if (isExportMode) {
    // Node 側の書き出し用：キャンバスを実ピクセル等倍で左上に置く（スクリーンショットが正確なサイズになる）
    document.body.classList.add('fs-mode');
    const app = document.querySelector('.app'); app.style.cssText = 'max-width:none;padding:0;margin:0';
    const wrap = $('stageWrap'); wrap.style.cssText = 'width:auto;aspect-ratio:auto;border:0;border-radius:0;overflow:visible';
    stage.style.cssText = `width:${renderer.width}px;height:${renderer.height}px;display:block`;
    $('loading').style.display = 'none';
    return;
  }

  // ---- プレビュー
  let playing = true, tNow = 0, last = performance.now(), frameMs = 0, frameIdx = 0;
  const scrub = $('scrub');
  const draw = () => { renderer.renderAt(tNow, frameIdx++); };
  const upd = () => {
    scrub.value = tNow / current.duration;
    $('timeLbl').textContent = `${tNow.toFixed(1)} / ${current.duration.toFixed(1)}s`;
  };
  let busyExport = false;
  const loop = (now) => {
    requestAnimationFrame(loop);
    if (busyExport || !current) return;
    const dt = Math.min(0.1, (now - last) / 1000); last = now;
    if (playing) { tNow += dt; if (tNow >= current.duration) tNow = 0; }
    const a = performance.now(); draw(); const b = performance.now();
    frameMs = frameMs * 0.9 + (b - a) * 0.1;
    upd();
    $('perf').textContent = `プレビュー描画 ${frameMs.toFixed(1)} ms/フレーム（${renderer.width}×${renderer.height}）`;
  };
  requestAnimationFrame(loop);

  $('playBtn').onclick = () => { playing = !playing; $('playBtn').textContent = playing ? '⏸' : '▶'; };
  scrub.oninput = () => { playing = false; $('playBtn').textContent = '▶'; tNow = parseFloat(scrub.value) * current.duration; };
  $('resSel').onchange = () => { const h = parseInt($('resSel').value, 10); renderer.setSize((h * 16) / 9, h); };
  sel.onchange = async () => { playing = false; await loadCity(sel.value); tNow = 0; playing = true; $('playBtn').textContent = '⏸'; };
  $('fsBtn').onclick = () => {
    const w = $('stageWrap');
    if (w.requestFullscreen) w.requestFullscreen().catch(() => {});
    else if (w.webkitRequestFullscreen) w.webkitRequestFullscreen();
  };

  // ---- 書き出し
  let signal = null;
  $('expBtn').onclick = async () => {
    const h = parseInt($('expRes').value, 10), w = (h * 16) / 9;
    const bitrate = parseInt($('expBr').value, 10);
    const pick = await pickCodec(w, h, FPS, bitrate);
    if (!pick.ok) { $('expMsg').textContent = '書き出せません: ' + pick.reason; return; }
    const prevH = renderer.height;
    busyExport = true; playing = false;
    signal = { cancelled: false };
    $('expBtn').disabled = true; $('expCancel').hidden = false; $('progWrap').hidden = false; $('result').hidden = true;
    renderer.setSize(w, h);
    try {
      const id = current.meta.id;
      const res = await exportWebM({
        canvas: stage, fps: FPS, frameCount: current.timeline.frameCount, bitrate, signal,
        renderFrame: (i) => renderer.renderAt(i / FPS, i),
        onProgress: (i, n) => { $('progBar').style.width = `${(i / n) * 100}%`; $('expMsg').textContent = `エンコード中 ${i}/${n} フレーム（${pick.label}）`; },
      });
      const url = URL.createObjectURL(res.blob);
      $('resVideo').src = url; $('result').hidden = false;
      const dl = $('dlLink'); dl.href = url; dl.download = `${id}.webm`;
      $('expMsg').textContent = `完了: ${res.frames}フレーム / ${(res.blob.size / 1e6).toFixed(1)}MB / ${res.codec} / ${(res.ms / 1000).toFixed(1)}秒`;
    } catch (e) {
      $('expMsg').textContent = '書き出しに失敗: ' + (e.message || e);
    } finally {
      busyExport = false; $('expBtn').disabled = false; $('expCancel').hidden = true; $('progWrap').hidden = true;
      renderer.setSize((prevH * 16) / 9, prevH);
      last = performance.now();
    }
  };
  $('expCancel').onclick = () => { if (signal) signal.cancelled = true; };
}

main().catch((e) => { console.error(e); setStatus('エラー: ' + (e.message || e)); const m = $('loadMsg'); if (m) m.textContent = 'エラー: ' + (e.message || e); window.__bootError = String(e.stack || e); });
