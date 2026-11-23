// cities/sendai/trees.js — ケヤキ（夏）の並木と公園の木立。インスタンス（幹＋枝 / 葉の塊）で描く。共有 lib は使わず、仙台専用に作る。
//   樹形：幹（4.5 m）から枝が杯状に広がり、17 個の葉の塊が樹冠（高さ 〜16 m、半径 〜7 m）をつくる。近景 約 480 三角形 / 遠景（260 m 超）48 三角形。
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { NOISE } from '../../../lib/glsl.js';
import { STREETS, PARKS, RIVER_X } from './layout.js';

const rectOf = (s) => (s.dir === 'x'
  ? { x0: s.a, x1: s.b, z0: s.c - s.w / 2, z1: s.c + s.w / 2 }
  : { x0: s.c - s.w / 2, x1: s.c + s.w / 2, z0: s.a, z1: s.b });
const inRect = (r, x, z, m = 0) => x > r.x0 - m && x < r.x1 + m && z > r.z0 - m && z < r.z1 + m;

/** 葉の塊：二十面体を球状の法線で滑らかに見せる。色は高さで明暗（上ほど明るい）。 */
function blob(cx, cy, cz, r, sy, seed, tone) {
  const g = new THREE.IcosahedronGeometry(1, 0);
  const p = g.attributes.position, n = p.count;
  const nor = new Float32Array(n * 3), col = new Float32Array(n * 3);
  const jit = (i) => { const v = Math.sin((i + seed) * 12.9898) * 43758.5453; return 0.86 + 0.28 * (v - Math.floor(v)); };
  for (let i = 0; i < n; i++) {
    let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const l = Math.hypot(x, y, z); nor[i * 3] = x / l; nor[i * 3 + 1] = y / l; nor[i * 3 + 2] = z / l;
    const j = jit(Math.floor(i / 3) + seed * 7);
    p.setXYZ(i, cx + x * r * j, cy + y * r * sy * j, cz + z * r * j);
    const up = 0.5 + 0.5 * (y / l);
    const k = tone * (0.7 + 0.5 * up);
    col[i * 3] = 0.20 * k; col[i * 3 + 1] = 0.36 * k; col[i * 3 + 2] = 0.10 * k;
  }
  g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.deleteAttribute('uv');
  return g;
}

function limb(a, b, r0, r1, col) {
  const g = new THREE.CylinderGeometry(r1, r0, 1, 5, 1, false);
  g.translate(0, 0.5, 0);
  const d = new THREE.Vector3(b[0] - a[0], b[1] - a[1], b[2] - a[2]), len = d.length();
  g.scale(1, len, 1);
  g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()));
  g.translate(a[0], a[1], a[2]);
  const n = g.attributes.position.count, c = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { c[i * 3] = col[0]; c[i * 3 + 1] = col[1]; c[i * 3 + 2] = col[2]; }
  g.setAttribute('color', new THREE.BufferAttribute(c, 3));
  g.deleteAttribute('uv');
  return g;
}

function zelkovaGeometries() {
  const bark = [0.115, 0.10, 0.085];
  const wood = [limb([0, 0, 0], [0, 4.6, 0], 0.42, 0.3, bark)];
  const leaf = [];
  // 枝（杯状：幹の上端から外上方へ）と葉の塊
  const N = 6;
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2 + 0.3, ca = Math.cos(a), sa = Math.sin(a);
    wood.push(limb([0, 4.4, 0], [ca * 3.4, 9.2, sa * 3.4], 0.22, 0.1, bark));
    leaf.push(blob(ca * 4.2, 10.0, sa * 4.2, 3.5, 0.82, i, 1.0));
    leaf.push(blob(ca * 2.2, 13.2, sa * 2.2, 3.0, 0.8, i + 9, 1.1));
  }
  leaf.push(blob(0, 11.5, 0, 3.6, 0.9, 20, 1.05));
  leaf.push(blob(0, 14.6, 0, 3.0, 0.8, 21, 1.15));
  for (let i = 0; i < 3; i++) { const a = i * 2.1; leaf.push(blob(Math.cos(a) * 3.2, 7.0, Math.sin(a) * 3.2, 2.2, 0.8, 30 + i, 0.8)); }
  return { wood: mergeGeometries(wood), leaf: mergeGeometries(leaf) };
}

/** 並木の位置 [x, z, scale] を作る。 */
export function treePositions(rng) {
  const P = [];
  const strips = STREETS.map(rectOf);
  const free = (x, z, self) => x > RIVER_X + 26 && !STREETS.some((s, i) => s !== self && s.kind !== 3 && inRect(strips[i], x, z, s.kind === 0 ? 0.5 : -0.5)) && !PARKS.some((k) => inRect(k, x, z, 0));
  const row = (s, off, step, ph, sc, until = s.b) => {
    for (let t = s.a + ph; t < until; t += step) {
      const x = s.dir === 'x' ? t : s.c + off, z = s.dir === 'x' ? s.c + off : t;
      if (!free(x, z, s)) continue;
      P.push([x + rng.range(-0.4, 0.4), z + rng.range(-0.4, 0.4), sc * rng.range(0.92, 1.12), rng()]);
    }
  };
  for (const s of STREETS) {
    if (s.kind === 1) { const end = 200; row(s, 0, 13, 4, 1.05, end); row(s, -20.6, 13, 10.5, 1.0, end); row(s, 20.6, 13, 10.5, 1.0, end); }       // 青葉通：3 列
    else if (s.kind === 2) { row(s, -4.5, 16, 3, 1.1); row(s, 4.5, 16, 11, 1.1); row(s, -20.2, 16, 11, 1.0); row(s, 20.2, 16, 3, 1.0); }          // 定禅寺通：4 列
    else if (s.kind === 0) { const o = s.w / 2 - 1.8; row(s, -o, 22, 8, 0.55); row(s, o, 22, 19, 0.55); }                                        // そのほか：小ぶりの街路樹
  }
  for (const k of PARKS) for (let i = 0; i < 26; i++) P.push([rng.range(k.x0 + 6, k.x1 - 6), rng.range(k.z0 + 6, k.z1 - 6), rng.range(0.8, 1.15), rng()]);
  return P;
}

/** 遠景用の簡易ケヤキ（幹＋樹冠の塊 2 つ＝ 48 三角形）。近景の樹冠の外形（高さ 〜16 m、半径 〜7.5 m）に合わせる。 */
function zelkovaFarGeometry() {
  const t = CylinderTrunk();
  const crown = [blob(0, 10.4, 0, 7.0, 0.62, 3, 1.0), blob(0, 14.2, 0, 3.8, 0.8, 5, 1.12)];
  return mergeGeometries([t, ...crown]);
}
// 幹は上端を開いた 4 角柱（8 三角形）。limb() は 5 角柱＋両端の蓋なので、遠景用に作り直す
function CylinderTrunk() {
  const g = new THREE.CylinderGeometry(0.28, 0.42, 7.0, 4, 1, true).toNonIndexed(); g.translate(0, 3.5, 0);
  const n = g.attributes.position.count, c = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { c[i * 3] = 0.115; c[i * 3 + 1] = 0.10; c[i * 3 + 2] = 0.085; }
  g.setAttribute('color', new THREE.BufferAttribute(c, 3)); g.deleteAttribute('uv');
  return g;
}

const TRIS = (g) => (g.index ? g.index.count : g.attributes.position.count) / 3;

/**
 * 並木：近景（幹＋葉・約 480 三角形）と遠景（48 三角形）をインスタンス単位で切り替える。
 *   視錐台の外の木は描かない（自前のカリング）。メッシュは 3 つのまま（描画コール不変）。
 *   影の静的ベイク（最初の 1 フレーム）だけは全木を近景で描く。
 */
export function buildTrees(rng) {
  const { wood, leaf } = zelkovaGeometries();
  const far = zelkovaFarGeometry();
  const P = treePositions(rng);
  const N = P.length;
  const woodMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0 });
  const leafMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.88, metalness: 0 });
  leafMat.onBeforeCompile = (shader) => {          // 葉のむら：ワールド座標のノイズで明暗を付け、面の平板さを消す
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPl;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWPl = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPl;\n' + NOISE)
      .replace('#include <color_fragment>', `#include <color_fragment>
        {
          float lt = 0.55 * vnoise(vWPl.xz * 0.8 + vWPl.y * 0.6) + 0.45 * vnoise(vWPl.xz * 2.6 - vWPl.y * 1.9);
          float d = length(vWPl - cameraPosition);
          diffuseColor.rgb *= mix(1.0, 0.62 + 0.75 * lt, 1.0 - smoothstep(60.0, 400.0, d));
        }`);
  };
  woodMat.customProgramCacheKey = () => 'sendai-wood-v1'; leafMat.customProgramCacheKey = () => 'sendai-leaf-v1';
  // 全木の行列と個体色（並べ替えのたびにここから写す）
  const mats = new Float32Array(N * 16), cols = new Float32Array(N * 3);
  {
    const M = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), c = new THREE.Color(), up = new THREE.Vector3(0, 1, 0);
    P.forEach(([x, z, sc, r], i) => {
      q.setFromAxisAngle(up, r * 6.283); s.set(sc, sc * (0.92 + 0.16 * r), sc); p.set(x, 0, z);
      M.compose(p, q, s); M.toArray(mats, i * 16);
      c.setRGB(0.9 + 0.2 * r, 0.95 + 0.1 * r, 0.85 + 0.2 * (1 - r)); c.toArray(cols, i * 3);
    });
  }
  const mk = (geo, mat, name, colored) => {
    const m = new THREE.InstancedMesh(geo, mat, N);
    m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    if (colored) { m.setColorAt(0, new THREE.Color()); m.instanceColor.setUsage(THREE.DynamicDrawUsage); }
    m.castShadow = true; m.receiveShadow = false; m.frustumCulled = false; m.name = name; m.count = 0;
    return m;
  };
  const trunk = mk(wood, woodMat, 'zelkova-wood', false), crown = mk(leaf, leafMat, 'zelkova-leaf', true), farM = mk(far, leafMat, 'zelkova-far', true);
  const fill = (m, i, j) => { m.instanceMatrix.array.set(mats.subarray(i * 16, i * 16 + 16), j * 16); if (m.instanceColor) m.instanceColor.array.set(cols.subarray(i * 3, i * 3 + 3), j * 3); };
  const fr = new THREE.Frustum(), pv = new THREE.Matrix4();
  const API = {
    meshes: [trunk, crown, farM], count: N,
    tris: TRIS(wood) + TRIS(leaf), farTris: TRIS(far),
    stats: { near: N, far: 0, culled: 0 },
    /** カメラに合わせて近景／遠景／非表示を振り分ける。bake=true は全木を近景で（影のベイク用）。 */
    update(camera, farDist, bake = false) {
      let nn = 0, nf = 0;
      if (bake) { for (let i = 0; i < N; i++) { fill(trunk, i, nn); fill(crown, i, nn); nn++; } }
      else {
        camera.updateMatrixWorld();
        pv.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse); fr.setFromProjectionMatrix(pv);
        const cx = camera.position.x, cz = camera.position.z, R = 24, sph = new THREE.Sphere(new THREE.Vector3(), R), fd2 = farDist * farDist;
        for (let i = 0; i < N; i++) {
          const x = P[i][0], z = P[i][1];
          sph.center.set(x, 9, z);
          if (!fr.intersectsSphere(sph)) continue;
          const dx = x - cx, dz = z - cz;
          if (dx * dx + dz * dz > fd2) { fill(farM, i, nf); nf++; } else { fill(trunk, i, nn); fill(crown, i, nn); nn++; }
        }
      }
      trunk.count = crown.count = nn; farM.count = nf;
      for (const m of [trunk, crown, farM]) { m.instanceMatrix.needsUpdate = true; if (m.instanceColor) m.instanceColor.needsUpdate = true; }
      this.stats.near = nn; this.stats.far = nf; this.stats.culled = N - nn - nf;
      return this.stats;
    },
  };
  trunk.name = 'zelkova-wood'; crown.name = 'zelkova-leaf';
  return API;
}
