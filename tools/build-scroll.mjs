// build-scroll.mjs — scroll.html 用の単一バンドル dist/scroll.bundle.js を生成する（esbuild）。
//   使い方: npm run build:scroll        ※ src/ を変更したら必ず再実行して dist を再生成すること。
//   Three.js は vendor/three（r187 固定）をそのままバンドルに含める。CDN には依存しない。
import fs from 'node:fs'; import path from 'node:path'; import zlib from 'node:zlib'; import { fileURLToPath, pathToFileURL } from 'node:url'; import { createRequire } from 'node:module';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
async function loadEsbuild() {
  const req = createRequire(path.join(ROOT, 'package.json'));
  for (const p of ['esbuild', '/opt/npm-tools/node_modules/esbuild']) { try { return req(p); } catch {} }
  throw new Error('esbuild が見つかりません。`npm install` を実行してください（devDependencies に esbuild を指定済み）。');
}
const esbuild = await loadEsbuild();
const threeDir = path.join(ROOT, 'vendor/three');
const threePlugin = {
  name: 'three-local',
  setup(b) {
    b.onResolve({ filter: /^three$/ }, () => ({ path: path.join(threeDir, 'build/three.module.js') }));
    b.onResolve({ filter: /^three\/addons\// }, (a) => ({ path: path.join(threeDir, 'examples/jsm', a.path.slice('three/addons/'.length)) }));
  },
};
const out = path.join(ROOT, 'dist/scroll.bundle.js');
fs.mkdirSync(path.dirname(out), { recursive: true });
const t0 = Date.now();
await esbuild.build({ entryPoints: [path.join(ROOT, 'src/scroll/app.js')], bundle: true, format: 'esm', minify: true, target: 'es2020', outfile: out, plugins: [threePlugin], legalComments: 'none', logLevel: 'warning' });
const buf = fs.readFileSync(out);
console.log(`dist/scroll.bundle.js  ${(buf.length / 1048576).toFixed(3)} MB  (gzip ${(zlib.gzipSync(buf, { level: 9 }).length / 1048576).toFixed(3)} MB)  ${Date.now() - t0}ms`);
