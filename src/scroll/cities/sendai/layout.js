// cities/sendai/layout.js — 仙台の配置データ（純粋なデータ。Three.js 非依存）。docs/cities/sendai-layout.md の「本作での配置（圧縮）」に対応。
//   世界座標：原点＝一番町 × 定禅寺通の交差、x=東、z=南、y=上（m）。
//   区間の長さは 7 秒に収めるため圧縮するが、方位・順序・街路の断面（幅・並木の列数）は実寸を保つ。
//   数値は後から直せるよう、ここに集約する（シーン・カメラ・タイル・車線がすべてここを見る）。

export const ICHI_X = 0;       // 一番町の軸
export const JOZ_Z = 0;        // 定禅寺通の軸
export const AOBA_Z = 230;     // 青葉通の軸（実際は定禅寺通の約 625 m 南 → 約 230 m に圧縮）
export const RIVER_X = -340;   // 広瀬川（圧縮。西公園のすぐ西）
export const STATION = { x: 230, z: 150 };   // 駅前デッキ付近（青葉通の東端、北側）

// 道路の断面（軸からの距離 d。単位 m）。kind: 0=一般の街路 1=青葉通（ケヤキ 3 列） 2=定禅寺通（ケヤキ 4 列） 3=アーケード（歩行者専用）
export const SECTION = {
  0: { half: 0.5, asphalt: 0.5, walk: 0.5 },   // 実際の幅は streets[].w で与える。ここは歩道幅の目安
  1: { green: 4, asphalt: 16.5, half: 25 },     // 中央分離帯 ±4 のケヤキ列、車道、歩道（外側ケヤキ列は d≈21）
  2: { promenade: 9, asphalt: 17, half: 23 },   // 中央の遊歩道 ±9（ケヤキ 2 列は d=±4.5）、車道、歩道（外側ケヤキ列は d≈20）
  3: { half: 7 },
};

// 道路帯。dir:'x'=東西に延びる(中心 z=c) / 'z'=南北に延びる(中心 x=c)。a..b は延びる範囲。w は全幅。
export const STREETS = [
  { id: 'aoba', dir: 'x', c: AOBA_Z, w: 50, a: -372, b: 330, kind: 1 },
  { id: 'joz', dir: 'x', c: JOZ_Z, w: 46, a: -240, b: 110, kind: 2 },
  { id: 'ichi-n', dir: 'z', c: ICHI_X, w: 20, a: -130, b: 40, kind: 0 },
  { id: 'ichi-arcade', dir: 'z', c: ICHI_X, w: 14, a: 40, b: 200, kind: 3 },
  { id: 'ichi-s', dir: 'z', c: ICHI_X, w: 20, a: 200, b: 330, kind: 0 },
  { id: 'conn', dir: 'z', c: -170, w: 22, a: -130, b: 330, kind: 0 },
  { id: 'w1', dir: 'z', c: -85, w: 14, a: -130, b: 330, kind: 0 },
  { id: 'w2', dir: 'z', c: -300, w: 16, a: 24, b: 330, kind: 0 },
  { id: 'e1', dir: 'z', c: 110, w: 20, a: 24, b: 330, kind: 0 },
  { id: 'e1n', dir: 'z', c: 110, w: 20, a: -130, b: -24, kind: 0 },
  { id: 'e2', dir: 'z', c: 200, w: 18, a: -130, b: 330, kind: 0 },
  { id: 'cross', dir: 'x', c: 115, w: 16, a: -330, b: 330, kind: 0 },
  { id: 'north', dir: 'x', c: -120, w: 18, a: -330, b: 330, kind: 0 },
  { id: 'south', dir: 'x', c: 330, w: 18, a: -330, b: 330, kind: 0 },
];

// 公園・広場（矩形。x0,x1,z0,z1）
export const PARKS = [
  { id: 'nishi', x0: -318, x1: -240, z0: -55, z1: 55 },     // 西公園（定禅寺通の西端）
  { id: 'kotodai', x0: 110, x1: 170, z0: -45, z1: 45 },     // 勾当台公園（東端）
];
export const PLAZAS = [
  { id: 'station', x0: 205, x1: 352, z0: 120, z1: 205 },    // 駅前広場・ペデストリアンデッキ付近
];

// 建物を置いてよい領域（街区）：x∈[-470,330]、z∈[-240,400]。西は広瀬川の手前まで。
export const CITY_BOX = { x0: -318, x1: 340, z0: -240, z1: 400 };

// ---- 地形（青葉山の丘は西、広瀬川の谷は x≈RIVER_X）。市街は y=0 の平地。
export const BLUFF = { x0: RIVER_X - 22, top: 95, crestX: -500 };
// 城址の平場（本丸跡の見晴らし台）：丘の上を円形に均す。伊達政宗騎馬像の足元もここ。
export const PLATEAU = { x: -478, z: 244, r0: 34, r1: 92 };   // 丘の起点と高さ（実際の比高 約 100 m）
const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
/** 丘だけの高さ（平場の均しの前）。 */
function bluffBase(x, z) {
  const rise = sm(BLUFF.x0, BLUFF.crestX, x) * (1 - sm(-1150, -1500, x));
  const dz = Math.abs(z - 250);
  const lateral = 1 - sm(260, 760, dz);
  return BLUFF.top * rise * (1 - sm(700, 1000, dz)) * (0.4 + 0.6 * lateral);
}
const PLATEAU_H = bluffBase(PLATEAU.x, PLATEAU.z);
/** 地面の高さ y(m)。市街は 0、青葉山の丘は西、丘の上に円形の平場（城址）。 */
export function groundY(x, z) {
  const h = bluffBase(x, z);
  const r = Math.hypot(x - PLATEAU.x, z - PLATEAU.z);
  const w = 1 - sm(PLATEAU.r0, PLATEAU.r1, r);
  return h + (PLATEAU_H - h) * w;
}
export const PLATEAU_Y = PLATEAU_H;

// ---- 太陽方向（夏の夕方：西北西、低い）と影の中心
export const SUN_DIR = [-0.86, 0.3, -0.3];

// ---- カメラ経路の世界座標（通りの中心線。縦画面のドリーと横画面の経路の基準）。
//   A: 駅前→青葉通を西へ / B: 青葉通の西で北西へ上がり定禅寺通を西→東 / C: 一番町を南へ（アーケード） / D: アーケード出口→青葉通を西へ→広瀬川→青葉山
export const ROUTE = [
  [250, 232], [60, 232], [-170, 232],        // A（青葉通。縦画面は通りの上を進む）
  [-170, 110], [-170, 0],                    // B 前半：縦画面は街路（西の連絡街路 x=-170）を北へ。横画面は上空を北西へ飛び越えて定禅寺通の西端へ
  [0, 0],                                    // B 後半：定禅寺通を東へ
  [0, 110], [0, 215],                        // C：一番町を南へ（アーケード）
  [-90, 236], [-200, 238], [-330, 238], [-505, 238],   // D：青葉通を西へ→広瀬川の橋→青葉山（丘の上の城址の見晴らし）
];
