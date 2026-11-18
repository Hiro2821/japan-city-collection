// test-rotation.mjs — 画面回転（縦→横→縦）で進行度 p が飛ばないことを確認する（ヘッドレス Chrome、疑似確認）
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url'; import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('/opt/npm-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css' };
const srv = http.createServer((q, r) => { const f = path.join(ROOT, path.normalize(q.url.split('?')[0])); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; } r.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r); }).listen(0, '127.0.0.1');
await new Promise((r) => srv.once('listening', r));
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const pg = await (await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })).newPage();
await pg.goto(`http://127.0.0.1:${srv.address().port}/scroll.html?three=local&tier=T0`);
await pg.waitForFunction(() => window.__ready || window.__bootError, null, { timeout: 240000 });
// ソフトウェア描画ではフレームが重くタイマが遅れるため、スクロール位置から求めた p が落ち着くまで待つ（最大 30 秒）
const P = async () => { for (let i = 0; i < 60; i++) { const r = await pg.evaluate(() => { const t = document.getElementById('track'), s = document.getElementById('stage'); const real = Math.min(1, Math.max(0, scrollY / (t.offsetHeight - s.offsetHeight))); return { p: +window.__scroll.state().p.toFixed(4), stable: +window.__scroll.pStable().toFixed(4), pFromScroll: +real.toFixed(4), scrollY: Math.round(scrollY) }; });
  if (Math.abs(r.pFromScroll - r.stable) < 0.004) return r; await pg.waitForTimeout(500); } return { timeout: true, ...(await pg.evaluate(() => ({ stable: window.__scroll.pStable(), scrollY }))) }; };
const setP = (p) => pg.evaluate((pp) => { const t = document.getElementById('track'), s = document.getElementById('stage'); scrollTo(0, pp * (t.offsetHeight - s.offsetHeight)); }, p);
const out = [];
for (const p0 of [0.5, 0.25, 0.9]) {
  await setP(p0); await pg.waitForTimeout(600); out.push({ step: `portrait p=${p0}`, ...(await P()) });
  await pg.setViewportSize({ width: 844, height: 390 }); await pg.waitForTimeout(1500); out.push({ step: '→ landscape', ...(await P()) });
  await pg.setViewportSize({ width: 390, height: 844 }); await pg.waitForTimeout(1500); out.push({ step: '→ portrait', ...(await P()) });
}
// 高さだけの変化（アドレスバー伸縮の疑似。ヘッドレスでは svh も変わるため、p 維持（pStable）の経路を検証する）
for (const p0 of [0.5]) {
  await setP(p0); await pg.waitForTimeout(600); out.push({ step: `portrait p=${p0}（高さ変化テスト）`, ...(await P()) });
  await pg.setViewportSize({ width: 390, height: 744 }); out.push({ step: '→ 高さ 844→744', ...(await P()) });
  await pg.setViewportSize({ width: 390, height: 844 }); out.push({ step: '→ 高さ 744→844', ...(await P()) });
}
console.log(out.map((o) => JSON.stringify(o)).join('\n'));
await b.close(); srv.close();
