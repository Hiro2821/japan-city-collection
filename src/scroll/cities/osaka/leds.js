// cities/osaka/leds.js — 並木の LED（東京 leds.js と同じシェーダの作法＋点ごとの色：御堂筋の区間色 D-3）。
//   きらめき（uTwFrac の割合だけが明滅）と通りに沿った光の波。160 m ごとのチャンクで視錐台カリング。
import * as THREE from 'three';
import { makeRng } from '../../../lib/rng.js';
import { ledColorAt } from './layout.js';

export function buildLeds(tips) {
  const rng = makeRng(777);
  const groups = new Map();
  const push = (g, x, y, z, u, c) => { g.pos.push(x, y, z); g.phase.push(rng() * 6.2832); g.u.push(u); g.rnd.push(rng()); const v = 0.8 + rng() * 0.45; g.col.push(c[0] * v, c[1] * v, c[2] * v); };
  for (const t of tips) {
    const c = ledColorAt(t.zoneZ);
    const key = Math.floor(t.u / 160);
    if (!groups.has(key)) groups.set(key, { pos: [], phase: [], u: [], rnd: [], col: [] });
    const g = groups.get(key);
    push(g, t.x, t.y, t.z, t.u, c);
    for (let j = 0; j < 5; j++) {
      const a = rng() * Math.PI * 2, r = (0.4 + rng() * 1.3) * t.s;
      push(g, t.x + Math.cos(a) * r, t.y - rng() * 1.1 * t.s, t.z + Math.sin(a) * r, t.u, c);
    }
  }
  const uniforms = {
    uProj: { value: 1000 }, uFog: { value: 0.00004 }, uGain: { value: 1 }, uMinPx: { value: 1.5 }, uMaxPx: { value: 14 },
    uTime: { value: 0 }, uTwFrac: { value: 1 }, uTwAmp: { value: 0.28 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      attribute float aPhase, aU, aR;
      attribute vec3 aColor;
      uniform float uProj, uFog, uGain, uMinPx, uMaxPx, uTime, uTwFrac, uTwAmp;
      varying vec3 vCol;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float dist = max(-mv.z, 0.1);
        float px = 0.16 * uProj / dist;
        float fade = clamp(px / uMinPx, 0.0, 1.0);
        gl_PointSize = clamp(px, uMinPx, uMaxPx);
        float tw = aR < uTwFrac ? 1.0 : 0.0;
        float wave = 0.5 + 0.5 * sin(aU * 0.045 - uTime * 1.3);
        float b = 1.0 + tw * (uTwAmp * sin(uTime * 2.1 + aPhase) + 0.22 * (wave - 0.5));
        float fog = exp(-pow(uFog * dist, 2.0));
        vCol = aColor * uGain * b * fog * fade * fade;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      varying vec3 vCol;
      void main(){ vec2 q = gl_PointCoord * 2.0 - 1.0; float d2 = dot(q, q); if (d2 > 1.0) discard; gl_FragColor = vec4(vCol * exp(-d2 * 3.5), 1.0); }`,
  });
  const chunks = []; let total = 0;
  for (const g of groups.values()) {
    total += g.pos.length / 3;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(g.pos, 3));
    geo.setAttribute('aPhase', new THREE.Float32BufferAttribute(g.phase, 1));
    geo.setAttribute('aU', new THREE.Float32BufferAttribute(g.u, 1));
    geo.setAttribute('aR', new THREE.Float32BufferAttribute(g.rnd, 1));
    geo.setAttribute('aColor', new THREE.Float32BufferAttribute(g.col, 3));
    geo.computeBoundingSphere(); geo.boundingSphere.radius += 6;
    const pts = new THREE.Points(geo, mat); pts.frustumCulled = true; pts.name = 'leds';
    chunks.push(pts);
  }
  return { chunks, uniforms, count: total };
}
