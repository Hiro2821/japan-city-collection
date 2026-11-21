// scroll/rig.js — スクロール版のカメラ経路の「仕組み」（都市共通。Three.js 非依存の純粋な数値計算。Node でも検証できる）
//   都市ごとの経路データ（キー・補正・縦画面の周回仕様）は cities/<id>/camera.js が持ち、ScrollRig に渡す。
//
//   横画面: 時間キーの経路（CameraRig）＋ 進行度 p の補正窓（adj。窓の両端で値も傾きも 0 → 窓の外は基本経路と一致）。
//   縦画面: 軸（x,z）を画面中央に保ち、軸のまわりを周回する経路（ArcRig。経路長ベース・速度重み付き Catmull-Rom）。
//   混合  : アスペクト比 ≤0.88 で縦、≥1.12 で横、中間は位置・注視点・FOV を線形混合（重みは smoothstep）。
import { CameraRig } from '../camera.js';
import { SPAN, DURATION, clamp } from './math.js';

const warp = (u) => { const a = u * u * (3 - 2 * u), b = 1 - (1 - u) * (1 - u); return 0.5 * a + 0.5 * b; };

/** 補正キー列 → p での 6 成分オフセット（位置3＋注視点3）。窓の外は null。key: [p, dx,dy,dz, tx,ty,tz] */
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

const rad = (d) => (d * Math.PI) / 180;
/** 縦画面の周回仕様 → キー。key: [方位角deg(軸から見たカメラの方向, 0=+x, 90=+z), 水平距離r(m), 高さy(m), 注視点y(m), fov, 相対速度] */
export function portraitKeys(spec, axis) {
  return spec.map(([az, r, y, ty, fov, speed]) => ({
    pos: [axis.x + r * Math.cos(rad(az)), y, axis.z + r * Math.sin(rad(az))],
    target: [axis.x, ty, axis.z], fov, speed,
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
  constructor(keys, { shakeAmp = 0.1, shakeSeed = 4.0, timeWarp = warp, N = 160, t0 = 0, dur = DURATION } = {}) {
    this.t0 = t0; this.dur = dur;
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
  sample(tGlobal) { return this.sampleU((tGlobal - this.t0) / this.dur, tGlobal); }
}

// 混合中（0<w<1）は 2 本の経路を直線で結ぶため建物に近づきうる。その分だけ高さを持ち上げる（w=0.5 で最大）。
export const BLEND_LIFT = 30;

/**
 * path: 都市の経路データ
 *   { globalStart, duration, landscapeKeys, adj, portraitSpec, axis:{x,z}, blendLift? }
 */
export class ScrollRig {
  constructor(path) {
    const { globalStart, duration = DURATION, landscapeKeys, adj, portraitSpec, axis, portraitKeys: pKeys } = path;
    this.t0 = globalStart; this.dur = duration;
    this.landscape = new CameraRig(landscapeKeys, { shakeAmp: 0.1, shakeSeed: 4.0, timeWarp: warp });
    // 縦画面のキーは「軸周回の仕様（portraitSpec+axis）」か、完成したキー列（portraitKeys。PathRig が使う）のどちらか。
    this.portrait = new ArcRig(pKeys ?? portraitKeys(portraitSpec, axis), { t0: globalStart, dur: duration });
    this.adj = adj;
    this.weight = 0; // 縦画面経路の重み（0=横, 1=縦）
    this.blendLift = path.blendLift ?? BLEND_LIFT;
  }

  /** 動画の経路時間（グローバル秒）→ 進行度 p（補正窓の判定用。保持区間は p>=SPAN） */
  pOf(tGlobal) { return clamp((tGlobal - this.t0) / this.dur) * SPAN; }

  landscapeAt(tGlobal) {
    const s = this.landscape.sample(tGlobal);
    const o = this.adj ? adjustAt(this.adj, this.pOf(tGlobal)) : null;
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

// ---- 通り沿い経路（PathRig）：縦画面を「折れ線（通りの中心線）に沿ったドリー」で作る。軸周回（ArcRig）とは別の都市共通の部品。
/** 折れ線（xz 平面）。長さ・任意の距離 s(m) での位置と進行方向を返す。 */
export class Polyline {
  constructor(pts) {
    this.pts = pts; this.cum = [0];
    for (let i = 1; i < pts.length; i++) this.cum.push(this.cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    this.length = this.cum[pts.length - 1];
  }
  /** s(m) は両端でクランプ。戻り値 [x, z, dx, dz]（dx,dz は単位進行方向）。 */
  at(s) {
    const P = this.pts, n = P.length, c = this.cum;
    const ss = Math.min(this.length, Math.max(0, s));
    let i = 0; while (i < n - 2 && ss > c[i + 1]) i++;
    const L = Math.max(1e-9, c[i + 1] - c[i]), u = (ss - c[i]) / L;
    return [P[i][0] + (P[i + 1][0] - P[i][0]) * u, P[i][1] + (P[i + 1][1] - P[i][1]) * u, (P[i + 1][0] - P[i][0]) / L, (P[i + 1][1] - P[i][1]) / L];
  }
}

/**
 * 通り沿いのドリー仕様 → ArcRig 用のキー。
 *   spec の各行: [s(0..1: 折れ線の何割の位置か), 高さy(m), 注視点y(m), fov, 相対速度, 先読み距離(m), 横ずれ(m: 進行方向の右が正)]
 *   カメラは折れ線上（＋横ずれ）に置き、注視点は「先読み距離」だけ先の折れ線上の点（高さ ty）。
 */
export function dollyKeys(poly, spec) {
  return spec.map(([f, y, ty, fov, speed, ahead = 80, side = 0]) => {
    const s = f * poly.length;
    const [x, z, dx, dz] = poly.at(s);
    const [tx, tz] = poly.at(s + ahead);
    return { pos: [x - dz * side, y, z + dx * side], target: [tx, ty, tz], fov, speed };
  });
}

/** 通り沿い経路のリグ。契約上は ScrollRig と同じ sample(tGlobal, w)。縦画面だけが折れ線ドリーで、横画面は ScrollRig と同じ。 */
export class PathRig extends ScrollRig {
  constructor(path) {
    const poly = new Polyline(path.route);
    super({ ...path, portraitKeys: dollyKeys(poly, path.dolly) });
    this.poly = poly;
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
