// cities/sendai/street.js — 街路の要素（街灯・信号）と駅前のペデストリアンデッキ。
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { STREETS, PLAZAS } from './layout.js';

const col = (g, c) => { const n = g.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) a.set(c, i * 3); g.setAttribute('color', new THREE.BufferAttribute(a, 3)); g.deleteAttribute('uv'); return g; };

/** 街灯の位置。{ base:[x,z], top:[x,y,z], yaw } 。灯具は通りの中心側へ 1.5 m 張り出す。 */
export function lampList() {
  const L = [];
  for (const s of STREETS) {
    if (s.kind === 3) continue;
    const half = s.w / 2 - 1.2, n = Math.floor((s.b - s.a) / 36);
    for (let i = 0; i <= n; i++) for (const side of [-1, 1]) {
      const t = s.a + i * 36 + (side > 0 ? 18 : 0);
      if (t > s.b) continue;
      const bx = s.dir === 'x' ? t : s.c + side * half, bz = s.dir === 'x' ? s.c + side * half : t;
      const ax = s.dir === 'x' ? 0 : -side, az = s.dir === 'x' ? -side : 0;           // 中心へ向かう向き
      L.push({ base: [bx, bz], top: [bx + ax * 1.5, 9, bz + az * 1.5], yaw: Math.atan2(-az, ax) });
    }
  }
  return L;
}

/** 信号機（青葉通・定禅寺通と一般街路の交差の四隅）。 */
export function signalList() {
  const S = [];
  for (const a of STREETS.filter((s) => s.kind === 1 || s.kind === 2)) {
    for (const m of STREETS.filter((s) => s.kind === 0 && s.dir === 'z' && s.a <= a.c && s.b >= a.c && a.a < s.c && a.b > s.c)) {
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) S.push({ x: m.c + sx * (m.w / 2 + 1.2), z: a.c + sz * (a.w / 2 - 1.5), green: (sx * sz > 0) });
    }
  }
  return S;
}

export function buildPoles(lamps, signals) {
  const pole = (h) => col(new THREE.CylinderGeometry(0.07, 0.13, h, 6, 1).translate(0, h / 2, 0), [0.16, 0.17, 0.18]);
  const lamp = mergeGeometries([pole(9), col(new THREE.BoxGeometry(1.6, 0.1, 0.1).translate(0.75, 8.95, 0), [0.16, 0.17, 0.18]), col(new THREE.BoxGeometry(0.6, 0.14, 0.3).translate(1.5, 8.9, 0), [0.4, 0.4, 0.36])]);
  const sig = mergeGeometries([pole(6.5), col(new THREE.BoxGeometry(0.3, 0.9, 0.3).translate(0, 6.2, 0), [0.1, 0.1, 0.11])]);
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, metalness: 0.4 });
  mat.customProgramCacheKey = () => 'sendai-pole-v1';
  const mk = (geo, list) => {
    const m = new THREE.InstancedMesh(geo, mat, list.length), M = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3(1, 1, 1);
    list.forEach((o, i) => { q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), o.yaw ?? 0); p.set(o.base ? o.base[0] : o.x, 0, o.base ? o.base[1] : o.z); M.compose(p, q, s); m.setMatrixAt(i, M); });
    m.instanceMatrix.needsUpdate = true; m.castShadow = false; m.frustumCulled = false; return m;
  };
  return [mk(lamp, lamps), mk(sig, signals)];
}

/** 駅前ペデストリアンデッキ：スラブ・柱・手すり。1 つのメッシュにまとめる。戻り値 { mesh, lights:[[x,y,z]...] } */
export function buildDeck() {
  const pl = PLAZAS[0];
  const x0 = pl.x0 + 8, x1 = pl.x1 - 40, z0 = pl.z0 + 6, z1 = pl.z1 - 5, y = 8.4;
  const conc = [0.55, 0.54, 0.52], dark = [0.22, 0.23, 0.25];
  const parts = [];
  const box = (cx, cy, cz, w, h, d, c) => parts.push(col(new THREE.BoxGeometry(w, h, d).translate(cx, cy, cz), c));
  box((x0 + x1) / 2, y, (z0 + z1) / 2, x1 - x0, 0.9, z1 - z0, conc);                       // スラブ
  const lights = [];
  const rail = (ax, az, bx, bz) => {                                                          // 手すり（低い壁＋笠木）
    const L = Math.hypot(bx - ax, bz - az), g = new THREE.BoxGeometry(L, 1.0, 0.18);
    g.rotateY(-Math.atan2(bz - az, bx - ax)); g.translate((ax + bx) / 2, y + 0.95, (az + bz) / 2); parts.push(col(g, dark));
    for (let t = 0; t < L; t += 9) lights.push([ax + ((bx - ax) * t) / L, y + 1.25, az + ((bz - az) * t) / L]);
  };
  rail(x0, z0, x1, z0); rail(x0, z1, x1, z1); rail(x0, z0, x0, z1); rail(x1, z0, x1, z1);
  for (let x = x0 + 10; x < x1; x += 24) for (const z of [z0 + 5, z1 - 5]) parts.push(col(new THREE.CylinderGeometry(0.7, 0.8, y, 8).translate(x, y / 2, z), conc));
  box(x0 + 14, y + 2.2, (z0 + z1) / 2, 6, 3.6, 8, dark);                                    // 階段室・エレベーター棟
  const geo = mergeGeometries(parts);
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8, metalness: 0.05, emissive: new THREE.Color(1.0, 0.7, 0.4), emissiveIntensity: 0 });
  mat.customProgramCacheKey = () => 'sendai-deck-v1';
  const mesh = new THREE.Mesh(geo, mat); mesh.castShadow = true; mesh.receiveShadow = true; mesh.name = 'deck'; mesh.frustumCulled = false;
  return { mesh, mat, lights, bounds: { x0, x1, z0, z1, y } };
}
