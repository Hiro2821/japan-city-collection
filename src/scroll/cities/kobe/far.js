// cities/kobe/far.js — 遠景：六甲の山並み・東西の裾野（霞に溶けるシルエット）。決定的、CPU 更新なし。
//   Step 5 で、山肌の灯り・市街の帯・淡路島・ポートアイランドを足す。
import * as THREE from 'three';

/** 山並み：北（六甲の背後）・東西の裾野。霞に溶ける面（頂点は y が稜線）。 */
export function buildRidges() {
  const mk = (cx, cz, len, ang, h0, off, seed, rows = 160) => {
    const SEG = 160, ROW = 5, pos = [], idx = [];
    for (let r = 0; r <= ROW; r++) for (let i = 0; i <= SEG; i++) {
      const u = i / SEG - 0.5, rough = 0.55 + 0.3 * Math.sin(u * 17 + seed) + 0.2 * Math.sin(u * 41 + seed * 2.1) + 0.1 * Math.sin(u * 93 + seed * 3.3);
      const env = Math.max(0, 1 - Math.pow(Math.abs(u) * 2, 2.5)), y = (1 - r / ROW) * h0 * rough * env, d = r * rows + off;
      pos.push(u * len, y, d);
    }
    for (let r = 0; r < ROW; r++) for (let i = 0; i < SEG; i++) { const a = r * (SEG + 1) + i, b = a + 1, c = a + SEG + 1, e = c + 1; idx.push(a, c, b, b, c, e); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.rotateY(ang); g.translate(cx, 0, cz); return g;
  };
  const geos = [mk(0, -4200, 18000, 0.0, 1100, 0, 1.7, 220), mk(-4300, -7500, 15000, Math.PI / 2, 620, 0, 3.1), mk(4300, -7500, 15000, -Math.PI / 2, 560, 0, 5.3)];
  const uniforms = { uBody: { value: new THREE.Color(0.05, 0.06, 0.12) } };
  const mat = new THREE.ShaderMaterial({ uniforms, fog: false, depthWrite: true,
    vertexShader: 'void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }', fragmentShader: 'uniform vec3 uBody; void main(){ gl_FragColor = vec4(uBody, 1.0); }' });
  const group = new THREE.Group(); group.name = 'ridges';
  geos.forEach((gg, i) => { const m = new THREE.Mesh(gg, mat); m.frustumCulled = false; m.renderOrder = -1; m.name = 'ridge' + i; group.add(m); });
  return { group, uniforms, tris: geos.reduce((a, gg) => a + gg.index.count / 3, 0) };
}
