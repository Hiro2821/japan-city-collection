// cities/tokyo/leds.js — イルミネーションの LED（シャンパンゴールドの光点）。枝に沿って巻く。
//   光点のシェーダでごくゆるやかに明滅（位相＋通りに沿った光の波）。CPU 更新なし・時刻だけで決まる（決定的）。80 m ごとのチャンクに分けて視錐台カリング。
import * as THREE from 'three';
import { NAKA_X, GYOKO_Z } from './layout.js';

/** 木ごとの LED 点列（world）。戻り値：チャンクごとの { pos, phase, u, rnd, color, size }。 */
export function ledPoints(trees, rnd) {
  const gold = [2.3, 1.45, 0.55], sz = 0.16;
  const out = new Map();
  const q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), v = new THREE.Vector3();
  for (const o of trees.placed) {
    if (!o.lit) continue;
    const tree = trees.variants[o.type][o.v];
    q.setFromAxisAngle(up, o.yaw);
    const alongZ = o.type === 'zelkova';                                   // 仲通り＝南北（z が通りに沿った座標）
    const key = `${o.type}|${Math.floor((alongZ ? o.z : o.x) / 80)}`;
    if (!out.has(key)) out.set(key, { pos: [], phase: [], u: [], rnd: [], cx: 0, cz: 0, n: 0 });
    const g = out.get(key);
    for (const l of tree.limbs) {
      if (l.lv === 0) continue;
      const len = Math.hypot(l.b[0] - l.a[0], l.b[1] - l.a[1], l.b[2] - l.a[2]);
      const n = Math.max(1, Math.round(len / (l.lv === 3 ? 0.55 : 0.7)));
      for (let i = 0; i < n; i++) {
        const t = (i + 0.5) / n;
        v.set(l.a[0] + (l.b[0] - l.a[0]) * t, l.a[1] + (l.b[1] - l.a[1]) * t, l.a[2] + (l.b[2] - l.a[2]) * t).applyQuaternion(q).multiplyScalar(o.sc);
        const x = o.x + v.x, y = v.y, z = o.z + v.z;
        g.pos.push(x, y, z);
        const h = Math.sin((g.pos.length + o.yaw * 977) * 12.9898) * 43758.5453; const f = h - Math.floor(h);
        g.phase.push(f * 6.2832); g.rnd.push((f * 7.3) % 1); g.u.push(alongZ ? z : x);
      }
    }
  }
  return { groups: [...out.values()], color: gold, size: sz };
}

export function buildLeds(trees, rnd) {
  const { groups, color, size } = ledPoints(trees, rnd);
  const uniforms = {
    uProj: { value: 1000 }, uFog: { value: 0.00004 }, uGain: { value: 1 }, uMinPx: { value: 1.5 }, uMaxPx: { value: 14 },
    uTime: { value: 0 }, uTwFrac: { value: 1 }, uTwAmp: { value: 0.28 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      attribute float aPhase, aU, aR;
      uniform float uProj, uFog, uGain, uMinPx, uMaxPx, uTime, uTwFrac, uTwAmp;
      varying vec3 vCol;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float dist = max(-mv.z, 0.1);
        float px = ${size.toFixed(3)} * uProj / dist;
        float fade = clamp(px / uMinPx, 0.0, 1.0);
        gl_PointSize = clamp(px, uMinPx, uMaxPx);
        float tw = aR < uTwFrac ? 1.0 : 0.0;                                    // 明滅させる点の割合（ambient の個数）
        float wave = 0.5 + 0.5 * sin(aU * 0.045 - uTime * 1.3);                 // 通りに沿ってゆっくり流れる光の波
        float b = 1.0 + tw * (uTwAmp * sin(uTime * 2.1 + aPhase) + 0.22 * (wave - 0.5));
        float fog = exp(-pow(uFog * dist, 2.0));
        vCol = vec3(${color[0].toFixed(2)}, ${color[1].toFixed(2)}, ${color[2].toFixed(2)}) * uGain * b * fog * fade * fade;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      varying vec3 vCol;
      void main(){ vec2 q = gl_PointCoord * 2.0 - 1.0; float d2 = dot(q, q); if (d2 > 1.0) discard; gl_FragColor = vec4(vCol * exp(-d2 * 3.5), 1.0); }`,
  });
  const chunks = []; let total = 0;
  for (const g of groups) {
    const n = g.pos.length / 3; total += n;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(g.pos, 3));
    geo.setAttribute('aPhase', new THREE.Float32BufferAttribute(g.phase, 1));
    geo.setAttribute('aU', new THREE.Float32BufferAttribute(g.u, 1));
    geo.setAttribute('aR', new THREE.Float32BufferAttribute(g.rnd, 1));
    geo.computeBoundingSphere(); geo.boundingSphere.radius += 6;
    const pts = new THREE.Points(geo, mat); pts.frustumCulled = true; pts.name = 'leds';
    chunks.push(pts);
  }
  return { chunks, uniforms, count: total };
}
