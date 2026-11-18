// check-three.mjs — Three.js のバージョン固定の整合性チェック
//   package.json(config.threeVersion) / index.html(THREE_VERSION) / vendor/three(REVISION) が一致しているか確認
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pinned = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8')).config.threeVersion;
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const inHtml = html.match(/THREE_VERSION\s*=\s*'([\d.]+)'/)?.[1];
const core = path.join(ROOT, 'vendor/three/build/three.core.js');
const rev = fs.existsSync(core) ? fs.readFileSync(core, 'utf8').match(/REVISION\s*=\s*'(\d+)'/)?.[1] : null;
const want = `0.${pinned.split('.')[1]}.0`;
console.log({ package_json: pinned, index_html: inHtml, vendor_revision: rev ? `r${rev}` : '(vendor なし)' });
const errs = [];
if (inHtml !== pinned) errs.push('index.html の THREE_VERSION が package.json と不一致');
if (rev && `0.${rev}.0` !== pinned) errs.push('vendor/three の REVISION が固定バージョンと不一致');
if (!rev) errs.push('vendor/three が無いのでローカル切替(?three=local)は使えません');
if (errs.length) { console.log('NG:\n - ' + errs.join('\n - ')); process.exit(1); }
console.log('OK');
