// cities/kobe/layout.js — 神戸の配置データ（純粋なデータ＋高さ関数。Three.js 非依存）。docs/cities/kobe-spec.md §4・§5 に対応。
//   世界座標：原点＝三宮駅付近、x=東、z=南（海は +z、六甲の山は −z）、y=上（m）。水平距離は実寸の約 0.7 倍に圧縮し、標高の落差は保つ（K-4）。
//   ★地理の確認（K-14。2026-11-26）
//     Web で確認できたもの：三宮駅(JR) 34°41′24.0″N 135°11′24.6″E（latitude.to）／神戸ポートタワー 34°40′57.5″N 135°11′12.1″E・高さ 108 m・展望フロア 90.28 m・1963 年開業（Wikipedia 系ミラー）／
//       摩耶山 34.72°N 135.20°E・標高 699 m（mountain-forecast.com）。→ 三宮駅からポートタワーは南へ約 0.8 km・西へ約 0.3 km（実測の差分）、摩耶山頂は北へ約 3.3 km・東へ約 0.9 km。
//     計算で出したもの：4 月下旬（太陽の赤緯 約 +14°）・北緯 34.7° の日没方位は 北から約 287°（西北西）。→ 日没の太陽は海ではなく「須磨・六甲西端の山側」に沈む。
//       仕様書 §0 の「淡路島の方向」は 秋〜冬の日没で、春は異なる。本作は残照の見え方を優先し、空の暖色の方位を 255°（西南西）に置く（演出上の意図的な逸脱。報告に明記）。
//     記憶ベース（未確認）：北野異人館街 標高 約 70〜100 m・三宮の北 約 0.8〜1 km／掬星台 標高 約 690 m／海岸線は東北東〜西南西に走る（本作では東西に揃え、傾きは省略）／
//       ポートタワーの形（鼓形・双曲面）／旧居留地・南京町・フラワーロード・ハーバーランドの位置関係。
//   数値は後から直せるよう、ここに集約する。

const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// ---- 太陽（日没後：地平線の下。残照は horizon の glow）。方位 255°（西南西）：x=sin(b), z=−cos(b)
const rad = (d) => (d * Math.PI) / 180;
export const SUN_BEARING = 255;
export const SUN_DIR = [Math.sin(rad(SUN_BEARING)), -0.06, -Math.cos(rad(SUN_BEARING))];

// ---- 海岸線・埋立地（高さ 2.0 m の箱。地形メッシュとは別に作る＝護岸を垂直にする）
export const COAST_Z = 640;
export const coastZ = (x) => COAST_Z + 22 * Math.sin(x / 210) + 12 * Math.sin(x / 63 + 1.0);
export const QUAY_H = 2.0;
export const QUAYS = [                                   // [x0, z0, x1, z1, 名前]
  { x0: -400, z0: 610, x1: -40, z1: 900, name: 'meriken' },          // メリケンパーク
  { x0: -1060, z0: 610, x1: -560, z1: 880, name: 'harborland' },     // ハーバーランド
  { x0: -150, z0: 610, x1: 330, z1: 760, name: 'east-wharf' },       // 東側の突堤（フラワーロードの先）
];
const inQuay = (x, z) => QUAYS.some((q) => x > q.x0 && x < q.x1 && z > q.z0 && z < q.z1);

// ---- ランドマークの位置（x, z）
export const PORT_TOWER = { x: -250, z: 780, height: 108 };         // 神戸ポートタワー（メリケンパークの海側寄り）
export const MUSEUM = { x: -330, z: 700 };                          // 海洋博物館（白い鉄骨の屋根）
export const FERRIS = { x: -680, z: 740, r: 36 };                   // ハーバーランドの観覧車
export const SANNOMIYA = [0, 0];
export const KITANO = { c: [60, -820] };                            // 北野異人館街の中心
export const KYORYUCHI = { c: [-130, 330] };                        // 旧居留地
export const NANKIN = { gate: [-300, 430] };                        // 南京町

// ---- 地形の高さ（m）。海岸平野 → 山麓（北野）→ 山腹 → 摩耶・六甲の稜線。d = −z（山側へ正）。
//   標高は「記憶ベース＋Web で確認した 摩耶山 699 m」。北野 約 80 m・山手の住宅地 〜250 m・掬星台付近 〜690 m。
const PROFILE = [[-700, -2.0], [-640, 0.8], [-300, 2.5], [0, 5], [350, 24], [700, 90], [1000, 190], [1300, 330], [1700, 560], [2000, 690], [2600, 770], [3600, 900]];
const prof = (d) => {
  if (d <= PROFILE[0][0]) return PROFILE[0][1];
  for (let i = 0; i < PROFILE.length - 1; i++) { const [d0, h0] = PROFILE[i], [d1, h1] = PROFILE[i + 1]; if (d < d1) return h0 + (h1 - h0) * sstep(d0, d1, d); }
  return PROFILE[PROFILE.length - 1][1];
};
/** 地形メッシュ用（埋立地を含まない）。 */
export function Hterrain(x, z) {
  const d = -z, cz = coastZ(x);
  let h = prof(d);
  const m = sstep(450, 1500, d);                                        // 山の凹凸（谷と尾根）：北野付近まではなだらか
  h += m * (38 * Math.sin(x * 0.0061 + d * 0.0021) + 26 * Math.sin(x * 0.0134 - d * 0.0042 + 2.0) + 12 * Math.sin(x * 0.031 + d * 0.011));
  h += sstep(1500, 2600, d) * 55 * Math.sin(x * 0.0042 + 1.0);
  if (z > cz - 8) h = Math.min(h, 0.8 - 6 * sstep(0, 70, z - (cz - 8)));    // 海岸 → 海底
  return h;
}
/** 配置・カメラ用（埋立地を含む）。 */
export const H = (x, z) => (inQuay(x, z) ? QUAY_H : Hterrain(x, z));

// ---- 道（折れ線。w=幅 m、kind: 0=舗装路 1=石畳 2=砂利）
export const ROUTE = [[330, -1900], [300, -1650], [230, -1400], [150, -1150], [90, -940], [50, -760], [30, -560], [10, -330], [0, -120], [-20, 60], [-90, 260], [-200, 380], [-330, 430],
  [-300, 560], [-200, 670], [-160, 790], [-170, 900], [-260, 1100], [-380, 1160], [-340, 1000], [-330, 700], [-330, 300]];   // 終盤は桟橋の先で U ターン（K-22）：折り返しの先が北＝山を向く
export const STREETS = [
  { id: 'flower', pts: [[130, 20], [130, 640]], w: 36, kind: 0 },
  { id: 'tor', pts: [[-210, -700], [-210, 560]], w: 14, kind: 0 },
  { id: 'kitanozaka', pts: [[50, -1200], [10, -330], [0, -60]], w: 8, kind: 1 },
  { id: 'ew-sannomiya', pts: [[-900, 60], [900, 60]], w: 22, kind: 0 },
  { id: 'ew-kyoryuchi', pts: [[-900, 330], [330, 330]], w: 18, kind: 0 },
  { id: 'ew-harbor', pts: [[-900, 585], [900, 585]], w: 28, kind: 0 },
  { id: 'ew-kitano', pts: [[-500, -420], [600, -420]], w: 9, kind: 0 },
  { id: 'ew-kitano2', pts: [[-400, -690], [500, -690]], w: 8, kind: 1 },
  { id: 'nankin', pts: [[-410, 430], [-250, 430]], w: 9, kind: 1 },
  { id: 'nankin-ns', pts: [[-330, 380], [-330, 470]], w: 8, kind: 1 },
  { id: 'to-meriken', pts: [[-330, 470], [-300, 560], [-240, 690]], w: 12, kind: 0 },
  { id: 'meriken-w', pts: [[-390, 700], [-60, 700]], w: 10, kind: 1 },
];
// 経路（道のリボン：ルートに沿った道）：[x, z, w, kind]。山手の石畳の坂 → 市街の舗装
export const RIBBONS = [];
for (let i = 4; i < 16; i++) RIBBONS.push([ROUTE[i], ROUTE[i + 1], i < 9 ? 6 : 11, i < 8 ? 1 : 0]);   // 北野の坂（石畳）〜市街〜メリケンパーク（塔の脇まで）
// 広場・敷地（矩形 x0,z0,x1,z1,kind: 1=石畳 2=砂利・舗装 4=芝）
export const PLAZAS = [
  [-390, 612, -45, 895, 4],                // メリケンパーク（芝）
  [-300, 690, -200, 780, 1],               // 塔の足元の広場
  [-440, 395, -230, 470, 1],               // 南京町
  [-160, 290, -90, 380, 1],                // 旧居留地の広場
  [-60, -40, 60, 40, 2],                   // 三宮駅前
];

// 都市の範囲（建物を置く）
export const CITY = { x0: -900, x1: 900, z0: -480, z1: 590 };
export const HILL = { x0: -700, x1: 800, z0: -1300, z1: -330 };       // 山手の住宅地（住宅の個体を置く範囲）
export const GROUND = { x0: -1800, x1: 1800, z0: -2300, z1: 920, cell: 16 };
