// cities/sapporo/camera.js — 札幌（SCENE 03・大通公園／さっぽろテレビ塔）のカメラ経路データ（純粋なデータ。Three.js 非依存）
//   横画面: 動画版と同一の時間キー（グローバル 11–18 秒）＋ p=0.40〜0.60 の補正窓。縦画面: 塔の軸を中心に周回。
export const GLOBAL0 = 11; // SCENE 03 のグローバル開始時刻（秒）
export const DURATION = 7; // ショットの尺（秒）
export const TOWER = { x: -90, z: 0, tipY: 147.2, glowY: 149 }; // 塔軸と、アンテナ先端・ビーコン中心の高さ(m)

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
//   key: [方位角deg, 水平距離r(m), 高さy(m), 注視点y(m), fov, 相対速度]
export const PORTRAIT_SPEC = [
  [180.0, 280.0, 46.0, 66.0, 50, 1.0],
  [167.7, 235.0, 99.5, 80.0, 51, 1.0],
  [141.2, 204.6, 117.9, 90.0, 52, 0.9],
  [103.0, 170.6, 127.9, 95.6, 53, 0.75],
  [83.4, 146.0, 127.9, 106.9, 54, 0.65],
  [11.3, 132.3, 126.0, 106.9, 55, 0.6],
  [3.5, 149.3, 124.1, 95.4, 56, 0.5],
];


/** ScrollRig に渡す経路データ */
export const SAPPORO_PATH = { globalStart: GLOBAL0, duration: DURATION, landscapeKeys: LANDSCAPE_KEYS, adj: LANDSCAPE_ADJ, portraitSpec: PORTRAIT_SPEC, axis: { x: TOWER.x, z: TOWER.z } };
