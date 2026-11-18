// exporter.js — ブラウザ内でフレーム単位に描画 → WebCodecs(VideoEncoder) → WebM。
// リアルタイム録画ではないので、描画が重くても「フレーム落ち」「時間ずれ」は起きない。
import { WebMMuxer } from './webm.js';

// 試行する符号化設定（上から順。端末が対応する最初のものを使う）
function candidates(width, height, fps, bitrate) {
  const base = { width, height, framerate: fps, bitrate, latencyMode: 'quality', bitrateMode: 'variable' };
  return [
    { label: 'VP9', mux: 'V_VP9', config: { ...base, codec: 'vp09.00.40.08' } },
    { label: 'VP9', mux: 'V_VP9', config: { ...base, codec: 'vp09.00.50.08' } },
    { label: 'VP8', mux: 'V_VP8', config: { ...base, codec: 'vp8' } },
    { label: 'AV1', mux: 'V_AV1', config: { ...base, codec: 'av01.0.08M.08' } },
  ];
}

export async function pickCodec(width, height, fps, bitrate) {
  if (typeof VideoEncoder === 'undefined') return { ok: false, reason: 'このブラウザは WebCodecs(VideoEncoder) に未対応です' };
  for (const c of candidates(width, height, fps, bitrate)) {
    try {
      const s = await VideoEncoder.isConfigSupported(c.config);
      if (s.supported) return { ok: true, ...c, config: s.config };
    } catch { /* 次の候補へ */ }
  }
  return { ok: false, reason: 'WebM(VP9/VP8/AV1) をこの端末でエンコードできません' };
}

/**
 * @param {object} p
 * @param {HTMLCanvasElement} p.canvas   完成フレームが描かれる #stage
 * @param {(i:number)=>Promise<void>|void} p.renderFrame  i番目のフレームを canvas に描画
 * @param {number} p.frameCount @param {number} p.fps
 * @param {number} [p.bitrate]
 * @param {(i:number,total:number)=>void} [p.onProgress]
 * @param {{cancelled:boolean}} [p.signal]
 * @returns {Promise<{blob:Blob, codec:string, frames:number, ms:number}>}
 */
export async function exportWebM({ canvas, renderFrame, frameCount, fps, bitrate = 20_000_000, onProgress, signal }) {
  const width = canvas.width, height = canvas.height;
  const pick = await pickCodec(width, height, fps, bitrate);
  if (!pick.ok) throw new Error(pick.reason);

  const muxer = new WebMMuxer({ codec: pick.mux, width, height, fps });
  let encErr = null;
  const encoder = new VideoEncoder({
    output: (chunk) => muxer.addChunk(chunk),
    error: (e) => { encErr = e; },
  });
  encoder.configure(pick.config);

  const t0 = performance.now();
  const keyEvery = Math.round(fps); // 1秒ごとにキーフレーム（シークしやすい）
  for (let i = 0; i < frameCount; i++) {
    if (signal?.cancelled) { encoder.close(); throw new Error('キャンセルしました'); }
    if (encErr) throw encErr;
    await renderFrame(i);
    // timestamp はフレーム番号から厳密に計算（実時間に依存しない）
    const frame = new VideoFrame(canvas, { timestamp: Math.round((i * 1e6) / fps), duration: Math.round(1e6 / fps) });
    encoder.encode(frame, { keyFrame: i % keyEvery === 0 });
    frame.close();
    // バックプレッシャ：エンコーダの滞留が増えたら待つ
    while (encoder.encodeQueueSize > 6) await new Promise((r) => setTimeout(r, 4));
    onProgress?.(i + 1, frameCount);
    if (i % 3 === 0) await new Promise((r) => setTimeout(r)); // UI を更新させる
  }
  await encoder.flush();
  if (encErr) throw encErr;
  encoder.close();
  const blob = muxer.finalize();
  return { blob, codec: pick.label, frames: frameCount, ms: performance.now() - t0 };
}
