// cities/kyoto/lanterns.js — 提灯（紙の灯り）・石灯籠・街灯の配置と、光点。提灯は小さな筒のインスタンス（発光）、光点は createGlowPoints（霞は scene の _hazePoints が担う）。
import * as THREE from 'three';
import { H } from './layout.js';

export function lanternGeometry() {                                    // 提灯：6 角の筒＋上下の蓋（約 24 三角形）。+y が上
  const g = new THREE.CylinderGeometry(0.33, 0.33, 0.62, 6, 1, false); g.scale(1, 1, 1); return g;
}
export function lanternMaterial() {
  const m = new THREE.MeshStandardMaterial({ color: 0x331008, roughness: 0.8, metalness: 0, emissive: new THREE.Color(1.0, 0.42, 0.12), emissiveIntensity: 1.0 });
  m.customProgramCacheKey = () => 'kyoto-lantern-v1';
  return m;
}
export function stoneLanternGeometry() {                              // 石灯籠：台座・火袋・笠（積み重ね）
  const parts = [];
  const add = (r0, r1, h, y, sides) => { const g = new THREE.CylinderGeometry(r1, r0, h, sides, 1, false).toNonIndexed(); g.translate(0, y + h / 2, 0); parts.push(g); };
  add(0.28, 0.28, 0.2, 0, 6); add(0.12, 0.12, 0.55, 0.2, 6); add(0.34, 0.3, 0.12, 0.75, 6); add(0.26, 0.26, 0.34, 0.87, 4); add(0.55, 0.12, 0.26, 1.21, 6);
  for (const g of parts) g.deleteAttribute('uv');
  const n = parts.reduce((a, g) => a + g.attributes.position.count, 0);
  const P = new Float32Array(n * 3), N = new Float32Array(n * 3); let o = 0;
  for (const g of parts) { P.set(g.attributes.position.array, o * 3); N.set(g.attributes.normal.array, o * 3); o += g.attributes.position.count; }
  const out = new THREE.BufferGeometry(); out.setAttribute('position', new THREE.BufferAttribute(P, 3)); out.setAttribute('normal', new THREE.BufferAttribute(N, 3)); return out;
}

/** 点列（[x,z,y,scale]）から InstancedMesh を作る。 */
export function instancedAt(geo, mat, list, name) {
  const m = new THREE.InstancedMesh(geo, mat, list.length);
  const M = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  list.forEach((l, i) => { q.setFromAxisAngle(up, l[4] ?? 0); s.set(l[3], l[3] * (l[5] ?? 1), l[3]); p.set(l[0], l[2], l[1]); M.compose(p, q, s); m.setMatrixAt(i, M); });
  m.instanceMatrix.needsUpdate = true; m.castShadow = false; m.receiveShadow = false; m.frustumCulled = false; m.name = name; return m;
}

/** 通り沿いに提灯を吊る。pts=折れ線、offset=通りの中心からの横距離、spacing=間隔、高さ y（地面からの高さ）。 */
export function hangLanterns(out, rng, pts, offset, spacing, y = 3.3, sides = [-1, 1], jitter = 0.4) {
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, az] = pts[i], [bx, bz] = pts[i + 1], L = Math.hypot(bx - ax, bz - az), tx = (bx - ax) / L, tz = (bz - az) / L, nx = -tz, nz = tx;
    for (const sd of sides) for (let s = rng() * spacing; s < L; s += spacing * (0.8 + 0.4 * rng())) {
      const x = ax + tx * s + nx * sd * (offset + (rng() - 0.5) * jitter), z = az + tz * s + nz * sd * (offset + (rng() - 0.5) * jitter);
      out.push([x, z, H(x, z) + y + (rng() - 0.5) * 0.4, 0.8 + rng() * 0.5, rng() * 6.28]);
    }
  }
}
