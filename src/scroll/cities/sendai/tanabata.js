// cities/sendai/tanabata.js — 七夕飾り（吹き流し＋くす玉）。仕様書 §3「吹き流しの設計」。
//   形：五色の細い帯 20 本（縦 10 分割＝400 三角形）＋頂部のくす玉（80 三角形）。遠距離は 24 三角形の板に切り替える（領域単位の LOD）。
//   揺れ：頂点シェーダの二重の正弦（風の主流＋乱れ＋帯ごとのはためき）。位相はインスタンスごと。CPU 更新なし、時刻は ambientT。
//   不透明（アルファブレンドなし）。紙の灯りは夜に向かって強くなる（emissive）。
//   領域分割：80 m 格子ごとに InstancedMesh を作り、視錐台カリングが効くよう境界球に揺れ幅の余裕を持たせる。
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// 五色（青〔緑〕・赤・黄・白・紫）＋桃。線形値に近い彩度の高い色。
export const FIVE = [[0.06, 0.30, 0.85], [0.88, 0.08, 0.10], [0.96, 0.74, 0.08], [0.92, 0.92, 0.88], [0.45, 0.16, 0.62], [0.95, 0.35, 0.55], [0.1, 0.55, 0.3]];
const hash = (n) => { const v = Math.sin(n * 12.9898) * 43758.5453; return v - Math.floor(v); };

/** 近景：帯 20 本 + くす玉。y=0 が吊り下げ点（くす玉は上）。 */
export function streamerNear() {
  const STR = 20, SEG = 10, pos = [], col = [], aH = [], aS = [], nor = [], idx = [];
  for (let s = 0; s < STR; s++) {
    const a = (s / STR) * Math.PI * 2 + hash(s) * 0.3, r = 0.1 + 0.26 * hash(s + 40);
    const L = 3.3 + 1.5 * hash(s + 80), w = 0.085 + 0.04 * hash(s + 120);
    const c = FIVE[(s + (hash(s + 7) > 0.8 ? 1 : 0)) % 5];
    const face = a + 1.57 + (hash(s + 11) - 0.5) * 1.0;            // 帯の向き
    const fx = Math.cos(face), fz = Math.sin(face);
    const base = pos.length / 3;
    for (let j = 0; j <= SEG; j++) {
      const h = j / SEG, y = -0.15 - L * h, ww = w * (1 - 0.45 * h);
      for (const sd of [-1, 1]) {
        pos.push(Math.cos(a) * r + fx * ww * sd, y, Math.sin(a) * r + fz * ww * sd);
        const tint = 0.85 + 0.3 * hash(s * 31 + j);
        col.push(c[0] * tint, c[1] * tint, c[2] * tint); aH.push(h); aS.push(hash(s + 200)); nor.push(-fz, 0, fx);
      }
    }
    for (let j = 0; j < SEG; j++) { const i0 = base + j * 2; idx.push(i0, i0 + 1, i0 + 2, i0 + 1, i0 + 3, i0 + 2); }
  }
  const strands = new THREE.BufferGeometry();
  strands.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  strands.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  strands.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  strands.setAttribute('aH', new THREE.Float32BufferAttribute(aH, 1));
  strands.setAttribute('aS', new THREE.Float32BufferAttribute(aS, 1));
  strands.setIndex(idx);
  // くす玉（二十面体を細分し、面ごとに五色）
  const ball = new THREE.IcosahedronGeometry(0.42, 1).toNonIndexed();
  const bp = ball.attributes.position, bn = bp.count, bc = new Float32Array(bn * 3), bh = new Float32Array(bn), bs = new Float32Array(bn), nb = new Float32Array(bn * 3);
  for (let f = 0; f < bn / 3; f++) {
    const c = FIVE[Math.floor(hash(f + 3) * 6.99) % FIVE.length];
    for (let k = 0; k < 3; k++) { const i = f * 3 + k; bc.set(c, i * 3); bp.setY(i, bp.getY(i) + 0.3); }
  }
  for (let i = 0; i < bn; i++) { const x = bp.getX(i), y = bp.getY(i) - 0.3, z = bp.getZ(i), l = Math.hypot(x, y, z); nb[i * 3] = x / l; nb[i * 3 + 1] = y / l; nb[i * 3 + 2] = z / l; }
  ball.setAttribute('color', new THREE.BufferAttribute(bc, 3)); ball.setAttribute('aH', new THREE.BufferAttribute(bh, 1)); ball.setAttribute('aS', new THREE.BufferAttribute(bs, 1)); ball.setAttribute('normal', new THREE.BufferAttribute(nb, 3));
  ball.deleteAttribute('uv');
  const geo = mergeGeometries([strands.toNonIndexed(), ball]);
  geo.deleteAttribute('uv');
  geo.computeBoundingSphere(); geo.boundingSphere.radius += 1.6;   // 揺れ幅の余裕
  return geo;
}

/** 遠景：24 三角形（交差する 2 枚の先細りの板を 4 色帯に分け、頂部に八面体）。 */
export function streamerFar() {
  const pos = [], col = [], aH = [], aS = [], nor = [];
  const L = 4.2;
  for (const ang of [0, Math.PI / 2]) {
    const dx = Math.cos(ang), dz = Math.sin(ang);
    for (let b = 0; b < 4; b++) {
      const h0 = b / 4, h1 = (b + 1) / 4, c = FIVE[b % 5];
      const w0 = 0.28 * (1 - 0.5 * h0), w1 = 0.28 * (1 - 0.5 * h1), y0 = -0.15 - L * h0, y1 = -0.15 - L * h1;
      const q = [[-w0, y0, h0], [w0, y0, h0], [-w1, y1, h1], [w0, y0, h0], [w1, y1, h1], [-w1, y1, h1]];
      for (const [x, y, h] of q) { pos.push(dx * x, y, dz * x); col.push(...c); aH.push(h); aS.push(0.5); nor.push(-dz, 0, dx); }
    }
  }
  const oct = new THREE.OctahedronGeometry(0.4, 0).toNonIndexed(), op = oct.attributes.position;
  for (let i = 0; i < op.count; i++) { pos.push(op.getX(i), op.getY(i) + 0.3, op.getZ(i)); col.push(...FIVE[(i >> 2) % 5]); aH.push(0); aS.push(0); const l = Math.hypot(op.getX(i), op.getY(i), op.getZ(i)); nor.push(op.getX(i) / l, op.getY(i) / l, op.getZ(i) / l); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.setAttribute('aH', new THREE.Float32BufferAttribute(aH, 1)); g.setAttribute('aS', new THREE.Float32BufferAttribute(aS, 1));
  g.computeBoundingSphere(); g.boundingSphere.radius += 1.6;
  return g;
}

/** 揺れ＋夜の灯りを差し込む。uniforms: { uTime, uGlow }（near / far で共有）。 */
export function streamerMaterial(uniforms) {
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.75, metalness: 0, side: THREE.DoubleSide });
  mat.customProgramCacheKey = () => 'sendai-streamer-v1';
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = uniforms.uTime; shader.uniforms.uGlow = uniforms.uGlow;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aH, aS; attribute float aPhase; uniform float uTime;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        {
          float ph = aPhase, h = aH;
          float amp = 0.36 * h * h + 0.04 * h;
          float mainW = sin(uTime * 1.25 + ph + h * 2.0) + 0.55 * sin(uTime * 2.6 + ph * 1.7 + h * 3.7);
          float cross = 0.5 * sin(uTime * 1.05 + ph * 0.7 + h * 1.4 + 1.0);
          transformed.x += amp * mainW;
          transformed.z += amp * cross;
          transformed.x += 0.05 * h * sin(uTime * 5.0 + aS * 40.0 + h * 6.0);   // 帯ごとのはためき
          transformed.y += 0.18 * h * (1.0 - cos(amp * mainW * 1.5));
        }`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uGlow;')
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += diffuseColor.rgb * uGlow;');
  };
  return mat;
}

/**
 * 飾りの配置 → 80 m 領域ごとの InstancedMesh（近景・遠景）。
 * items: [{ x, y, z, s(スケール), yaw }]。戻り値 { group, chunks, total, setFraction(f), updateLod(camPos, farDist) }
 */
export function buildStreamers(items, rng, uniforms, cell = 80) {
  const near = streamerNear(), far = streamerFar();
  const matN = streamerMaterial(uniforms), matF = streamerMaterial(uniforms);
  const groups = new Map();
  for (const it of items) { const k = Math.floor(it.x / cell) + ',' + Math.floor(it.z / cell); (groups.get(k) ?? groups.set(k, []).get(k)).push(it); }
  const group = new THREE.Group(); group.name = 'streamers';
  const chunks = [];
  const M = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  for (const [, list] of groups) {
    for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; }   // 間引いても偏らないよう順序を混ぜる
    const mk = (geo, mat) => {
      const m = new THREE.InstancedMesh(geo.clone(), mat, list.length);
      m.geometry.boundingSphere = geo.boundingSphere.clone();
      const ph = new Float32Array(list.length);
      list.forEach((it, i) => { q.setFromAxisAngle(up, it.yaw); s.set(it.s, it.s, it.s); p.set(it.x, it.y, it.z); M.compose(p, q, s); m.setMatrixAt(i, M); ph[i] = it.phase; });
      m.geometry.setAttribute('aPhase', new THREE.InstancedBufferAttribute(ph, 1));
      m.instanceMatrix.needsUpdate = true; m.castShadow = false; m.receiveShadow = false; m.frustumCulled = true;
      m.computeBoundingSphere();
      return m;
    };
    const mn = mk(near, matN), mf = mk(far, matF);
    mn.name = 'streamer-near'; mf.name = 'streamer-far';
    let cx = 0, cz = 0; for (const it of list) { cx += it.x; cz += it.z; } cx /= list.length; cz /= list.length;
    let rad = 0; for (const it of list) rad = Math.max(rad, Math.hypot(it.x - cx, it.z - cz));
    group.add(mn, mf);
    chunks.push({ near: mn, far: mf, n: list.length, cx, cz, rad });
  }
  const total = items.length;
  return {
    group, chunks, total,
    setFraction(f) { for (const c of chunks) { const n = Math.max(0, Math.min(c.n, Math.ceil(c.n * f))); c.near.count = n; c.far.count = n; } },
    /** 領域ごとに近景／遠景を切り替える（CPU は領域数ぶんの距離計算のみ。インスタンスの更新なし）。 */
    updateLod(cam, farDist) {
      let nearN = 0, farN = 0;
      for (const c of chunks) {
        const d = Math.hypot(cam.x - c.cx, cam.z - c.cz) - c.rad;
        const useFar = d > farDist;
        c.near.visible = !useFar; c.far.visible = useFar;
        if (useFar) farN += c.far.count; else nearN += c.near.count;
      }
      return { nearN, farN };
    },
    geoTris: { near: near.index ? near.index.count / 3 : near.attributes.position.count / 3, far: far.attributes.position.count / 3 },
  };
}
