// cities/tokyo/lamps.js — 街灯（柱＋光点）。行幸通りは中央帯の縁に鋳鉄風の灯（暖白）、仲通りは低い灯、ほかは外側の歩道。
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { STREETS } from './layout.js';

export function lampList() {
  const L = [];
  const put = (s, side, off, step, ph, h) => {
    for (let t = s.a + ph; t < s.b; t += step) {
      const bx = s.dir === 'x' ? t : s.c + side * off, bz = s.dir === 'x' ? s.c + side * off : t;
      L.push({ x: bx, z: bz, h });
    }
  };
  for (const s of STREETS) {
    if (s.id === 'gyoko') { for (const sd of [-1, 1]) { put(s, sd, 15.2, 24, 8, 8.5); put(s, sd, s.w / 2 - 1.0, 36, 12, 9); } }
    else if (s.id === 'naka') { for (const sd of [-1, 1]) put(s, sd, 9.6, 30, 10, 6.0); }
    else { const o = s.w / 2 - 1.2; for (const sd of [-1, 1]) put(s, sd, o, 36, sd > 0 ? 18 : 0, 9); }
  }
  for (let x = 40; x < 340; x += 22) for (const z of [-58, -29, 29, 58]) L.push({ x, z, h: 9 });              // 駅前広場の灯り
  return L;
}

export function buildLampPoles(lamps) {
  const g = mergeGeometries([new THREE.CylinderGeometry(0.07, 0.13, 1, 6, 1).translate(0, 0.5, 0)]);
  const n = g.attributes.position.count, c = new Float32Array(n * 3); for (let i = 0; i < n; i++) c.set([0.14, 0.15, 0.16], i * 3);
  g.setAttribute('color', new THREE.BufferAttribute(c, 3)); g.deleteAttribute('uv');
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, metalness: 0.4 });
  mat.customProgramCacheKey = () => 'tokyo-pole-v1';
  const m = new THREE.InstancedMesh(g, mat, lamps.length), M = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3();
  lamps.forEach((o, i) => { p.set(o.x, 0, o.z); s.set(1, o.h, 1); M.compose(p, q, s); m.setMatrixAt(i, M); });
  m.instanceMatrix.needsUpdate = true; m.castShadow = false; m.frustumCulled = false; m.name = 'lamp-poles';
  return m;
}
