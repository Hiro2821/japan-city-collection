// cities/osaka/streaks.js — 車のライトの流れ（光跡）。東京 streaks.js と同じ作法。御堂筋も車道のある大通りなので光跡を出す。
import * as THREE from 'three';
import { STREETS } from './layout.js';

export function buildStreaks(rng) {
  const A = [], L = [], F = [], AX = [], S = [], PH = [], COL = [], DIR = [];
  const lane = (s, fixed, dir) => {
    const len = s.b - s.a, n = Math.max(1, Math.round(len / 55));
    for (let k = 0; k < n; k++) {
      A.push(s.a); L.push(len); F.push(fixed); AX.push(s.dir === 'x' ? 0 : 1); S.push(12 + rng() * 10); PH.push(rng()); DIR.push(dir);
      COL.push(...(dir > 0 ? [3.0, 2.5, 1.7] : [2.6, 0.18, 0.12]));
    }
  };
  for (const s of STREETS) {
    const offs = s.kind === 1 ? [5.5] : s.kind === 2 ? [3.6, 8.2] : [2.0];
    for (const o of offs) for (const dir of [1, -1]) lane(s, s.c + (dir > 0 ? o : -o), dir);
  }
  const n = A.length;
  const geo = new THREE.PlaneGeometry(1, 1); geo.rotateX(-Math.PI / 2);
  const ig = new THREE.InstancedBufferGeometry(); ig.index = geo.index; ig.attributes.position = geo.attributes.position; ig.instanceCount = n;
  const ia = (arr, size) => new THREE.InstancedBufferAttribute(new Float32Array(arr), size);
  ig.setAttribute('aA', ia(A, 1)); ig.setAttribute('aLen', ia(L, 1)); ig.setAttribute('aFixed', ia(F, 1)); ig.setAttribute('aAx', ia(AX, 1));
  ig.setAttribute('aSpd', ia(S, 1)); ig.setAttribute('aPh', ia(PH, 1)); ig.setAttribute('aCol', ia(COL, 3)); ig.setAttribute('aDir', ia(DIR, 1));
  const uniforms = { uTime: { value: 0 }, uGain: { value: 1 }, uFog: { value: 0.00004 } };
  const mat = new THREE.ShaderMaterial({
    uniforms, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      attribute float aA, aLen, aFixed, aAx, aSpd, aPh, aDir; attribute vec3 aCol;
      uniform float uTime, uFog; varying vec3 vCol; varying float vT;
      void main(){
        float u = fract(aPh + uTime * aSpd / aLen * aDir);
        float along = aA + u * aLen;
        float len = 13.0, wid = 0.45;
        vec3 w = aAx < 0.5 ? vec3(along + position.x * len, 0.55, aFixed + position.z * wid) : vec3(aFixed + position.z * wid, 0.55, along + position.x * len);
        vec4 mv = viewMatrix * vec4(w, 1.0);
        float dist = max(-mv.z, 0.1);
        vT = (position.x * aDir) + 0.5;
        vCol = aCol * exp(-pow(uFog * dist, 2.0)) * smoothstep(0.0, 18.0, dist) * (0.35 + 0.65 * smoothstep(900.0, 200.0, dist));
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uGain; varying vec3 vCol; varying float vT;
      void main(){ float a = pow(clamp(vT, 0.0, 1.0), 2.2); gl_FragColor = vec4(vCol * uGain * a * 0.5, 1.0); }`,
  });
  const mesh = new THREE.Mesh(ig, mat); mesh.frustumCulled = false; mesh.name = 'light-streaks';
  return { mesh, uniforms, count: n };
}
