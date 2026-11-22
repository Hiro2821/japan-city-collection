// cities/tokyo/layout.js — 東京の配置データ（純粋なデータ。Three.js 非依存）。docs/cities/tokyo-layout.md「本作での配置（圧縮）」に対応。
//   世界座標：原点＝丸の内仲通り × 行幸通りの交差、x=東、z=南、y=上（m）。実座標から x に +391 を足した値（東京駅の座標は記憶ベース＝★）。
//   A〜C（駅前〜仲通り南 約 700 m）は実寸に近く、D（東京タワーまで）だけ圧縮（実 約 2.4 km → 約 1.5 km、方位は保つ）。
//   数値は後から直せるよう、ここに集約する（シーン・カメラ・タイル・車線がすべてここを見る）。

export const NAKA_X = 0;          // 丸の内仲通りの軸（南北）
export const GYOKO_Z = 0;         // 行幸通りの軸（東西）
export const FACADE_X = 346;      // 東京駅丸の内駅舎のファサード（西向き）
export const STATION_X = 391;     // 東京駅（ホーム）の中心 ★
export const MOAT_X = -160;       // 内堀通り・外濠の東岸（行幸通りの西端）
export const SOUTH_Z = 720;       // 仲通りの南端（晴海通り・有楽町）★
export const NORTH_Z = -500;      // 仲通りの北端（永代通り）

// 道路の断面種別（kind）：0=一般の街路 1=行幸通り（幅 73 m・イチョウ 4 列） 2=丸の内仲通り（幅 22 m・ケヤキ 両側） 3=広い通り（晴海通り・永代通り）
export const STREETS = [
  { id: 'gyoko', dir: 'x', c: GYOKO_Z, w: 73, a: MOAT_X, b: 30, kind: 1 },
  { id: 'naka', dir: 'z', c: NAKA_X, w: 22, a: NORTH_Z, b: SOUTH_Z, kind: 2 },
  { id: 'harumi', dir: 'x', c: SOUTH_Z, w: 35, a: -330, b: 480, kind: 3 },
  { id: 'eitai', dir: 'x', c: NORTH_Z, w: 35, a: -330, b: 480, kind: 3 },
  // 横断する通り（★位置は概略。幅 14〜18 m）
  ...[-385, -270, -155, 115, 230, 345, 460, 575].map((z) => ({ id: `x${z}`, dir: 'x', c: z, w: 16, a: -330, b: 330, kind: 0 })),
  // 南北の街路（仲通りの両側）
  { id: 'wA', dir: 'z', c: -150, w: 18, a: NORTH_Z, b: SOUTH_Z, kind: 0 },
  { id: 'wB', dir: 'z', c: -300, w: 16, a: NORTH_Z, b: SOUTH_Z, kind: 0 },
  { id: 'eA', dir: 'z', c: 150, w: 20, a: NORTH_Z, b: SOUTH_Z, kind: 0 },
  { id: 'eB', dir: 'z', c: 250, w: 18, a: NORTH_Z, b: SOUTH_Z, kind: 0 },
];

// 駅前広場（行幸通りの東：x 30〜346）。石張りの広場として扱う。
export const PLAZAS = [{ id: 'station', x0: 30, x1: FACADE_X, z0: -60, z1: 60 }];

// 外濠（水面）と皇居の暗い量塊（x ≤ MOAT_X−30）。
export const MOAT = { x0: MOAT_X - 30, x1: MOAT_X, z0: -330, z1: 330 };
export const PALACE = { x0: -420, x1: MOAT_X - 30, z0: -330, z1: 330 };

// 建物を置いてよい領域
export const CITY_BOX = { x0: -330, x1: 560, z0: -520, z1: 900 };

// JR の高架（東京駅から有楽町へ南南西へ）。折れ線の中心線、幅 14 m、桁の高さ 9 m。
export const VIADUCT = { w: 14, deckY: 9, pts: [[391, -260], [391, 60], [330, 250], [180, 480], [62, 690], [-60, 900], [-260, 1180]] };

// ---- ランドマーク・遠景（方位は実際の位置から。仲通り南端 (0, 720) 起点）
const rad = (d) => (d * Math.PI) / 180;
const toward = (bearingDeg, dist) => [Math.sin(rad(bearingDeg)) * dist, SOUTH_Z - Math.cos(rad(bearingDeg)) * dist];   // 方位（北=0°、東=90°）
export const TOWER_BEARING = 221, TOWER_DIST = 1500;   // 実際は約 2.4 km（圧縮）
export const TOWER = (() => { const [x, z] = toward(TOWER_BEARING, TOWER_DIST); return { x, z, height: 333 }; })();
export const FUJI_BEARING = 249, FUJI_DIST = 30000;    // 実際は約 100 km。見かけの大きさを保つため高さを 30/100.6 に縮小
export const FUJI = (() => { const [x, z] = toward(FUJI_BEARING, FUJI_DIST); return { x, z, height: 3776 * (FUJI_DIST / 100600) }; })();

// ---- 太陽（日没後：西南西の地平線の下。空の残照の向きだけに使う）と月明かり
export const SUN_DIR = [-0.93, -0.07, 0.36];

// ---- カメラ経路の世界座標（縦画面ドリーの折れ線＝通りの中心線）：A 駅前→行幸通りを西へ / B・C 仲通りを南へ
export const ROUTE = [[400, 0], [0, 0], [0, 700]];
