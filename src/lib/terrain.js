// terrain.js — 遠景の山並み。極座標メッシュ（遠いほど粗く、近いほど細かい）＋高さ関数＋雪・森・岩の頂点カラー。
//
// ■ 山の位置と標高は記憶に基づく概略（測量・DEMではない）。札幌中心部（テレビ塔）を原点、x=東・z=南。
//   手稲山(1023m)=西北西 約13km / 円山(226m)=西 約4.5km / 藻岩山(531m)=南西 約4.4km /
//   空沼岳(1099m)・札幌岳(1293m)=南西〜南南西 約17〜20km。位置のずれは数km、形は地形ノイズによる近似。
import { makeNoise2 } from './rng.js';
import { NOISE } from './glsl.js';

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

/** 山塊の定義（x,z=中心(m), h=標高(m), sx,sz=広がり(m), rot=長軸の向き(rad)） */
export const MASSIFS = [
  { name: '手稲山', x: -12800, z: -3300, h: 1023, sx: 3600, sz: 2700, rot: 0.5 },
  { name: '三角山〜奥手稲', x: -9000, z: -1000, h: 560, sx: 2400, sz: 1500, rot: 0.8 },
  { name: '円山', x: -4500, z: 1300, h: 226, sx: 900, sz: 700, rot: 0.3 },
  { name: '藻岩山', x: -2500, z: 3650, h: 531, sx: 1500, sz: 1100, rot: 2.4 },
  { name: '三角山・荒井山方面', x: -6200, z: 600, h: 311, sx: 1100, sz: 800, rot: 0.2 },
  { name: '空沼岳', x: -14800, z: 7400, h: 1099, sx: 3200, sz: 2400, rot: 2.2 },
  { name: '札幌岳', x: -16500, z: 9600, h: 1293, sx: 3800, sz: 2600, rot: 2.0 },
  { name: '恵庭岳方面', x: -8000, z: 22000, h: 1320, sx: 4500, sz: 3500, rot: 0.6 },
  { name: '余市岳方面', x: -34000, z: -4000, h: 1488, sx: 6500, sz: 4500, rot: 0.2 },
];

export function sapporoHeight() {
  const nA = makeNoise2(11), nB = makeNoise2(23), nC = makeNoise2(41);
  return (x, z) => {
    const r = Math.hypot(x, z);
    const th = Math.atan2(z, x);                         // z は南向き。西=±180°, 南西=135°
    const angW = Math.abs(((th - (2.75)) + Math.PI * 3) % (Math.PI * 2) - Math.PI);   // 西南西(157.5°)を中心とした角度差
    const wRange = Math.exp(-((angW / 0.95) ** 2));
    // ドメインワープで尾根の向きを不規則にする
    const wx = x + 1300 * (nB.fbm(x * 0.00018, z * 0.00018, 3) - 0.5) * 2;
    const wz = z + 1300 * (nB.fbm(x * 0.00018 + 7.3, z * 0.00018 - 2.1, 3) - 0.5) * 2;
    const rid = nA.ridged(wx * 0.00042 + 3.1, wz * 0.00042 - 1.7, 6);       // 尾根筋
    const fb = nA.fbm(x * 0.0009, z * 0.0009, 4);
    // 山麓の連なり（西〜南西にだけ広がる山地）
    let h = smooth(6500, 15000, r) * wRange * (110 + 560 * rid);
    h += smooth(14000, 30000, r) * wRange * 380 * nC.ridged(wx * 0.0002 + 9.1, wz * 0.0002 + 4.4, 5);
    // 個別の山：楕円形の裾に尾根ノイズを重ねる（山頂は尖りすぎず、斜面には谷と尾根が出る）
    for (const m of MASSIFS) {
      const c = Math.cos(m.rot), s = Math.sin(m.rot);
      const dx = x - m.x, dz = z - m.z;
      const u = (dx * c + dz * s) / m.sx, v = (-dx * s + dz * c) / m.sz;
      const d2 = u * u + v * v;
      if (d2 > 16) continue;
      const prof = Math.exp(-Math.pow(d2, 0.82) * 1.15);
      const detail = 0.66 + 0.62 * nA.ridged(wx * 0.0008 + m.x * 0.0003, wz * 0.0008 + m.z * 0.0003, 5);
      h += m.h * prof * (m.h > 400 ? detail : 0.86 + 0.28 * fb);
    }
    // 尾根・谷の細部（標高が高い場所ほど強い）
    h += (nC.ridged(x * 0.0026, z * 0.0026, 4) - 0.3) * Math.min(95, h * 0.13);
    h = Math.max(0, h + (nA.fbm(x * 0.012, z * 0.012, 3) - 0.5) * Math.min(14, h * 0.03));
    return h;
  };
}

/**
 * 極座標メッシュの山岳地形。rInner〜rOuter を対数間隔のリングで分割（遠方ほど粗い）。
 * 角度は [thA, thB] の扇形のみ（山のない方角は平坦面で済ませる）。
 */
export function createMountains(THREE, { heightFn, y = -4, rInner = 2500, rOuter = 44000, rings = 420, segs = 820, thA = 0.55, thB = 3.95, snowLine = 260 }) {
  const nv = (rings + 1) * (segs + 1);
  const pos = new Float32Array(nv * 3), hs = new Float32Array(nv);
  const k = Math.log(rOuter / rInner);
  let o = 0;
  for (let i = 0; i <= rings; i++) {
    const r = rInner * Math.exp((k * i) / rings);
    for (let j = 0; j <= segs; j++) {
      const th = thA + ((thB - thA) * j) / segs;
      const x = Math.cos(th) * r, z = Math.sin(th) * r;
      const edge = smooth(0, 0.18, j / segs) * smooth(0, 0.18, 1 - j / segs);      // 扇形の両端でゼロへ
      const h = heightFn(x, z) * (0.0 + edge);
      pos[o++] = x; pos[o++] = h; pos[o++] = z; hs[i * (segs + 1) + j] = h;
    }
  }
  const idx = new Uint32Array(rings * segs * 6);
  let q = 0;
  for (let i = 0; i < rings; i++) for (let j = 0; j < segs; j++) {
    const a = i * (segs + 1) + j, b = a + 1, c = a + segs + 1, d = c + 1;
    idx[q++] = a; idx[q++] = c; idx[q++] = b; idx[q++] = b; idx[q++] = c; idx[q++] = d;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setIndex(new THREE.BufferAttribute(idx, 1));
  geo.computeVertexNormals();
  const nor = geo.attributes.normal;
  const col = new Float32Array(nv * 3);
  const noise = makeNoise2(31);
  for (let i = 0; i < nv; i++) {
    const x = pos[i * 3], z = pos[i * 3 + 2], h = hs[i];
    const slope = 1 - nor.getY(i);                                     // 0=平ら, 1=垂直
    const nz = noise.fbm(x * 0.0011, z * 0.0011, 4), nz2 = noise.fbm(x * 0.006 + 5, z * 0.006, 3);
    // 冬の山肌：標高が高く緩やかな斜面ほど雪、急斜面は雪が付かず森・岩が出る。南向き（日当たり）は雪が薄い。
    const aspect = nor.getX(i) * -0.66 + nor.getZ(i) * 0.71;            // 太陽側（SW）を向くほど正
    const snowAmt = smooth(snowLine - 140, snowLine + 280, h + (nz - 0.5) * 220 - aspect * 70) * (1 - smooth(0.12, 0.42, slope) * 0.8);
    const forestAmt = smooth(15, 130, h) * (1 - smooth(850, 1150, h + (nz - 0.5) * 200));
    const rockAmt = smooth(0.22, 0.5, slope) * smooth(300, 800, h);
    const plain = [0.86, 0.88, 0.93], forest = [0.20, 0.235, 0.235], rock = [0.30, 0.285, 0.29], snow = [0.93, 0.945, 0.975];
    const c = [0, 0, 0];
    for (let t = 0; t < 3; t++) {
      let b = plain[t] + (forest[t] - plain[t]) * forestAmt;           // 平地の雪原 → 森（雪を載せた針広混交林）
      b += (rock[t] - b) * rockAmt * 0.7;
      b = b + (snow[t] - b) * snowAmt;
      c[t] = b * (0.9 + 0.2 * nz2);
    }
    col[i * 3] = c[0]; col[i * 3 + 1] = c[1]; col[i * 3 + 2] = c[2];
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.93, metalness: 0 });
  mat.customProgramCacheKey = () => 'mountain-v1';
  mat.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWP;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\nvarying vec3 vWP;\n${NOISE}`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        {
          // 樹林の粒状感・雪面のうねり（距離に応じて弱める）
          float d = length(vWP - cameraPosition);
          float fadeD = 1.0 - smoothstep(4000.0, 16000.0, d);
          float tex = 0.55 * vnoise(vWP.xz * 0.045) + 0.3 * vnoise(vWP.xz * 0.16) + 0.15 * vnoise(vWP.xz * 0.6);
          float lum = dot(diffuseColor.rgb, vec3(0.333));
          float forestness = 1.0 - smoothstep(0.38, 0.7, lum);
          diffuseColor.rgb *= 1.0 + (tex - 0.5) * (0.5 * forestness + 0.12) * (0.4 + 0.6 * fadeD);
        }`);
  };
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.y = y;
  mesh.castShadow = false; mesh.receiveShadow = false;
  mesh.frustumCulled = false;
  mesh.name = 'mountains';
  return mesh;
}

/** 山のない方角の平坦な雪原（ごく粗い1枚）。山地メッシュより十分低く置いてz-fightを避ける。 */
export function createFarPlain(THREE, { size = 90000, y = -40 }) {
  const g = new THREE.PlaneGeometry(size, size, 1, 1); g.rotateX(-Math.PI / 2);
  const m = new THREE.MeshStandardMaterial({ color: 0xd8dde8, roughness: 0.95 });
  const mesh = new THREE.Mesh(g, m); mesh.position.y = y; mesh.frustumCulled = false; mesh.name = 'far-plain';
  return mesh;
}
