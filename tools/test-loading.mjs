// test-loading.mjs — scroll.html の読み込み方式（バンドル／モジュール版／自動フォールバック）と初期読み込み量を確認する
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import zlib from 'node:zlib'; import { fileURLToPath } from 'node:url'; import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('/opt/npm-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css' };
const srv = http.createServer((q, r) => { const f = path.join(ROOT, path.normalize(q.url.split('?')[0])); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; } r.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r); }).listen(0, '127.0.0.1');
await new Promise((r) => srv.once('listening', r));
const base = `http://127.0.0.1:${srv.address().port}`;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const cases = [
  ['A 既定（バンドル）', '/scroll.html?freeze=1', null],
  ['B ?bundle=0 + ?three=local（モジュール版）', '/scroll.html?bundle=0&three=local&freeze=1', null],
  ['C バンドル欠損 → 自動でモジュール版（Three はローカル）', '/scroll.html?three=local&freeze=1', 'bundle'],
  ['D ?bundle=0 かつ CDN 不通 → ローカル vendor/three に自動切替', '/scroll.html?bundle=0&freeze=1', 'cdn'],
];
for (const [name, url, block] of cases) {
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  const pg = await ctx.newPage();
  const reqs = [];
  if (block === 'bundle') await pg.route('**/dist/scroll.bundle.js', (r) => r.abort());
  if (block === 'cdn') await pg.route('https://cdn.jsdelivr.net/**', (r) => r.abort());
  pg.on('response', async (r) => { if (r.url().startsWith(base)) { try { const body = await r.body(); reqs.push([r.url().replace(base, ''), r.status(), body.length, zlib.gzipSync(body).length]); } catch {} } });
  await pg.goto(base + url);
  await pg.waitForFunction(() => window.__ready || window.__bootError, null, { timeout: 240000 });
  const st = await pg.evaluate(() => ({ ready: !!window.__ready, err: window.__bootError, mode: window.__loadMode, three: window.__threeSource, bundleErr: window.__bundleError ? String(window.__bundleError).slice(0, 80) : null }));
  const ok = reqs.filter((r) => r[1] === 200 && !r[0].includes('favicon'));
  const raw = ok.reduce((a, r) => a + r[2], 0), gz = ok.reduce((a, r) => a + r[3], 0);
  console.log(`\n## ${name}\n  ${JSON.stringify(st)}\n  ${ok.length} ファイル  計 ${(raw / 1048576).toFixed(2)} MB（gzip 推定 ${(gz / 1048576).toFixed(2)} MB）`);
  if (ok.length <= 6) console.log('  ' + ok.map((r) => `${r[0]} ${(r[2] / 1024).toFixed(0)}KB`).join(' / '));
  const bigVideo = ok.filter((r) => /\.(mp4|webm)$/.test(r[0]));
  console.log('  動画ファイルの読み込み:', bigVideo.length ? bigVideo.map((r) => r[0]).join(',') : 'なし');
  await ctx.close();
}
await b.close(); srv.close();
