// cities/kyoto/captions.js — 京都のキャプション（純粋なデータ。docs/cities/kyoto-spec.md §7。U-9 で確定）
//   表示区間は進行度 p。窓は重ならず、すき間は 0.03。title が大見出し(h2)、sub が小見出し(p)。
export const CAPTIONS = [
  { id: 'cap-kyoto', title: 'KYOTO', sub: '京都', a: -0.05, b: 0.15 },
  { id: 'cap-kamogawa', title: '鴨川', sub: 'Kamo River', a: 0.18, b: 0.30 },
  { id: 'cap-gion', title: '祇園', sub: 'Gion', a: 0.33, b: 0.47 },
  { id: 'cap-higashiyama', title: '東山', sub: 'Higashiyama', a: 0.50, b: 0.64 },
  { id: 'cap-kiyomizu', title: '清水寺', sub: 'Kiyomizu-dera', a: 0.67, b: 0.84 },
  { id: 'cap-yakei', title: '京の夜景', sub: 'Kyoto by Night', a: 0.87, b: 1.08 },
];
