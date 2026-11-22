// cities/tokyo/ground.js — 地面：街路（断面別）・歩道・駅前広場・皇居側を 1 枚のシェーダで描く。乾いた路面＋光だまりの拡散グロー（U-14：濡れた路面・鏡面反射は使わない）。
import * as THREE from 'three';
import { NOISE } from '../../../lib/glsl.js';
import { STREETS, PLAZAS, CITY_BOX, PALACE, MOAT } from './layout.js';

export function buildGround(nightU, spillU) {
  const geo = new THREE.PlaneGeometry(24000, 24000, 1, 1); geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, metalness: 0 });
  mat.customProgramCacheKey = () => 'tokyo-ground-v1';
  const order = (s) => (s.kind === 0 ? 0 : s.kind === 3 ? 1 : 2);
  const st = [...STREETS].sort((a, b) => order(a) - order(b));
  const uA = st.map((s) => new THREE.Vector4(s.dir === 'x' ? 0 : 1, s.c, s.w, s.kind));
  const uB = st.map((s) => new THREE.Vector4(s.a, s.b, 0, 0));
  const uP = PLAZAS.map((r) => new THREE.Vector4(r.x0, r.x1, r.z0, r.z1));
  const NST = st.length, NPK = PLAZAS.length, box = CITY_BOX;
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uNight = nightU; shader.uniforms.uSpill = spillU; shader.uniforms.uStA = { value: uA }; shader.uniforms.uStB = { value: uB }; shader.uniforms.uPlaza = { value: uP };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWP;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform float uNight, uSpill; varying vec3 vWP;
        uniform vec4 uStA[${NST}]; uniform vec4 uStB[${NST}]; uniform vec4 uPlaza[${NPK}];
        ${NOISE}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        float gRough = 0.9; vec3 gEmis = vec3(0.0); float gBump = 1.0;
        {
          vec2 p = vWP.xz;
          float nz = fbm(p * 0.05), fine = vnoise(p * 1.9);
          float inCity = step(${box.x0.toFixed(1)}, p.x) * step(p.x, ${box.x1.toFixed(1)}) * step(${box.z0.toFixed(1)}, p.y) * step(p.y, ${box.z1.toFixed(1)});
          vec3 outer = vec3(0.07, 0.09, 0.07) * (0.85 + 0.3 * nz);
          vec3 c = mix(outer, vec3(0.20, 0.20, 0.21) * (0.9 + 0.2 * fine), inCity);
          float surf = -1.0, lat = 99.0, alongRoad = 0.0, kindHit = -1.0, cHit = 0.0;
          for (int i = 0; i < ${NST}; i++) {
            vec4 A = uStA[i], B = uStB[i];
            float along = A.x < 0.5 ? p.x : p.y;
            float off = abs((A.x < 0.5 ? p.y : p.x) - A.y);
            float half_ = A.z * 0.5;
            if (along > B.x && along < B.y && off < half_) {
              float kind = A.w; float s = 0.0;                              // 0=歩道 1=車道 2=緑地帯 3=石張り
              if (kind < 0.5) s = off < half_ - 3.4 ? 1.0 : 0.0;
              else if (kind < 1.5) s = off < 15.0 ? 3.0 : (off < 30.5 ? 1.0 : 0.0);   // 行幸通り：中央帯 30 m（石張り）・車道・歩道
              else if (kind < 2.5) s = off < 4.0 ? 1.0 : 3.0;                       // 丸の内仲通り：車道 8 m ＋ 石張りの歩道
              else s = off < 12.0 ? 1.0 : 0.0;                                      // 広い通り
              surf = s; lat = off; alongRoad = along; kindHit = A.w; cHit = A.y;
            }
          }
          float zebra = 0.0;
          if (surf > 0.5 && surf < 1.5 && (kindHit > 0.5 && kindHit < 1.5 || kindHit > 2.5)) {
            for (int k = 0; k < ${NST}; k++) {
              vec4 A2 = uStA[k], B2 = uStB[k];
              if (A2.x < 0.5 && A2.w < 0.5 && A2.x < 0.5) {}
              if (A2.x > 0.5 && A2.w < 0.5 && B2.x < cHit && B2.y > cHit) {
                float dx = abs(p.x - A2.y), e = A2.z * 0.5;
                if (dx > e + 1.0 && dx < e + 4.6) zebra = max(zebra, step(0.5, fract(p.y / 1.1)));
              }
            }
          }
          if (surf > -0.5) {
            vec3 roadC = mix(vec3(0.060, 0.062, 0.068), vec3(0.14, 0.14, 0.15), smoothstep(0.55, 0.95, nz) * 0.5);
            vec3 walkC = vec3(0.40, 0.39, 0.38) * (0.88 + 0.24 * fine);
            vec3 tileC = vec3(0.46, 0.43, 0.40) * (0.9 + 0.2 * vnoise(p * 0.7));
            float lineAt = kindHit < 0.5 ? 0.0 : (kindHit > 2.5 ? 6.0 : 22.5);
            float dash = step(0.5, fract(alongRoad / 8.0)) * (1.0 - smoothstep(0.1, 0.3, abs(lat - lineAt)));
            if (surf < 0.5) c = walkC;
            else if (surf < 1.5) { c = mix(roadC, vec3(0.62), dash * 0.55 * smoothstep(0.3, 0.7, fine)); c = mix(c, vec3(0.70), zebra * 0.8); gRough = 0.6; }
            else { c = tileC; float g = step(0.04, abs(fract(p.x / 1.5) - 0.5)) * step(0.04, abs(fract(p.y / 1.5) - 0.5)); c *= 0.9 + 0.1 * g; }
          }
          for (int j = 0; j < ${NPK}; j++) {
            vec4 R = uPlaza[j];
            if (p.x > R.x && p.x < R.y && p.y > R.z && p.y < R.w) { c = vec3(0.44, 0.41, 0.38) * (0.9 + 0.2 * vnoise(p * 0.7)); float g = step(0.04, abs(fract(p.x / 2.0) - 0.5)) * step(0.04, abs(fract(p.y / 2.0) - 0.5)); c *= 0.9 + 0.1 * g; surf = 3.0; }
          }
          // 皇居側（外濠の西）は暗い緑地
          if (p.x < ${PALACE.x1.toFixed(1)}) c = mix(c, vec3(0.02, 0.035, 0.03), 0.9);
          // 外濠の東岸の石垣・遊歩道
          diffuseColor.rgb = c;
          // 夜：街灯の暖白の光だまり（道路沿い）＋イルミネーションの金色の光だまり（仲通り・行幸通り：拡散）
          float pool = pow(0.5 + 0.5 * cos(6.2831853 * alongRoad / 30.0), 3.0);
          float nearRoad = surf > -0.5 ? (1.0 - smoothstep(18.0, 30.0, lat)) : 0.0;
          gEmis = uNight * vec3(1.0, 0.78, 0.5) * nearRoad * (0.012 + 0.03 * pool);
          float gold = 0.0;
          if (kindHit > 1.5 && kindHit < 2.5 && p.y > ${(-480).toFixed(1)} && p.y < 740.0 ) gold = 1.0 - smoothstep(6.0, 16.0, lat);
          if (kindHit > 0.5 && kindHit < 1.5) gold = (1.0 - smoothstep(14.0, 30.0, lat)) * 0.6;
          float wave = 0.85 + 0.15 * sin(alongRoad * 0.12);
          gEmis += uSpill * vec3(1.0, 0.68, 0.30) * gold * wave * (0.05 + 0.03 * fine);
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

/** 外濠（水面）：暗い水面に、岸の灯りの反転グロー帯（実反射は使わない＝U-14）。 */
export function buildMoat(nightU, spillU) {
  const w = MOAT.x1 - MOAT.x0, d = MOAT.z1 - MOAT.z0;
  const geo = new THREE.PlaneGeometry(w, d, 1, 1); geo.rotateX(-Math.PI / 2); geo.translate((MOAT.x0 + MOAT.x1) / 2, 0.05, (MOAT.z0 + MOAT.z1) / 2);
  const mat = new THREE.MeshStandardMaterial({ color: 0x050b16, roughness: 0.08, metalness: 0, envMapIntensity: 1.2, emissive: new THREE.Color(0.01, 0.02, 0.045), polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  mat.customProgramCacheKey = () => 'tokyo-moat-v1';
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uNight = nightU; shader.uniforms.uSpill = spillU;
    shader.vertexShader = shader.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\nuniform float uNight, uSpill; varying vec3 vWP;\n${NOISE}`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        {
          // 東岸（x=${MOAT.x1}）の灯りが水面に落ちる：縦長の揺れるグロー帯（反転した光点のイメージ）
          float dx = ${MOAT.x1.toFixed(1)} - vWP.x;
          float streak = vnoise(vec2(vWP.z * 0.35, vWP.x * 0.08 + 3.0));
          float band = exp(-dx * 0.09) * smoothstep(0.35, 0.8, streak);
          float lamps = pow(0.5 + 0.5 * cos(vWP.z * 0.2094), 6.0);   // 約 30 m 間隔の街灯
          totalEmissiveRadiance += uSpill * vec3(1.0, 0.66, 0.30) * band * (0.04 + 0.16 * lamps);
        }`);
  };
  const m = new THREE.Mesh(geo, mat); m.name = 'moat';
  return m;
}

/** 皇居の暗い量塊（外濠の西）：低い起伏のある暗い緑の面（木立の塊）。 */
export function buildPalaceMass() {
  const x0 = PALACE.x0, x1 = PALACE.x1, z0 = PALACE.z0, z1 = PALACE.z1, nx = 40, nz = 120;
  const geo = new THREE.PlaneGeometry(x1 - x0, z1 - z0, nx, nz); geo.rotateX(-Math.PI / 2); geo.translate((x0 + x1) / 2, 0, (z0 + z1) / 2);
  const pos = geo.attributes.position, col = new Float32Array(pos.count * 3);
  const h = (x, z) => { const s = Math.sin(x * 0.07) * Math.sin(z * 0.045) + 0.6 * Math.sin(x * 0.19 + z * 0.11) + 0.4 * Math.sin(z * 0.31 - x * 0.05); return 12 + 5.5 * s; };
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i), k = Math.min(1, (x1 - x) / 14);             // 濠の縁へ向けて低く
    const y = h(x, z) * Math.min(1, Math.max(0.05, k)) * (1 - Math.min(1, Math.max(0, (Math.abs(z) - 280) / 50)));
    pos.setY(i, Math.max(0.5, y)); const v = 0.8 + 0.4 * Math.sin(x * 0.5 + z * 0.3);
    col[i * 3] = 0.018 * v; col[i * 3 + 1] = 0.032 * v; col[i * 3 + 2] = 0.026 * v;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3)); geo.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0 });
  mat.customProgramCacheKey = () => 'tokyo-palace-v1';
  const mesh = new THREE.Mesh(geo, mat); mesh.name = 'palace-mass'; mesh.position.y = 0.03;
  return mesh;
}
