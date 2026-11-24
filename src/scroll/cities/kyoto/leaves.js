// cities/kyoto/leaves.js — 舞い散る紅葉（環境アニメーション）。札幌の雪と同じ方式の Points：位置は時刻 uTime から解析的に決まる（フレーム順に依存しない＝決定的）。CPU 更新なし。
//   葉は個体ごとに色（赤・橙・黄）・大きさ・回転速度が違い、フラグメントで楕円を回して「ひらひら」に見せる。霞は箱（約 110 m）の内側だけなので不要。
import * as THREE from 'three';

export function createLeaves({ count = 12000, box = 150 } = {}) {
  const seed = new Float32Array(count * 4); let s = 987654321;
  const r = () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296);
  for (let i = 0; i < count; i++) { seed[i * 4] = r(); seed[i * 4 + 1] = r(); seed[i * 4 + 2] = r(); seed[i * 4 + 3] = r(); }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 4));
  const uniforms = { uTime: { value: 0 }, uCam: { value: new THREE.Vector3() }, uBox: { value: box }, uProj: { value: 1000 }, uGain: { value: 1 } };
  const mat = new THREE.ShaderMaterial({
    uniforms, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      attribute vec4 aSeed; uniform float uTime, uBox, uProj; uniform vec3 uCam;
      varying vec3 vCol; varying float vA, vRot, vAsp;
      void main(){
        float spd = 0.55 + 0.6 * aSeed.w;
        vec3 p = aSeed.xyz * uBox + vec3(1.1 * uTime, -0.9 * spd * uTime, 0.5 * uTime);
        p.x += sin(uTime * (0.8 + aSeed.w * 1.4) + aSeed.x * 40.0) * 1.8;       // 風の揺れ（横）
        p.z += cos(uTime * (0.6 + aSeed.z * 1.2) + aSeed.y * 40.0) * 1.8;
        vec3 wp = uCam + mod(p - uCam + 0.5 * uBox, uBox) - 0.5 * uBox;
        vec4 mv = viewMatrix * vec4(wp, 1.0);
        float dist = max(-mv.z, 0.1);
        gl_PointSize = clamp((0.10 + 0.14 * aSeed.z) * uProj / dist, 1.5, 12.0);
        float near = smoothstep(1.5, 5.0, dist), far = 1.0 - smoothstep(0.5 * uBox, 0.5 * uBox + 14.0, dist);
        vA = near * far;
        float h = fract(aSeed.x * 7.13 + aSeed.y * 3.7);
        vCol = h < 0.45 ? vec3(1.0, 0.16, 0.05) : h < 0.78 ? vec3(1.0, 0.42, 0.08) : vec3(1.0, 0.70, 0.12);
        vRot = uTime * (1.5 + 2.5 * aSeed.w) + aSeed.z * 6.28; vAsp = 0.35 + 0.4 * abs(sin(uTime * (1.1 + aSeed.x) + aSeed.y * 9.0));
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uGain; varying vec3 vCol; varying float vA, vRot, vAsp;
      void main(){
        vec2 q = gl_PointCoord * 2.0 - 1.0; float c = cos(vRot), s = sin(vRot);
        q = vec2(c * q.x - s * q.y, s * q.x + c * q.y); q.y /= vAsp;
        float a = smoothstep(1.0, 0.45, length(q)); if (a < 0.01) discard;
        gl_FragColor = vec4(vCol * uGain * vA * a * 0.9, 1.0);
      }`,
  });
  const points = new THREE.Points(geo, mat); points.frustumCulled = false; points.name = 'leaves';
  return { points, uniforms, material: mat, setCount: (n) => geo.setDrawRange(0, Math.min(count, n)) };
}
