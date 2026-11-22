// cities/tokyo/shops.js — 低層部の店先（ガラス面の発光パネル）とキャノピー（庇）。実在のロゴ・店名は使わない（U-7）：無地の暖白〜シャンパンの発光面のみ。
//   仲通り・行幸通り沿いの建物の足元（高さ 0.6〜5 m）に、6 m 前後の間隔で並べる。1 つの InstancedMesh（発光）＋庇（暗い板）。
import * as THREE from 'three';
import { NAKA_X, NORTH_Z, SOUTH_Z } from './layout.js';

export function buildShops(rng) {
  const panels = [], canopies = [];
  const crossZ = [-385, -270, -155, 0, 115, 230, 345, 460, 575, NORTH_Z, SOUTH_Z];
  const onCross = (z, m = 9) => crossZ.some((c) => Math.abs(z - c) < m + 4);
  // 仲通りの両側（建物の面は x=±10.4 付近）
  for (const side of [-1, 1]) {
    for (let z = NORTH_Z + 22; z < SOUTH_Z - 18; z += 5.2 + rng() * 3.0) {
      if (onCross(z)) continue;
      if (rng() < 0.12) continue;                       // 入口・シャッター（暗いまま）
      const w = 3.6 + rng() * 2.4, h = 2.4 + rng() * 1.6, y = 0.5 + h / 2;
      const warm = rng();
      panels.push({ x: NAKA_X + side * 10.75, y, z, w, h, side, c: [1.0, 0.62 + 0.25 * warm, 0.30 + 0.35 * warm], k: 0.5 + 0.5 * rng() });
      if (rng() < 0.6) canopies.push({ x: NAKA_X + side * 9.6, y: 4.6 + rng() * 0.4, z, w: w + 0.6, side });
    }
  }
  // 行幸通り沿い（北・南の歩道側の建物の足元）
  for (const sz of [-1, 1]) for (let x = -150; x < 28; x += 6 + rng() * 3) {
    if (Math.abs(x) < 14) continue;
    if (rng() < 0.2) continue;
    const w = 3.8 + rng() * 2.0, h = 2.6 + rng() * 1.4;
    panels.push({ x, y: 0.5 + h / 2, z: sz * 37.6, w, h, side: 0, face: -sz, c: [1.0, 0.7, 0.4], k: 0.5 + 0.5 * rng() });
  }
  const n = panels.length;
  const geo = new THREE.PlaneGeometry(1, 1);
  const m = new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, fog: true }), n);
  const M = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3(), c = new THREE.Color(), up = new THREE.Vector3(0, 1, 0);
  panels.forEach((o, i) => {
    // 通り沿い（side≠0）は x 方向を向く＝回転 90°。行幸通り沿い（face）は z 方向
    q.setFromAxisAngle(up, o.side !== 0 ? Math.PI / 2 : 0);
    p.set(o.x, o.y, o.z); s.set(o.side !== 0 ? o.w : o.w, o.h, 1); M.compose(p, q, s); m.setMatrixAt(i, M);
    c.setRGB(o.c[0] * o.k, o.c[1] * o.k, o.c[2] * o.k); m.setColorAt(i, c);
  });
  m.instanceMatrix.needsUpdate = true; m.instanceColor.needsUpdate = true; m.name = 'shop-glass'; m.frustumCulled = false;
  // キャノピー（庇）：暗い薄板
  const cg = new THREE.BoxGeometry(2.2, 0.18, 1);
  const cm = new THREE.InstancedMesh(cg, new THREE.MeshStandardMaterial({ color: 0x1a1c20, roughness: 0.6, metalness: 0.3 }), canopies.length);
  canopies.forEach((o, i) => { q.identity(); p.set(o.x, o.y, o.z); s.set(1, 1, o.w); M.compose(p, q, s); cm.setMatrixAt(i, M); });
  cm.instanceMatrix.needsUpdate = true; cm.name = 'canopies'; cm.frustumCulled = false;
  return { meshes: [m, cm], mat: m.material, count: n, canopyCount: canopies.length };
}
