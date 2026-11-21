// shoot-scroll.mjs — scroll.html を指定の画面サイズで開き、進行度 p ごとに静止画を撮る（ヘッドレス Chrome / SwiftShader）
//   node tools/shoot-scroll.mjs --out DIR [--sizes portrait,landscape] [--ps 0,0.1,...] [--query "debug=1"] [--real]
//   既定は決定的描画（window.__scroll.renderAtProgress(p)）。--real は実際にスクロールして撮る。
//   注意: ソフトウェア描画のため FPS などの性能値は実機を代表しない（ここでは報告しない）。
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('/opt/npm-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const SIZES = {
  portrait: { width: 390, height: 844, deviceScaleFactor: 3, isMobile: true, hasTouch: true },
  landscape: { width: 960, height: 540, deviceScaleFactor: 1 },
  ipad: { width: 820, height: 1180, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  square: { width: 900, height: 900, deviceScaleFactor: 1 },
  desktop: { width: 1440, height: 900, deviceScaleFactor: 1 },
  blend092: { width: 828, height: 900, deviceScaleFactor: 1 },
  blend100: { width: 900, height: 900, deviceScaleFactor: 1 },
  blend108: { width: 972, height: 900, deviceScaleFactor: 1 },
};
const a = process.argv.slice(2);
const get = (k, d) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : d; };
const out = get('out', 'shots');
const metrics = [];
const sizes = get('sizes', 'portrait,landscape').split(',');
const ps = get('ps', '0,0.1,0.25,0.47,0.5,0.53,0.75,0.94,1').split(',').map(Number);
const query = get('query', '');
const real = a.includes('--real');
fs.mkdirSync(out, { recursive: true });

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.css': 'text/css', '.png': 'image/png' };
const srv = http.createServer((req, res) => {
  const p = path.normalize(decodeURIComponent(req.url.split('?')[0]));
  const file = path.join(ROOT, p === '/' ? 'scroll.html' : p);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('nf'); return; }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] ?? 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
}).listen(0, '127.0.0.1');
await new Promise((r) => srv.once('listening', r));
const base = `http://127.0.0.1:${srv.address().port}`;

const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
try {
  for (const name of sizes) {
    const ctx = await browser.newContext({ viewport: { width: SIZES[name].width, height: SIZES[name].height }, deviceScaleFactor: SIZES[name].deviceScaleFactor, isMobile: SIZES[name].isMobile, hasTouch: SIZES[name].hasTouch });
    const page = await ctx.newPage();
    page.on('console', (m) => { if (['error', 'warning'].includes(m.type())) console.log(`[${name} ${m.type()}]`, m.text().slice(0, 300)); });
    page.on('pageerror', (e) => console.log('[pageerror]', e.message));
    if (process.env.HIDE_UI) await page.addInitScript(() => { const s = document.createElement('style'); s.textContent = '.ui{display:none!important}'; document.addEventListener('DOMContentLoaded', () => document.head.appendChild(s)); });
    await page.goto(`${base}/scroll.html?three=local${real ? '' : '&freeze=1'}${/(^|&)city=/.test(query) ? '' : '&city=sapporo'}${query ? '&' + query : ''}`);
    await page.waitForFunction(() => window.__ready === true || window.__bootError, null, { timeout: 240000 });
    const err = await page.evaluate(() => window.__bootError);
    if (err) throw new Error('boot error: ' + err);
    for (const p of ps) {
      if (real) {
        await page.evaluate((pp) => { const t = document.getElementById('track'), s = document.getElementById('stage'); window.scrollTo(0, pp * (t.offsetHeight - s.offsetHeight)); }, p);
        await page.waitForTimeout(1500);
      } else {
        await page.evaluate((pp) => window.__scroll.renderAtProgress(pp), p);
        await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
      }
      const f = path.join(out, `${name}_p${String(Math.round(p * 1000)).padStart(4, '0')}.png`);
      await page.screenshot({ path: f });
      const m = await page.evaluate(() => { const i = window.__scroll.renderer.lastInfo; return { calls: i.calls, triangles: i.triangles, tier: window.__scroll.tier(), size: `${window.__scroll.state().width}x${window.__scroll.state().height}` }; });
      metrics.push({ layout: name, p, ...m });
      console.log('saved', f, JSON.stringify(m));
    }
    await ctx.close();
  }
} finally { fs.writeFileSync(path.join(out, `metrics_${sizes.join('-')}.json`), JSON.stringify(metrics, null, 1)); await browser.close(); srv.close(); }
