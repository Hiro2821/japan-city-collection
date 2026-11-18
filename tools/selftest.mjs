// selftest.mjs — Three.js 非依存モジュールの単体検証
import assert from 'node:assert/strict';
import { Timeline, Track, titleState, fadeBlack, ease } from '../src/timeline.js';
import { CameraRig } from '../src/camera.js';
import fs from 'node:fs';

const near = (a, b, e = 1e-9) => assert.ok(Math.abs(a - b) < e, `${a} !≈ ${b}`);

// Timeline: 30fps × 15s = 450 フレーム、累積誤差なし
const tl = new Timeline({ fps: 30, duration: 15 });
assert.equal(tl.frameCount, 450);
near(tl.timeAtFrame(449), 449 / 30);
near(tl.progressAtFrame(0), 0);
near(tl.progressAtFrame(449), 1);

// Track: 端点とイージング
const tr = new Track([{ t: 0, v: 1 }, { t: 10, v: 3 }]);
near(tr.sample(-5), 1); near(tr.sample(10), 3); near(tr.sample(5), 2);

// タイトル：出現前は不可視、終端で0へ
assert.equal(titleState(5, 15).visible, false);
assert.ok(titleState(13.5, 15).opacity > 0.9);
near(titleState(15, 15).opacity, 0);

// 黒フェード：始端・終端が黒
near(fadeBlack(0, 15), 0); near(fadeBlack(15, 15), 0); near(fadeBlack(7, 15), 1);

// CameraRig: キー位置を通過し、決定的で、手ブレが時刻のみに依存
const keys = [
  { t: 0, pos: [0, 100, 0], target: [0, 0, 0], fov: 40 },
  { t: 5, pos: [50, 60, 20], target: [10, 0, 0], fov: 35 },
  { t: 15, pos: [120, 15, 40], target: [30, 5, 0], fov: 30 },
];
const rig = new CameraRig(keys);
for (const k of keys) {
  const s = rig.sample(k.t);
  k.pos.forEach((v, i) => near(s.position[i], v, 1e-6));
  k.target.forEach((v, i) => near(s.target[i], v, 1e-6));
  near(s.fov, k.fov, 1e-9);
}
assert.deepEqual(rig.sample(7.3), rig.sample(7.3));
const shaky = new CameraRig(keys, { shakeAmp: 0.5, shakeSeed: 3 });
assert.deepEqual(shaky.sample(7.3), shaky.sample(7.3));
assert.notDeepEqual(shaky.sample(7.3).position, rig.sample(7.3).position);
// 区間外は端にクランプ
near(rig.sample(99).position[0], 120, 1e-6);

// cities.json: 必須フィールド・重複なし・並び順
const data = JSON.parse(fs.readFileSync(new URL('../metadata/cities.json', import.meta.url)));
const req = ['id', 'name', 'englishName', 'prefecture', 'region', 'description', 'videoPath', 'thumbnailPath', 'displayOrder'];
assert.equal(data.cities.length, 10);
for (const c of data.cities) for (const f of req) assert.ok(c[f] !== undefined && c[f] !== '', `${c.id}.${f}`);
assert.equal(new Set(data.cities.map((c) => c.id)).size, 10);
assert.deepEqual(data.cities.map((c) => c.displayOrder), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepEqual(data.cities.map((c) => c.englishName),
  ['Sapporo', 'Sendai', 'Tokyo', 'Yokohama', 'Kanazawa', 'Nagoya', 'Kyoto', 'Osaka', 'Hiroshima', 'Fukuoka']);

console.log('selftest OK');
