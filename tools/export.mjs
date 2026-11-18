// export.mjs — 決定的フレーム書き出し → ffmpeg で WebM / MP4 / サムネイル生成
//
// 使い方:
//   node tools/export.mjs --city sapporo
//   node tools/export.mjs --city sapporo --scale 0.25 --preview      (低解像度プレビュー)
//   node tools/export.mjs --city sapporo --still 12                   (指定秒の静止画のみ)
//   node tools/export.mjs --page tools/fixtures/stub.html --city stub (Three.js なしの経路検証)
//
// ページ側の契約:
//   window.__ready === true になったら描画可能
//   window.__meta = { frameCount, fps, width, height }
//   await window.__renderFrame(i) で i 番目のフレームを canvas#stage に描画し終える
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('/opt/npm-tools/node_modules/playwright');

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function parseArgs(argv) {
  const o = { city: null, page: 'index.html', scale: 1, preview: false, still: null, mp4: true, keep: false, port: 0 };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    const next = () => argv[++i];
    if (a === '--city') o.city = next();
    else if (a === '--page') o.page = next();
    else if (a === '--scale') o.scale = parseFloat(next());
    else if (a === '--preview') o.preview = true;
    else if (a === '--still') o.still = parseFloat(next());
    else if (a === '--stills') o.stills = next().split(',').map(Number);
    else if (a === '--no-mp4') o.mp4 = false;
    else if (a === '--keep') o.keep = true;
    else if (a === '--from') o.from = parseInt(next(), 10);
    else if (a === '--to') o.to = parseInt(next(), 10);
  }
  if (!o.city) throw new Error('--city が必要です');
  return o;
}

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.css': 'text/css', '.png': 'image/png', '.webp': 'image/webp', '.glsl': 'text/plain' };

function serve(root) {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      const p = path.normalize(decodeURIComponent(req.url.split('?')[0]));
      const file = path.join(root, p === '/' ? 'index.html' : p);
      if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
        res.writeHead(404); res.end('not found'); return;
      }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] ?? 'application/octet-stream' });
      fs.createReadStream(file).pipe(res);
    });
    srv.listen(0, '127.0.0.1', () => resolve(srv));
  });
}

function run(cmd, args) {
  const r = spawnSync(cmd, args, { stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8' });
  if (r.status !== 0) throw new Error(`${cmd} failed:\n${r.stderr.slice(-1500)}`);
  return r;
}

const opt = parseArgs(process.argv);
const srv = await serve(ROOT);
const base = `http://127.0.0.1:${srv.address().port}`;

const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});

try {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  page.on('console', (m) => { if (['error', 'warning'].includes(m.type())) console.log(`[page ${m.type()}]`, m.text()); });
  page.on('pageerror', (e) => console.log('[pageerror]', e.message));

  const url = `${base}/${opt.page}?city=${encodeURIComponent(opt.city)}&export=1&scale=${opt.scale}&three=local`;
  await page.goto(url);
  await page.waitForFunction(() => window.__ready === true, null, { timeout: 120000 });
  const meta = await page.evaluate(() => window.__meta);
  console.log('meta', meta);

  const framesDir = path.join(ROOT, 'frames', opt.city + (opt.preview ? '_preview' : ''));
  fs.rmSync(framesDir, { recursive: true, force: true });
  fs.mkdirSync(framesDir, { recursive: true });

  const canvas = page.locator('canvas#stage');

  if (opt.stills) {
    for (const sec of opt.stills) {
      const i = Math.min(meta.frameCount - 1, Math.round(sec * meta.fps));
      await page.evaluate((n) => window.__renderFrame(n), i);
      const out = path.join(ROOT, 'frames', `${opt.city}_still_${String(i).padStart(5, '0')}.png`);
      await canvas.screenshot({ path: out, type: 'png' });
      console.log('still ->', out);
    }
  } else if (opt.still !== null) {
    const i = Math.min(meta.frameCount - 1, Math.round(opt.still * meta.fps));
    await page.evaluate((n) => window.__renderFrame(n), i);
    const out = path.join(ROOT, 'frames', `${opt.city}_still_${String(i).padStart(5, '0')}.png`);
    await canvas.screenshot({ path: out, type: 'png' });
    console.log('still ->', out);
  } else {
    const from = opt.from ?? 0;
    const to = Math.min(meta.frameCount - 1, opt.to ?? meta.frameCount - 1);
    const t0 = Date.now();
    for (let i = from; i <= to; i++) {
      await page.evaluate((n) => window.__renderFrame(n), i);
      await canvas.screenshot({ path: path.join(framesDir, `${String(i - from).padStart(5, '0')}.png`), type: 'png' });
      if (i % 15 === 0) {
        const el = (Date.now() - t0) / 1000;
        const done = i - from + 1, total = to - from + 1;
        console.log(`frame ${done}/${total}  ${el.toFixed(0)}s  ETA ${((el / done) * (total - done)).toFixed(0)}s`);
      }
    }

    const count = fs.readdirSync(framesDir).filter((f) => f.endsWith('.png')).length;
    const vdir = path.join(ROOT, 'videos');
    fs.mkdirSync(vdir, { recursive: true });
    const stem = path.join(vdir, opt.city + (opt.preview ? '_preview' : ''));
    const inArgs = ['-y', '-hide_banner', '-loglevel', 'error', '-framerate', String(meta.fps), '-i', path.join(framesDir, '%05d.png')];

    // WebM (VP9, 高品質 CRF)
    run('ffmpeg', [...inArgs, '-c:v', 'libvpx-vp9', '-crf', opt.preview ? '34' : '16', '-b:v', '0', '-pix_fmt', 'yuv420p',
      '-row-mt', '1', '-deadline', opt.preview ? 'realtime' : 'good', '-cpu-used', opt.preview ? '8' : '2', '-an', `${stem}.webm`]);
    console.log('webm ->', `${stem}.webm`, `(${count} frames)`);

    if (opt.mp4) {
      run('ffmpeg', [...inArgs, '-c:v', 'libx264', '-preset', 'veryfast', '-crf', opt.preview ? '28' : '16',
        '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', `${stem}.mp4`]);
      console.log('mp4  ->', `${stem}.mp4`);
    }

    if (!opt.preview) {
      const tdir = path.join(ROOT, 'thumbnails');
      fs.mkdirSync(tdir, { recursive: true });
      const mid = String(Math.floor(count * 0.62)).padStart(5, '0');
      run('ffmpeg', ['-y', '-hide_banner', '-loglevel', 'error', '-i', path.join(framesDir, `${mid}.png`),
        '-vf', 'scale=960:-2', '-c:v', 'libwebp', '-quality', '86', path.join(tdir, `${opt.city}.webp`)]);
      console.log('thumb ->', path.join(tdir, `${opt.city}.webp`));
    }
    if (!opt.keep) fs.rmSync(framesDir, { recursive: true, force: true });
  }
} finally {
  await browser.close();
  srv.close();
}
