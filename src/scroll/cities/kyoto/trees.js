// cities/kyoto/trees.js — 紅葉（落葉樹）と常緑樹。紅葉は仙台のケヤキと同じ方式：個体単位の LOD（近景 約 220 三角形／遠景 約 28 三角形）＋視錐台カリング。
//   メッシュは近景の幹・近景の葉・遠景の 3 つのまま（描画コール固定）。葉は赤・橙・黄・緑を個体色で変え、夜は下から暖色に照らされる（ライトアップ。U-7：実在の演出の再現ではない）。
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { NOISE } from '../../../lib/glsl.js';
import { H } from './layout.js';

function blob(cx, cy, cz, r, sy, seed) {
  const g = new THREE.IcosahedronGeometry(1, 0), p = g.attributes.position, n = p.count;
  const nor = new Float32Array(n * 3), col = new Float32Array(n * 3);
  const jit = (i) => { const v = Math.sin((i + seed) * 12.9898) * 43758.5453; return 0.84 + 0.32 * (v - Math.floor(v)); };
  for (let i = 0; i < n; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i), l = Math.hypot(x, y, z); nor[i * 3] = x / l; nor[i * 3 + 1] = y / l; nor[i * 3 + 2] = z / l;
    const j = jit(Math.floor(i / 3) + seed * 7); p.setXYZ(i, cx + x * r * j, cy + y * r * sy * j, cz + z * r * j);
    const k = 0.75 + 0.45 * (0.5 + 0.5 * (y / l)); col[i * 3] = k; col[i * 3 + 1] = k; col[i * 3 + 2] = k;
  }
  g.setAttribute('normal', new THREE.BufferAttribute(nor, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.deleteAttribute('uv'); return g;
}
function limb(a, b, r0, r1, col) {
  const g = new THREE.CylinderGeometry(r1, r0, 1, 5, 1, false); g.translate(0, 0.5, 0);
  const d = new THREE.Vector3(b[0] - a[0], b[1] - a[1], b[2] - a[2]), len = d.length(); g.scale(1, len, 1);
  g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize())); g.translate(a[0], a[1], a[2]);
  const n = g.attributes.position.count, c = new Float32Array(n * 3); for (let i = 0; i < n; i++) { c[i * 3] = col[0]; c[i * 3 + 1] = col[1]; c[i * 3 + 2] = col[2]; }
  g.setAttribute('color', new THREE.BufferAttribute(c, 3)); g.deleteAttribute('uv'); return g;
}
function momijiGeometries() {
  const bark = [0.09, 0.07, 0.06];
  const wood = [limb([0, 0, 0], [0, 3.2, 0], 0.26, 0.17, bark), limb([0, 2.8, 0], [1.9, 5.8, 0.4], 0.13, 0.07, bark), limb([0, 2.9, 0], [-1.5, 5.6, -1.3], 0.13, 0.07, bark), limb([0, 3.0, 0], [0.2, 6.0, 1.9], 0.12, 0.07, bark)];
  const leaf = [blob(0, 6.6, 0, 2.6, 0.78, 1), blob(2.2, 5.6, 0.5, 2.0, 0.8, 2), blob(-1.9, 5.4, -1.4, 2.1, 0.8, 3), blob(0.3, 5.5, 2.3, 1.9, 0.8, 4), blob(-0.6, 8.0, -0.4, 1.7, 0.8, 5), blob(1.5, 7.3, -1.5, 1.6, 0.8, 6), blob(-2.2, 6.6, 1.2, 1.5, 0.8, 7)];
  return { wood: mergeGeometries(wood), leaf: mergeGeometries(leaf) };
}
function momijiFarGeometry() {
  const t = new THREE.CylinderGeometry(0.17, 0.26, 3.4, 4, 1, true).toNonIndexed(); t.translate(0, 1.7, 0);
  const n = t.attributes.position.count, c = new Float32Array(n * 3); for (let i = 0; i < n; i++) { c[i * 3] = 0.09; c[i * 3 + 1] = 0.07; c[i * 3 + 2] = 0.06; }
  t.setAttribute('color', new THREE.BufferAttribute(c, 3)); t.deleteAttribute('uv');
  return mergeGeometries([t, blob(0.2, 6.4, 0.2, 3.6, 0.72, 11)]);
}
const PALETTE = [[0.80, 0.08, 0.04, 0.40], [0.95, 0.34, 0.05, 0.30], [0.90, 0.64, 0.07, 0.20], [0.17, 0.34, 0.08, 0.10]];   // 赤 40% 橙 30% 黄 20% 緑 10%（U-16）
const pickColor = (u) => { let a = 0; for (const p of PALETTE) { a += p[3]; if (u < a) return p; } return PALETTE[0]; };

const TRIS = (g) => (g.index ? g.index.count : g.attributes.position.count) / 3;
/** P: [x, z, scale, rand, lit(0..1)]。y は地形の高さ。 */
export function buildMomiji(P, nightU) {
  const { wood, leaf } = momijiGeometries(), far = momijiFarGeometry(), N = P.length;
  const woodMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0 });
  const leafMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, metalness: 0 });
  leafMat.onBeforeCompile = (sh) => {
    sh.uniforms.uNight = nightU;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aLit; varying float vLit; varying vec3 vWPl; varying float vUp;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvLit = aLit; vWPl = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz; vUp = normal.y;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uNight; varying float vLit; varying vec3 vWPl; varying float vUp;\n' + NOISE)
      .replace('#include <color_fragment>', `#include <color_fragment>
        float lt = 0.55 * vnoise(vWPl.xz * 0.9 + vWPl.y * 0.6) + 0.45 * vnoise(vWPl.xz * 2.8 - vWPl.y * 1.9);
        float dd = length(vWPl - cameraPosition);
        diffuseColor.rgb *= mix(1.0, 0.65 + 0.7 * lt, 1.0 - smoothstep(60.0, 400.0, dd));`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        totalEmissiveRadiance += diffuseColor.rgb * (0.10 + 0.55 * vLit) * uNight * (0.55 + 0.45 * (1.0 - vUp)) * (0.7 + 0.5 * lt);`);
  };
  woodMat.customProgramCacheKey = () => 'kyoto-wood-v1'; leafMat.customProgramCacheKey = () => 'kyoto-momiji-v1';
  const mats = new Float32Array(N * 16), cols = new Float32Array(N * 3), lits = new Float32Array(N), pos = new Float32Array(N * 3);
  {
    const M = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), c = new THREE.Color(), up = new THREE.Vector3(0, 1, 0);
    P.forEach(([x, z, sc, r, lit], i) => {
      const y = H(x, z); q.setFromAxisAngle(up, r * 6.283); s.set(sc, sc * (0.9 + 0.2 * r), sc); p.set(x, y - 0.2, z); M.compose(p, q, s); M.toArray(mats, i * 16);
      const pc = pickColor((r * 7.31) % 1), k = 0.82 + 0.4 * ((r * 13.7) % 1); c.setRGB(pc[0] * k, pc[1] * k, pc[2] * k); c.toArray(cols, i * 3); lits[i] = lit; pos.set([x, y, z], i * 3);
    });
  }
  const mk = (geo, mat, name, colored) => {
    const g = geo.clone(); const a = new THREE.InstancedBufferAttribute(new Float32Array(N), 1); a.setUsage(THREE.DynamicDrawUsage); g.setAttribute('aLit', a);
    const m = new THREE.InstancedMesh(g, mat, N); m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    if (colored) { m.setColorAt(0, new THREE.Color()); m.instanceColor.setUsage(THREE.DynamicDrawUsage); }
    m.castShadow = false; m.receiveShadow = false; m.frustumCulled = false; m.name = name; m.count = 0; return m;
  };
  const trunk = mk(wood, woodMat, 'momiji-wood', false), crown = mk(leaf, leafMat, 'momiji-leaf', true), farM = mk(far, leafMat, 'momiji-far', true);
  const fill = (m, i, j) => { m.instanceMatrix.array.set(mats.subarray(i * 16, i * 16 + 16), j * 16); if (m.instanceColor) m.instanceColor.array.set(cols.subarray(i * 3, i * 3 + 3), j * 3); const a = m.geometry.attributes.aLit; if (a) a.array[j] = lits[i]; };
  const fr = new THREE.Frustum(), pv = new THREE.Matrix4(), sph = new THREE.Sphere(new THREE.Vector3(), 11);
  return {
    meshes: [trunk, crown, farM], count: N, trisNear: TRIS(wood) + TRIS(leaf), trisFar: TRIS(far), stats: { near: 0, far: 0, culled: 0 },
    update(camera, farDist) {
      camera.updateMatrixWorld(); pv.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse); fr.setFromProjectionMatrix(pv);
      const cx = camera.position.x, cy = camera.position.y, cz = camera.position.z, fd2 = farDist * farDist; let nn = 0, nf = 0;
      for (let i = 0; i < N; i++) {
        sph.center.set(pos[i * 3], pos[i * 3 + 1] + 6, pos[i * 3 + 2]); if (!fr.intersectsSphere(sph)) continue;
        const dx = pos[i * 3] - cx, dy = pos[i * 3 + 1] - cy, dz = pos[i * 3 + 2] - cz;
        if (dx * dx + dy * dy + dz * dz > fd2) { fill(farM, i, nf); nf++; } else { fill(trunk, i, nn); fill(crown, i, nn); nn++; }
      }
      trunk.count = crown.count = nn; farM.count = nf;
      for (const m of [trunk, crown, farM]) { m.instanceMatrix.needsUpdate = true; if (m.instanceColor) m.instanceColor.needsUpdate = true; const a = m.geometry.attributes.aLit; if (a) a.needsUpdate = true; }
      this.stats.near = nn; this.stats.far = nf; this.stats.culled = N - nn - nf; return this.stats;
    },
  };
}

/** 常緑樹（杉・松のような三段の円錐）。静的。 */
export function buildEvergreens(P) {
  const parts = [];
  for (let k = 0; k < 3; k++) {
    const g = new THREE.ConeGeometry(2.8 - k * 0.7, 4.6, 5, 1, false).toNonIndexed(); g.translate(0, 3.2 + k * 2.6, 0);
    const n = g.attributes.position.count, c = new Float32Array(n * 3); for (let i = 0; i < n; i++) { c[i * 3] = 0.03; c[i * 3 + 1] = 0.07 + 0.01 * k; c[i * 3 + 2] = 0.035; }
    g.setAttribute('color', new THREE.BufferAttribute(c, 3)); g.deleteAttribute('uv'); parts.push(g);
  }
  const trunk = new THREE.CylinderGeometry(0.25, 0.35, 3.6, 4, 1, true).toNonIndexed(); trunk.translate(0, 1.8, 0);
  { const n = trunk.attributes.position.count, c = new Float32Array(n * 3); for (let i = 0; i < n; i++) { c[i * 3] = 0.07; c[i * 3 + 1] = 0.05; c[i * 3 + 2] = 0.04; } trunk.setAttribute('color', new THREE.BufferAttribute(c, 3)); trunk.deleteAttribute('uv'); parts.push(trunk); }
  const geo = mergeGeometries(parts), mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0 });
  mat.customProgramCacheKey = () => 'kyoto-evergreen-v1';
  const m = new THREE.InstancedMesh(geo, mat, P.length), M = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  P.forEach(([x, z, sc, r], i) => { q.setFromAxisAngle(up, r * 6.28); s.set(sc, sc * (0.9 + 0.5 * r), sc); p.set(x, H(x, z) - 0.2, z); M.compose(p, q, s); m.setMatrixAt(i, M); });
  m.instanceMatrix.needsUpdate = true; m.castShadow = false; m.receiveShadow = false; m.frustumCulled = false; m.name = 'evergreen';
  return { mesh: m, trisEach: TRIS(geo) };
}
