// test-tiers.mjs — 画素数予算ティアの描画サイズ・MSAA・DoF・雪粒数を確認し、T1/T2 の静止画を撮る（ヘッドレス Chrome）
//   node tools/test-tiers.mjs OUTDIR     ※ソフトウェア描画なので FPS は測らない・報告しない
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url'; import { createRequire } from 'node:module';
import { TIERS, fitBudget } from '../src/scroll/math.js';
const { chromium } = createRequire(import.meta.url)('/opt/npm-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = process.argv[2] || 'tiers'; fs.mkdirSync(out, { recursive: true });
// ---- 1) 予算計算（純粋）：端末別の描画サイズ
console.log('# 端末別の描画サイズ（CSS px × DPR → 予算内に一様縮小）');
for (const [n, w, h, d] of [['iPhone 390×844 DPR3', 390, 844, 3], ['iPad 縦 820×1180 DPR2', 820, 1180, 2], ['横 960×540 DPR1', 960, 540, 1], ['デスクトップ 1440×900 DPR1', 1440, 900, 1], ['横スマホ 844×390 DPR3', 844, 390, 3]])
  console.log(n.padEnd(26), TIERS.map((t) => { const f = fitBudget(w, h, d, t.mp); return `${t.id}=${f.w}×${f.h}(${(f.w * f.h / 1e6).toFixed(2)}MP)`; }).join('  '));
// ---- 2) 実ページ
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css' };
const srv = http.createServer((q, r) => { const f = path.join(ROOT, path.normalize(q.url.split('?')[0])); if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; } r.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r); }).listen(0, '127.0.0.1');
await new Promise((r) => srv.once('listening', r));
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
const pg = await ctx.newPage();
await pg.goto(`http://127.0.0.1:${srv.address().port}/scroll.html?city=sapporo&three=local&freeze=1&debug=1`);
await pg.waitForFunction(() => window.__ready || window.__bootError, null, { timeout: 240000 });
const info = () => pg.evaluate(() => { const s = window.__scroll, st = s.state(); const rt = s.renderer.composer.renderTarget1; return { tier: s.tier(), canvas: `${st.width}×${st.height}`, MP: +(st.width * st.height / 1e6).toFixed(3), dpr: st.dpr, scale: +st.scale.toFixed(4), msaa: s.renderer.samples, rtSamples: rt.samples, dof: s.renderer.dofOn, snow: s.city.snowCount, snowMode: st.snowMode, coarse: matchMedia('(pointer: coarse)').matches }; });
console.log('# iPhone 想定（390×844, DPR3, モバイルエミュレーション）');
console.log('初期:', JSON.stringify(await info()));
for (const id of ['T0', 'T1', 'T2', 'T3']) {
  await pg.evaluate((i) => window.__scroll.setTier(i, 'test'), id);
  console.log(id + ':', JSON.stringify(await info()));
  if (id === 'T1' || id === 'T2') {
    for (const p of [0.5]) { await pg.evaluate((pp) => window.__scroll.renderAtProgress(pp), p); await pg.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))); await pg.screenshot({ path: path.join(out, `${id}_p${Math.round(p * 1000)}.png`) }); }
    console.log('  panel:', (await pg.evaluate(() => document.getElementById('dbg').textContent)).split('\n').slice(1, 3).join(' | '));
  }
}
await b.close(); srv.close();
