// cities/osaka/panels.js — 店舗の光の帯と、道頓堀のネオンの色面（東京 shops.js の作法を拡張）。
//   実在のロゴ・店名・商標は使わない（D-4）：看板は抽象的な発光色面として置く。
import * as THREE from 'three';
import { makeRng } from '../../../lib/rng.js';
import { STREETS } from './layout.js';

const NEON = [
  [1.43, 0.20, 0.25], [0.20, 0.95, 1.35], [1.35, 0.54, 1.17], [1.44, 0.95, 0.29],
  [1.13, 1.22, 1.35], [0.27, 1.35, 0.50], [1.40, 0.45, 0.18], [0.72, 0.45, 1.40],
];

export function buildPanels() {
  const rng = makeRng(4242);
  const items = []; // { w, h, x, y, z, ry, color }
  // 店舗の光の帯：御堂筋の両側（建物の壁面 x=±23.5）と、心斎橋〜難波の横断通り
  const shopRow = (dir, fixed, a0, a1, facing) => {
    for (let a = a0; a < a1; a += 7 + rng() * 9) {
      if (rng() < 0.22) continue;
      // 横断通りの列は、交差する通り（御堂筋・南北の街路）の車道上に浮かせない
      if (dir === 'x' && (Math.abs(a) < 32 || [-350, -160, 270, 470].some((c) => Math.abs(a - c) < 17))) continue;
      const w = 4.5 + rng() * 5, h = 2.2 + rng() * 1.6, y = 2.6 + rng() * 1.2;
      const warm = rng() < 0.6;
      const c = warm ? [1.7, 1.3, 0.78] : [1.3, 1.5, 1.85];
      const k = 0.6 + rng() * 0.35;
      if (dir === 'z') items.push({ w, h, x: fixed, y, z: a, ry: facing > 0 ? Math.PI / 2 : -Math.PI / 2, color: [c[0] * k, c[1] * k, c[2] * k] });
      else items.push({ w, h, x: a, y, z: fixed, ry: facing > 0 ? 0 : Math.PI, color: [c[0] * k, c[1] * k, c[2] * k] });
    }
  };
  shopRow('z', -23.5, -60, 2480, +1);
  shopRow('z', 23.5, -60, 2480, -1);
  for (const s of STREETS) {
    if (s.dir !== 'x' || s.c < 1300 || s.c > 2350) continue;
    shopRow('x', s.c - s.w / 2 - 1.5, -440, 500, +1);
    shopRow('x', s.c + s.w / 2 + 1.5, -440, 500, -1);
  }
  // 道頓堀のネオンの色面：運河に面した建物の壁に大きな色面（両岸）。御堂筋の橋の前後は空ける
  const neonRow = (zFace, ry) => {
    for (let x = -630; x < 830; x += 13 + rng() * 10) {
      if (Math.abs(x) < 34 || rng() < 0.15) continue;
      const w = 6 + rng() * 7, h = 3 + rng() * 4.5, y = 6 + rng() * 7;
      const c = NEON[Math.floor(rng() * NEON.length)];
      const k = 0.6 + rng() * 0.4;
      items.push({ w, h, x: x + (rng() - 0.5) * 3, y, z: zFace, ry, color: [c[0] * k, c[1] * k, c[2] * k] });
    }
  };
  neonRow(2129.4, 0);            // 北岸の建物の南面（運河に面する）
  neonRow(2165.6, Math.PI);      // 南岸の建物の北面
  // 新世界の小さな色面（通天閣の足元）
  for (let x = 330; x < 540; x += 11 + rng() * 8) {
    if (rng() < 0.25) continue;
    const c = NEON[Math.floor(rng() * NEON.length)];
    items.push({ w: 5 + rng() * 4, h: 2.5 + rng() * 2, x, y: 4 + rng() * 3, z: 2752.4, ry: 0, color: c });
    items.push({ w: 5 + rng() * 4, h: 2.5 + rng() * 2, x, y: 4 + rng() * 3, z: 2767.6, ry: Math.PI, color: NEON[Math.floor(rng() * NEON.length)] });
  }

  const geo = new THREE.PlaneGeometry(1, 1);
  const mat = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
  const mesh = new THREE.InstancedMesh(geo, mat, items.length);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), sc = new THREE.Vector3();
  items.forEach((it, i) => {
    e.set(0, it.ry, 0); q.setFromEuler(e); v.set(it.x, it.y, it.z); sc.set(it.w, it.h, 1);
    m4.compose(v, q, sc);
    mesh.setMatrixAt(i, m4);
    mesh.setColorAt(i, new THREE.Color(it.color[0], it.color[1], it.color[2]));
  });
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  mesh.frustumCulled = false;
  mesh.name = 'panels';
  return { meshes: [mesh], mat, count: items.length };
}
