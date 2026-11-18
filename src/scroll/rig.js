// scroll/rig.js — スクロール版のカメラ経路（Three.js 非依存の純粋な数値計算。Node でも検証できる）
//
//   横画面: 動画版（src/scenes/sapporo.js の rig、グローバル 11–18 秒）と同一の経路。
//           ただし p = 0.40〜0.60 の区間だけ、位置・注視点に滑らかな補正（LANDSCAPE_ADJ）を加える。
//           補正は区間の両端で値も傾きも 0 になるので、区間外は動画版と完全に一致する。
//   縦画面: 塔の軸(-90, 0)を画面中央に保ち、塔のまわりを周回する専用経路。FOV 拡大だけには頼らない。
//   混合  : アスペクト比 ≤0.88 で縦、≥1.12 で横、中間は位置・注視点・FOV を線形混合（重みは smoothstep）。
import { CameraRig } from '../camera.js';
import { SPAN, DURATION, clamp } from './math.js';

export const GLOBAL0 = 11; // SCENE 03 のグローバル開始時刻（秒）
export const TOWER = { x: -90, z: 0, tipY: 147.2, glowY: 149 }; // 塔軸と、アンテナ先端・ビーコン中心の高さ(m)

const warp = (u) => { const a = u * u * (3 - 2 * u), b = 1 - (1 - u) * (1 - u); return 0.5 * a + 0.5 * b; };

// ---- 横画面のキー（グローバル時刻 11–18 秒、区間は線形・全体の加減速は timeWarp）。第2段階の実測報告に記録された最終版の値。
//   ※動画版(zip, Nov 15)の rig とは後半（t≥14.36）の注視点が異なる。経緯は報告を参照。
export const LANDSCAPE_KEYS = [
  { t: 11, pos: [-420, 40, 14], target: [-140, 54, -2], fov: 38 },
  { t: 12.78, pos: [-313, 50, 32], target: [-100, 103, -20], fov: 34 },
  { t: 14.36, pos: [-211, 62, 44], target: [29, 94, -137], fov: 35 },
  { t: 15.99, pos: [-111, 77, 54], target: [-54, 95, -240], fov: 36 },
  { t: 16.5, pos: [-74, 102, 52.9], target: [-125.1, 66.4, -242.7], fov: 41.1 },
  { t: 17.0, pos: [-35, 123.4, 55], target: [-190.4, 102.7, -201.6], fov: 46.7 },
  { t: 17.5, pos: [57.3, 122.4, 49.4], target: [-229.9, 95.1, -37.3], fov: 45.9 },
  { t: 18, pos: [64.8, 122.3, 31.1], target: [-234.1, 74.2, 5.0], fov: 45.9 },
].map((k) => ({ ...k, ease: (u) => u }));

// ---- 横画面 p=0.40〜0.60 の補正。p に対するキー（オフセット）列を C1 の Hermite で補間する。
//   両端(p=0.40, 0.60)でオフセット 0・傾き 0 → 区間外は基本経路と完全に一致。
//   key: [p, dx,dy,dz (位置), tx,ty,tz (注視点)]
export const LANDSCAPE_ADJ = { keys: [
  [0.40, 0, 0, 0, 0, 0, 0],
  [0.44, -13.9, 10.8, 28.9, -0.6, 74.1, 32.6],
  [0.47, -17.1, 19.3, 53.7, 9.5, 60.2, 19.2],
  [0.50, -6.9, 27.5, 66.3, 5.3, 46.3, 15.0],
  [0.53, 7.6, 32.3, 56.1, -12.7, 48.9, 0.5],
  [0.56, 0.2, 26.8, 28.8, -26.6, 66.5, 10.0],
  [0.60, 0, 0, 0, 0, 0, 0],
] };

export function adjustAt(adj, p) {
  const K = adj.keys, n = K.length;
  if (p <= K[0][0] || p >= K[n - 1][0]) return null;
  let i = 0; while (p > K[i + 1][0]) i++;
  const h = K[i + 1][0] - K[i][0], u = (p - K[i][0]) / h;
  const tan = (j, c) => { // 区間 j と j-1 の平均傾き。両端は 0。
    if (j === 0 || j === n - 1) return 0;
    return (K[j + 1][c] - K[j - 1][c]) / (K[j + 1][0] - K[j - 1][0]);
  };
  const u2 = u * u, u3 = u2 * u;
  const h00 = 2 * u3 - 3 * u2 + 1, h10 = u3 - 2 * u2 + u, h01 = -2 * u3 + 3 * u2, h11 = u3 - u2;
  const out = [];
  for (let c = 1; c <= 6; c++) out.push(h00 * K[i][c] + h10 * h * tan(i, c) + h01 * K[i + 1][c] + h11 * h * tan(i + 1, c));
  return out;
}

// ---- 縦画面：塔の軸を中心に周回。pos は軸からの水平距離 r と方位角で与える。
//   key: [方位角deg(軸から見たカメラの方向, 0=+x, 90=+z), 水平距離r(m), 高さy(m), 注視点y(m), fov, 相対速度]
export const PORTRAIT_SPEC = [
  [180.0, 280.0, 46.0, 66.0, 50, 1.0],
  [167.7, 235.0, 99.5, 80.0, 51, 1.0],
  [141.2, 204.6, 117.9, 90.0, 52, 0.9],
  [103.0, 170.6, 127.9, 95.6, 53, 0.75],
  [83.4, 146.0, 127.9, 106.9, 54, 0.65],
  [11.3, 132.3, 126.0, 106.9, 55, 0.6],
  [3.5, 149.3, 124.1, 95.4, 56, 0.5],
];

const rad = (d) => (d * Math.PI) / 180;
function portraitKeys(spec) {
  return spec.map(([az, r, y, ty, fov, speed]) => ({
    pos: [TOWER.x + r * Math.cos(rad(az)), y, TOWER.z + r * Math.sin(rad(az))],
    target: [TOWER.x, ty, TOWER.z], fov, speed,
  }));
}

// 一様 Catmull-Rom（p1→p2、u:0..1）
function catmull(p0, p1, p2, p3, u) {
  const u2 = u * u, u3 = u2 * u;
  const c = (a, b, c_, d) => 0.5 * (2 * b + (-a + c_) * u + (2 * a - 5 * b + 4 * c_ - d) * u2 + (-a + 3 * b - 3 * c_ + d) * u3);
  return [c(p0[0], p1[0], p2[0], p3[0]), c(p0[1], p1[1], p2[1], p3[1]), c(p0[2], p1[2], p2[2], p3[2])];
}
// 決定的な擬似手ブレ（時刻のみで決まる）
function shake(t, amp, seed = 0) {
  const s = (f, ph) => Math.sin(t * f + ph + seed);
  return [amp * (s(1.7, 0.3) * 0.6 + s(3.1, 1.9) * 0.4), amp * (s(1.3, 2.1) * 0.6 + s(2.7, 0.7) * 0.4), amp * (s(1.1, 4.2) * 0.6 + s(2.3, 3.3) * 0.4)];
}

/** 経路長ベースのカメラ経路。進行度 u(0..1) が経路上の位置に（速度の重み付きで）対応する。 */
export class ArcRig {
  constructor(keys, { shakeAmp = 0.1, shakeSeed = 4.0, timeWarp = warp, N = 160 } = {}) {
    this.keys = keys; this.shakeAmp = shakeAmp; this.shakeSeed = shakeSeed; this.timeWarp = timeWarp;
    const n = keys.length, M = (n - 1) * N;
    this.cum = new Float64Array(M + 1);
    let prev = this._at(0).position;
    for (let k = 1; k <= M; k++) {
      const s = (k / M) * (n - 1), cur = this._at(s).position;
      const spd = this._speed(s);
      this.cum[k] = this.cum[k - 1] + Math.hypot(cur[0] - prev[0], cur[1] - prev[1], cur[2] - prev[2]) / spd;
      prev = cur;
    }
    this.total = this.cum[M]; this.M = M;
  }
  _speed(s) { const K = this.keys, i = Math.min(K.length - 2, Math.floor(s)), f = s - i; return K[i].speed + (K[i + 1].speed - K[i].speed) * f; }
  _at(s) {
    const K = this.keys, n = K.length, i = Math.min(n - 2, Math.max(0, Math.floor(s))), u = s - i;
    const I = (j) => Math.min(n - 1, Math.max(0, j));
    const c = (key) => catmull(K[I(i - 1)][key], K[i][key], K[I(i + 1)][key], K[I(i + 2)][key], u);
    return { position: c('pos'), target: c('target'), fov: K[i].fov + (K[i + 1].fov - K[i].fov) * u };
  }
  /** u: 0..1（時間の正規化）→ カメラ */
  sampleU(u, tShake = 0) {
    const w = this.timeWarp ? this.timeWarp(Math.min(1, Math.max(0, u))) : u;
    const goal = w * this.total;
    let lo = 0, hi = this.M;
    while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (this.cum[mid] <= goal) lo = mid; else hi = mid; }
    const f = (goal - this.cum[lo]) / Math.max(1e-12, this.cum[hi] - this.cum[lo]);
    const s = ((lo + f) / this.M) * (this.keys.length - 1);
    const r = this._at(s);
    if (this.shakeAmp > 0) { const sh = shake(tShake, this.shakeAmp, this.shakeSeed); r.position = r.position.map((v, i) => v + sh[i]); }
    return r;
  }
  sample(tGlobal) { return this.sampleU((tGlobal - GLOBAL0) / DURATION, tGlobal); }
}

// 混合中（0<w<1）は 2 本の経路を直線で結ぶため建物に近づきうる。その分だけ高さを持ち上げる（w=0.5 で最大）。
export const BLEND_LIFT = 30;

export class ScrollRig {
  constructor({ landscapeKeys = LANDSCAPE_KEYS, adj = LANDSCAPE_ADJ, portraitSpec = PORTRAIT_SPEC } = {}) {
    this.landscape = new CameraRig(landscapeKeys, { shakeAmp: 0.1, shakeSeed: 4.0, timeWarp: warp });
    this.portrait = new ArcRig(portraitKeys(portraitSpec));
    this.adj = adj;
    this.weight = 0; // 縦画面経路の重み（0=横, 1=縦）
    this.blendLift = BLEND_LIFT;
  }

  /** 動画の経路時間（グローバル秒）→ 進行度 p（補正窓の判定用。保持区間は p>=SPAN） */
  static pOf(tGlobal) { return clamp((tGlobal - GLOBAL0) / DURATION) * SPAN; }

  landscapeAt(tGlobal) {
    const s = this.landscape.sample(tGlobal);
    const o = adjustAt(this.adj, ScrollRig.pOf(tGlobal));
    if (o) {
      s.position = s.position.map((v, i) => v + o[i]);
      s.target = s.target.map((v, i) => v + o[3 + i]);
    }
    return s;
  }

  portraitAt(tGlobal) { return this.portrait.sample(tGlobal); }

  /** renderer / CityScene.frameState から呼ばれる。 */
  sample(tGlobal, w = this.weight) {
    if (w <= 0) return this.landscapeAt(tGlobal);
    const P = this.portraitAt(tGlobal);
    if (w >= 1) return P;
    const L = this.landscapeAt(tGlobal);
    const mix = (a, b) => a.map((v, i) => v + (b[i] - v) * w);
    const pos = mix(L.position, P.position); pos[1] += this.blendLift * 4 * w * (1 - w);
    return { position: pos, target: mix(L.target, P.target), fov: L.fov + (P.fov - L.fov) * w };
  }
}

// ---- 検証用ヘルパー（純粋な数学）：アンテナ先端などの画面上の位置
export function projectNdc(cam, point, aspect) {
  const [px, py, pz] = cam.position, [tx, ty, tz] = cam.target;
  let fx = tx - px, fy = ty - py, fz = tz - pz; const fl = Math.hypot(fx, fy, fz); fx /= fl; fy /= fl; fz /= fl;
  let rx = fz * 0 - fy * 0, ry = 0, rz = 0; // right = f × up(0,1,0)
  rx = -fz; ry = 0; rz = fx; const rl = Math.hypot(rx, rz); rx /= rl; rz /= rl;
  const ux = ry * fz - rz * fy, uy = rz * fx - rx * fz, uz = rx * fy - ry * fx; // up = right × f
  const dx = point[0] - px, dy = point[1] - py, dz = point[2] - pz;
  const zc = dx * fx + dy * fy + dz * fz;
  if (zc <= 0.01) return { x: NaN, y: NaN, depth: zc };
  const th = Math.tan(rad(cam.fov) / 2);
  return { x: (dx * rx + dy * ry + dz * rz) / zc / (th * aspect), y: (dx * ux + dy * uy + dz * uz) / zc / th, depth: zc };
}
