// cities/tokyo/trees.js — 冬の裸木（U-16：裸木に LED を巻く形のみ）。ケヤキ（仲通り）・イチョウ（行幸通り）・そのほかの街路樹。
//   樹形は枝の構造（limbs）として生成し、(1) 近景／遠景の InstancedMesh、(2) LED を巻く点列、の両方に使う。
//   近景 約 250 三角形／遠景 約 40 三角形。80 m ごとの塊（チャンク）に分け、距離で近景／遠景を切り替える。
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { STREETS, NAKA_X, NORTH_Z, SOUTH_Z, MOAT_X } from './layout.js';

const BARK = [0.055, 0.045, 0.04];

/** 枝の構造を作る。戻り値 { limbs:[{a,b,r0,r1,lv}] }（局所座標、幹の根元が原点）。type: 'zelkova'（杯状）/ 'ginkgo'（円柱状）。 */
export function genTree(type, rnd) {
  const L = [];
  const add = (a, b, r0, r1, lv) => L.push({ a, b, r0, r1, lv });
  const z = type === 'zelkova';
  const trunkH = z ? 4.2 : 5.0;
  add([0, 0, 0], [0, trunkH, 0], z ? 0.30 : 0.28, z ? 0.22 : 0.2, 0);
  const n1 = z ? 5 : 6;
  for (let i = 0; i < n1; i++) {
    const a1 = (i / n1) * Math.PI * 2 + rnd() * 0.7;
    const out = z ? 2.4 + rnd() * 0.8 : 1.0 + rnd() * 0.5, up = z ? 4.0 + rnd() * 1.2 : 5.5 + rnd() * 1.5;
    const t1 = [Math.cos(a1) * out, trunkH + up, Math.sin(a1) * out];
    add([0, trunkH - 0.1, 0], t1, 0.15, 0.09, 1);
    const m = 2;
    for (let j = 0; j < m; j++) {
      const a2 = a1 + (j - 0.5) * 1.1 + (rnd() - 0.5) * 0.4;
      const out2 = z ? 1.8 + rnd() * 0.7 : 0.7 + rnd() * 0.4, up2 = z ? 2.6 + rnd() : 3.8 + rnd();
      const t2 = [t1[0] + Math.cos(a2) * out2, t1[1] + up2, t1[2] + Math.sin(a2) * out2];
      add(t1, t2, 0.08, 0.045, 2);
      for (let k = 0; k < 2; k++) {
        const a3 = a2 + (k - 0.5) * 1.3 + (rnd() - 0.5) * 0.5;
        const out3 = z ? 1.1 + rnd() * 0.5 : 0.5 + rnd() * 0.3, up3 = z ? 1.4 + rnd() * 0.6 : 2.0 + rnd() * 0.6;
        add(t2, [t2[0] + Math.cos(a3) * out3, t2[1] + up3, t2[2] + Math.sin(a3) * out3], 0.045, 0.022, 3);
      }
    }
  }
  return { limbs: L };
}

function limbGeo(l, sides) {
  const g = new THREE.CylinderGeometry(l.r1, l.r0, 1, sides, 1, true);
  g.translate(0, 0.5, 0);
  const d = new THREE.Vector3(l.b[0] - l.a[0], l.b[1] - l.a[1], l.b[2] - l.a[2]), len = d.length();
  g.scale(1, len, 1);
  g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()));
  g.translate(l.a[0], l.a[1], l.a[2]);
  const n = g.attributes.position.count, c = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) c.set(BARK, i * 3);
  g.setAttribute('color', new THREE.BufferAttribute(c, 3)); g.deleteAttribute('uv');
  return g;
}
export function treeGeometries(tree) {
  const near = mergeGeometries(tree.limbs.map((l) => limbGeo(l, 3)));
  const far = mergeGeometries(tree.limbs.filter((l) => l.lv <= 1).map((l) => limbGeo({ ...l, r0: l.r0 * 1.6, r1: l.r1 * 2.0 }, 3)));
  return { near, far, nearTris: near.index ? near.index.count / 3 : near.attributes.position.count / 3, farTris: far.index ? far.index.count / 3 : far.attributes.position.count / 3 };
}

const rectOf = (s) => (s.dir === 'x' ? { x0: s.a, x1: s.b, z0: s.c - s.w / 2, z1: s.c + s.w / 2 } : { x0: s.c - s.w / 2, x1: s.c + s.w / 2, z0: s.a, z1: s.b });
const inRect = (r, x, z, m = 0) => x > r.x0 - m && x < r.x1 + m && z > r.z0 - m && z < r.z1 + m;

/** 並木の位置。[x, z, scale, rand, type, lit]。lit=イルミネーション（LED）あり。 */
export function treePositions(rng) {
  const P = [], strips = STREETS.map(rectOf);
  // 他の通りの車道・交差部には植えない（広い通りの歩道には植える）
  const free = (x, z, self) => !STREETS.some((s, i) => s !== self && inRect(strips[i], x, z, s.kind === 0 ? 1.0 : -2.0));
  const row = (s, off, step, ph, sc, type, lit, a = s.a, b = s.b) => {
    for (let t = a + ph; t < b; t += step) {
      const x = s.dir === 'x' ? t : s.c + off, z = s.dir === 'x' ? s.c + off : t;
      if (!free(x, z, s)) continue;
      P.push([x + rng.range(-0.3, 0.3), z + rng.range(-0.3, 0.3), sc * rng.range(0.94, 1.1), rng(), type, lit]);
    }
  };
  for (const s of STREETS) {
    if (s.id === 'gyoko') for (const o of [-12.5, -4.2, 4.2, 12.5]) row(s, o, 11, 6, 1.0, 'ginkgo', true, s.a + 6, s.b - 2);     // 行幸通り：イチョウ 4 列
    else if (s.id === 'naka') for (const o of [-7.5, 7.5]) row(s, o, 9, 4.5 + (o > 0 ? 4.5 : 0), 1.0, 'zelkova', true, s.a + 14, s.b - 14);   // 丸の内仲通り：ケヤキ 両側
    else if (s.kind === 3) { for (const o of [-14.5, 14.5]) row(s, o, 14, 7, 1.0, 'zelkova', false, s.a, s.b); }
    else if (s.kind === 0) { const o = s.w / 2 - 1.8; row(s, -o, 22, 8, 0.7, 'zelkova', false); row(s, o, 22, 19, 0.7, 'zelkova', false); }
  }
  return P;
}

export const LOD_NEAR = 170;

/** 木を 80 m ごとのチャンクに分けて InstancedMesh（近景・遠景）を作る。lit の木は樹皮にごく弱い暖色の自発光（LED の照り返し）。 */
export function buildTrees(rng) {
  const rnd = (() => { let s = 7; return () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296); })();
  const variants = { zelkova: [0, 1, 2].map(() => genTree('zelkova', rnd)), ginkgo: [0, 1].map(() => genTree('ginkgo', rnd)) };
  const geos = {}; for (const k of Object.keys(variants)) geos[k] = variants[k].map(treeGeometries);
  const P = treePositions(rng);
  const matPlain = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0, side: THREE.DoubleSide });
  const matLit = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0, side: THREE.DoubleSide, emissive: new THREE.Color(1.0, 0.62, 0.28), emissiveIntensity: 0.0 });
  matPlain.customProgramCacheKey = () => 'tokyo-bark-v1'; matLit.customProgramCacheKey = () => 'tokyo-bark-lit-v1';
  const groups = new Map();
  P.forEach((p, idx) => {
    const [x, z, , r, type, lit] = p;
    const key = `${lit ? 'L' : 'P'}|${type}|${Math.floor(x / 80)}|${Math.floor(z / 80)}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(idx);
  });
  const chunks = [], M = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), pv = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  const placed = P.map(([x, z, sc, r, type, lit]) => ({ x, z, sc, yaw: r * 6.283, v: Math.floor(r * 1000) % variants[type].length, type, lit }));
  for (const [key, idxs] of groups) {
    const [lit, type] = key.split('|');
    const mat = lit === 'L' ? matLit : matPlain;
    const mk = (which) => {
      const byV = {};
      idxs.forEach((i) => { (byV[placed[i].v] ??= []).push(i); });
      const meshes = [];
      for (const [v, list] of Object.entries(byV)) {
        const m = new THREE.InstancedMesh(geos[type][v][which], mat, list.length);
        list.forEach((i, k) => { const o = placed[i]; q.setFromAxisAngle(up, o.yaw); s.set(o.sc, o.sc, o.sc); pv.set(o.x, 0, o.z); M.compose(pv, q, s); m.setMatrixAt(k, M); });
        m.instanceMatrix.needsUpdate = true; m.castShadow = false; m.receiveShadow = false; m.frustumCulled = true;
        m.computeBoundingSphere(); m.name = `tree-${type}-${which}`;
        meshes.push(m);
      }
      return meshes;
    };
    let cx = 0, cz = 0; idxs.forEach((i) => { cx += placed[i].x; cz += placed[i].z; }); cx /= idxs.length; cz /= idxs.length;
    chunks.push({ near: mk('near'), far: mk('far'), cx, cz, lit: lit === 'L' });
  }
  const meshes = chunks.flatMap((c) => [...c.near, ...c.far]);
  const nearTris = Math.max(...Object.values(geos).flat().map((g) => g.nearTris)), farTris = Math.max(...Object.values(geos).flat().map((g) => g.farTris));
  return { chunks, meshes, placed, variants, count: P.length, litCount: placed.filter((o) => o.lit).length, nearTris, farTris, mats: [matLit], updateLod(cam) {
    let nearN = 0;
    for (const c of chunks) { const d = Math.hypot(c.cx - cam.x, c.cz - cam.z); const near = d < LOD_NEAR + 40; for (const m of c.near) m.visible = near; for (const m of c.far) m.visible = !near; if (near) nearN++; }
    return nearN;
  } };
}
