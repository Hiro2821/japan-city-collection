// glow.js — 加算合成の光点（街灯・車のヘッド/テールライト・航空障害灯）と雪片
import { NOISE } from './glsl.js';

// 汎用の光点群。size はワールド寸法(m)、color は HDR 線形値（1超でブルームする）。
export function createGlowPoints(THREE, { positions, colors, sizes, fogDensity = 0.0001, minPx = 1.5, maxPx = 48 }) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
  geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  const uniforms = {
    uProj: { value: 1000 }, // projectionMatrix[1][1] * 0.5 * 描画高さ(px)
    uFog: { value: fogDensity },
    uGain: { value: 1 },
    uMinPx: { value: minPx },
    uMaxPx: { value: maxPx },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      attribute vec3 aColor; attribute float aSize;
      uniform float uProj, uFog, uGain, uMinPx, uMaxPx;
      varying vec3 vCol;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float dist = max(-mv.z, 0.1);
        float px = aSize * uProj / dist;
        float fade = clamp(px / uMinPx, 0.0, 1.0);          // 小さすぎる点は暗くして面積×明るさを保つ
        gl_PointSize = clamp(px, uMinPx, uMaxPx);
        float fog = exp(-pow(uFog * dist, 2.0));
        vCol = aColor * uGain * fog * fade * fade;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      varying vec3 vCol;
      void main(){
        vec2 q = gl_PointCoord * 2.0 - 1.0;
        float d2 = dot(q, q);
        if (d2 > 1.0) discard;
        float a = exp(-d2 * 3.5) ;
        gl_FragColor = vec4(vCol * a, 1.0);
      }`,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  return { points, geo, uniforms, material: mat };
}

// 雪片：時刻 t から位置を解析的に決める（フレーム順に依存しない＝書き出しが決定的）
export function createSnow(THREE, { count = 9000, box = 160, fall = 3.2, wind = [2.2, 0.8], size = 0.11, bright = 1.0 }) {
  const seed = new Float32Array(count * 4);
  let s = 12345;
  const r = () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296);
  for (let i = 0; i < count; i++) { seed[i * 4] = r(); seed[i * 4 + 1] = r(); seed[i * 4 + 2] = r(); seed[i * 4 + 3] = r(); }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3)); // ダミー（頂点数用）
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 4));
  const uniforms = {
    uTime: { value: 0 }, uCam: { value: new THREE.Vector3() }, uBox: { value: box },
    uFall: { value: fall }, uWind: { value: new THREE.Vector2(wind[0], wind[1]) },
    uSize: { value: size }, uProj: { value: 1000 }, uBright: { value: bright }, uFog: { value: 0.0001 },
    uTint: { value: new THREE.Color(1.0, 0.92, 0.88) },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      attribute vec4 aSeed;
      uniform float uTime, uBox, uFall, uSize, uProj, uFog;
      uniform vec3 uCam; uniform vec2 uWind;
      varying float vA;
      void main(){
        float spd = 0.65 + 0.7 * aSeed.w;
        vec3 p = aSeed.xyz * uBox;
        p += vec3(uWind.x * uTime, -uFall * spd * uTime, uWind.y * uTime);
        p.x += sin(uTime * (0.9 + aSeed.w) + aSeed.x * 40.0) * 0.6;
        p.z += cos(uTime * (0.7 + aSeed.z) + aSeed.y * 40.0) * 0.6;
        vec3 wp = uCam + mod(p - uCam + 0.5 * uBox, uBox) - 0.5 * uBox;
        vec4 mv = viewMatrix * vec4(wp, 1.0);
        float dist = max(-mv.z, 0.1);
        float sz = uSize * (0.5 + 1.3 * aSeed.w * aSeed.w);
        gl_PointSize = clamp(sz * uProj / dist, 1.0, 9.0);
        float near = smoothstep(1.5, 6.0, dist);
        float far  = 1.0 - smoothstep(0.55 * uBox, 0.5 * uBox + 20.0, dist);
        vA = near * far * (0.35 + 0.65 * aSeed.w);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uBright; uniform vec3 uTint;
      varying float vA;
      void main(){
        vec2 q = gl_PointCoord * 2.0 - 1.0;
        float d = length(q);
        float a = smoothstep(1.0, 0.15, d);
        gl_FragColor = vec4(uTint * uBright * vA * a * a, 1.0);
      }`,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  return { points, uniforms, material: mat };
}
