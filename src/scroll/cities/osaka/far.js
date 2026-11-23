// cities/osaka/far.js — 環状線の高架と電車の光の帯／遠景の街区と窓明かりの海／生駒山系の稜線。東京 far.js と同じ作法。
import * as THREE from 'three';
import { createGlowPoints } from '../../../lib/glow.js';
import { VIADUCT, CITY_BOXES, HARUKAS, TSUTENKAKU } from './layout.js';

const V3 = THREE.Vector3;

// ---------------------------------------------------------------- 高架（桁・防音壁・レール・柱・電柱のインスタンス箱）＋電車の光の帯
export function buildViaduct() {
  const pts = VIADUCT.pts, W = VIADUCT.w, Y = VIADUCT.deckY;
  const inst = [], segs = [];
  const conc = [0.085, 0.085, 0.1], steel = [0.16, 0.16, 0.18];
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, z0] = pts[i], [x1, z1] = pts[i + 1];
    const len = Math.hypot(x1 - x0, z1 - z0), dx = (x1 - x0) / len, dz = (z1 - z0) / len, rot = Math.atan2(-dz, dx);
    const nx = -dz, nz = dx;
    segs.push({ x0, z0, dx, dz, nx, nz, len });
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    inst.push({ x: cx, y: Y - 0.9, z: cz, sx: len + 0.4, sy: 1.8, sz: W, rot, col: conc });
    for (const s of [-1, 1]) inst.push({ x: cx + nx * s * (W / 2 - 0.4), y: Y + 0.55, z: cz + nz * s * (W / 2 - 0.4), sx: len + 0.4, sy: 1.1, sz: 0.8, rot, col: conc });
    for (const tr of [-2.7, 2.7]) for (const r of [-0.72, 0.72]) inst.push({ x: cx + nx * (tr + r), y: Y + 0.08, z: cz + nz * (tr + r), sx: len, sy: 0.16, sz: 0.14, rot, col: steel });
    const nc = Math.max(1, Math.round(len / 19));
    for (let k = 0; k < nc; k++) {
      const u = (k + 0.5) / nc * len, px = x0 + dx * u, pz = z0 + dz * u;
      for (const s of [-1, 1]) inst.push({ x: px + nx * s * 4.2, y: (Y - 1.8) / 2, z: pz + nz * s * 4.2, sx: 1.7, sy: Y - 1.8, sz: 1.7, rot, col: conc });
      inst.push({ x: px, y: Y - 2.3, z: pz, sx: 1.2, sy: 1.0, sz: W - 1.5, rot, col: conc });
    }
    const np = Math.max(1, Math.round(len / 32));
    for (let k = 0; k < np; k++) { const u = (k + 0.5) / np * len; for (const s of [-1, 1]) inst.push({ x: x0 + dx * u + nx * s * 5.7, y: Y + 3.2, z: z0 + dz * u + nz * s * 5.7, sx: 0.22, sy: 6.4, sz: 0.22, rot, col: steel }); }
  }
  const geo = new THREE.BoxGeometry(1, 1, 1);
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.92, metalness: 0.0 });
  const mesh = new THREE.InstancedMesh(geo, mat, inst.length);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new V3(), s = new V3(), c = new THREE.Color();
  inst.forEach((o, i) => { q.setFromAxisAngle(new V3(0, 1, 0), o.rot); m.compose(p.set(o.x, o.y, o.z), q, s.set(o.sx, o.sy, o.sz)); mesh.setMatrixAt(i, m); mesh.setColorAt(i, c.setRGB(...o.col)); });
  mesh.instanceMatrix.needsUpdate = true; mesh.instanceColor.needsUpdate = true; mesh.name = 'viaduct';
  mesh.frustumCulled = false;

  const A = [], D = [], L = [], PH = [], SP = [], OFF = [];
  segs.forEach((sg) => {
    const n = Math.max(1, Math.round(sg.len / 300));
    for (const tr of [-2.7, 2.7]) for (let k = 0; k < n; k++) {
      A.push(sg.x0, sg.z0); D.push(sg.dx, sg.dz); L.push(sg.len); PH.push((k + (tr > 0 ? 0.37 : 0.0)) / n + 0.03 * Math.sin(sg.x0 + k)); SP.push(tr > 0 ? 17 : -15); OFF.push(tr);
    }
  });
  const nT = L.length;
  const g = new THREE.InstancedBufferGeometry(); const b = new THREE.BoxGeometry(1, 1, 1);
  g.index = b.index; g.attributes.position = b.attributes.position; g.attributes.normal = b.attributes.normal; g.instanceCount = nT;
  const ia = (arr, sz) => new THREE.InstancedBufferAttribute(new Float32Array(arr), sz);
  g.setAttribute('aA', ia(A, 2)); g.setAttribute('aD', ia(D, 2)); g.setAttribute('aLen', ia(L, 1)); g.setAttribute('aPh', ia(PH, 1)); g.setAttribute('aSp', ia(SP, 1)); g.setAttribute('aOff', ia(OFF, 1));
  const uniforms = { uTime: { value: 0 }, uGain: { value: 1 }, uFog: { value: 0.00004 } };
  const tmat = new THREE.ShaderMaterial({
    uniforms, vertexShader: /* glsl */ `
      attribute vec2 aA, aD; attribute float aLen, aPh, aSp, aOff;
      uniform float uTime, uFog; varying float vX; varying float vFog; varying float vFace; varying float vTop;
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
        vFog = exp(-pow(uFog * dist, 2.0)) * (0.5 + 0.5 * smoothstep(1800.0, 300.0, dist)) * (0.10 + 0.90 * smoothstep(20.0, 130.0, dist));
        vFace = step(0.45, abs(position.z));
        vTop = step(0.5, normal.y);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uGain; varying float vX; varying float vFog; varying float vFace; varying float vTop;
      void main(){
        float win = step(0.22, fract(vX / 3.3));
        vec3 col = mix(vec3(0.5, 0.52, 0.55), vec3(2.0, 1.85, 1.45), win * vFace * (1.0 - vTop)) * (0.45 + 0.55 * vFace * (1.0 - vTop)) * (1.0 - 0.45 * vTop);
        gl_FragColor = vec4(col * uGain * vFog, 1.0);
      }`,
  });
  const trains = new THREE.Mesh(g, tmat); trains.frustumCulled = false; trains.name = 'viaduct-trains';
  return { meshes: [mesh, trains], uniforms };
}

// ---------------------------------------------------------------- 遠景の街区＋窓明かりの海（東京と同じ：バッチ＋窓グロー点）
export function buildFarCity(rng, batch) {
  const cx0 = 100, cz0 = 1300, R = 5200;
  const pos = [], col = [], siz = [];
  let seed = 90000, n = 0;
  const inBox = (x, z, p) => CITY_BOXES.some((b) => x > b.x0 - p && x < b.x1 + p && z > b.z0 - p && z < b.z1 + p);
  const segD = (x, z, ax, az, bx, bz) => { const dx = bx - ax, dz = bz - az, t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / (dx * dx + dz * dz))); return Math.hypot(x - (ax + dx * t), z - (az + dz * t)); };
  for (let tries = 0; tries < 30000 && n < 12000; tries++) {
    const r = R * Math.pow(rng(), 0.72), a = rng() * Math.PI * 2;
    const x = cx0 + Math.cos(a) * r * 1.15, z = cz0 + Math.sin(a) * r * 0.95;
    if (inBox(x, z, 30)) continue;
    if (Math.hypot(x - HARUKAS.x, z - HARUKAS.z) < 90 || Math.hypot(x - TSUTENKAKU.x, z - TSUTENKAKU.z) < 60) continue;
    let near = false; const P = [[150, 2380], [420, 2650], [700, 2950], [880, 3280]];
    for (let i = 0; i < P.length - 1 && !near; i++) if (segD(x, z, P[i][0], P[i][1], P[i + 1][0], P[i + 1][1]) < 40) near = true;
    if (near) continue;
    const w = 24 + rng() * 30, dd = 24 + rng() * 30;
    const d = Math.hypot(x - 100, z - 900);
    const falloff = d < 2200 ? 1 : 0.72;
    let h = (24 + 70 * Math.pow(rng(), 1.6)) * falloff;
    if (rng() < 0.05) h *= 1.8;
    const kind = h > 80 ? 2 : [0, 3, 4][Math.floor(rng() * 3)];
    batch.add(x, 0, z, w, h, dd, kind, seed++ + rng(), 0.45 + 0.5 * rng(), rng() * 0.5 - 0.25);
    n++;
    const k = h > 80 ? 5 : 3;
    for (let j = 0; j < k; j++) {
      const side = Math.floor(rng() * 4), t = rng() - 0.5;
      const px = x + (side < 2 ? (side ? 1 : -1) * w / 2 : t * w), pz = z + (side >= 2 ? (side === 2 ? 1 : -1) * dd / 2 : t * dd);
      pos.push(px, 3 + rng() * (h - 4), pz);
      const wm = rng();
      if (wm < 0.6) col.push(2.4, 1.7, 0.9); else if (wm < 0.88) col.push(2.6, 2.4, 1.9); else col.push(1.2, 1.9, 2.8);
      siz.push(0.8 + rng() * 0.8);
    }
    if (h > 95) { pos.push(x, h + 1, z); col.push(3.0, 0.15, 0.1); siz.push(1.6); }
  }
  const glow = createGlowPoints(THREE, { positions: new Float32Array(pos), colors: new Float32Array(col), sizes: new Float32Array(siz), fogDensity: 0.00004, minPx: 1.3, maxPx: 7 });
  return { glow, blocks: n, points: siz.length };
}

// 遠景の窓テクスチャ（東京と同じ）
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

// ---------------------------------------------------------------- 生駒山系の稜線（東〜南東の遠景シルエット。富士山の作法で帯状に）
export function buildRidge() {
  const rngPts = [];
  let s = 5150; const rnd = () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296);
  const line = [];
  for (let i = 0; i <= 40; i++) {
    const t = i / 40;
    line.push([4200 + t * 4600, 900 + t * 4200, 260 + 340 * Math.abs(Math.sin(t * 9.3 + 1.2)) * (0.5 + rnd() * 0.5) + 120 * Math.sin(t * Math.PI)]);
  }
  const verts = [], uvs = [], idx = [];
  line.forEach(([x, z, h], i) => {
    verts.push(x, -10, z, x, h, z);
    uvs.push(i / (line.length - 1), 0, i / (line.length - 1), 1);
    if (i > 0) { const b = (i - 1) * 2; idx.push(b, b + 1, b + 2, b + 1, b + 3, b + 2); }
  });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(idx);
  const uniforms = { uBody: { value: new THREE.Color(0.05, 0.06, 0.12) }, uTop: { value: new THREE.Color(0.1, 0.11, 0.2) } };
  const mat = new THREE.ShaderMaterial({
    uniforms, fog: false, depthWrite: true, side: THREE.DoubleSide,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: 'uniform vec3 uBody, uTop; varying vec2 vUv; void main(){ gl_FragColor = vec4(mix(uBody, uTop, smoothstep(0.15, 1.0, vUv.y)), 1.0); }',
  });
  const mesh = new THREE.Mesh(geo, mat); mesh.frustumCulled = false; mesh.name = 'ridge'; mesh.renderOrder = -1;
  return { mesh, uniforms, tris: idx.length / 3 };
}
