// cities/osaka/lamps.js — 街灯（柱＋光点。東京 lamps.js と同じ作法）。御堂筋は両側に等間隔、道頓堀の両岸は低い灯り。
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { STREETS, PLAZAS } from './layout.js';

export function lampList() {
  const L = [];
  const put = (s, side, off, step, ph, h) => {
    for (let t = s.a + ph; t < s.b; t += step) {
      const bx = s.dir === 'x' ? t : s.c + side * off, bz = s.dir === 'x' ? s.c + side * off : t;
      L.push({ x: bx, z: bz, h });
    }
  };
  for (const s of STREETS) {
    const step = s.kind === 1 ? 30 : s.kind === 2 ? 34 : 38;
    const h = s.kind === 1 ? 10 : 9;
    const o = s.w / 2 - 1.1;
    for (const sd of [-1, 1]) put(s, sd, o, step, sd > 0 ? step / 2 : 0, h);
  }
  const pl = PLAZAS[0];
  for (let x = pl.x0 + 16; x < pl.x1 - 8; x += 34) for (let z = pl.z0 + 14; z < pl.z1 - 6; z += 30) L.push({ x, z, h: 8 });
  for (let x = -620; x <= 820; x += 17) { L.push({ x, z: 2123.5, h: 5 }); L.push({ x, z: 2171.5, h: 5 }); }
  return L;
}

export function buildLampPoles(lamps) {
  const g = mergeGeometries([new THREE.CylinderGeometry(0.07, 0.13, 1, 6, 1).translate(0, 0.5, 0)]);
  const n = g.attributes.position.count, c = new Float32Array(n * 3); for (let i = 0; i < n; i++) c.set([0.14, 0.15, 0.16], i * 3);
  g.setAttribute('color', new THREE.BufferAttribute(c, 3)); g.deleteAttribute('uv');
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, metalness: 0.4 });
  mat.customProgramCacheKey = () => 'osaka-pole-v1';
  const m = new THREE.InstancedMesh(g, mat, lamps.length), M = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3();
  lamps.forEach((o, i) => { p.set(o.x, 0, o.z); s.set(1, o.h, 1); M.compose(p, q, s); m.setMatrixAt(i, M); });
  m.instanceMatrix.needsUpdate = true; m.castShadow = false; m.frustumCulled = false; m.name = 'lamp-poles';
  return m;
}
