// cities/sendai/arcade.js — 一番町のアーケード（アーチ骨組みの天蓋・庇・袖看板・灯り）と、七夕飾りの配置。
//   天蓋は骨組みだけ（上空が見える）：吹き流しが骨組みから吊られ、カメラが最後に飾りの上へ抜けられる。実在の店名・ロゴは使わない（U-3）。
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { makeRng } from '../../../lib/rng.js';
import { STREETS, JOZ_Z, ICHI_X, PLAZAS } from './layout.js';

const ARC = STREETS.find((s) => s.id === 'ichi-arcade');
export const ARCADE = { z0: ARC.a + 2, z1: ARC.b - 2, half: ARC.w / 2, spring: 7.6, crown: 11.6 };

const colorize = (g, c) => { const n = g.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) a.set(c, i * 3); g.setAttribute('color', new THREE.BufferAttribute(a, 3)); g.deleteAttribute('uv'); return g; };
const hash = (n) => { const v = Math.sin(n * 12.9898) * 43758.5453; return v - Math.floor(v); };

/** アーケードの構造：アーチ（8 m 間隔）＋縦通しの梁＋柱。1 メッシュ（インスタンス）。 */
export function buildArcadeFrame() {
  const { z0, z1, half, spring, crown } = ARCADE, step = 8;
  const frameCol = [0.62, 0.64, 0.66];
  // 1 本のアーチ（x 方向の断面）：左の柱 → 円弧 → 右の柱
  const parts = [];
  const seg = (a, b, r) => {
    const d = new THREE.Vector3(b[0] - a[0], b[1] - a[1], 0), len = d.length();
    const g = new THREE.CylinderGeometry(r, r, len, 5, 1, false);
    g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()));
    g.translate((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, 0); parts.push(colorize(g, frameCol));
  };
  const N = 10, pt = (u) => { const x = -half + 0.2 + (2 * (half - 0.2)) * u; const k = 1 - Math.pow(2 * u - 1, 2); return [x, spring + (crown - spring) * k]; };
  for (const sx of [-1, 1]) seg([sx * (half - 0.2), 0], [sx * (half - 0.2), spring], 0.1);
  for (let i = 0; i < N; i++) seg(pt(i / N), pt((i + 1) / N), 0.09);
  seg([-(half - 0.2), 4.2], [half - 0.2, 4.2], 0.05);                       // タイバー（飾りの吊り下げ点）
  const arch = mergeGeometries(parts);
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, metalness: 0.5 });
  mat.customProgramCacheKey = () => 'sendai-arcade-v1';
  const n = Math.floor((z1 - z0) / step) + 1;
  const mesh = new THREE.InstancedMesh(arch, mat, n);
  const M = new THREE.Matrix4();
  for (let i = 0; i < n; i++) { M.makeTranslation(ICHI_X, 0, z0 + i * step); mesh.setMatrixAt(i, M); }
  mesh.instanceMatrix.needsUpdate = true; mesh.castShadow = true; mesh.receiveShadow = false; mesh.frustumCulled = false; mesh.name = 'arcade-frame';
  // 縦通しの梁（棟・軒）
  const beams = [];
  for (const [x, y] of [[0, crown], [-5.2, 10.2], [5.2, 10.2], [-half + 0.2, spring], [half - 0.2, spring]]) {
    const g = new THREE.CylinderGeometry(0.07, 0.07, z1 - z0, 5); g.rotateX(Math.PI / 2); g.translate(x + ICHI_X, y, (z0 + z1) / 2); beams.push(colorize(g, frameCol));
  }
  const bm = new THREE.Mesh(mergeGeometries(beams), mat); bm.castShadow = false; bm.frustumCulled = false; bm.name = 'arcade-beams';
  return { meshes: [mesh, bm], archCount: n };
}

/** 庇・袖看板（無地の発光パネル）。instanceColor で色を付け、夜に光る。 */
export function buildShopfronts(rng, uniforms) {
  const { z0, z1, half } = ARCADE;
  const tones = [[0.75, 0.2, 0.18], [0.2, 0.4, 0.7], [0.85, 0.7, 0.25], [0.25, 0.55, 0.4], [0.85, 0.85, 0.8], [0.6, 0.3, 0.55], [0.9, 0.5, 0.2]];
  const aw = [], sg = [];
  for (const side of [-1, 1]) {
    for (let z = z0 + 2; z < z1 - 3;) {
      const w = 4 + rng() * 3.5;
      aw.push({ x: ICHI_X + side * (half - 0.7), y: 3.3, z: z + w / 2, w, d: 1.4, h: 0.35, c: tones[Math.floor(rng() * tones.length)] });
      if (rng() < 0.55) sg.push({ x: ICHI_X + side * (half - 0.35), y: 5.6 + rng() * 1.4, z: z + w / 2, w: 0.2, h: 1.0 + rng() * 0.8, d: 0.9 + rng() * 0.5, c: tones[Math.floor(rng() * tones.length)], side });
      z += w + 0.4;
    }
  }
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7, metalness: 0 });
  mat.customProgramCacheKey = () => 'sendai-shop-v1';
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uShopGlow = uniforms.uShopGlow;
    shader.fragmentShader = shader.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uShopGlow;')
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += diffuseColor.rgb * uShopGlow;');
  };
  const box = new THREE.BoxGeometry(1, 1, 1);
  const mk = (list, rot) => {
    const m = new THREE.InstancedMesh(box, mat, list.length), M = new THREE.Matrix4(), p = new THREE.Vector3(), q = new THREE.Quaternion(), s = new THREE.Vector3(), c = new THREE.Color();
    list.forEach((o, i) => { p.set(o.x, o.y, o.z); s.set(o.d, o.h, o.w); q.identity(); M.compose(p, q, s); m.setMatrixAt(i, M); c.setRGB(...o.c); m.setColorAt(i, c); });
    m.instanceMatrix.needsUpdate = true; m.instanceColor.needsUpdate = true; m.castShadow = false; m.frustumCulled = false; return m;
  };
  // 庇は壁から通りへ張り出す（x 方向が奥行き d、z 方向が幅 w）。袖看板は壁に直角で通りへ突き出す板（x 方向の厚み 0.2、奥行きを d として x に伸ばす）。
  const awn = aw.map((o) => ({ ...o, x: o.x }));
  const sig = sg.map((o) => ({ x: o.x - o.side * 0.45, y: o.y, z: o.z, w: o.w, h: o.h, d: o.d, c: o.c }));
  const a = mk(awn, 0), b = mk(sig, 0);
  a.name = 'awnings'; b.name = 'signs';
  return { meshes: [a, b], count: aw.length + sg.length };
}

/** 夜の灯り（吊り下げの提灯・電球）：アーケード内に 3 列 */
export function arcadeLights() {
  const P = [], C = [], S = [];
  const { z0, z1 } = ARCADE;
  for (const x of [-5.2, 0, 5.2]) for (let z = z0; z <= z1; z += 3) { P.push(x + ICHI_X, x === 0 ? 11.2 : 10.1, z); C.push(3.0, 1.9, 0.9); S.push(0.5); }
  for (const x of [-5.9, 5.9]) for (let z = z0 + 2; z <= z1; z += 5) { P.push(x + ICHI_X, 4.6, z); C.push(2.6, 1.6, 0.8); S.push(0.45); }
  return { positions: new Float32Array(P), colors: new Float32Array(C), sizes: new Float32Array(S) };
}

/** 七夕飾りの配置（U-2：アーケード・定禅寺通を厚く、駅前は控えめ）。戻り値 items[{x,y,z,s,yaw,phase}] と、竹の柱の位置。 */
export function tanabataItems(rng) {
  const items = [], poles = [], balls = [];
  const add = (x, y, z, s = 1) => items.push({ x, y, z, s: s * (0.9 + 0.2 * rng()), yaw: rng() * 6.283, phase: rng() * 6.283 });
  const { z0, z1, half } = ARCADE;
  // 一番町アーケード：骨組みの梁（y=10.3）から 2 列（x=±4.4）。歩行者の頭上、帯の下端は 〜6 m
  for (let z = z0 + 1; z < z1; z += 3.2) {
    add(ICHI_X - 4.6 + (rng() - 0.5) * 0.4, 10.3, z + (rng() - 0.5) * 0.6, 1.0);
    add(ICHI_X + 4.6 + (rng() - 0.5) * 0.4, 10.3, z + 1.6 + (rng() - 0.5) * 0.6, 0.95);
    add(ICHI_X - 2.3, 10.4, z + 0.8 + (rng() - 0.5) * 0.5, 0.72);                     // 内側の列は短め（カメラが間を抜ける）
    add(ICHI_X + 2.3, 10.4, z + 2.4 + (rng() - 0.5) * 0.5, 0.7);
  }
  for (let z = z0 + 4; z < z1; z += 8) balls.push([ICHI_X, 10.6, z]);                           // 中央の列はくす玉のみ（カメラの通り道）
  // 定禅寺通：歩道と遊歩道の縁に竹の柱（7.5 m）。柱の先に束を 1〜2 本
  const joz = STREETS.find((s) => s.id === 'joz');
  for (let x = joz.a + 12; x < joz.b - 6; x += 15) for (const off of [-9.6, 9.6, -21.4, 21.4]) {
    if (Math.abs(x - ICHI_X) < 14) continue;
    poles.push([x, JOZ_Z + off]); add(x, 7.2, JOZ_Z + off - Math.sign(off) * 0.9, 1.05);
    if (rng() < 0.5) add(x + 1.1, 6.6, JOZ_Z + off - Math.sign(off) * 0.9, 0.85);
  }
  // 一番町の南北（アーケードの外）：控えめに、歩道の縁に
  for (const [a, b] of [[-125, 30], [205, 325]]) for (let z = a; z < b; z += 13) for (const sx of [-1, 1]) { poles.push([ICHI_X + sx * 8.8, z]); add(ICHI_X + sx * 7.9, 6.6, z, 0.85); }
  // 駅前：控えめ（数本）
  const pl = PLAZAS[0];
  for (let i = 0; i < 6; i++) { const x = pl.x0 + 14 + i * 14, z = pl.z1 - 4; poles.push([x, z]); add(x, 6.8, z - 0.8, 0.9); }
  return { items, poles, balls };
}

/**
 * 吹き流し（大）を仕様の上限 1,200 束まで増やすための追加分（仕様書 §3・§6）。
 * 共有の rng は使わず専用の乱数で作る（以降の車・歩行者などの配置を変えないため）。
 * 配分：アーケード内を最優先（外側・内側の列を密にし、壁際にも）、定禅寺通・一番町の南北は柱を増やす。残りはアーケード内で埋める。
 */
export const STREAMER_LIMIT = 1200;
export function tanabataExtras(baseCount) {
  const rng = makeRng(20260807), items = [], poles = [];
  const add = (x, y, z, s) => items.push({ x, y, z, s: s * (0.9 + 0.2 * rng()), yaw: rng() * 6.283, phase: rng() * 6.283 });
  const { z0, z1 } = ARCADE;
  const J = (v) => (rng() - 0.5) * v;
  for (let z = z0 + 1; z < z1; z += 3.2) {                                         // 外側・内側の列のもう一方の位相
    add(ICHI_X - 4.6 + J(0.4), 10.3, z + 1.6 + J(0.6), 0.95);
    add(ICHI_X + 4.6 + J(0.4), 10.3, z + J(0.6), 1.0);
    add(ICHI_X - 2.3, 10.4, z + 2.4 + J(0.5), 0.7);
    add(ICHI_X + 2.3, 10.4, z + 0.8 + J(0.5), 0.72);
  }
  for (let z = z0 + 0.5; z < z1; z += 2.4) { add(ICHI_X - 6.1 + J(0.3), 9.4, z + J(0.5), 0.9); add(ICHI_X + 6.1 + J(0.3), 9.4, z + 1.2 + J(0.5), 0.9); }   // 壁際
  for (let z = z0 + 1; z < z1; z += 2.0) { add(ICHI_X - 3.45 + J(0.3), 10.2, z + J(0.5), 0.8); add(ICHI_X + 3.45 + J(0.3), 10.2, z + 1.0 + J(0.5), 0.78); }   // 梁の中間
  const joz = STREETS.find((s) => s.id === 'joz');                                 // 定禅寺通：柱を倍に、既存の柱にも 1 本足す
  for (let x = joz.a + 12; x < joz.b - 6; x += 15) for (const off of [-9.6, 9.6, -21.4, 21.4]) {
    if (Math.abs(x - ICHI_X) < 14) continue;
    const sg = Math.sign(off);
    add(x - 1.2, 6.9, JOZ_Z + off - sg * 0.9, 0.9);
    const xm = x + 7.5; poles.push([xm, JOZ_Z + off]); add(xm, 7.2, JOZ_Z + off - sg * 0.9, 1.0); add(xm + 1.1, 6.6, JOZ_Z + off - sg * 0.9, 0.85);
  }
  for (const [a, b] of [[-125, 30], [205, 325]]) for (let z = a + 6.5; z < b; z += 13) for (const sx of [-1, 1]) { poles.push([ICHI_X + sx * 8.8, z]); add(ICHI_X + sx * 7.9, 6.6, z, 0.85); }
  // 残りはアーケード内の飾りで上限まで埋める（中央の通り道は空ける）
  for (let guard = 0; baseCount + items.length < STREAMER_LIMIT && guard < 5000; guard++) {
    const side = rng() < 0.5 ? -1 : 1, ax = 1.6 + 4.6 * rng();
    add(ICHI_X + side * ax, 10.3 - 0.003 * ax * ax, z0 + 1 + (z1 - z0 - 2) * rng(), 0.7 + 0.25 * rng());
  }
  items.length = Math.min(items.length, STREAMER_LIMIT - baseCount);
  return { items, poles };
}

/** 竹の柱（細い円柱、先に腕）と、中央列のくす玉。 */
export function buildPoles(poles, balls) {
  const g = new THREE.CylinderGeometry(0.035, 0.06, 7.8, 5); g.translate(0, 3.9, 0);
  const arm = new THREE.CylinderGeometry(0.03, 0.03, 1.2, 4); arm.rotateZ(Math.PI / 2); arm.translate(-0.5, 7.5, 0);
  const geo = mergeGeometries([colorize(g, [0.30, 0.36, 0.16]), colorize(arm, [0.30, 0.36, 0.16])]);
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8, metalness: 0 });
  const m = new THREE.InstancedMesh(geo, mat, poles.length), M = new THREE.Matrix4();
  poles.forEach(([x, z], i) => { M.makeTranslation(x, 0, z); m.setMatrixAt(i, M); });
  m.instanceMatrix.needsUpdate = true; m.castShadow = false; m.frustumCulled = false; m.name = 'bamboo-poles';
  const ballG = new THREE.IcosahedronGeometry(0.5, 1).toNonIndexed(), bp = ballG.attributes.position, bc = new Float32Array(bp.count * 3), nb = new Float32Array(bp.count * 3);
  const FIVE = [[0.06, 0.30, 0.85], [0.88, 0.08, 0.10], [0.96, 0.74, 0.08], [0.92, 0.92, 0.88], [0.45, 0.16, 0.62], [0.95, 0.35, 0.55]];
  for (let f = 0; f < bp.count / 3; f++) { const c = FIVE[Math.floor(hash(f + 17) * 5.99)]; for (let k = 0; k < 3; k++) bc.set(c, (f * 3 + k) * 3); }
  for (let i = 0; i < bp.count; i++) { const x = bp.getX(i), y = bp.getY(i), z = bp.getZ(i), l = Math.hypot(x, y, z); nb[i * 3] = x / l; nb[i * 3 + 1] = y / l; nb[i * 3 + 2] = z / l; }
  ballG.setAttribute('color', new THREE.BufferAttribute(bc, 3)); ballG.setAttribute('normal', new THREE.BufferAttribute(nb, 3)); ballG.deleteAttribute('uv');
  const bm = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7 });
  const k = new THREE.InstancedMesh(ballG, bm, balls.length);
  balls.forEach(([x, y, z], i) => { M.makeTranslation(x, y, z); k.setMatrixAt(i, M); });
  k.instanceMatrix.needsUpdate = true; k.castShadow = false; k.frustumCulled = false; k.name = 'kusudama';
  return [m, k];
}
