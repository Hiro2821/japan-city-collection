// test-captions.mjs — キャプションの表示/非表示・重なり・すき間・急な出入りを p で検証する（ヘッドレス Chrome）
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url'; import { createRequire } from 'node:module';
import { windowOpacity } from '../src/scroll/math.js';
import { CAPTIONS } from '../src/scroll/cities/sapporo/captions.js';
const { chromium } = createRequire(import.meta.url)('/opt/npm-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// ---- 1) 純粋関数による全域スイープ
const step = 0.0025; let maxJump = 0, maxSum = 0, overlap = 0; const gaps = [];
let prev = null;
for (let p = -0.05; p <= 1.0001; p += step) {
  const o = CAPTIONS.map((c) => windowOpacity(c.a, c.b, p)); const sum = o.reduce((a, b) => a + b, 0);
  maxSum = Math.max(maxSum, sum); if (o.filter((v) => v > 0.02).length > 1) overlap++;
  if (prev) for (let i = 0; i < o.length; i++) maxJump = Math.max(maxJump, Math.abs(o[i] - prev[i]));
  prev = o;
}
for (let i = 0; i < CAPTIONS.length - 1; i++) gaps.push(+(CAPTIONS[i + 1].a - CAPTIONS[i].b).toFixed(3));
console.log(JSON.stringify({ sweep: { stepP: step, maxOpacitySum: +maxSum.toFixed(3), samplesWithOverlap: overlap, maxOpacityJumpPerStep: +maxJump.toFixed(3), gapsBetweenWindows: gaps } }));
// ---- 2) 実ページ（DOM の不透明度）を縦・横で確認。読み込み直後の p=0 も実スクロール状態で確認。
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css' };
const srv = http.createServer((q, r) => { const f = path.join(ROOT, path.normalize(q.url.split('?')[0])); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; } r.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r); }).listen(0, '127.0.0.1');
await new Promise((r) => srv.once('listening', r));
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
for (const [name, vp] of [['portrait', { width: 390, height: 844 }], ['landscape', { width: 960, height: 540 }]]) {
  const pg = await (await b.newContext({ viewport: vp, deviceScaleFactor: 1 })).newPage();
  await pg.goto(`http://127.0.0.1:${srv.address().port}/scroll.html?three=local`);
  await pg.waitForFunction(() => window.__ready || window.__bootError, null, { timeout: 240000 });
  await pg.waitForTimeout(3000);
  const first = await pg.evaluate(() => window.__scroll.captionDom().map((c) => `${c.id}:${c.opacity}`).join(' '));
  console.log(`[${name}] 読み込み直後(p=0・実スクロール): ${first}`);
  await pg.evaluate(() => window.__scroll.renderAtProgress(0)); // 以後は固定描画
  for (const p of [0, 0.1, 0.25, 0.47, 0.5, 0.53, 0.75, 0.94, 1]) {
    const d = await pg.evaluate((pp) => { window.__scroll.renderAtProgress(pp); return window.__scroll.captionDom(); }, p);
    const vis = d.filter((c) => c.opacity > 0.02).map((c) => `${c.text.split(/(?=[A-Z][a-z]+ )/)[0].slice(0, 12)}=${c.opacity.toFixed(2)}`);
    console.log(`[${name}] p=${p}: ${vis.length ? vis.join(', ') : '（なし・すき間）'}`);
  }
}
await b.close(); srv.close();
