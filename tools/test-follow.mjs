// test-follow.mjs — スクロール追従（減衰＋最大速度制限）のモデル検証。DOM なし・純粋計算（疑似確認。実機の慣性スクロールではない）
import { follow, FOLLOW, progressFromScroll, clamp } from '../src/scroll/math.js';
const log = [];
function run(name, targetAt, T, dt, opts = {}) {
  let shown = opts.start ?? targetAt(0), maxStep150 = 0, overshoot = 0, hist = [], maxSpeed = 0, t = 0, n = 0, jump = 0;
  const target = (tt) => clamp(targetAt(tt));
  let prev = shown;
  for (t = 0; t <= T + 1e-9; t += dt, n++) {
    shown = follow(shown, target(t), dt);
    if (shown < 0 || shown > 1) overshoot = 9;
    const tg = target(t);
    // 行き過ぎ: 目標が単調に動いている間に目標を超える/下回る
    if ((target(t) - target(t - dt)) * (shown - tg) > 1e-9 && Math.abs(shown - tg) > 1e-6 && opts.monotone) overshoot = Math.max(overshoot, Math.abs(shown - tg));
    maxSpeed = Math.max(maxSpeed, Math.abs(shown - prev) / dt); jump = Math.max(jump, Math.abs(shown - prev));
    hist.push([t, shown]); prev = shown;
  }
  const w = Math.max(1, Math.round(0.15 / dt));
  for (let i = w; i < hist.length; i++) maxStep150 = Math.max(maxStep150, Math.abs(hist[i][1] - hist[i - w][1]));
  const fin = target(T); let conv = null; for (const [tt, v] of hist) if (Math.abs(v - fin) < 0.002 && tt >= 0) { conv = tt; break; }
  // 収束時刻は「最後に 0.002 超えて外れた時刻」の次
  let last = 0; for (const [tt, v] of hist) if (Math.abs(v - fin) >= 0.002) last = tt;
  log.push(`${name.padEnd(40)} dt=${(dt * 1000).toFixed(0)}ms  最大速度 ${maxSpeed.toFixed(3)}/s  150ms最大変化 ${maxStep150.toFixed(4)}  1フレーム最大 ${jump.toFixed(4)}  行き過ぎ ${overshoot === 0 ? 'なし' : overshoot.toFixed(4)}  最終 ${hist[hist.length - 1][1].toFixed(4)}（目標 ${fin.toFixed(4)}） 収束(±0.002) ${last.toFixed(2)}s`);
  return hist;
}
const flick = (t) => (t < 0.25 ? t / 0.25 : 1);                       // 0→1 を 0.25 秒で一気に（高速フリック）
const inertia = (t) => 0.2 + 0.6 * (1 - Math.exp(-t / 0.5));        // 慣性スクロール風の減速
const slow = (t) => Math.min(1, t * 0.1);                            // ゆっくり（0.1/s）
const reverse = (t) => (t < 1 ? t * 0.6 : Math.max(0, 0.6 - (t - 1) * 1.2)); // 往復
const bounce = (t) => 0.5 + 0.12 * Math.sin(t * 9) * Math.exp(-t);   // 指を離した後の細かい揺れ
console.log('# 設定', JSON.stringify(FOLLOW), '（150ms あたり最大 0.07 = 最大速度 0.4667/s）');
for (const dt of [1 / 60, 1 / 30, 1 / 10]) {
  run('高速フリック 0→1 (0.25s)', flick, 6, dt, { start: 0, monotone: true });
  run('慣性スクロール風の減速', inertia, 6, dt, { start: 0.2, monotone: true });
  run('ゆっくり 0.1/s で 0→1', slow, 12, dt, { start: 0, monotone: true });
  run('往復 (0→0.6→0)', reverse, 3.2, dt, { start: 0 });
  run('停止直前の細かい揺れ', bounce, 4, dt, { start: 0.5 });
}
// フレームレート依存性：同じ入力で 60fps と 30fps の p の差（時刻 1.0s / 2.0s）
for (const [nm, f] of [['高速フリック', flick], ['慣性', inertia]]) {
  const a = [], b = [];
  let s1 = f(0), s2 = f(0); for (let t = 0; t <= 4.0001; t += 1 / 60) { s1 = follow(s1, clamp(f(t)), 1 / 60); a.push(s1); }
  for (let t = 0; t <= 4.0001; t += 1 / 30) { s2 = follow(s2, clamp(f(t)), 1 / 30); b.push(s2); }
  log.push(`フレームレート差 ${nm}: t=1s で |60fps−30fps| = ${Math.abs(a[60] - b[30]).toFixed(4)}, t=2s で ${Math.abs(a[120] - b[60]).toFixed(4)}`);
}
// ページ上下端・ラバーバンド：getBoundingClientRect().top が範囲外でも p は 0..1
const TH = 4220, SH = 844;
log.push('上下端: top=+80(上端の引っ張り) → p=' + progressFromScroll(80, TH, SH) + ', top=-(TH-SH)-120(下端の引っ張り) → p=' + progressFromScroll(-(TH - SH) - 120, TH, SH) + ', 途中 top=-1000 → p=' + progressFromScroll(-1000, TH, SH).toFixed(4));
console.log(log.join('\n'));
