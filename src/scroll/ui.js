// scroll/ui.js — コレクションとしての体験 UI（スタート画面・都市メニュー・フィナーレの案内）。
//   シーンの描画には一切触れない純 DOM。すべての要素に class="ui" を付ける（検証用に一括で隠せる）。
//   重い画像は使わず、CSS のグラデーションだけで各都市の雰囲気を出す。
const el = (tag, cls, text, attrs) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  if (attrs) for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
};

/** カードに載せる都市ごとの季節・テーマ（表示用の静的データ）。 */
export const CARD_INFO = {
  sapporo: { line: '冬 — 雪', lineEn: 'Winter · Snow' },
  sendai: { line: '七夕 — 夏の夕方', lineEn: 'Tanabata · Summer Dusk' },
  tokyo: { line: '冬 — イルミネーション', lineEn: 'Winter · Illumination' },
  kyoto: { line: '秋 — 紅葉と灯り', lineEn: 'Autumn · Maple & Lanterns' },
  osaka: { line: '冬 — 夜の灯り', lineEn: 'Winter · Night Lights' },
};

export function createUI({ series, cities, onPick, onCollection }) {
  const root = document.body;
  const byId = Object.fromEntries(cities.map((c) => [c.id, c]));
  let current = null;

  // ---- スタート画面
  const sel = el('section', 'ui select', null, { id: 'select', 'aria-label': series.title });
  const head = el('header', 'sel-head');
  head.append(el('h1', null, series.title), el('p', 'sel-tag', series.tagline));
  const list = el('div', 'sel-cards');
  for (const c of cities) {
    const info = CARD_INFO[c.id] ?? { line: '', lineEn: '' };
    const b = el('button', `sel-card c-${c.id}`, null, { type: 'button', 'data-city': c.id });
    b.append(el('span', 'sc-no', String(c.displayOrder).padStart(2, '0')),
      el('span', 'sc-en', c.englishName.toUpperCase()),
      el('span', 'sc-ja', c.name),
      el('span', 'sc-line', info.line),
      el('span', 'sc-sub', info.lineEn));
    b.addEventListener('click', () => onPick(c.id));
    list.appendChild(b);
  }
  sel.append(head, list, el('p', 'sel-foot', 'Scroll to travel — 都市を選んで始める'));
  root.appendChild(sel);

  // ---- 体験中のメニュー（右上）
  const menuBtn = el('button', 'ui menu-btn', null, { type: 'button', 'aria-haspopup': 'true', 'aria-expanded': 'false', 'aria-label': '都市メニュー' });
  const menuLabel = el('span', 'mb-label');
  menuBtn.append(menuLabel, el('span', 'mb-chev', '▾'));
  const menu = el('nav', 'ui menu', null, { 'aria-label': '都市の切り替え' });
  menu.hidden = true;
  for (const c of cities) {
    const b = el('button', 'mn-item', null, { type: 'button', 'data-city': c.id });
    b.append(el('span', 'mn-en', c.englishName.toUpperCase()), el('span', 'mn-ja', c.name));
    b.addEventListener('click', () => { setMenu(false); if (c.id !== current) onPick(c.id); });
    menu.appendChild(b);
  }
  const all = el('button', 'mn-item mn-all', null, { type: 'button' });
  all.append(el('span', 'mn-en', 'COLLECTION'), el('span', 'mn-ja', '都市を選ぶ'));
  all.addEventListener('click', () => { setMenu(false); onCollection(); });
  menu.appendChild(all);
  const setMenu = (open) => { menu.hidden = !open; menuBtn.setAttribute('aria-expanded', String(open)); };
  menuBtn.addEventListener('click', (e) => { e.stopPropagation(); setMenu(menu.hidden); });
  document.addEventListener('click', (e) => { if (!menu.hidden && !menu.contains(e.target)) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  root.append(menuBtn, menu);

  // ---- フィナーレの案内（p≈1.0 で現れる。最後の都市ではコレクションの締め）
  const fin = el('div', 'ui finale');
  const finBtn = el('button', 'fin-btn', null, { type: 'button' });
  const finMain = el('span', 'fin-main'), finSub = el('span', 'fin-sub');
  finBtn.append(finMain, finSub);
  fin.appendChild(finBtn);
  root.appendChild(fin);
  let finTarget = null;
  finBtn.addEventListener('click', () => { if (finTarget === null) onCollection(); else onPick(finTarget); });

  function setCurrent(id) {
    current = id;
    menuLabel.textContent = byId[id].englishName.toUpperCase();
    for (const b of menu.querySelectorAll('[data-city]')) b.classList.toggle('on', b.dataset.city === id);
    const i = cities.findIndex((c) => c.id === id), nx = cities[i + 1];
    finTarget = nx ? nx.id : null;
    if (nx) { finMain.textContent = `Next — ${nx.englishName.toUpperCase()}`; finSub.textContent = `${nx.name}へ`; }
    else { finMain.textContent = 'JAPAN — THE CITY COLLECTION'; finSub.textContent = `${series.tagline} ／ 都市を選ぶ`; }
    setFinale(0);
  }
  let lastO = -1;
  /** p=0.96→1.0 で案内を現す（p だけで決まる。逆スクロールでも対称）。 */
  function setFinale(p) {
    const o = Math.max(0, Math.min(1, (p - 0.955) / 0.04));
    if (Math.abs(o - lastO) < 0.004) return;
    lastO = o;
    fin.style.opacity = o.toFixed(3);
    fin.style.transform = `translateY(${((1 - o) * 8).toFixed(1)}px)`;
    fin.classList.toggle('live', o > 0.6);
  }

  function showSelect(on) {
    document.body.classList.toggle('selecting', on);
    sel.hidden = !on;
    if (on) { setMenu(false); sel.querySelector('button')?.focus?.({ preventScroll: true }); }
  }
  function showPlaying(on) {
    menuBtn.hidden = !on; fin.hidden = !on; if (!on) setMenu(false);
  }
  showSelect(false); showPlaying(false);
  return { setCurrent, setFinale, showSelect, showPlaying };
}
