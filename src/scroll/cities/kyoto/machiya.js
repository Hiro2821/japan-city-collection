// cities/kyoto/machiya.js — 町家（切妻の瓦屋根・庇・格子の正面・二階の虫籠窓）のインスタンスと、その配置（通り沿い・街区の埋め草・坂沿い）。
//   形状は 1 種類（本体＋屋根＋庇、約 50 三角形）を、間口・高さ・奥行・向きと個体ごとの色・灯りで変える。格子と窓は正面のシェーダで描く。
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { NOISE } from '../../../lib/glsl.js';
import { H, STREETS, RIBBONS, PLAZAS, RIVER } from './layout.js';

function box(x0, y0, z0, x1, y1, z1, col) {
  const g = new THREE.BoxGeometry(x1 - x0, y1 - y0, z1 - z0).toNonIndexed(); g.translate((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
  const c = new Float32Array(g.attributes.position.count * 3); for (let i = 0; i < c.length; i += 3) { c[i] = col[0]; c[i + 1] = col[1]; c[i + 2] = col[2]; }
  g.setAttribute('color', new THREE.BufferAttribute(c, 3)); g.deleteAttribute('uv'); return g;
}
function prism(col, rise = 0.46, over = 0.12) {                       // 切妻屋根：棟は x 方向（平入り）。y=1（軒）から y=1+rise（棟）
  const P = [], N = [], C = [];
  const tri = (a, b, c, n) => { for (const p of [a, b, c]) { P.push(...p); N.push(...n); C.push(...col); } };
  const x0 = -0.5 - over * 0.3, x1 = 0.5 + over * 0.3, zf = 0.5 + over, zb = -0.5 - over, yE = 1.0, yR = 1 + rise;
  const nf = [0, 0.8, 0.6], nb = [0, 0.8, -0.6];
  tri([x0, yE, zf], [x1, yE, zf], [x1, yR, 0], nf); tri([x0, yE, zf], [x1, yR, 0], [x0, yR, 0], nf);
  tri([x1, yE, zb], [x0, yE, zb], [x0, yR, 0], nb); tri([x1, yE, zb], [x0, yR, 0], [x1, yR, 0], nb);
  tri([x0, yE, zf], [x0, yR, 0], [x0, yE, zb], [-1, 0, 0]); tri([x1, yE, zb], [x1, yR, 0], [x1, yE, zf], [1, 0, 0]);
  tri([x1, yE, zf], [x0, yE, zf], [x0, yE, zb], [0, -1, 0]); tri([x1, yE, zf], [x0, yE, zb], [x1, yE, zb], [0, -1, 0]);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(C, 3));
  return g;
}
export function machiyaGeometry() {
  const wall = [0.34, 0.30, 0.25], roof = [0.045, 0.045, 0.055], wood = [0.06, 0.04, 0.03];
  const parts = [
    box(-0.5, 0, -0.5, 0.5, 1.0, 0.5, wall),
    prism(roof, 0.5, 0.1),
    box(-0.52, 0.5, 0.5, 0.52, 0.56, 0.74, roof),                      // 一階の庇（軒の出）
    box(-0.5, 0.46, 0.5, 0.5, 0.5, 0.52, wood),
  ];
  const g = mergeGeometries(parts); return g;
}

export function machiyaMaterial(nightU, spillU) {
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, color: 0xffffff, roughness: 0.88, metalness: 0 });
  mat.customProgramCacheKey = () => 'kyoto-machiya-v1';
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uNight = nightU; shader.uniforms.uSpill = spillU;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vLP; varying vec3 vLN; varying vec3 vSc; varying vec3 vInst;')
      .replace('#include <color_vertex>', '#ifdef USE_COLOR\n vColor.xyz = color.xyz;\n#endif')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vLP = position; vLN = normal; vSc = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
        #ifdef USE_INSTANCING_COLOR
          vInst = instanceColor;
        #else
          vInst = vec3(0.5);
        #endif`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\nuniform float uNight, uSpill; varying vec3 vLP; varying vec3 vLN; varying vec3 vSc; varying vec3 vInst;\n${NOISE}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        vec3 mEmis = vec3(0.0);
        {
          float tone = 0.85 + 0.3 * vInst.z;
          diffuseColor.rgb *= tone;
          bool front = vLN.z > 0.9 && vLP.y < 1.001 && vLP.y > 0.0;
          if (front) {
            float gy = vLP.y;                                                    // 0..1（本体の高さ）
            float xm = (vLP.x + 0.5) * vSc.x, ym = gy * vSc.y;                   // 実寸 m
            if (gy < 0.46) {
              // 一階：格子（細い縦材。間から内側の灯り）
              float bars = step(0.45, fract(xm / 0.16));
              float door = step(0.25, fract(xm / 2.6 + vInst.y * 3.0)) ;
              vec3 wood = vec3(0.045, 0.030, 0.022);
              diffuseColor.rgb = mix(vec3(0.02), wood, bars);
              float inner = (1.0 - bars) * step(vInst.x, 0.62) * (0.5 + 0.5 * door);
              mEmis += inner * vec3(1.0, 0.55, 0.22) * (0.35 + 0.35 * vnoise(vec2(xm * 0.7, vInst.y * 19.0)));
            } else if (gy > 0.56 && gy < 0.92) {
              // 二階：虫籠窓（低い窓）と漆喰
              float wy = smoothstep(0.62, 0.66, gy) * (1.0 - smoothstep(0.80, 0.84, gy));
              float wx = step(0.30, fract(xm / 2.8 + vInst.y * 2.0)) * step(fract(xm / 2.8 + vInst.y * 2.0), 0.72);
              float on = step(vInst.x, 0.5);
              diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.03, 0.025, 0.02), wy * wx);
              mEmis += wy * wx * on * vec3(1.0, 0.62, 0.30) * 0.45;
            }
          }
        }`)
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += mEmis * uNight * uSpill;');
  };
  return mat;
}

// ---------------------------------------------------------------- 配置
const segDist = (x, z, ax, az, bx, bz) => { const dx = bx - ax, dz = bz - az, t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / (dx * dx + dz * dz))); return Math.hypot(x - (ax + dx * t), z - (az + dz * t)); };
const ROADS = [
  ...STREETS.flatMap((s) => s.pts.slice(0, -1).map((p, i) => [p[0], p[1], s.pts[i + 1][0], s.pts[i + 1][1], s.w / 2])),
  ...RIBBONS.map((r) => [r[0][0], r[0][1], r[1][0], r[1][1], r[2] / 2]),
];
export const onRoad = (x, z, m = 0, plazas = true) => {
  if (Math.abs(x - RIVER.x) < RIVER.half + 4) return true;
  for (const r of ROADS) if (segDist(x, z, r[0], r[1], r[2], r[3]) < r[4] + m) return true;
  if (plazas) for (const q of PLAZAS) if (x > q[0] - m && x < q[2] + m && z > q[1] - m && z < q[3] + m) return true;
  return false;
};

/** 通り沿いに町家を連ねる。pts=折れ線、half=通りの半幅、sides=[-1,1]、setback=通りからの距離、depth=[最小,最大]、rows=背後に埋める列数。 */
export function lineHouses(out, rng, pts, half, { sides = [-1, 1], depth = [12, 18], wid = [5, 9], height = [6.2, 7.6], keep = () => true, gap = 0.4 } = {}) {
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, az] = pts[i], [bx, bz] = pts[i + 1], L = Math.hypot(bx - ax, bz - az), tx = (bx - ax) / L, tz = (bz - az) / L, nx = -tz, nz = tx;
    for (const sd of sides) for (let s = rng() * 3; s < L - 4;) {
      const w = wid[0] + rng() * (wid[1] - wid[0]), d = depth[0] + rng() * (depth[1] - depth[0]), hh = height[0] + rng() * (height[1] - height[0]);
      const cx = ax + tx * (s + w / 2) + nx * sd * (half + 0.6 + d / 2), cz = az + tz * (s + w / 2) + nz * sd * (half + 0.6 + d / 2);
      s += w + gap * rng();
      if (!keep(cx, cz) || onRoad(cx, cz, d * 0.45 - 0.2) && onRoad(cx + nx * sd * d * 0.5, cz + nz * sd * d * 0.5, 0)) continue;
      // 正面（+z）が通りを向く：通りは -sd*n 方向
      const fx = -nx * sd, fz = -nz * sd, yaw = Math.atan2(fx, fz);
      out.push({ x: cx, z: cz, w, h: hh, d, yaw });
    }
  }
}
/** 矩形の街区を、列状の町家で埋める（正面は +z か -z、列ごとに向きを交互にして路地を作る）。 */
export function fillBlock(out, rng, r, { depth = [10, 15], wid = [5, 9], height = [6, 7.4], keep = () => true, density = 0.92 } = {}) {
  let z = r[1], row = 0;
  while (z < r[3] - 6) {
    const d = depth[0] + rng() * (depth[1] - depth[0]); const zc = z + d / 2, face = row % 2 === 0 ? 0 : Math.PI;
    for (let x = r[0] + rng() * 2; x < r[2] - 4;) {
      const w = wid[0] + rng() * (wid[1] - wid[0]); const cx = x + w / 2; x += w + 0.3;
      if (rng() > density || onRoad(cx, zc, 2) || !keep(cx, zc)) continue;
      out.push({ x: cx, z: zc, w, h: height[0] + rng() * (height[1] - height[0]), d, yaw: face + (rng() - 0.5) * 0.04 });
    }
    z += d + 1.6; row++;
  }
}
export function buildMachiya(items, rng, nightU, spillU) {
  const geo = machiyaGeometry(), mat = machiyaMaterial(nightU, spillU);
  const n = items.length, mesh = new THREE.InstancedMesh(geo, mat, n);
  const M = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), c = new THREE.Color();
  const lit = [];
  items.forEach((it, i) => {
    const cy = Math.cos(it.yaw), sy = Math.sin(it.yaw); let lo = 1e9, hi = -1e9;                       // 斜面：四隅の最低高さに合わせ、上り側は埋める
    for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { const hh = H(it.x + (a * it.w * 0.5) * cy + (b * it.d * 0.5) * sy, it.z - (a * it.w * 0.5) * sy + (b * it.d * 0.5) * cy); lo = Math.min(lo, hh); hi = Math.max(hi, hh); }
    const y = lo - 0.4;
    q.setFromAxisAngle(up, it.yaw); s.set(it.w, it.h + 0.4 + (hi - lo), it.d); p.set(it.x, y, it.z); M.compose(p, q, s); mesh.setMatrixAt(i, M);
    const l = rng(); c.setRGB(l, rng(), rng()); mesh.setColorAt(i, c);
    if (l < 0.62) { const fx = Math.sin(it.yaw), fz = Math.cos(it.yaw); lit.push([it.x + fx * (it.d / 2 + 0.3), H(it.x + fx * (it.d / 2 + 0.3), it.z + fz * (it.d / 2 + 0.3)) + 2.4, it.z + fz * (it.d / 2 + 0.3), it.h]); }
  });
  mesh.instanceMatrix.needsUpdate = true; mesh.instanceColor.needsUpdate = true;
  mesh.castShadow = false; mesh.receiveShadow = false; mesh.frustumCulled = false; mesh.name = 'machiya';
  return { mesh, lit, count: n, trisEach: geo.attributes.position.count / 3 };
}
