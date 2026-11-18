// camera.js — カメラ経路（Three.js非依存の純粋な数値計算）
// main.js 側で position / target / fov を THREE.PerspectiveCamera に適用する。
import { ease, clamp } from './timeline.js';

const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];

// 一様 Catmull-Rom（p1→p2 区間、u:0..1）
function catmull(p0, p1, p2, p3, u) {
  const u2 = u * u, u3 = u2 * u;
  const c = (a, b, c_, d) =>
    0.5 * (2 * b + (-a + c_) * u + (2 * a - 5 * b + 4 * c_ - d) * u2 + (-a + 3 * b - 3 * c_ + d) * u3);
  return [c(p0[0], p1[0], p2[0], p3[0]), c(p0[1], p1[1], p2[1], p3[1]), c(p0[2], p1[2], p2[2], p3[2])];
}

// 決定的な擬似手ブレ（sin の重ね合わせ。フレーム番号に依存せず時刻のみで決まる）
function shake(t, amp, seed = 0) {
  const s = (f, p) => Math.sin(t * f + p + seed);
  return [
    amp * (s(1.7, 0.3) * 0.6 + s(3.1, 1.9) * 0.4),
    amp * (s(1.3, 2.1) * 0.6 + s(2.7, 0.7) * 0.4),
    amp * (s(1.1, 4.2) * 0.6 + s(2.3, 3.3) * 0.4),
  ];
}

export class CameraRig {
  /**
   * keys: [{ t, pos:[x,y,z], target:[x,y,z], fov, ease? }]
   *   ease は次のキーまでの区間の時間配分（既定 smoother）
   * options: { shakeAmp: 位置揺れ(m), shakeSeed }
   */
  constructor(keys, { shakeAmp = 0, shakeSeed = 0, timeWarp = null } = {}) {
    this.keys = [...keys].sort((a, b) => a.t - b.t);
    this.shakeAmp = shakeAmp;
    this.shakeSeed = shakeSeed;
    // timeWarp: 0..1 → 0..1。全体を通した加減速（各キーで止まらない滑らかな動き）に使う
    this.timeWarp = timeWarp;
  }

  sample(t) {
    const K = this.keys;
    if (this.timeWarp) {
      const t0 = K[0].t, t1 = K[K.length - 1].t;
      t = t0 + (t1 - t0) * this.timeWarp(clamp((t - t0) / (t1 - t0)));
    }
    const n = K.length;
    const tc = clamp(t, K[0].t, K[n - 1].t);
    let i = 0;
    while (i < n - 2 && tc > K[i + 1].t) i++;
    const a = K[i], b = K[i + 1];
    const raw = (tc - a.t) / (b.t - a.t);
    const u = (a.ease ?? ease.smoother)(clamp(raw));

    const idx =(j) => Math.min(n - 1, Math.max(0, j));
    const P = (j, key) => K[idx(j)][key];

    let position = catmull(P(i - 1, 'pos'), P(i, 'pos'), P(i + 1, 'pos'), P(i + 2, 'pos'), u);
    const target = catmull(P(i - 1, 'target'), P(i, 'target'), P(i + 1, 'target'), P(i + 2, 'target'), u);
    const fov = a.fov + (b.fov - a.fov) * u;

    if (this.shakeAmp > 0) position = add(position, shake(t, this.shakeAmp, this.shakeSeed));
    return { position, target, fov };
  }
}

export { add, mul };
