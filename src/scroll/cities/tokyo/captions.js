// cities/tokyo/captions.js — 東京のキャプション（純粋なデータ。docs/cities/tokyo-spec.md §5。U-9 で確定）
//   表示区間は進行度 p。窓は重ならず、すき間は 0.03。title が大見出し(h2)、sub が小見出し(p)。
export const CAPTIONS = [
  { id: 'cap-tokyo', title: 'TOKYO', sub: '東京', a: -0.05, b: 0.15 },                                   // p=0, 0.10（駅前の高所）
  { id: 'cap-marunouchi', title: '丸の内', sub: 'Marunouchi', a: 0.18, b: 0.32 },                       // p=0.25（行幸通り）
  { id: 'cap-nakadori', title: '丸の内仲通り', sub: 'Marunouchi Naka-dori', a: 0.35, b: 0.52 },         // p=0.47, 0.50
  { id: 'cap-illumination', title: '冬の光', sub: 'Winter Illumination', a: 0.55, b: 0.72 },            // p=0.60〜0.70（光の谷）
  { id: 'cap-tower', title: '東京タワーへ', sub: 'Toward Tokyo Tower', a: 0.75, b: 1.08 },              // p=0.75, 0.94, 1.0
];
