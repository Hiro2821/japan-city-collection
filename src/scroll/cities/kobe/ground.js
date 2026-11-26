// cities/kobe/ground.js — 地面（海岸平野〜山麓〜山腹を 1 枚の格子メッシュ。道・石畳・広場・芝・春の新緑の山肌をシェーダで描く）、埋立地（垂直の護岸の箱）、海面（空色＋うねり＋港の光の柱）。
//   路面は乾いた舗装に街灯の光だまり（ベイクなし・実反射なし）。海面は反射テクスチャを使わず、シェーダの擬似反射（K-16）。
import * as THREE from 'three';
import { NOISE } from '../../../lib/glsl.js';
import { Hterrain, STREETS, RIBBONS, PLAZAS, QUAYS, QUAY_H, GROUND, COAST_Z, PORT_TOWER, FERRIS } from './layout.js';

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
  for (let i = 0; i < pos.count; i++) pos.setY(i, Hterrain(pos.getX(i), pos.getZ(i)));
  geo.computeVertexNormals();
  const S = segs(), NS = S.length;
  const uS = S.map((s) => new THREE.Vector4(s[0], s[1], s[2], s[3])), uP = S.map((s) => new THREE.Vector4(s[4], s[5], 0, 0));
  const uR = PLAZAS.map((r) => new THREE.Vector4(r[0], r[1], r[2], r[3])), uRK = PLAZAS.map((r) => r[4]), NR = PLAZAS.length;
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.92, metalness: 0 });
  mat.customProgramCacheKey = () => 'kobe-ground-v1';
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
          float nz = fbm(p * 0.03), fine = vnoise(p * 1.7), mid = vnoise(p * 0.3);
          // 市街の舗装（暗い灰）／山手は春の新緑（暗い緑に、ところどころ岩肌）。高さで混ぜる
          vec3 town = vec3(0.105, 0.105, 0.108) * (0.85 + 0.3 * nz);
          float slope = 1.0 - clamp(normalize(cross(dFdx(vWP), dFdy(vWP))).y, 0.0, 1.0);
          vec3 forest = vec3(0.034, 0.062, 0.028) * (0.65 + 0.8 * nz) + vec3(0.030, 0.034, 0.014) * smoothstep(0.5, 0.9, mid) + vec3(0.05, 0.045, 0.04) * smoothstep(0.18, 0.5, slope) * 0.6;
          vec3 c = mix(town, forest, smoothstep(34.0, 120.0, h));
          // 海岸（護岸・砂利）：海に近いところは明るいコンクリート
          c = mix(c, vec3(0.16, 0.16, 0.16) * (0.85 + 0.3 * fine), smoothstep(${(COAST_Z - 60).toFixed(0)}.0, ${(COAST_Z + 5).toFixed(0)}.0, vWP.z) * step(-0.5, h));
          float surf = -1.0, lat = 99.0, alongP = 0.0, hw = 1.0;
          for (int i = 0; i < ${NS}; i++) {
            vec4 P = uSegP[i]; float al; float d = segD(p, uSeg[i], al);
            if (d < P.x) { surf = P.y; lat = d; alongP = al; hw = P.x; }
          }
          if (surf > -0.5) {
            vec3 road = vec3(0.07, 0.07, 0.075) * (0.9 + 0.2 * fine);
            vec3 stone = vec3(0.26, 0.245, 0.23) * (0.86 + 0.26 * vnoise(p * 0.9));
            if (surf < 0.5) { c = lat > hw - 2.6 ? vec3(0.20, 0.20, 0.20) * (0.9 + 0.2 * fine) : road; float dash = step(0.5, fract(alongP / 8.0)) * (1.0 - smoothstep(0.1, 0.3, lat)) * step(8.0, hw); c = mix(c, vec3(0.5), dash * 0.3); gRough = 0.6; }
            else { float g = step(0.05, abs(fract(p.x / 0.7) - 0.5)) * step(0.05, abs(fract(p.y / 0.7) - 0.5)); c = stone * (0.88 + 0.12 * g); }
          }
          for (int j = 0; j < ${NR}; j++) {
            vec4 R = uRect[j]; float k = uRectK[j];
            if (p.x > R.x && p.y > R.y && p.x < R.z && p.y < R.w) {
              if (k > 3.5) { c = mix(vec3(0.045, 0.085, 0.04), vec3(0.075, 0.115, 0.05), nz) * (0.8 + 0.4 * fine); surf = -0.5; }
              else if (k > 1.5) { c = vec3(0.20, 0.19, 0.18) * (0.85 + 0.3 * fine); surf = 2.0; }
              else { float g = step(0.05, abs(fract(p.x / 0.9) - 0.5)) * step(0.05, abs(fract(p.y / 0.9) - 0.5)); c = vec3(0.27, 0.25, 0.23) * (0.85 + 0.15 * g); surf = 1.0; }
            }
          }
          diffuseColor.rgb = c;
          // 夜：街灯の暖白の光だまり（道の近く。拡散で濡れない）
          float near = surf > -0.5 ? 1.0 - smoothstep(hw * 0.4, hw + 7.0, lat) : 0.0;
          float pool = pow(0.5 + 0.5 * cos(6.2831853 * alongP / 24.0), 2.0);
          gEmis = uNight * uSpill * vec3(1.0, 0.72, 0.40) * near * (0.014 + 0.05 * pool) * (0.8 + 0.4 * fine);
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
  // 埋立地（メリケンパーク・ハーバーランド・突堤）：垂直の護岸の箱。上面は同じ地面シェーダ（ワールド座標で道・芝を描く）
  const quays = QUAYS.map((q) => {
    const g = new THREE.BoxGeometry(q.x1 - q.x0, QUAY_H + 4, q.z1 - q.z0); g.translate((q.x0 + q.x1) / 2, (QUAY_H - 4) / 2, (q.z0 + q.z1) / 2);
    const m = new THREE.Mesh(g, mat); m.name = 'quay-' + q.name; return m;
  });
  // 範囲の外（東西）：低い暗い面（霞で溶ける）。内側は地形メッシュが覆う。海より上（y=+1）に置き、海側は discard
  const far = new THREE.Mesh(new THREE.PlaneGeometry(30000, 30000), new THREE.MeshStandardMaterial({ color: 0x0a100c, roughness: 1, metalness: 0 }));
  far.rotateX(-Math.PI / 2); far.position.set(0, 3.0, -15000 + COAST_Z); far.name = 'ground-far';
  far.material.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>\nvarying vec3 vWP;`).replace('#include <color_fragment>', `#include <color_fragment>\nif (vWP.x > ${GROUND.x0 + 1}.0 && vWP.x < ${GROUND.x1 - 1}.0 && vWP.z > ${GROUND.z0 + 1}.0) discard;`);
  };
  far.material.customProgramCacheKey = () => 'kobe-ground-far-v1';
  return { mesh, quays, far, material: mat };
}

/** 海面：空色（空の反射の代わり）＋ゆるいうねり＋港の灯りの光の柱（縦に伸びる）。時刻のみで動く（決定的）。 */
export function buildSea(nightU, spillU, timeU) {
  const geo = new THREE.PlaneGeometry(40000, 40000, 1, 1); geo.rotateX(-Math.PI / 2); geo.translate(0, 0, COAST_Z + 18000);
  const mat = new THREE.MeshStandardMaterial({ color: 0x050c18, roughness: 0.07, metalness: 0, envMapIntensity: 1.4, emissive: new THREE.Color(0.006, 0.014, 0.03) });
  mat.customProgramCacheKey = () => 'kobe-sea-v1';
  const tx = PORT_TOWER.x, fx = FERRIS.x;
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uNight = nightU; shader.uniforms.uSpill = spillU; shader.uniforms.uTime = timeU;
    shader.vertexShader = shader.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\nuniform float uNight, uSpill, uTime; varying vec3 vWP;\n${NOISE}`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        {
          vec2 q = vWP.xz * 0.045 + vec2(uTime * 0.05, uTime * 0.03); float e = 0.25;
          float n0 = vnoise(q), nx = vnoise(q + vec2(e, 0.0)), nz2 = vnoise(q + vec2(0.0, e));
          float fade = 1.0 - smoothstep(600.0, 4000.0, length(vWP - cameraPosition));
          normal = normalize(normal + (mat3(viewMatrix) * vec3(n0 - nx, 0.0, n0 - nz2)) * 0.5 * (0.35 + 0.65 * fade));
        }`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        {
          float off = vWP.z - ${COAST_Z.toFixed(1)};                                         // 海岸からの距離（海側が正）
          float sh = exp(-max(off, 0.0) * 0.0035);                                           // 沖へ向かって光の柱が薄れる
          float rip = vnoise(vec2(vWP.x * 0.25, vWP.z * 0.05 - uTime * 0.35));
          float streak = smoothstep(0.35, 0.8, rip);
          // 街の灯りの帯（東西に連続）＋ ポートタワー・観覧車の下の太い柱
          float city = 0.5 + 0.5 * sin(vWP.x * 0.021 + 1.3) * sin(vWP.x * 0.0063);
          float tw = exp(-pow((vWP.x - (${tx.toFixed(1)})) / 38.0, 2.0)), fw = exp(-pow((vWP.x - (${fx.toFixed(1)})) / 60.0, 2.0));
          vec3 warm = vec3(1.0, 0.62, 0.28), red = vec3(1.0, 0.18, 0.1), cool = vec3(0.5, 0.7, 1.0);
          totalEmissiveRadiance += uSpill * sh * streak * (warm * 0.05 * (0.4 + city) + red * 0.16 * tw + cool * 0.10 * fw + vec3(0.9, 0.7, 0.4) * 0.015);
        }`);
  };
  const m = new THREE.Mesh(geo, mat); m.name = 'sea'; return m;
}
