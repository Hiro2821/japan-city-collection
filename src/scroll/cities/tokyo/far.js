// cities/tokyo/far.js — ゾーンD：有楽町の高架と電車の光の帯／遠景の街区と窓明かりの海／東京タワー（格子を生成）／西の富士山シルエット。
//   すべて決定的（乱数は makeRng の seed のみ）。CPU 更新なし（電車は頂点シェーダが時刻だけで動かす）。実在のロゴ・商標は入れない。
import * as THREE from 'three';
import { createGlowPoints } from '../../../lib/glow.js';
import { VIADUCT, TOWER, FUJI, CITY_BOX, MOAT, SOUTH_Z } from './layout.js';

const V3 = THREE.Vector3;

// ---------------------------------------------------------------- 高架
export function buildViaduct() {
  const pts = VIADUCT.pts, W = VIADUCT.w, Y = VIADUCT.deckY;
  const inst = [];                       // {x,y,z, sx,sy,sz, rot, col}
  const segs = [];
  const conc = [0.085, 0.085, 0.1], steel = [0.16, 0.16, 0.18];
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, z0] = pts[i], [x1, z1] = pts[i + 1];
    const len = Math.hypot(x1 - x0, z1 - z0), dx = (x1 - x0) / len, dz = (z1 - z0) / len, rot = Math.atan2(-dz, dx);
    const nx = -dz, nz = dx;             // 横方向
    segs.push({ x0, z0, dx, dz, nx, nz, len });
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    inst.push({ x: cx, y: Y - 0.9, z: cz, sx: len + 0.4, sy: 1.8, sz: W, rot, col: conc });                          // 桁（床版）
    for (const s of [-1, 1]) inst.push({ x: cx + nx * s * (W / 2 - 0.4), y: Y + 0.55, z: cz + nz * s * (W / 2 - 0.4), sx: len + 0.4, sy: 1.1, sz: 0.8, rot, col: conc });   // 防音壁（低い手すり）
    for (const tr of [-2.7, 2.7]) for (const r of [-0.72, 0.72]) inst.push({ x: cx + nx * (tr + r), y: Y + 0.08, z: cz + nz * (tr + r), sx: len, sy: 0.16, sz: 0.14, rot, col: steel });   // レール 2本×2線
    const nc = Math.max(1, Math.round(len / 19));
    for (let k = 0; k < nc; k++) {
      const u = (k + 0.5) / nc * len, px = x0 + dx * u, pz = z0 + dz * u;
      for (const s of [-1, 1]) inst.push({ x: px + nx * s * 4.2, y: (Y - 1.8) / 2, z: pz + nz * s * 4.2, sx: 1.7, sy: Y - 1.8, sz: 1.7, rot, col: conc });                     // 柱
      inst.push({ x: px, y: Y - 2.3, z: pz, sx: 1.2, sy: 1.0, sz: W - 1.5, rot, col: conc });                                                                              // 梁
    }
    const np = Math.max(1, Math.round(len / 32));
    for (let k = 0; k < np; k++) { const u = (k + 0.5) / np * len; for (const s of [-1, 1]) inst.push({ x: x0 + dx * u + nx * s * 5.7, y: Y + 3.2, z: z0 + dz * u + nz * s * 5.7, sx: 0.22, sy: 6.4, sz: 0.22, rot, col: steel }); }   // 電柱
  }
  const geo = new THREE.BoxGeometry(1, 1, 1);
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.92, metalness: 0.0 });
  const mesh = new THREE.InstancedMesh(geo, mat, inst.length);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new V3(), s = new V3(), c = new THREE.Color();
  inst.forEach((o, i) => { q.setFromAxisAngle(new V3(0, 1, 0), o.rot); m.compose(p.set(o.x, o.y, o.z), q, s.set(o.sx, o.sy, o.sz)); mesh.setMatrixAt(i, m); mesh.setColorAt(i, c.setRGB(...o.col)); });
  mesh.instanceMatrix.needsUpdate = true; mesh.instanceColor.needsUpdate = true; mesh.name = 'viaduct';
  mesh.geometry.computeBoundingSphere(); mesh.frustumCulled = false;

  // 電車の光の帯（窓の並び）：区間ごとに 2 線 × 数本。区間端でクリップして「出入りする」ように見せる。
  const A = [], D = [], L = [], PH = [], SP = [], OFF = [];
  segs.forEach((sg) => {
    const n = Math.max(1, Math.round(sg.len / 300));
    for (const tr of [-2.7, 2.7]) for (let k = 0; k < n; k++) {
      A.push(sg.x0, sg.z0); D.push(sg.dx, sg.dz); L.push(sg.len); PH.push((k + (tr > 0 ? 0.37 : 0.0)) / n + 0.03 * Math.sin(sg.x0 + k)); SP.push(tr > 0 ? 17 : -15); OFF.push(tr);
    }
  });
  const nT = L.length;
  const g = new THREE.InstancedBufferGeometry(); const b = new THREE.BoxGeometry(1, 1, 1);
  g.index = b.index; g.attributes.position = b.attributes.position; g.instanceCount = nT;
  const ia = (arr, sz) => new THREE.InstancedBufferAttribute(new Float32Array(arr), sz);
  g.setAttribute('aA', ia(A, 2)); g.setAttribute('aD', ia(D, 2)); g.setAttribute('aLen', ia(L, 1)); g.setAttribute('aPh', ia(PH, 1)); g.setAttribute('aSp', ia(SP, 1)); g.setAttribute('aOff', ia(OFF, 1));
  const uniforms = { uTime: { value: 0 }, uGain: { value: 1 }, uFog: { value: 0.00004 } };
  const tmat = new THREE.ShaderMaterial({
    uniforms, vertexShader: /* glsl */ `
      attribute vec2 aA, aD; attribute float aLen, aPh, aSp, aOff;
      uniform float uTime, uFog; varying float vX; varying float vFog; varying float vFace;
      void main(){
        float TL = 150.0;
        float tot = aLen + TL;
        float u = fract(aPh + uTime * aSp / tot * (aSp < 0.0 ? -1.0 : 1.0) * sign(aSp));
        float head = u * tot - TL;
        float s0 = clamp(head, 0.0, aLen), s1 = clamp(head + TL, 0.0, aLen);
        float s = mix(s0, s1, position.x + 0.5);
        vX = s;
        vec2 nrm = vec2(-aD.y, aD.x);
        vec2 xz = aA + aD * s + nrm * (aOff + position.z * 3.0);
        vec3 w = vec3(xz.x, ${(Y + 1.9).toFixed(2)} + position.y * 2.0, xz.y);
        vec4 mv = viewMatrix * vec4(w, 1.0);
        float dist = max(-mv.z, 0.1);
        vFog = exp(-pow(uFog * dist, 2.0)) * (0.5 + 0.5 * smoothstep(1800.0, 300.0, dist));
        vFace = step(0.45, abs(position.z)) ;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uGain; varying float vX; varying float vFog; varying float vFace;
      void main(){
        float win = step(0.22, fract(vX / 3.3));
        vec3 col = mix(vec3(0.5, 0.52, 0.55), vec3(3.2, 2.9, 2.2), win) * (0.45 + 0.55 * vFace);
        gl_FragColor = vec4(col * uGain * vFog, 1.0);
      }`,
  });
  const trains = new THREE.Mesh(g, tmat); trains.frustumCulled = false; trains.name = 'viaduct-trains';
  return { meshes: [mesh, trains], uniforms };
}

// ---------------------------------------------------------------- 遠景の街区＋窓明かりの海
export function buildFarCity(rng, batch, tower) {
  const cx0 = -300, cz0 = 1000, R = 5200;
  const pos = [], col = [], siz = [];
  let seed = 90000, n = 0;
  const inBox = (x, z, p) => x > CITY_BOX.x0 - p && x < CITY_BOX.x1 + p && z > CITY_BOX.z0 - p && z < CITY_BOX.z1 + p;
  for (let tries = 0; tries < 30000 && n < 16000; tries++) {
    const r = R * Math.pow(rng(), 0.72), a = rng() * Math.PI * 2;
    const x = cx0 + Math.cos(a) * r * 1.15, z = cz0 + Math.sin(a) * r * 0.95;
    if (inBox(x, z, 30)) continue;
    if (x < -190 && x > -1250 && z > -560 && z < 520) continue;                         // 皇居（暗い量塊側）
    if (Math.hypot(x - tower.x, z - tower.z) < 90) continue;
    const d = Math.hypot(x - 100, z - 400);
    // 高架の近く（幅 40 m）は空ける
    let near = false; const P = VIADUCT.pts;
    for (let i = 0; i < P.length - 1 && !near; i++) { const [ax, az] = P[i], [bx, bz] = P[i + 1]; const t = Math.max(0, Math.min(1, ((x - ax) * (bx - ax) + (z - az) * (bz - az)) / ((bx - ax) ** 2 + (bz - az) ** 2))); if (Math.hypot(x - ax - (bx - ax) * t, z - az - (bz - az) * t) < 40) near = true; }
    if (near) continue;
    const w = 24 + rng() * 30, dd = 24 + rng() * 30;
    const falloff = d < 2200 ? 1 : 0.72;
    let h = (24 + 70 * Math.pow(rng(), 1.6)) * falloff;
    if (rng() < 0.05) h *= 1.8;                                                           // ところどころの超高層
    const kind = h > 80 ? 2 : [0, 3, 4][Math.floor(rng() * 3)];
    batch.add(x, 0, z, w, h, dd, kind, seed++ + rng(), 0.45 + 0.5 * rng(), rng() * 0.5 - 0.25);
    n++;
    // 窓明かり：壁面の高さ方向にランダム（約 2〜4 点）
    const k = h > 80 ? 5 : 3;
    for (let j = 0; j < k; j++) {
      const side = Math.floor(rng() * 4), t = rng() - 0.5;
      const px = x + (side < 2 ? (side ? 1 : -1) * w / 2 : t * w), pz = z + (side >= 2 ? (side === 2 ? 1 : -1) * dd / 2 : t * dd);
      pos.push(px, 3 + rng() * (h - 4), pz);
      const wm = rng();
      if (wm < 0.6) col.push(2.4, 1.7, 0.9); else if (wm < 0.88) col.push(2.6, 2.4, 1.9); else col.push(1.2, 1.9, 2.8);
      siz.push(0.8 + rng() * 0.8);
    }
    if (h > 95) { pos.push(x, h + 1, z); col.push(3.0, 0.15, 0.1); siz.push(1.6); }       // 航空障害灯
  }
  const glow = createGlowPoints(THREE, { positions: new Float32Array(pos), colors: new Float32Array(col), sizes: new Float32Array(siz), fogDensity: 0.00004, minPx: 1.3, maxPx: 7 });
  return { glow, blocks: n, points: siz.length };
}

// ---------------------------------------------------------------- 東京タワー
const hwAt = (y) => (y <= 150 ? 14 + 26 * Math.pow(1 - y / 150, 1.7) : y <= 250 ? 14 - 9 * Math.pow((y - 150) / 100, 1.15) : 5 - 3.6 * Math.min(1, (y - 250) / 40));
function beamInto(P, N, I, a, b, t) {
  const d = new V3().subVectors(b, a); const L = d.length(); if (L < 1e-4) return; d.divideScalar(L);
  const ref = Math.abs(d.y) > 0.95 ? new V3(1, 0, 0) : new V3(0, 1, 0);
  const u = new V3().crossVectors(d, ref).normalize(), v = new V3().crossVectors(d, u).normalize();
  const base = P.length / 3, h = t / 2;
  for (const e of [a, b]) for (const [su, sv] of [[1, 1], [-1, 1], [-1, -1], [1, -1]]) {
    const nx = u.x * su + v.x * sv, ny = u.y * su + v.y * sv, nz = u.z * su + v.z * sv, nl = Math.hypot(nx, ny, nz);
    P.push(e.x + (u.x * su + v.x * sv) * h, e.y + (u.y * su + v.y * sv) * h, e.z + (u.z * su + v.z * sv) * h); N.push(nx / nl, ny / nl, nz / nl);
  }
  for (let k = 0; k < 4; k++) { const k2 = (k + 1) % 4; I.push(base + k, base + 4 + k, base + k2, base + k2, base + 4 + k, base + 4 + k2); }
}
function boxInto(P, N, I, cx, y0, y1, hw) {
  const g = new THREE.BoxGeometry(2 * hw, y1 - y0, 2 * hw).toNonIndexed(); g.translate(cx[0], (y0 + y1) / 2, cx[1]);
  const base = P.length / 3, p = g.attributes.position.array, nn = g.attributes.normal.array;
  for (let i = 0; i < p.length; i++) { P.push(p[i]); N.push(nn[i]); }
  for (let i = 0; i < p.length / 3; i++) I.push(base + i);
}
function latticeGeo(step, thick, bayDiv) {
  const P = [], N = [], I = [];
  const corner = (y, sx, sz) => { const h = hwAt(y); return new V3(sx * h, y, sz * h); };
  const faces = [[1, 1, -1, 1], [-1, 1, -1, -1], [-1, -1, 1, -1], [1, -1, 1, 1]];      // 面ごとの両端コーナー符号
  const ys = []; for (let y = 0; y < 250; y += step) ys.push(y); ys.push(250);
  for (let i = 0; i < ys.length - 1; i++) {
    const y0 = ys[i], y1 = ys[i + 1];
    for (const [ax, az, bx, bz] of faces) {
      beamInto(P, N, I, corner(y0, ax, az), corner(y1, ax, az), thick * 1.9);                // 脚
      const bays = Math.max(1, Math.round(hwAt(y0) / bayDiv));
      const pt = (y, k) => corner(y, ax, az).lerp(corner(y, bx, bz), k / bays);
      for (let k = 0; k < bays; k++) {
        beamInto(P, N, I, pt(y0, k), pt(y1, k + 1), thick); beamInto(P, N, I, pt(y0, k + 1), pt(y1, k), thick);
        beamInto(P, N, I, pt(y1, k), pt(y1, k + 1), thick * 0.8);
      }
    }
  }
  // 上部：4 本が細くなって 1 本のマストへ（250〜290）、アンテナ（290〜333）
  for (const [sx, sz] of [[1, 1], [-1, 1], [-1, -1], [1, -1]]) beamInto(P, N, I, corner(250, sx, sz), new V3(0, 290, 0), thick * 1.6);
  beamInto(P, N, I, new V3(0, 250, 0), new V3(0, 333, 0), thick * 1.7 + 0.6);
  // 展望台（大展望台 2 段・特別展望台）
  boxInto(P, N, I, [0, 0], 124, 133, 15.2); boxInto(P, N, I, [0, 0], 133.5, 141, 12.5); boxInto(P, N, I, [0, 0], 232, 246, 6.6);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3)); g.setIndex(I);
  return g;
}
export function buildTower() {
  const mat = new THREE.MeshStandardMaterial({ color: 0x3a1c08, roughness: 0.7, metalness: 0.0, emissive: new THREE.Color(1.0, 0.36, 0.07), emissiveIntensity: 0.9 });
  const near = new THREE.Mesh(latticeGeo(1.7, 0.4, 11), mat), far = new THREE.Mesh(latticeGeo(9, 1.5, 40), mat);
  for (const m of [near, far]) { m.position.set(TOWER.x, 0, TOWER.z); m.rotation.y = 0; m.frustumCulled = false; }
  near.name = 'tower-near'; far.name = 'tower-far';
  // LED の縁取り（脚と頂部）＋足元の投光＋頂部の標識灯
  const pos = [], col = [], siz = [];
  for (const [sx, sz] of [[1, 1], [-1, 1], [-1, -1], [1, -1]]) for (let y = 4; y <= 250; y += 4) { const h = hwAt(y); pos.push(TOWER.x + sx * h, y, TOWER.z + sz * h); col.push(3.2, 1.4, 0.35); siz.push(0.9); }
  for (let y = 252; y <= 333; y += 3) { pos.push(TOWER.x, y, TOWER.z); col.push(3.2, 1.5, 0.5); siz.push(0.8); }
  for (let i = 0; i < 48; i++) { const a = (i / 48) * Math.PI * 2; pos.push(TOWER.x + Math.cos(a) * 52, 1.5, TOWER.z + Math.sin(a) * 52); col.push(3.6, 1.5, 0.35); siz.push(2.2); }
  pos.push(TOWER.x, 335, TOWER.z); col.push(4.0, 0.2, 0.15); siz.push(2.4);
  const glow = createGlowPoints(THREE, { positions: new Float32Array(pos), colors: new Float32Array(col), sizes: new Float32Array(siz), fogDensity: 0.00004, minPx: 1.4, maxPx: 16 });
  return {
    near, far, mat, glow, trisNear: near.geometry.index.count / 3, trisFar: far.geometry.index.count / 3,
    update(cam, n) { const d = Math.hypot(cam.x - TOWER.x, cam.z - TOWER.z, Math.max(0, cam.y - 160) * 0.5); near.visible = d < 650; far.visible = !near.visible; mat.emissiveIntensity = 0.5 + 0.4 * n; glow.uniforms.uGain.value = 0.7 + 0.8 * n; },
  };
}

// ---------------------------------------------------------------- 富士山（西の地平線のシルエット）
export function buildFuji() {
  const SEG = 120, RING = 22, H = FUJI.height, R0 = H * 5.2;
  const pos = [], colr = [], idx = [];
  for (let i = 0; i <= RING; i++) {
    const v = i / RING, rr = R0 * Math.pow(1 - v, 1.0) * (1 + 0.0), y = H * Math.pow(v, 0.9) * (1 - 0.0);
    const prof = H * (1 - Math.pow(1 - v, 2.35) * 1.0);                                    // 裾野が長く伸びる稜線（凹曲線）
    for (let j = 0; j <= SEG; j++) {
      const a = (j / SEG) * Math.PI * 2, rough = 1 + 0.03 * Math.sin(a * 7 + v * 5) + 0.015 * Math.sin(a * 17 + v * 9);
      const r = R0 * Math.pow(1 - v, 1.0) * rough;
      pos.push(Math.cos(a) * r, Math.max(0, prof * (1 + 0.012 * Math.sin(a * 11))) , Math.sin(a) * r);
      const snow = Math.max(0, Math.min(1, (v - 0.62) / 0.3));
      colr.push(1 - snow * 0.0, snow, 0);
    }
  }
  for (let i = 0; i < RING; i++) for (let j = 0; j < SEG; j++) { const a = i * (SEG + 1) + j, b = a + 1, c = a + SEG + 1, d = c + 1; idx.push(a, c, b, b, c, d); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('aSnow', new THREE.Float32BufferAttribute(colr.filter((_, k) => k % 3 === 1), 1)); g.setIndex(idx);
  const uniforms = { uBody: { value: new THREE.Color(0.05, 0.06, 0.12) }, uTop: { value: new THREE.Color(0.1, 0.11, 0.2) } };
  const mat = new THREE.ShaderMaterial({
    uniforms, fog: false, depthWrite: true,
    vertexShader: 'attribute float aSnow; varying float vS; void main(){ vS = aSnow; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: 'uniform vec3 uBody, uTop; varying float vS; void main(){ gl_FragColor = vec4(mix(uBody, uTop, vS), 1.0); }',
  });
  const mesh = new THREE.Mesh(g, mat); mesh.position.set(FUJI.x, -2, FUJI.z); mesh.frustumCulled = false; mesh.name = 'fuji'; mesh.renderOrder = -1;
  return { mesh, uniforms, tris: idx.length / 3 };
}

// 遠景の窓：ワールド座標から窓格子をひく。ミップマップ付きテクスチャなので遠いほど平均化されて「窓明かりの海」になる（砂目にならない）。
export function makeFarMaterial(rng) {
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) {
    const r = rng(); if (r > 0.42) continue;
    g.fillStyle = r < 0.24 ? '#ffb15a' : r < 0.36 ? '#ffe2b8' : '#9cc4ff';
    g.fillRect(i * 16 + 3, j * 16 + 4, 10, 8);
  }
  const tex = new THREE.CanvasTexture(c); tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4; tex.generateMipmaps = true; tex.minFilter = THREE.LinearMipmapLinearFilter;
  const mat = new THREE.MeshStandardMaterial({ color: 0x111a33, roughness: 0.95, emissive: new THREE.Color(0.02, 0.03, 0.07), emissiveIntensity: 1 });
  const uniforms = { uWinTex: { value: tex }, uWinGain: { value: 1.0 } };
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uniforms);
    sh.vertexShader = 'varying vec3 vWp;\n' + sh.vertexShader.replace('#include <project_vertex>', '#include <project_vertex>\n vWp = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = 'varying vec3 vWp; uniform sampler2D uWinTex; uniform float uWinGain;\n' + sh.fragmentShader.replace('#include <emissivemap_fragment>',
      '#include <emissivemap_fragment>\n float wall = 1.0 - step(0.5, abs(normalize(cross(dFdx(vWp), dFdy(vWp))).y));\n vec2 wuv = vec2((vWp.x + vWp.z) / 17.0, vWp.y / 17.0);\n totalEmissiveRadiance += texture2D(uWinTex, wuv).rgb * uWinGain * wall;');
  };
  return { mat, uniforms };
}
