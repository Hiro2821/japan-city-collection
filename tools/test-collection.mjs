// test-collection.mjs — コレクション体験（選択画面・直リンク・切り替え・フィナーレ案内・favicon）の動作確認
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url'; import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('/opt/npm-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = process.argv[2] || 'collection-shots'; fs.mkdirSync(OUT, { recursive: true });
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css', '.svg': 'image/svg+xml', '.ico': 'image/x-icon' };
const bad = [];
const srv = http.createServer((q, r) => { const f = path.join(ROOT, path.normalize(q.url.split('?')[0])); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { bad.push(q.url); r.writeHead(404); r.end(); return; } r.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r); }).listen(0, '127.0.0.1');
await new Promise((r) => srv.once('listening', r));
const base = `http://127.0.0.1:${srv.address().port}`;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
let fails = 0; const ok = (c, m) => { console.log((c ? 'OK  ' : 'NG  ') + m); if (!c) fails++; };
for (const [name, vp] of [['landscape', { width: 1280, height: 720 }], ['portrait', { width: 390, height: 844 }]]) {
  const pg = await (await b.newContext({ viewport: vp, deviceScaleFactor: 1 })).newPage();
  const errs = []; pg.on('pageerror', (e) => errs.push(e.message)); pg.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
  const ready = () => pg.waitForFunction(() => window.__ready === true || window.__bootError, null, { timeout: 240000 });
  // 1 選択画面
  await pg.goto(`${base}/scroll.html?three=local&freeze=1`); await ready();
  ok(await pg.evaluate(() => !document.getElementById('select').hidden && !window.__scroll), `${name}: 都市指定なし → 選択画面（シーン未構築）`);
  ok(await pg.evaluate(() => document.querySelectorAll('.sel-card').length === 4), `${name}: カード 4 枚（札幌・仙台・東京・大阪）`);
  await pg.screenshot({ path: `${OUT}/${name}_select.png` });
  // 2 カード → 開始
  await pg.click('.sel-card.c-sendai'); await pg.waitForFunction(() => window.__ready === true && window.__scroll, null, { timeout: 240000 });
  ok(await pg.evaluate(() => location.search.includes('city=sendai') && window.__scroll.cityModule.meta.id === 'sendai' && scrollY === 0 && document.getElementById('select').hidden), `${name}: 仙台開始・URL更新・scrollY=0`);
  await pg.evaluate(() => window.__scroll.renderAtProgress(0.5)); await pg.screenshot({ path: `${OUT}/${name}_sendai_menu-closed.png` });
  // 3 メニュー切り替え（スクロール位置を進めてから）
  await pg.evaluate(() => { const t = document.getElementById('track'), s = document.getElementById('stage'); scrollTo(0, 0.6 * (t.offsetHeight - s.offsetHeight)); });
  await pg.click('.menu-btn'); await pg.screenshot({ path: `${OUT}/${name}_menu-open.png` });
  await pg.click('.menu [data-city=sapporo]'); await pg.waitForFunction(() => window.__ready === true && window.__scroll?.cityModule.meta.id === 'sapporo', null, { timeout: 240000 });
  ok(await pg.evaluate(() => scrollY === 0 && window.__scroll.state().p === 0 && location.search.includes('city=sapporo') && document.querySelectorAll('.cap').length === window.__scroll.cityModule.captions.length), `${name}: 札幌へ切替・scrollY=0・キャプション入れ替え`);
  // 4 フィナーレ案内
  await pg.evaluate(() => window.__scroll.renderAtProgress(1.0)); await pg.screenshot({ path: `${OUT}/${name}_sapporo_finale.png` });
  const fin = await pg.evaluate(() => ({ o: +getComputedStyle(document.querySelector('.finale')).opacity, t: document.querySelector('.fin-main').textContent }));
  ok(fin.o > 0.99 && fin.t === 'Next — SENDAI', `${name}: 札幌フィナーレ「${fin.t}」`);
  await pg.evaluate(() => window.__scroll.renderAtProgress(0.5)); ok(await pg.evaluate(() => +getComputedStyle(document.querySelector('.finale')).opacity === 0), `${name}: 途中では案内なし`);
  await pg.evaluate(() => window.__scroll.renderAtProgress(1.0)); await pg.click('.fin-btn', { timeout: 180000 }); await pg.waitForFunction(() => window.__ready === true && window.__scroll?.cityModule.meta.id === 'sendai', null, { timeout: 240000 });
  ok(await pg.evaluate(() => scrollY === 0 && window.__scroll.state().p === 0), `${name}: 案内タップで仙台へ・p=0`);
  await pg.evaluate(() => window.__scroll.renderAtProgress(1.0));
  const fin1 = await pg.evaluate(() => document.querySelector('.fin-main').textContent); ok(fin1 === 'Next — TOKYO', `${name}: 仙台フィナーレ「${fin1}」`);
  await pg.screenshot({ path: `${OUT}/${name}_sendai_finale.png` });
  await pg.click('.fin-btn', { timeout: 180000 }); await pg.waitForFunction(() => window.__ready === true && window.__scroll?.cityModule.meta.id === 'tokyo', null, { timeout: 240000 });
  ok(await pg.evaluate(() => scrollY === 0 && window.__scroll.state().p === 0 && location.search.includes('city=tokyo') && document.querySelectorAll('.cap').length === window.__scroll.cityModule.captions.length), `${name}: 案内タップで東京へ・p=0・キャプション入れ替え`);
  await pg.evaluate(() => window.__scroll.renderAtProgress(1.0));
  const fin2 = await pg.evaluate(() => document.querySelector('.fin-main').textContent); ok(fin2 === 'Next — OSAKA', `${name}: 東京フィナーレ「${fin2}」`);
  await pg.screenshot({ path: `${OUT}/${name}_tokyo_finale.png` });
  await pg.click('.fin-btn', { timeout: 180000 }); await pg.waitForFunction(() => window.__ready === true && window.__scroll?.cityModule.meta.id === 'osaka', null, { timeout: 240000 });
  ok(await pg.evaluate(() => scrollY === 0 && window.__scroll.state().p === 0 && location.search.includes('city=osaka') && document.querySelectorAll('.cap').length === window.__scroll.cityModule.captions.length), `${name}: 案内タップで大阪へ・p=0・キャプション入れ替え`);
  await pg.evaluate(() => window.__scroll.renderAtProgress(1.0));
  const fin3 = await pg.evaluate(() => document.querySelector('.fin-main').textContent); ok(fin3.startsWith('JAPAN'), `${name}: 最終都市（大阪）は締め表示「${fin3}」`);
  await pg.screenshot({ path: `${OUT}/${name}_osaka_finale.png` });
  await pg.click('.fin-btn', { timeout: 180000 }); await pg.waitForFunction(() => window.__select === true);
  ok(await pg.evaluate(() => !document.getElementById('select').hidden && !location.search.includes('city=')), `${name}: 締めから選択画面へ`);
  // 5 直リンク・パラメータ保持
  await pg.goto(`${base}/scroll.html?city=sapporo&three=local&freeze=1&debug=1&tier=T0&haze=1&grade=1`); await ready();
  ok(await pg.evaluate(() => document.getElementById('select').hidden && window.__scroll.cityModule.meta.id === 'sapporo' && window.__scroll.tier() === 'T0' && !!document.getElementById('dbg')), `${name}: 直リンクは選択画面なし・tier/debug 有効`);
  await pg.click('.menu-btn'); await pg.click('.menu [data-city=tokyo]'); await pg.waitForFunction(() => window.__ready === true && window.__scroll?.cityModule.meta.id === 'tokyo', null, { timeout: 240000 });
  await pg.click('.menu-btn'); await pg.click('.menu [data-city=sendai]'); await pg.waitForFunction(() => window.__ready === true && window.__scroll?.cityModule.meta.id === 'sendai', null, { timeout: 240000 });
  ok(await pg.evaluate(() => document.querySelectorAll('#dbg').length === 1 && window.__scroll.tier() === 'T0' && location.search.includes('tier=T0') && location.search.includes('debug=1')), `${name}: 切替後も tier/debug 保持・debug パネル重複なし`);
  ok(errs.length === 0, `${name}: コンソールエラーなし ${errs.join('|').slice(0, 200)}`);
}
ok(bad.length === 0, `404 なし ${bad.join(',')}`);
await b.close(); srv.close(); process.exit(fails ? 1 : 0);
