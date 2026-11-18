// test-browser-export.mjs — ブラウザ内エクスポート（WebCodecs + 自作WebMマクサー）の検証
//   ヘッドレス Chrome 上で exporter.js を実行し、出力された .webm を ffprobe で検査する。
//   使い方: node tools/test-browser-export.mjs [--frames 60] [--scale 0.2]
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('/opt/npm-tools/node_modules/playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const FRAMES = parseInt(arg('--frames', '60'), 10), SCALE = parseFloat(arg('--scale', '0.2'));
const OUT = arg('--out', path.join(ROOT, 'frames', 'browser_export_test.webm'));

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css' };
const srv = http.createServer((req, res) => {
  const p = decodeURIComponent(req.url.split('?')[0]);
  const f = path.join(ROOT, p === '/' ? 'index.html' : p);
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] ?? 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
}).listen(0, '127.0.0.1');
await new Promise((r) => srv.once('listening', r));

const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
try {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  page.on('pageerror', (e) => console.log('[pageerror]', e.message));
  await page.goto(`http://127.0.0.1:${srv.address().port}/index.html?city=sapporo&export=1&scale=${SCALE}&three=local`);
  await page.waitForFunction(() => window.__ready === true, null, { timeout: 120000 });
  const r = await page.evaluate(async (frames) => {
    const { exportWebM } = await import('/src/exporter.js');
    const stage = document.getElementById('stage');
    const t0 = performance.now();
    const res = await exportWebM({
      canvas: stage, fps: 30, frameCount: frames, bitrate: 4_000_000,
      renderFrame: (i) => window.__renderer.renderAt(60 / 30 + i / 30 + 0, i + 100), // 2.0s 以降（黒フェード後）を使う
    });
    const buf = new Uint8Array(await res.blob.arrayBuffer());
    let s = ''; for (let i = 0; i < buf.length; i += 0x8000) s += String.fromCharCode(...buf.subarray(i, i + 0x8000));
    return { b64: btoa(s), codec: res.codec, frames: res.frames, ms: performance.now() - t0, w: stage.width, h: stage.height, hasVE: typeof VideoEncoder };
  }, FRAMES);
  fs.writeFileSync(OUT, Buffer.from(r.b64, 'base64'));
  console.log(JSON.stringify({ codec: r.codec, frames: r.frames, size: `${r.w}x${r.h}`, encodeMs: Math.round(r.ms), bytes: fs.statSync(OUT).size }));
  const p = spawnSync('ffprobe', ['-v', 'error', '-count_frames', '-select_streams', 'v:0', '-show_entries', 'stream=codec_name,width,height,r_frame_rate,nb_read_frames,duration:format=duration,format_name', '-of', 'default=nw=1', OUT], { encoding: 'utf8' });
  console.log(p.stdout || p.stderr);
  const d = spawnSync('ffmpeg', ['-v', 'error', '-i', OUT, '-f', 'null', '-'], { encoding: 'utf8' });
  console.log('ffmpeg decode errors:', d.stderr.trim() || 'none');
} finally { await browser.close(); srv.close(); }
