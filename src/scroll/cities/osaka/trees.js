// cities/osaka/trees.js — 大阪の街路樹（冬の裸木。東京 trees.js と同じ考え方：近景／遠景 LOD を 160 m チャンクで切り替える）。
//   御堂筋＝イチョウ、中之島・川沿い＝丸い樹冠。枝先の位置を LED（leds.js）へ渡す。
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { makeRng } from '../../../lib/rng.js';
import { STREETS, PARK, PLAZAS, HALL } from './layout.js';

function cyl(r0, r1, h, x, y, z, tilt, ang) {
  const g = new THREE.CylinderGeometry(r1, r0, h, 5);
  g.translate(0, h / 2, 0);
  if (tilt) { const a = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(Math.cos(ang), 0, Math.sin(ang)), tilt); g.applyMatrix4(a); }
  g.translate(x, y, z);
  return g;
}
function cone(r, h, x, y, z) { const g = new THREE.ConeGeometry(r, h, 7); g.translate(x, y + h / 2, z); return g; }

function nearGeo(type) {
  const parts = [cyl(0.14, 0.09, 3.6, 0, 0, 0, 0, 0)];
  const n = type === 'ginkgo' ? 4 : 5;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + 0.6;
    parts.push(cyl(0.05, 0.015, type === 'ginkgo' ? 2.6 : 2.2, 0, 3.2, 0, type === 'ginkgo' ? 0.5 : 0.85, a));
  }
  return mergeGeometries(parts);
}
function farGeo(type) {
  if (type === 'ginkgo') return mergeGeometries([cyl(0.13, 0.1, 3.4, 0, 0, 0, 0, 0), cone(1.7, 3.6, 0, 3.2, 0), cone(1.05, 2.6, 0, 5.6, 0)]);
  return mergeGeometries([cyl(0.13, 0.1, 3.0, 0, 0, 0, 0, 0), cone(2.3, 3.2, 0, 2.8, 0), cone(1.5, 2.4, 0, 5.0, 0)]);
}
export const TIP = { ginkgo: [[0, 6.6, 0], [0.8, 5.6, 0.3], [-0.7, 5.9, -0.4], [0.2, 7.3, -0.6], [-0.3, 6.9, 0.7]], round: [[0, 6.4, 0], [1.1, 5.2, 0.4], [-1.0, 5.5, -0.5], [0.4, 6.8, -0.8], [-0.5, 6.6, 0.9]] };

/** 木のレコード：{ x, z, type, s, rot, lit, u（LED の波用の沿道座標）, zoneZ（色分け用の z） } */
export function treeRecords() {
  const rng = makeRng(20261123);
  const T = [];
  const ew = STREETS.filter((s) => s.dir === 'x');
  const nearCrossing = (z, pad = 2) => ew.some((s) => Math.abs(z - s.c) < s.w / 2 + pad);
  // 御堂筋のイチョウ（両側 x=±15、z −100〜2480）
  for (let z = -100; z <= 2480; z += 11) {
    if (nearCrossing(z)) continue;
    for (const sx of [-15, 15]) T.push({ x: sx + (rng() - 0.5) * 1.2, z: z + (rng() - 0.5) * 2, type: 'ginkgo', s: 0.95 + rng() * 0.25, rot: rng() * 6.28, lit: true, u: z, zoneZ: z });
  }
  // 中之島の川沿い（島の両岸 z=380 / 530、丸い樹冠）
  for (let x = -660; x <= 860; x += 13) {
    if (Math.abs(x) < 30) continue;
    for (const zz of [380, 530]) T.push({ x: x + (rng() - 0.5) * 2, z: zz + (rng() - 0.5) * 2.5, type: 'round', s: 1.0 + rng() * 0.35, rot: rng() * 6.28, lit: true, u: x, zoneZ: 455 });
  }
  // 中之島の緑地に散らす
  for (let i = 0; i < 110; i++) {
    const x = PARK.x0 + 20 + rng() * (PARK.x1 - PARK.x0 - 40);
    const z = PARK.z0 + 14 + rng() * (PARK.z1 - PARK.z0 - 28);
    if (Math.abs(x) < 32 || (Math.abs(x - HALL.x) < 44 && Math.abs(z - HALL.z) < 30)) continue;
    if (Math.abs(z - 380) < 9 || Math.abs(z - 530) < 9) continue;
    T.push({ x, z, type: 'round', s: 0.9 + rng() * 0.5, rot: rng() * 6.28, lit: rng() < 0.35, u: x, zoneZ: 455 });
  }
  // 駅前広場の南縁
  const plaza = PLAZAS[0];
  for (let x = plaza.x0 + 8; x <= plaza.x1 - 6; x += 12) T.push({ x: x + (rng() - 0.5) * 1.5, z: -32 + (rng() - 0.5) * 2, type: 'ginkgo', s: 0.95 + rng() * 0.2, rot: rng() * 6.28, lit: true, u: x, zoneZ: -30 });
  // 一般街路（kind 0）の疎な並木（無灯）
  for (const s of STREETS) {
    if (s.kind !== 0) continue;
    for (let a = s.a + 16; a < s.b - 10; a += 30) {
      for (const sideSign of [-1, 1]) {
        if (rng() < 0.3) continue;
        const off = sideSign * (s.w / 2 + 1.6);
        const x = s.dir === 'x' ? a + (rng() - 0.5) * 3 : s.c + off;
        const z = s.dir === 'x' ? s.c + off : a + (rng() - 0.5) * 3;
        if (s.dir === 'z' && Math.abs(x) < 30) continue;
        T.push({ x, z, type: 'round', s: 0.6 + rng() * 0.2, rot: rng() * 6.28, lit: false, u: a, zoneZ: z });
      }
    }
  }
  return T;
}

const CHUNK = 240, LOD_D = 210;
export function buildTrees(records) {
  const matNear = new THREE.MeshStandardMaterial({ color: 0x171310, roughness: 1 });
  const matFar = new THREE.MeshStandardMaterial({ color: 0x0d120c, roughness: 1 });
  matNear.customProgramCacheKey = () => 'osaka-bark-near'; matFar.customProgramCacheKey = () => 'osaka-bark-far';
  const geos = { ginkgo: { near: nearGeo('ginkgo'), far: farGeo('ginkgo') }, round: { near: nearGeo('round'), far: farGeo('round') } };
  const groups = new Map();
  records.forEach((t, i) => {
    const key = `${t.type}|${Math.floor(t.x / CHUNK)}|${Math.floor(t.z / CHUNK)}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(i);
  });
  const chunks = [], meshes = [];
  const M = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), sc = new THREE.Vector3();
  for (const [key, idxs] of groups) {
    const type = key.split('|')[0];
    let cx = 0, cz = 0; idxs.forEach((i) => { cx += records[i].x; cz += records[i].z; }); cx /= idxs.length; cz /= idxs.length;
    const mk = (which, mat) => {
      const m = new THREE.InstancedMesh(geos[type][which], mat, idxs.length);
      idxs.forEach((i, k) => { const t = records[i]; e.set(0, t.rot, 0); q.setFromEuler(e); v.set(t.x, 0, t.z); sc.setScalar(t.s); M.compose(v, q, sc); m.setMatrixAt(k, M); });
      m.instanceMatrix.needsUpdate = true; m.castShadow = false; m.receiveShadow = false; m.frustumCulled = false; m.name = `tree-${type}-${which}`;
      meshes.push(m);
      return m;
    };
    chunks.push({ near: mk('near', matNear), far: mk('far', matFar), cx, cz });
  }
  const group = new THREE.Group(); meshes.forEach((m) => group.add(m));
  return {
    group, meshes, chunks, count: records.length,
    updateLod(cam) { for (const c of chunks) { const near = Math.hypot(c.cx - cam.x, c.cz - cam.z) < LOD_D; c.near.visible = near; c.far.visible = !near; } },
  };
}

/** LED を付ける枝先（world）。 */
export function ledTips(records) {
  const out = [];
  for (const t of records) {
    if (!t.lit) continue;
    for (const [lx, ly, lz] of TIP[t.type]) {
      const cs = Math.cos(t.rot), sn = Math.sin(t.rot);
      out.push({ x: t.x + (lx * cs - lz * sn) * t.s, y: ly * t.s, z: t.z + (lx * sn + lz * cs) * t.s, u: t.u, zoneZ: t.zoneZ, s: t.s });
    }
  }
  return out;
}
