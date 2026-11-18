import fs from 'node:fs';
import { ScrollRig, projectNdc, TOWER, GLOBAL0 } from '/home/claude/japan-city-collection/src/scroll/rig.js';
import { tOfP } from '/home/claude/japan-city-collection/src/scroll/math.js';
const B = JSON.parse(fs.readFileSync('/tmp/claude-0/-home-claude/a6afc337-f358-58db-a2a4-e98d39b75873/scratchpad/boxes.json')).boxes;
export function boxDist(pt, b) { // 点から回転した直方体（底面中心 x,y,z）までの距離
  const [x, y, z, sx, sy, sz, rot] = b; const dx = pt[0] - x, dz = pt[2] - z, c = Math.cos(rot), s = Math.sin(rot);
  const lx = c * dx - s * dz, lz = s * dx + c * dz, ly = pt[1] - y;
  const ex = Math.max(Math.abs(lx) - sx / 2, 0), ey = Math.max(Math.max(-ly, ly - sy), 0), ez = Math.max(Math.abs(lz) - sz / 2, 0);
  return Math.hypot(ex, ey, ez);
}
export function minClear(pos) { let m = 1e9; for (const b of B) { const d = boxDist(pos, b); if (d < m) m = d; } return m; }
export const camAt = (rig, p, w, adj) => rig.sample(GLOBAL0 + tOfP(p), w);
export function report(rig, label, w, aspect, ps) {
  console.log(`--- ${label} (w=${w}, aspect=${aspect.toFixed(3)})`);
  for (const p of ps) {
    const c = camAt(rig, p, w); const n = projectNdc(c, [TOWER.x, TOWER.glowY, TOWER.z], aspect);
    console.log(`p=${p.toFixed(2)} tipNDC y=${n.y.toFixed(3)} x=${n.x.toFixed(3)} marginTop=${((1 - n.y) / 2 * 100).toFixed(1)}%H  dist=${n.depth.toFixed(0)}m clear=${minClear(c.position).toFixed(1)}m fov=${c.fov.toFixed(1)}`);
  }
}
if (process.argv[1].endsWith('ana.mjs')) {
  const rig = new ScrollRig();
  const ps = [0, 0.1, 0.25, 0.4, 0.45, 0.47, 0.5, 0.53, 0.55, 0.6, 0.75, 0.94, 1];
  report(rig, '横', 0, 16 / 9, ps);
  report(rig, '縦', 1, 390 / 844, ps);
}
