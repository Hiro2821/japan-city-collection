// cities/kyoto/far.js — フィナーレの遠景：盆地の低い屋根の海（格子状の街区＋窓明かり）、京都タワー（131 m）、京都駅ビル、西の山並みのシルエット。決定的（makeRng の seed のみ）、CPU 更新なし。
import * as THREE from 'three';
import { createGlowPoints } from '../../../lib/glow.js';
import { TOWER_K, STATION_K, CITY } from './layout.js';

/** 遠景の街区の窓：ワールド座標から窓格子をひく（ミップで遠いほど平均化＝灯りの海）。 */
export function makeFarMaterial(rng) {
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, 128, 128);
  for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) { const r = rng(); if (r > 0.4) continue; g.fillStyle = r < 0.26 ? '#ffb15a' : r < 0.34 ? '#ffe2b8' : '#c8d8ff'; g.fillRect(i * 16 + 3, j * 16 + 4, 10, 8); }
  const tex = new THREE.CanvasTexture(c); tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4; tex.generateMipmaps = true; tex.minFilter = THREE.LinearMipmapLinearFilter;
  const mat = new THREE.MeshStandardMaterial({ color: 0x0a0d1a, roughness: 1.0, emissive: new THREE.Color(0.004, 0.005, 0.012), emissiveIntensity: 1 });
  const uniforms = { uWinTex: { value: tex }, uWinGain: { value: 1.0 } };
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uniforms);
    sh.vertexShader = 'varying vec3 vWp;\n' + sh.vertexShader.replace('#include <project_vertex>', '#include <project_vertex>\n vWp = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = 'varying vec3 vWp; uniform sampler2D uWinTex; uniform float uWinGain;\n' + sh.fragmentShader.replace('#include <emissivemap_fragment>',
      '#include <emissivemap_fragment>\n float wall = 1.0 - step(0.5, abs(normalize(cross(dFdx(vWp), dFdy(vWp))).y));\n vec2 wuv = vec2((vWp.x + vWp.z) / 13.0, vWp.y / 9.0);\n totalEmissiveRadiance += texture2D(uWinTex, wuv).rgb * uWinGain * wall;');
  };
  mat.customProgramCacheKey = () => 'kyoto-farwin-v1';
  return { mat, uniforms };
}

/** 盆地の街区：京都の碁盤の目（東西 約 110 m・南北 約 100 m の区画）に低い建物を詰め、窓明かりの光点を添える。 */
export function buildFarCity(rng, batch) {
  const pos = [], col = [], siz = []; let seed = 70000, n = 0;
  const inCity = (x, z, p) => x > CITY.x0 - p && x < CITY.x1 + p && z > CITY.z0 - p && z < CITY.z1 + p;
  for (let gx = -3400; gx < 1000 && n < 25500; gx += 110) for (let gz = -1900; gz < 3600 && n < 25500; gz += 100) {
    const dx = gx + 55, dz = gz + 50;
    if (inCity(dx, dz, 30)) continue;
    if (dx > 300 && dz < 700 + (dx - 300) * 0.9 && dz > -500 && dx > 440 && dz < 900) continue;               // 東山のふもと（斜面。建物を置かない）
    if (dx > 600) continue;
    if (Math.hypot(dx - TOWER_K.x, dz - TOWER_K.z) < 70) continue;
    if (Math.abs(dx - STATION_K.x) < 260 && Math.abs(dz - STATION_K.z) < 70) continue;
    const dens = Math.max(0.25, 1 - Math.hypot(dx + 400, dz - 800) / 5200);
    if (rng() > dens + 0.15) continue;
    for (let a = 0; a < 3; a++) for (let b = 0; b < 4; b++) {
      if (n >= 25500) break; if (rng() < 0.12) continue;
      const w = 22 + rng() * 8, d = 16 + rng() * 6, x = gx + 6 + a * 34 + w / 2 + rng() * 2, z = gz + 5 + b * 23 + d / 2;
      let h = 6 + 9 * Math.pow(rng(), 1.5); if (rng() < 0.06) h += 16;                                        // 低層が中心（ときどき中層）
      batch.add(x, 0, z, w, h, d, h > 13 ? 2 : [0, 3][Math.floor(rng() * 2)], seed++ + rng(), 0.45 + 0.5 * rng(), rng() * 0.1 - 0.05); n++;
      for (let j = 0; j < 3; j++) {
        const side = Math.floor(rng() * 4), t = rng() - 0.5, px = x + (side < 2 ? (side ? 1 : -1) * w / 2 : t * w), pz = z + (side >= 2 ? (side === 2 ? 1 : -1) * d / 2 : t * d);
        pos.push(px, 2 + rng() * (h - 2), pz); const wm = rng(); if (wm < 0.62) col.push(2.5, 1.7, 0.85); else if (wm < 0.9) col.push(2.7, 2.4, 1.8); else col.push(1.3, 1.9, 2.8); siz.push(0.9 + rng() * 0.9);
      }
    }
  }
  // 主要な通り（烏丸・堀川などの南北）に街灯の列
  for (let gx = -2400; gx < 500; gx += 330) for (let z = -1500; z < 3500; z += 38) { pos.push(gx + rng() * 4, 6, z); col.push(2.2, 1.5, 0.8); siz.push(1.0); }
  const glow = createGlowPoints(THREE, { positions: new Float32Array(pos), colors: new Float32Array(col), sizes: new Float32Array(siz), fogDensity: 0.00004, minPx: 1.3, maxPx: 7 });
  return { glow, blocks: n, points: siz.length };
}

/** 京都タワー（131 m）：白い円筒の塔身＋展望室＋アンテナ＋足元の建物。ライトアップは淡い白〜青白（U-15）。 */
/** 実物 131 m を 1.5 倍に誇張（最終構図でタワーが読めるように。U-7 の「らしさの再現」の範囲）。 */
export const TOWER_SCALE = 1.5;
export function buildKyotoTower() {
  const parts = [];
  const add = (g, y, col) => { g = g.toNonIndexed(); g.translate(0, y, 0); const n = g.attributes.position.count, c = new Float32Array(n * 3); for (let i = 0; i < n; i++) { c[i * 3] = col[0]; c[i * 3 + 1] = col[1]; c[i * 3 + 2] = col[2]; } g.deleteAttribute('uv'); g.setAttribute('color', new THREE.BufferAttribute(c, 3)); parts.push(g); };
  const W = [0.9, 0.95, 1.0], B = [0.55, 0.6, 0.7];
  add(new THREE.BoxGeometry(52, 9, 34), 0, [0.16, 0.17, 0.2]);                                    // 足元の建物
  add(new THREE.CylinderGeometry(4.2, 5.2, 100, 12, 6, false), 9, W);              // 塔身
  add(new THREE.CylinderGeometry(8.5, 4.2, 5, 12, 1, false), 100, W);              // 展望室の下すぼまり
  add(new THREE.CylinderGeometry(8.5, 8.5, 5, 12, 1, false), 105, [1.0, 0.95, 0.75]);   // 展望室
  add(new THREE.CylinderGeometry(6.5, 8.5, 2, 12, 1, false), 110, W);
  add(new THREE.CylinderGeometry(0.4, 2.0, 21, 8, 1, false), 112, W);               // アンテナ
  let N = 0; for (const g of parts) N += g.attributes.position.count;
  const P = new Float32Array(N * 3), Nn = new Float32Array(N * 3), C = new Float32Array(N * 3); let o = 0;
  for (const g of parts) { P.set(g.attributes.position.array, o * 3); Nn.set(g.attributes.normal.array, o * 3); C.set(g.attributes.color.array, o * 3); o += g.attributes.position.count; }
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(P, 3)); geo.setAttribute('normal', new THREE.BufferAttribute(Nn, 3)); geo.setAttribute('color', new THREE.BufferAttribute(C, 3));
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, metalness: 0, emissive: new THREE.Color(0.7, 0.85, 1.0), emissiveIntensity: 0.5 });
  mat.onBeforeCompile = (sh) => { sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance *= vColor.rgb;'); };
  mat.customProgramCacheKey = () => 'kyoto-tower-v1';
  const mesh = new THREE.Mesh(geo, mat); mesh.position.set(TOWER_K.x, 0, TOWER_K.z); mesh.scale.setScalar(TOWER_SCALE); mesh.name = 'kyoto-tower'; mesh.frustumCulled = false;
  const glow = createGlowPoints(THREE, { positions: new Float32Array([TOWER_K.x, 134 * TOWER_SCALE, TOWER_K.z, TOWER_K.x, 107 * TOWER_SCALE, TOWER_K.z, TOWER_K.x, 70 * TOWER_SCALE, TOWER_K.z]), colors: new Float32Array([3.0, 0.2, 0.15, 2.4, 2.6, 3.0, 1.2, 1.4, 1.8]), sizes: new Float32Array([2.0, 6, 4]), fogDensity: 0.00004, minPx: 2, maxPx: 24 });
  return { mesh, mat, glow, tris: N / 3 };
}

/** 西の山並み（愛宕・嵐山方面）と北・南の山：霞に溶けるシルエット。 */
export function buildRidges() {
  const mk = (cx, cz, len, ang, h0, off, seed) => {
    const SEG = 160, ROW = 5, pos = [], idx = [], k = [];
    for (let r = 0; r <= ROW; r++) for (let i = 0; i <= SEG; i++) {
      const u = i / SEG - 0.5, rough = 0.55 + 0.3 * Math.sin(u * 17 + seed) + 0.2 * Math.sin(u * 41 + seed * 2.1) + 0.1 * Math.sin(u * 93 + seed * 3.3);
      const env = Math.max(0, 1 - Math.pow(Math.abs(u) * 2, 2.5)), y = (1 - r / ROW) * h0 * rough * env, d = r * 160 + off;
      pos.push(u * len, y, d); k.push(r / ROW);
    }
    for (let r = 0; r < ROW; r++) for (let i = 0; i < SEG; i++) { const a = r * (SEG + 1) + i, b = a + 1, c = a + SEG + 1, e = c + 1; idx.push(a, c, b, b, c, e); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.rotateY(ang); g.translate(cx, 0, cz); return g;
  };
  const geos = [mk(-9000, 1100, 16000, Math.PI / 2 + 0.1, 900, 0, 1.0), mk(-6500, 1600, 12000, Math.PI / 2 + 0.2, 500, 0, 2.7), mk(-1200, -7000, 12000, 0.1, 700, 0, 4.1), mk(-1500, 8500, 12000, 0.0, 450, 0, 5.5)];
  const uniforms = { uBody: { value: new THREE.Color(0.05, 0.06, 0.12) } };
  const mat = new THREE.ShaderMaterial({ uniforms, fog: false, depthWrite: true,
    vertexShader: 'void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }', fragmentShader: 'uniform vec3 uBody; void main(){ gl_FragColor = vec4(uBody, 1.0); }' });
  const group = new THREE.Group(); group.name = 'ridges';
  geos.forEach((gg, i) => { const m = new THREE.Mesh(gg, mat); m.frustumCulled = false; m.renderOrder = -1; m.name = 'ridge' + i; group.add(m); });
  return { group, uniforms, tris: geos.reduce((a, gg) => a + gg.index.count / 3, 0) };
}
