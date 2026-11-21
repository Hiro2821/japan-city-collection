// cities/sendai/captions.js — 仙台のキャプション（純粋なデータ。docs/cities/sendai-spec.md §4。U-9 で文言確定）
//   表示区間は進行度 p。窓は重ならず、すき間は 0.02〜0.03。title が大見出し(h2)、sub が小見出し(p)。
export const CAPTIONS = [
  { id: 'cap-sendai', title: 'SENDAI', sub: '仙台', a: -0.05, b: 0.15 },                         // p=0, 0.10（駅前〜青葉通の入口）
  { id: 'cap-aoba', title: '青葉通', sub: 'Aoba-dori', a: 0.18, b: 0.34 },                       // p=0.25
  { id: 'cap-jozenji', title: '定禅寺通', sub: 'Jozenji-dori', a: 0.37, b: 0.52 },               // p=0.47, 0.50
  { id: 'cap-tanabata', title: '仙台七夕', sub: 'Sendai Tanabata', a: 0.55, b: 0.72 },           // p=0.60〜0.70
  { id: 'cap-aobajo', title: '青葉城址から', sub: 'From Aoba Castle Ruins', a: 0.75, b: 1.08 },    // p=0.75, 0.94, 1.0
];
