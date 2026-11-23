// cities/osaka/ground.js — 地面（街路・広場・中之島の緑地を 1 枚のシェーダで描く）と水面。東京 ground.js と同じ作法
//   （MeshStandardMaterial への onBeforeCompile 注入なので、霧・霞が共通側のまま効く）。
//   御堂筋はイルミの色滲み（区間の色 D-3）、水面は岸の灯りの反転グロー帯（実反射は使わない）。
import * as THREE from 'three';
import { NOISE } from '../../../lib/glsl.js';
import { STREETS, PLAZAS, PARK, WATERS } from './layout.js';

export function buildGround(nightU, spillU) {
  const geo = new THREE.PlaneGeometry(24000, 24000, 1, 1); geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, metalness: 0 });
  mat.customProgramCacheKey = () => 'osaka-ground-v1';
  const order = (s) => (s.kind === 0 ? 0 : s.kind === 2 ? 1 : 2);   // 御堂筋（kind 1）を最後に描いて優先する
  const st = [...STREETS].sort((a, b) => order(a) - order(b));
  const uA = st.map((s) => new THREE.Vector4(s.dir === 'x' ? 0 : 1, s.c, s.w, s.kind));
  const uB = st.map((s) => new THREE.Vector4(s.a, s.b, 0, 0));
  const uP = PLAZAS.map((r) => new THREE.Vector4(r.x0, r.x1, r.z0, r.z1));
  const NST = st.length, NPK = PLAZAS.length;
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uNight = nightU; shader.uniforms.uSpill = spillU;
    shader.uniforms.uStA = { value: uA }; shader.uniforms.uStB = { value: uB }; shader.uniforms.uPlaza = { value: uP };
    shader.uniforms.uPark = { value: new THREE.Vector4(PARK.x0, PARK.x1, PARK.z0, PARK.z1) };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWP;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform float uNight, uSpill; varying vec3 vWP;
        uniform vec4 uStA[${NST}]; uniform vec4 uStB[${NST}]; uniform vec4 uPlaza[${NPK}]; uniform vec4 uPark;
        ${NOISE}
        vec3 ledZone(float z){
          vec3 c = vec3(2.6, 2.3, 1.8);
          c = mix(c, vec3(1.4, 1.9, 3.0), smoothstep(660.0, 740.0, z));
          c = mix(c, vec3(3.0, 1.5, 2.0), smoothstep(1260.0, 1340.0, z));
          c = mix(c, vec3(2.8, 1.9, 0.8), smoothstep(1860.0, 1940.0, z));
          return c;
        }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        float gRough = 0.9; vec3 gEmis = vec3(0.0); float gBump = 1.0;
        {
          vec2 p = vWP.xz;
          float nz = fbm(p * 0.05), fine = vnoise(p * 1.9);
          vec3 c = vec3(0.20, 0.20, 0.21) * (0.9 + 0.2 * fine);
          // 中之島の緑地（街路・広場で上書きされる）
          if (p.x > uPark.x && p.x < uPark.y && p.y > uPark.z && p.y < uPark.w) c = vec3(0.05, 0.10, 0.055) * (0.8 + 0.4 * nz);
          float surf = -1.0, lat = 99.0, alongRoad = 0.0, kindHit = -1.0;
          for (int i = 0; i < ${NST}; i++) {
            vec4 A = uStA[i], B = uStB[i];
            float along = A.x < 0.5 ? p.x : p.y;
            float off = abs((A.x < 0.5 ? p.y : p.x) - A.y);
            float half_ = A.z * 0.5;
            if (along > B.x && along < B.y && off < half_) {
              float kind = A.w; float s;
              if (kind < 0.5) s = off < half_ - 3.4 ? 1.0 : 0.0;              // 一般街路
              else if (kind < 1.5) s = off < 11.0 ? 1.0 : (off < 15.5 ? 3.0 : 0.0);  // 御堂筋：車道・石張り・歩道
              else s = off < half_ - 6.0 ? 1.0 : 0.0;                          // 広い通り
              surf = s; lat = off; alongRoad = along; kindHit = kind;
            }
          }
          if (surf > -0.5) {
            vec3 roadC = mix(vec3(0.060, 0.062, 0.068), vec3(0.14, 0.14, 0.15), smoothstep(0.55, 0.95, nz) * 0.5);
            vec3 walkC = vec3(0.40, 0.39, 0.38) * (0.88 + 0.24 * fine);
            vec3 tileC = vec3(0.46, 0.43, 0.40) * (0.9 + 0.2 * vnoise(p * 0.7));
            if (surf < 0.5) c = walkC;
            else if (surf < 1.5) {
              c = roadC; gRough = 0.6;
              float lineAt = kindHit < 0.5 ? 0.0 : (kindHit < 1.5 ? 5.5 : 6.0);
              float dash = step(0.5, fract(alongRoad / 8.0)) * (1.0 - smoothstep(0.1, 0.3, abs(lat - lineAt)));
              c = mix(c, vec3(0.62), dash * 0.55 * smoothstep(0.3, 0.7, fine));
              if (kindHit > 0.5 && kindHit < 1.5) { float cen = 1.0 - smoothstep(0.1, 0.35, lat); c = mix(c, vec3(0.62), cen * 0.5); }
            } else { c = tileC; float g = step(0.04, abs(fract(p.x / 1.5) - 0.5)) * step(0.04, abs(fract(p.y / 1.5) - 0.5)); c *= 0.9 + 0.1 * g; }
          }
          for (int j = 0; j < ${NPK}; j++) {
            vec4 R = uPlaza[j];
            if (p.x > R.x && p.x < R.y && p.y > R.z && p.y < R.w) { c = vec3(0.44, 0.41, 0.38) * (0.9 + 0.2 * vnoise(p * 0.7)); float g = step(0.04, abs(fract(p.x / 2.0) - 0.5)) * step(0.04, abs(fract(p.y / 2.0) - 0.5)); c *= 0.9 + 0.1 * g; surf = 3.0; lat = 0.0; kindHit = -1.0; }
          }
          diffuseColor.rgb = c;
          // 夜の光だまり：街灯の暖白（道路沿い）
          float pool = pow(0.5 + 0.5 * cos(6.2831853 * alongRoad / 30.0), 3.0);
          float nearRoad = surf > -0.5 ? (1.0 - smoothstep(18.0, 30.0, lat)) : 0.0;
          gEmis = uNight * vec3(1.0, 0.90, 0.74) * nearRoad * (0.010 + 0.026 * pool);
          // 御堂筋：イルミの色滲み（並木の帯 lat 10〜18、区間の色）
          if (kindHit > 0.5 && kindHit < 1.5) {
            float band = smoothstep(9.0, 12.0, lat) * (1.0 - smoothstep(15.0, 19.0, lat));
            float wave = 0.85 + 0.15 * sin(alongRoad * 0.12);
            gEmis += uSpill * ledZone(alongRoad) * band * wave * (0.028 + 0.02 * fine);
          }
          gBump = surf > 0.5 && surf < 1.5 ? 0.2 : 1.0;
        }`)
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = gRough;')
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        {
          vec2 q = vWP.xz * 0.9; float e = 0.35;
          float n0 = vnoise(q), nx = vnoise(q + vec2(e, 0.0)), nz2 = vnoise(q + vec2(0.0, e));
          vec3 pert = vec3((n0 - nx), 0.0, (n0 - nz2)) * 0.5 * gBump;
          float fade = 1.0 - smoothstep(120.0, 600.0, length(vWP - cameraPosition));
          normal = normalize(normal + (mat3(viewMatrix) * pert) * fade);
        }`)
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += gEmis;');
  };
  const mesh = new THREE.Mesh(geo, mat); mesh.receiveShadow = false; mesh.name = 'ground';
  return mesh;
}

/** 水面（川・運河）：暗い水面に岸の灯りの反転グロー帯（実反射は使わない）。道頓堀はネオンの多色が混ざる。 */
export function buildWater(nightU, spillU) {
  const meshes = [];
  for (const w of WATERS) {
    const wd = w.x1 - w.x0, dp = w.z1 - w.z0;
    const geo = new THREE.PlaneGeometry(wd, dp, 1, 1); geo.rotateX(-Math.PI / 2); geo.translate((w.x0 + w.x1) / 2, 0.05, (w.z0 + w.z1) / 2);
    const mat = new THREE.MeshStandardMaterial({ color: 0x050b16, roughness: 0.08, metalness: 0, envMapIntensity: 1.2, emissive: new THREE.Color(0.008, 0.016, 0.04), polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    mat.customProgramCacheKey = () => `osaka-water-${w.id}`;
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uNight = nightU; shader.uniforms.uSpill = spillU;
      shader.uniforms.uRect = { value: new THREE.Vector4(w.x0, w.x1, w.z0, w.z1) };
      shader.uniforms.uGlow = { value: new THREE.Vector3(...w.glow) };
      shader.uniforms.uGainW = { value: w.gain }; shader.uniforms.uNeonW = { value: w.neon ? 1 : 0 };
      shader.vertexShader = shader.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>\nuniform float uNight, uSpill, uGainW, uNeonW; uniform vec4 uRect; uniform vec3 uGlow; varying vec3 vWP;\n${NOISE}`)
        .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
          {
            float dEdge = min(vWP.z - uRect.z, uRect.w - vWP.z);   // 両岸までの距離
            float streak = vnoise(vec2(vWP.x * 0.35, vWP.z * 0.08 + 3.0));
            float band = exp(-max(dEdge, 0.0) * 0.10) * smoothstep(0.35, 0.8, streak);
            float lamps = pow(0.5 + 0.5 * cos(vWP.x * 0.2094), 6.0);
            vec3 gc = uGlow;
            if (uNeonW > 0.5) {
              float s = hash11(floor(vWP.x / 26.0) * 7.13);
              vec3 c2 = s < 0.33 ? vec3(3.0, 0.5, 0.6) : (s < 0.66 ? vec3(0.5, 2.0, 3.0) : vec3(3.0, 2.0, 0.7));
              gc = mix(uGlow, c2, 0.55);
            }
            totalEmissiveRadiance += uNight * gc * band * (0.05 + 0.20 * lamps) * uGainW * (0.4 + 0.6 * uSpill);
          }`);
    };
    const m = new THREE.Mesh(geo, mat); m.name = `water-${w.id}`;
    meshes.push(m);
  }
  return meshes;
}
