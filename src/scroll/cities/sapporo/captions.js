// cities/sapporo/captions.js — 札幌のキャプション（純粋なデータ）。表示区間は進行度 p。窓の間のすき間は 0.02〜0.03、窓は重ならない。
//   title が大見出し(h2)、sub が小見出し(p)。
export const CAPTIONS = [
  { id: 'cap-sapporo', title: 'SAPPORO', sub: '札幌', a: -0.05, b: 0.17 },                    // p=0, 0.10
  { id: 'cap-tower', title: 'さっぽろテレビ塔', sub: 'Sapporo TV Tower', a: 0.20, b: 0.45 },  // p=0.25
  { id: 'cap-odori', title: '大通公園', sub: 'Odori Park', a: 0.47, b: 0.70 },               // p=0.50
  { id: 'cap-teine', title: '手稲山の方へ', sub: 'Toward Mt. Teine', a: 0.72, b: 1.08 },     // p=0.75, 0.94, 1.0
];
