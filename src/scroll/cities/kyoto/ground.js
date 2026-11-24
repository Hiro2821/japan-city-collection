// cities/kyoto/ground.js — 地面：高さ関数 H(x,z) で起伏をつけたメッシュ（鴨川の河床・東山の斜面）に、道（舗装・石畳・砂利・石段）・広場・河原を 1 枚のシェーダで描く。
//   乾いた石畳に提灯・町家の灯りの光だまり（拡散グロー。実反射は使わない＝U-14）。水面は別メッシュ（流れの筋と灯りの反転グロー）。
import * as THREE from 'three';
import { NOISE } from '../../../lib/glsl.js';
import { H, STREETS, RIBBONS, PLAZAS, RIVER, GROUND } from './layout.js';

const segs = () => {
  const out = [];
  for (const s of STREETS) for (let i = 0; i < s.pts.length - 1; i++) out.push([s.pts[i][0], s.pts[i][1], s.pts[i + 1][0], s.pts[i + 1][1], s.w / 2, s.kind]);
  for (const r of RIBBONS) out.push([r[0][0], r[0][1], r[1][0], r[1][1], r[2] / 2, r[3]]);
  return out;
};

export function buildGround(nightU, spillU) {
  const G = GROUND, nx = Math.round((G.x1 - G.x0) / G.cell), nz = Math.round((G.z1 - G.z0) / G.cell);
  const geo = new THREE.PlaneGeometry(G.x1 - G.x0, G.z1 - G.z0, nx, nz); geo.rotateX(-Math.PI / 2); geo.translate((G.x0 + G.x1) / 2, 0, (G.z0 + G.z1) / 2);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) pos.setY(i, H(pos.getX(i), pos.getZ(i)));
  geo.computeVertexNormals();
  const S = segs(), NS = S.length;
  const uS = S.map((s) => new THREE.Vector4(s[0], s[1], s[2], s[3])), uP = S.map((s) => new THREE.Vector4(s[4], s[5], 0, 0));
  const uR = PLAZAS.map((r) => new THREE.Vector4(r[0], r[1], r[2], r[3])), uRK = PLAZAS.map((r) => r[4]), NR = PLAZAS.length;
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.92, metalness: 0 });
  mat.customProgramCacheKey = () => 'kyoto-ground-v1';
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, { uNight: nightU, uSpill: spillU, uSeg: { value: uS }, uSegP: { value: uP }, uRect: { value: uR }, uRectK: { value: uRK } });
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWP;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform float uNight, uSpill; varying vec3 vWP;
        uniform vec4 uSeg[${NS}]; uniform vec4 uSegP[${NS}]; uniform vec4 uRect[${NR}]; uniform float uRectK[${NR}];
        ${NOISE}
        float segD(vec2 p, vec4 s, out float along) { vec2 a = s.xy, b = s.zw, d = b - a; float l2 = dot(d, d); float t = clamp(dot(p - a, d) / l2, 0.0, 1.0); along = t * sqrt(l2); return length(p - (a + d * t)); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        float gRough = 0.92; vec3 gEmis = vec3(0.0); float gBump = 1.0;
        {
          vec2 p = vWP.xz; float h = vWP.y;
          float nz = fbm(p * 0.04), fine = vnoise(p * 1.7), mid = vnoise(p * 0.35);
          // 地：市街の舗装の暗い灰／東山の斜面は暗い森（高さで混ぜる）
          vec3 town = vec3(0.115, 0.112, 0.110) * (0.85 + 0.3 * nz);
          vec3 forest = vec3(0.030, 0.042, 0.026) * (0.7 + 0.7 * nz) + vec3(0.04, 0.012, 0.004) * smoothstep(0.55, 0.9, mid) * 0.6;
          vec3 c = mix(town, forest, smoothstep(5.0, 22.0, h));
          // 河原と護岸（鴨川）：|x|<${RIVER.half.toFixed(0)}
          float ax = abs(p.x);
          if (ax < ${(RIVER.half).toFixed(1)}) { float gv = ax < ${(RIVER.half - 8).toFixed(1)} ? 1.0 : 0.0; c = mix(vec3(0.20, 0.19, 0.17) * (0.8 + 0.4 * fine), vec3(0.06, 0.08, 0.05) * (0.8 + 0.4 * nz), gv * step(0.55, mid)); }
          float surf = -1.0, lat = 99.0, alongP = 0.0, kindP = -1.0, hw = 1.0;
          for (int i = 0; i < ${NS}; i++) {
            vec4 P = uSegP[i]; float al; float d = segD(p, uSeg[i], al);
            if (d < P.x) { surf = P.y; lat = d; alongP = al; kindP = P.y; hw = P.x; }
          }
          float dash = 0.0;
          if (surf > -0.5) {
            vec3 road = vec3(0.075, 0.075, 0.08) * (0.9 + 0.2 * fine);
            vec3 stone = vec3(0.30, 0.28, 0.26) * (0.86 + 0.26 * vnoise(p * 0.9));
            vec3 gravel = vec3(0.34, 0.32, 0.29) * (0.85 + 0.3 * fine);
            if (surf < 0.5) { c = lat > hw - 3.2 ? vec3(0.22, 0.21, 0.20) * (0.9 + 0.2 * fine) : road; dash = step(0.5, fract(alongP / 8.0)) * (1.0 - smoothstep(0.1, 0.3, lat)) * step(8.0, hw); c = mix(c, vec3(0.5), dash * 0.35); gRough = 0.6; }
            else if (surf < 1.5) { float g = step(0.05, abs(fract(p.x / 0.9) - 0.5)) * step(0.05, abs(fract(p.y / 0.9) - 0.5)); c = stone * (0.88 + 0.12 * g); }
            else if (surf < 2.5) c = gravel;
            else { float st = step(0.45, fract(alongP / 0.75)); c = stone * (0.72 + 0.3 * st); }
          }
          for (int j = 0; j < ${NR}; j++) {
            vec4 R = uRect[j]; float k = uRectK[j];
            if (p.x > R.x && p.y > R.y && p.x < R.z && p.y < R.w) {
              if (k > 3.5) { c = mix(vec3(0.05, 0.075, 0.04), vec3(0.09, 0.10, 0.05), nz) * (0.8 + 0.4 * fine); surf = -0.5; }
              else if (k > 1.5) { c = vec3(0.34, 0.32, 0.29) * (0.85 + 0.3 * fine); surf = 2.0; }
              else { float g = step(0.05, abs(fract(p.x / 1.1) - 0.5)) * step(0.05, abs(fract(p.y / 1.1) - 0.5)); c = vec3(0.30, 0.27, 0.24) * (0.85 + 0.15 * g); surf = 1.0; }
            }
          }
          diffuseColor.rgb = c;
          // 夜：提灯・行灯の暖橙の光だまり（道の近く。石畳は拡散して濡れない＝U-14）
          float near = surf > -0.5 ? 1.0 - smoothstep(hw * 0.4, hw * 1.0 + 6.0, lat) : 0.0;
          float pool = pow(0.5 + 0.5 * cos(6.2831853 * alongP / 7.0 + vnoise(vec2(alongP * 0.1, 0.0)) * 3.0), 3.0);
          float lanternZone = surf > 0.5 ? 1.0 : 0.35;
          gEmis = uNight * uSpill * vec3(1.0, 0.56, 0.22) * near * lanternZone * (0.018 + 0.05 * pool) * (0.8 + 0.4 * fine);
          gBump = (surf > -0.5 && surf < 0.5) ? 0.2 : 1.0;
        }`)
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = gRough;')
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        {
          vec2 q = vWP.xz * 1.1; float e = 0.3;
          float n0 = vnoise(q), nx = vnoise(q + vec2(e, 0.0)), nz2 = vnoise(q + vec2(0.0, e));
          vec3 pert = vec3((n0 - nx), 0.0, (n0 - nz2)) * 0.6 * gBump;
          float fade = 1.0 - smoothstep(100.0, 500.0, length(vWP - cameraPosition));
          normal = normalize(normal + (mat3(viewMatrix) * pert) * fade);
        }`)
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += gEmis;');
  };
  const mesh = new THREE.Mesh(geo, mat); mesh.name = 'ground'; mesh.receiveShadow = false;
  // 範囲の外：低い平らな暗い面（霞で溶ける）。内側は地形メッシュが覆う。
  const far = new THREE.Mesh(new THREE.PlaneGeometry(26000, 26000), new THREE.MeshStandardMaterial({ color: 0x0a0e0c, roughness: 1, metalness: 0 }));
  far.rotateX(-Math.PI / 2); far.position.set(0, -0.6, 0); far.name = 'ground-far';
  far.material.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>\nvarying vec3 vWP;`).replace('#include <color_fragment>', `#include <color_fragment>\nif (vWP.x > ${G.x0 + 1}.0 && vWP.x < ${G.x1 - 1}.0 && vWP.z > ${G.z0 + 1}.0 && vWP.z < ${G.z1 - 1}.0) discard;`);
  };
  far.material.customProgramCacheKey = () => 'kyoto-ground-far-v1';
  return { mesh, far };
}

/** 鴨川の水面：暗い水に、両岸の灯り（先斗町・南座・橋）の反転グロー帯と、ゆるい流れの筋（時刻のみで動く）。 */
export function buildRiver(nightU, spillU, timeU) {
  const w = RIVER.water * 2, d = 1700;
  const geo = new THREE.PlaneGeometry(w, d, 1, 1); geo.rotateX(-Math.PI / 2); geo.translate(RIVER.x, -RIVER.depth + 0.45, 0);
  const mat = new THREE.MeshStandardMaterial({ color: 0x040a14, roughness: 0.1, metalness: 0, envMapIntensity: 1.3, emissive: new THREE.Color(0.008, 0.016, 0.034) });
  mat.customProgramCacheKey = () => 'kyoto-river-v1';
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uNight = nightU; shader.uniforms.uSpill = spillU; shader.uniforms.uTime = timeU;
    shader.vertexShader = shader.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\nuniform float uNight, uSpill, uTime; varying vec3 vWP;\n${NOISE}`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        {
          float flow = vnoise(vec2(vWP.x * 0.5, vWP.z * 0.06 - uTime * 0.25));
          float streak = smoothstep(0.55, 0.85, flow);
          // 橋（四条大橋）と岸の灯りが水面に伸びる：z=0 付近と岸沿いの縦のグロー
          float bridge = exp(-abs(vWP.z) * 0.03);
          float bank = exp(-(${RIVER.water.toFixed(1)} - abs(vWP.x)) * 0.35);
          float lamps = 0.5 + 0.5 * sin(vWP.z * 0.35);
          totalEmissiveRadiance += uSpill * vec3(1.0, 0.58, 0.24) * streak * (0.05 * bridge + 0.06 * bank * (0.4 + lamps));
        }`);
  };
  const m = new THREE.Mesh(geo, mat); m.name = 'river'; return m;
}

/** 四条大橋：桁（床版）・欄干・橋脚・橋灯。床の上面は y=0.0（通りと同じ高さ）。 */
export function buildBridge() {
  const geos = [], add = (x, y, z, w, h, d, c) => { const g = new THREE.BoxGeometry(w, h, d).toNonIndexed(); g.translate(x, y + h / 2, z); g.deleteAttribute('uv'); const n = g.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) { a[i * 3] = c[0]; a[i * 3 + 1] = c[1]; a[i * 3 + 2] = c[2]; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); geos.push(g); };
  const half = 36, W = 22, stone = [0.14, 0.13, 0.12], dark = [0.05, 0.05, 0.06];
  add(0, -1.2, 0, half * 2, 1.2, W, stone);                                  // 床版（上面 y=0）
  for (const s of [-1, 1]) { add(0, 0, s * (W / 2 - 0.2), half * 2, 1.0, 0.4, dark); for (let i = -7; i <= 7; i++) add(i * 5, 0, s * (W / 2 - 0.2), 0.35, 1.4, 0.35, stone); }   // 欄干と親柱
  for (let i = -3; i <= 3; i++) for (const s of [-1, 1]) add(i * 10, -RIVER.depth - 0.6, s * 7, 2.2, RIVER.depth + 0.6 - 1.2, 3.0, stone);   // 橋脚
  let N = 0; for (const g of geos) N += g.attributes.position.count;
  const P = new Float32Array(N * 3), Nn = new Float32Array(N * 3), C = new Float32Array(N * 3); let o = 0;
  for (const g of geos) { P.set(g.attributes.position.array, o * 3); Nn.set(g.attributes.normal.array, o * 3); C.set(g.attributes.color.array, o * 3); o += g.attributes.position.count; }
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(P, 3)); geo.setAttribute('normal', new THREE.BufferAttribute(Nn, 3)); geo.setAttribute('color', new THREE.BufferAttribute(C, 3));
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0 }); mat.customProgramCacheKey = () => 'kyoto-bridge-v1';
  const mesh = new THREE.Mesh(geo, mat); mesh.name = 'bridge'; mesh.position.set(RIVER.x, 0.02, 0); mesh.frustumCulled = false;
  return { mesh, tris: N / 3 };
}
