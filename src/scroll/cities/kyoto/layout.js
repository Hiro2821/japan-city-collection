// cities/kyoto/layout.js — 京都の配置データ（純粋なデータ＋高さ関数。Three.js 非依存）。docs/cities/kyoto-spec.md §2・§4 に対応。
//   世界座標：原点＝四条大橋の中央（鴨川の上）、x=東、z=南、y=上（m）。位置関係は記憶ベースの概略（★）で、実寸の約 0.6 倍に圧縮した（U-4・U-12）。
//   実寸の目安（記憶）：四条大橋〜八坂神社 約 0.6 km／八坂神社〜清水寺 約 1.3 km／清水寺から京都タワーは西南西 約 3.4 km（本作では 1.5 km に圧縮）。
//   数値は後から直せるよう、ここに集約する（シーン・カメラ・地面・タイルがすべてここを見る）。

const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// ---- ランドマークの位置（x, z）
export const YASAKA = { gate: [450, 0], hall: [640, -25], south: [540, 112] };          // 八坂神社：西楼門（四条通の突き当たり）・本殿・南楼門
export const MARUYAMA = { c: [740, 170] };                                             // 円山公園
export const KODAIJI = { c: [905, 318] };                                              // 高台寺・圓徳院
export const YASAKA_TOWER = [858, 496];                                                // 八坂の塔（法観寺）
export const KIYOMIZU = {
  nioumon: [1140, 668], saimon: [1175, 682], pagoda: [1215, 760], hondo: [1262, 718], stage: [1226, 740],
  facing: Math.atan2(-0.69, 0.72),                                                     // 本堂・舞台が向く方位（西南西〜南西）
  koyasu: [1196, 790], bell: [1150, 735],
};
export const STAGE = KIYOMIZU.stage;

// ---- 京都タワー・京都駅（遠景。舞台から西南西へ 1.5 km に圧縮）
const rad = (d) => (d * Math.PI) / 180;
export const TOWER_K = (() => { const b = rad(256), d = 1500; return { x: STAGE[0] + Math.sin(b) * d, z: STAGE[1] - Math.cos(b) * d, height: 131 }; })();
export const STATION_K = { x: TOWER_K.x - 40, z: TOWER_K.z + 120 };

// ---- 太陽（日没前後：西南西の地平線近く）
export const SUN_DIR = [-0.91, -0.02, 0.41];

// ---- 地形の高さ（m）。平地（鴨川・祇園・四条通）→ 円山公園から東山の斜面へ登り、清水寺の舞台（約 74 m）、その背後に山並み。
//   a = x + 0.25 z を「東山の帯」の座標にする（帯は南北方向にやや傾く）。清水の舞台の前（西南西）は谷に掘る。
export const RIVER = { x: 0, half: 34, water: 15, depth: 2.8 };
const VALLEY = [STAGE[0] - 0.69 * 56, STAGE[1] + 0.72 * 56];
export function H(x, z) {
  const a = x + 0.25 * z;
  let h = 74 * sstep(700, 1380, a) + 170 * sstep(1400, 2300, a) * (0.85 + 0.15 * Math.sin(z * 0.011 + x * 0.007));
  h += (a > 1100 ? 6 : 0) * Math.sin(x * 0.037 + 1.3) * Math.sin(z * 0.029) * sstep(1100, 1500, a);
  const dv = Math.hypot(x - VALLEY[0], z - VALLEY[1]);
  h -= 31 * Math.exp(-((dv / 56) ** 2)) * sstep(900, 1200, a);
  h -= RIVER.depth * (1 - sstep(RIVER.half - 12, RIVER.half, Math.abs(x - RIVER.x)));
  return h;
}

// ---- 道（折れ線。w=幅 m、kind: 0=舗装路 1=石畳 2=砂利 3=石段）
export const MAIN_PATH = [[440, 0], [562, 0], [598, 90], [680, 190], [760, 290], [840, 410], [910, 540], [1010, 610], [1100, 670], [1160, 700], [1215, 735]];
export const STREETS = [
  { id: 'shijo-w', pts: [[-420, 0], [-34, 0]], w: 20, kind: 0 },
  { id: 'shijo-e', pts: [[34, 0], [446, 0]], w: 20, kind: 0 },
  { id: 'bridge', pts: [[-36, 0], [36, 0]], w: 21, kind: 0 },
  { id: 'hanamikoji', pts: [[250, -260], [250, 300]], w: 7, kind: 1 },
  { id: 'shinbashi', pts: [[150, -128], [420, -128]], w: 6, kind: 1 },
  { id: 'pontocho', pts: [[-78, -300], [-78, 70]], w: 3.6, kind: 1 },
  { id: 'kawaramachi', pts: [[-190, -400], [-190, 400]], w: 24, kind: 0 },
  { id: 'kiyamachi', pts: [[-110, -300], [-110, 200]], w: 5, kind: 1 },
  { id: 'kamo-w', pts: [[-48, -560], [-48, 600]], w: 12, kind: 0 },
  { id: 'kamo-e', pts: [[48, -560], [48, 600]], w: 12, kind: 0 },
  { id: 'ishibe', pts: [[350, 120], [350, 400]], w: 6, kind: 1 },
  { id: 'nene-s', pts: [[760, 290], [800, 400], [840, 410]], w: 5, kind: 1 },
  { id: 'kiyomizuzaka', pts: [[1010, 610], [1100, 670]], w: 9, kind: 1 },
];
// 経路（道のリボン）：[x, z, w, kind]
export const RIBBONS = [
  [[440, 0], [562, 0], 14, 2], [[562, 0], [598, 90], 12, 2], [[598, 90], [680, 190], 9, 1], [[680, 190], [760, 290], 6.5, 1],
  [[760, 290], [840, 410], 5.5, 1], [[840, 410], [910, 540], 5, 1], [[910, 540], [1010, 610], 3.8, 3], [[1010, 610], [1100, 670], 9, 1],
  [[1100, 670], [1160, 700], 10, 1], [[1160, 700], [1215, 735], 9, 1],
];
// 広場・敷地（矩形 x0,z0,x1,z1,kind: 2=砂利 4=芝・庭 1=石畳）
export const PLAZAS = [
  [562, -70, 700, 90, 2], [610, 100, 840, 300, 4], [880, 280, 960, 360, 2], [1130, 660, 1290, 800, 1],
];

// ---- カメラ経路（縦画面ドリーの折れ線。xz）：四条大橋の西 → 四条通を東へ → 八坂神社 → 円山公園 → ねねの道 → 二年坂・三年坂 → 清水寺 → 舞台の外へ
export const ROUTE = [[-300, 0], [440, 0], [562, 0], [598, 90], [680, 190], [760, 290], [840, 410], [910, 540], [1010, 610], [1100, 670], [1160, 700], [1226, 740], [1150, 800], [736, 891], [322, 982]];
export const FIN = { pos: [1150, 0, 800], tgt: [TOWER_K.x, 0, TOWER_K.z] };

// 都市の範囲（建物を置く）と木の範囲
export const CITY = { x0: -520, x1: 1020, z0: -520, z1: 640 };
export const GROUND = { x0: -900, x1: 2400, z0: -1000, z1: 1600, cell: 16 };
