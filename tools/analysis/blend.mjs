import { ScrollRig, GLOBAL0, projectNdc, TOWER } from '/home/claude/japan-city-collection/src/scroll/rig.js';
import { tOfP, portraitWeight } from '/home/claude/japan-city-collection/src/scroll/math.js';
import { minClear } from './ana.mjs';
const rig = new ScrollRig(); const rows = [];
for (const asp of [0.46, 0.80, 0.88, 0.92, 0.96, 1.0, 1.04, 1.08, 1.12, 1.30, 1.78]) {
  const w = portraitWeight(asp); let m = 1e9, at = 0, mt = 9, mp = 0;
  for (let i = 0; i <= 200; i++) { const p = i / 200; const c = rig.sample(GLOBAL0 + tOfP(p), w); const d = minClear(c.position); if (d < m) { m = d; at = p; }
    const tip = projectNdc(c, [TOWER.x, TOWER.glowY, TOWER.z], asp); if (p>=0.44&&p<=0.56 && tip.y > mt || mt===9) { mt = tip.y; mp = p; } }
  rows.push(`aspect ${asp.toFixed(2)}  w(portrait)=${w.toFixed(3)}  min camera-building dist=${m.toFixed(1)} m @p=${at.toFixed(3)}`);
}
console.log(rows.join('\n'));
