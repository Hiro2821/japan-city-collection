// cities/tokyo/camera.js — 東京のカメラ経路データ（純粋なデータ。Three.js 非依存）。
//   横画面: 進行度 p で書いた時間キー（kt(p) で warp を通した時刻に変換）。縦画面: 通りの中心線に沿ったドリー（PathRig）。
//   ※ Step 1 の仮キー。Step 5 で仕様書 §6 に合わせて仕上げる。カメラの near は 4 m（CAMERA_NEAR）：枝・建物へ 4 m 未満に近づかない。
import { ROUTE } from './layout.js';

export const GLOBAL0 = 0;
export const DURATION = 7;
const warp = (u) => { const a = u * u * (3 - 2 * u), b = 1 - (1 - u) * (1 - u); return 0.5 * a + 0.5 * b; };
export const kt = (p) => DURATION * warp(Math.min(1, p / 0.94));
const lin = (u) => u;

// 横画面（p, 位置, 注視点, fov）：A 駅前の高所→行幸通りを西へ / B 交差で南へ、樹冠の高さで仲通りへ / C 光の谷 / D 上昇して東京タワーへ
const L = [
  [0.00, [470, 150, 30], [250, 12, 0], 40],
  [0.14, [300, 100, 12], [-100, 14, 0], 39],
  [0.28, [60, 40, 6], [0, 12, 120], 37],
  [0.34, [4, 16, 40], [0, 8, 200], 36],
  [0.50, [0, 11, 210], [0, 8, 420], 35],
  [0.56, [0, 6.5, 270], [0, 8, 470], 33],
  [0.66, [0, 6.5, 430], [0, 9, 650], 33],
  [0.74, [0, 10, 620], [0, 14, 780], 34],
  [0.84, [-10, 70, 680], [-300, 60, 1100], 38],
  [0.94, [-30, 200, 640], [-760, 140, 1500], 42],
  [1.00, [-30, 200, 640], [-760, 140, 1500], 42],
];
export const LANDSCAPE_KEYS = L.map(([p, pos, target, fov]) => ({ t: kt(p), pos, target, fov, ease: lin }));

// 縦画面：ROUTE（通りの中心線）に沿ったドリー。[折れ線の割合 s, 高さ y, 注視点 y, fov, 相対速度, 先読み距離（負なら後ろ）, 横ずれ]
export const DOLLY = [
  [0.00, 90, 25, 58, 1.0, 120, 0],
  [0.36, 40, 12, 60, 1.0, 80, 0],
  [0.55, 12, 9, 60, 1.0, 60, 0],
  [0.70, 6.5, 8, 60, 0.8, 55, 0],
  [0.93, 7, 9, 60, 0.9, 55, 0],
  [1.00, 40, 30, 56, 3.0, -200, 0],
];

export const PATH = { globalStart: GLOBAL0, duration: DURATION, landscapeKeys: LANDSCAPE_KEYS, route: ROUTE, dolly: DOLLY };
