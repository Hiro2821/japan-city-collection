// cities/sapporo/mountains.js — 札幌の山並みの作り込み（Phase 2-3 Step C）。札幌モジュール専用。動画版の createMountains / sapporoHeight は変更せず、
//   (1) 高さ関数を包んで中景の丘陵（円山方面）と山麓の起伏を足し、
//   (2) 生成後の頂点カラーを、尾根（凸）に雪・谷（凹）に暗い森を寄せる形で塗り直して稜線の階調を強める。
import * as THREE from 'three';
import { createMountains, sapporoHeight } from '../../../lib/terrain.js';

const hash = (x, y, s = 0) => { const v = Math.sin(x * 127.1 + y * 311.7 + s * 74.7) * 43758.5453; return v - Math.floor(v); };
const vnoise = (x, y, s = 0) => {
  const ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy, ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
  const a = hash(ix, iy, s), b = hash(ix + 1, iy, s), c = hash(ix, iy + 1, s), d = hash(ix + 1, iy + 1, s);
  return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
};
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const polar = (r, th) => [Math.cos(th) * r, Math.sin(th) * r];
// 中景の丘陵：円山方面（低く丸い）と、藻岩山の前山（尾根状）。位置は動画版の山塊定義の手前（半径 3〜7 km）に置く。
const HILLS = [[...polar(3300, 2.95), 105, 760], [...polar(4600, 2.55), 150, 1000], [...polar(5600, 2.2), 190, 1200], [...polar(3900, 3.45), 90, 800]];

export function buildSapporoMountains({ rings = 160, segs = 400, y = -4 } = {}) {
  const base = sapporoHeight();
  const heightFn = (x, z) => {
    let h = base(x, z), add = 0;
    for (const [hx, hz, ht, rad] of HILLS) add = Math.max(add, ht * (0.8 + 0.4 * vnoise(x / 380, z / 380, 9)) * Math.exp(-(((x - hx) ** 2 + (z - hz) ** 2) / (rad * rad))));
    const r = Math.hypot(x, z);
    const foot = smooth(2500, 4500, r) * (1 - smooth(9000, 14000, r));                 // 山麓のうねり
    add += foot * (40 * vnoise(x / 1400, z / 1400, 3) + 18 * vnoise(x / 520, z / 520, 5));
    return h + add;
  };
  const mesh = createMountains(THREE, { heightFn, y, rings, segs });
  recolor(mesh, rings, segs);
  return mesh;
}

/** 頂点カラーを塗り直す：近傍との高さ差（曲率）で、尾根は雪が載って明るく、谷は暗く青い影に。標高が高いほど効きを強める。 */
function recolor(mesh, rings, segs) {
  const g = mesh.geometry, p = g.attributes.position.array, c = g.attributes.color.array, W = segs + 1;
  const hAt = (i, j) => p[(Math.max(0, Math.min(rings, i)) * W + Math.max(0, Math.min(segs, j))) * 3 + 1];
  for (let i = 0; i <= rings; i++) for (let j = 0; j <= segs; j++) {
    const k = i * W + j, h = p[k * 3 + 1];
    if (h < 25) continue;
    {   // 低い丘陵は雪を載せた針広混交林（暗い一色にならないよう、明るい雪まじりへ寄せる）
      const m = 0.45 * smooth(20, 90, h) * (1 - smooth(220, 380, h)) * (0.7 + 0.6 * vnoise(p[k * 3] / 260, p[k * 3 + 2] / 260, 15));
      c[k * 3] += (0.66 - c[k * 3]) * m; c[k * 3 + 1] += (0.69 - c[k * 3 + 1]) * m; c[k * 3 + 2] += (0.77 - c[k * 3 + 2]) * m;
    }
    const curv = h - 0.25 * (hAt(i - 2, j) + hAt(i + 2, j) + hAt(i, j - 2) + hAt(i, j + 2));   // >0 尾根、<0 谷
    const ridge = smooth(-10, 120, curv) , gully = smooth(10, 120, -curv);
    const hi = smooth(80, 600, h);
    const lift = 1 + 0.16 * ridge * hi - 0.22 * gully * hi;
    c[k * 3] *= lift * (1 - 0.05 * gully * hi); c[k * 3 + 1] *= lift; c[k * 3 + 2] *= lift * (1 + 0.04 * gully * hi);
  }
  g.attributes.color.needsUpdate = true;
}
