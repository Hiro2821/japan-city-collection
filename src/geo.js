// geo.js — 札幌の実在する場所を、市街の「条・丁目」住所グリッドからワールド座標へ置く。
//
// ■ 座標系: x=東, z=南, y=上（m）。原点付近は大通公園。さっぽろテレビ塔 = (-90, 0)。
// ■ 札幌の碁盤目: 約108m間隔。東西の通り(条)は大通を基準に北/南へ、南北の通り(丁目)は創成川(x=-54)を基準に西/東へ数える。
//     ・ブロック中心 x = 108 * j   （j=-1 が西1丁目, -2 が西2丁目 … / j=0 が東1丁目, 1 が東2丁目 …）
//     ・北側ブロック中心 z = -(116.5 + 108 * n)   （n=0 が北1条, n=4 が北5条 …）
//     ・南側ブロック中心 z = +(116.5 + 108 * n)   （n=0 が南1条 …）
// ■ 精度: 住所（条・丁目）からの配置で、街区内の位置は ±数十m の誤差を持つ。測量データではない。
//   藻岩山のみ緯度経度（概略）から配置。

export const PITCH = 108;
export const ROAD_HALF = 10;
export const ODORI_HALF = 52.5;
export const TV_TOWER = { x: -90, z: 0 };

export const xLine = (j) => -54 + PITCH * j;       // 南北の通り
export const zLineNorth = (n) => -(62.5 + PITCH * n);
export const zLineSouth = (n) => 62.5 + PITCH * n;
export const blockX = (j) => PITCH * j;
export const blockZNorth = (n) => -(116.5 + PITCH * n);
export const blockZSouth = (n) => 116.5 + PITCH * n;

// 住所 → ブロック中心。 kita: 北N条(>=1) / minami: 南N条, nishi: 西N丁目 / higashi: 東N丁目
export function addr({ kita, minami, nishi, higashi }) {
  const j = nishi ? -nishi : higashi - 1;
  const x = blockX(j);
  const z = kita ? blockZNorth(kita - 1) : blockZSouth(minami - 1);
  return { x, z, j };
}

export const LANDMARKS = {
  tvTower: { name: 'さっぽろテレビ塔', ...TV_TOWER, basis: '大通西1丁目（東端付近）', model: '手続き生成の概略モデル（高さ147.2m・展望台約90m）' },
  jrTower: { name: 'JRタワー', ...addr({ kita: 5, nishi: 2 }), basis: '北5条西2丁目', model: '手続き生成の概略モデル（高さ173m）' },
  station: { name: '札幌駅', ...addr({ kita: 6, nishi: 3 }), basis: '北6条西4丁目付近', model: '低層の駅ビルとして概略表現' },
  clockTower: { name: '札幌市時計台', ...addr({ kita: 1, nishi: 2 }), basis: '北1条西2丁目', model: '手続き生成の概略モデル（木造2階建て・中央に時計塔）' },
  tanukikoji: { name: '狸小路', x: -430, z: 332.5, basis: '南2〜3条・西1〜7丁目（街区の中央を通る商店街）', model: 'アーケード商店街として概略表現' },
  susukino: { name: 'すすきの交差点', x: xLine(-4) + 0, z: zLineSouth(4), basis: '南4〜5条西4丁目付近', model: '交差点とネオン看板として概略表現' },
  factory: { name: 'サッポロファクトリー', ...addr({ kita: 2, higashi: 4 }), basis: '北2条東4丁目', model: '赤レンガ棟とガラス屋根のアトリウムとして概略表現' },
  moiwa: { name: '藻岩山（展望台）', x: -2496, z: 3607, elev: 531, basis: '緯度経度（概略）からの配置', model: '地形の盛り上がりとして概略表現' },
};
