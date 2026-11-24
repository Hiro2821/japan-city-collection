// cities/kyoto/temples.js — ランドマーク：八坂神社 西楼門・舞殿、八坂の塔、清水寺（仁王門・西門・三重塔・本堂と舞台の懸造り）、高台寺の門。
//   すべて箱・角錐・四角錐台の組み合わせ（頂点色）を 1 つの静的メッシュにまとめる（描画 1 コール）。実在の施設の「らしさ」の再現で、寸法は概略（U-7・U-12）。
//   ライトアップ：夜は頂点色×暖色の発光（下側ほど強い）と、足元の光点（lit 配列）。
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { H, YASAKA, KIYOMIZU, YASAKA_TOWER, KODAIJI } from './layout.js';

const VERM = [0.62, 0.10, 0.05], WOOD = [0.20, 0.10, 0.06], TILE = [0.07, 0.075, 0.09], WHITE = [0.55, 0.50, 0.42], STONE = [0.26, 0.24, 0.22], HINOKI = [0.18, 0.10, 0.05];

class Parts {
  constructor() { this.list = []; this.M = new THREE.Matrix4(); this.set(0, 0, 0, 0); }
  set(x, y, z, yaw) { this.M.compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw), new THREE.Vector3(1, 1, 1)); return this; }
  _push(g, col, light = 1) {
    g = g.index ? g.toNonIndexed() : g; g.deleteAttribute('uv'); const n = g.attributes.position.count, c = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { c[i * 3] = col[0]; c[i * 3 + 1] = col[1]; c[i * 3 + 2] = col[2]; }
    g.setAttribute('color', new THREE.BufferAttribute(c, 3)); g.applyMatrix4(this.M); this.list.push(g);
  }
  /** 箱：中心 (x,y,z) はローカル座標、y は底面。 */
  box(x, y, z, w, h, d, col) { const g = new THREE.BoxGeometry(w, h, d); g.translate(x, y + h / 2, z); this._push(g, col); }
  /** 入母屋・寄棟風の屋根（四角錐台。軒を張り出す）。w,d=軒の寸法、top=棟の長さ比。 */
  roof(x, y, z, w, d, h, col, ridge = 0.35) {
    const g = new THREE.CylinderGeometry(0.5 * Math.SQRT2 * ridge, 0.5 * Math.SQRT2, h, 4, 1, false); g.rotateY(Math.PI / 4); g.scale(w, 1, d); g.translate(x, y + h / 2, z); this._push(g, col);
  }
  pyramid(x, y, z, r, h, col) { const g = new THREE.ConeGeometry(r, h, 4, 1, false); g.rotateY(Math.PI / 4); g.translate(x, y + h / 2, z); this._push(g, col); }
  merge() { return mergeGeometries(this.list); }
}

/** 二層の楼門（八坂神社 西楼門・清水寺 仁王門 等）。正面 = +z。 */
function gate(P, x, y, z, yaw, s = 1) {
  P.set(x, y, z, yaw);
  P.box(0, 0, 0, 15 * s, 2.2 * s, 11 * s, STONE);                                    // 基壇
  for (const px of [-5.6, -2.2, 2.2, 5.6]) for (const pz of [-3.6, 3.6]) P.box(px * s, 2.2 * s, pz * s, 0.8 * s, 4.6 * s, 0.8 * s, VERM);   // 柱
  P.box(0, 6.8 * s, 0, 14 * s, 0.6 * s, 10 * s, VERM);                              // 腰組み
  P.roof(0, 7.4 * s, 0, 17 * s, 12.5 * s, 1.9 * s, TILE, 0.5);                      // 下層の屋根
  P.box(0, 9.2 * s, 0, 11 * s, 3.6 * s, 7.6 * s, VERM);                              // 上層
  P.box(0, 10.2 * s, 3.9 * s, 9 * s, 1.0 * s, 0.2 * s, WHITE);                       // 窓（白壁の帯）
  P.roof(0, 12.7 * s, 0, 15.5 * s, 11 * s, 3.0 * s, TILE, 0.18);                    // 上層の屋根（入母屋）
}
/** 五重塔（八坂の塔 約 46 m、清水寺の三重塔 約 31 m は tiers=3）。 */
function pagoda(P, x, y, z, h, tiers) {
  P.set(x, y, z, 0);
  const base = h * 0.05, th = (h * 0.78) / tiers; P.box(0, 0, 0, h * 0.30, base, h * 0.30, STONE);
  let yy = base;
  for (let i = 0; i < tiers; i++) {
    const w = h * 0.16 * (1 - 0.12 * i), eave = w * 2.0;
    P.box(0, yy, 0, w, th * 0.62, w, i === 0 ? WOOD : VERM);
    P.roof(0, yy + th * 0.55, 0, eave, eave, th * 0.45, TILE, 0.45); yy += th;
  }
  P.pyramid(0, yy - th * 0.1, 0, h * 0.05, h * 0.2, [0.5, 0.4, 0.15]);          // 相輪（金）
}
/** 本堂と舞台（懸造り）。正面（舞台が張り出す側）= +z。deck=舞台床の高さ。 */
function hondo(P, x, deck, z, yaw) {
  P.set(x, deck, z, yaw);
  P.box(0, 0, 4, 34, 0.6, 20, HINOKI);                                                // 舞台の床（約 34×20 m の張り出し）
  P.box(0, 0.6, 14.1, 34, 1.1, 0.35, WOOD);                                           // 欄干
  P.box(0, 0, -14, 36, 8, 18, WHITE);                                                 // 本堂の壁
  P.roof(0, 8, -14, 46, 32, 12, TILE, 0.25);                                          // 檜皮葺の大屋根
  P.box(-22, 0, -4, 8, 6, 14, WHITE); P.roof(-22, 6, -4, 13, 19, 6, TILE, 0.3);     // 脇の堂
}
const stageLegs = (P, x, deck, z, yaw) => {                                           // 懸造りの柱（地形まで届く）
  const c = Math.cos(yaw), s = Math.sin(yaw);
  for (let i = 0; i < 6; i++) for (let j = 0; j < 4; j++) {
    const lx = -15 + i * 6, lz = -3 + j * 5.5, wx = x + c * lx + s * lz, wz = z - s * lx + c * lz, gy = H(wx, wz), hh = Math.max(2.5, deck - gy + 0.4);
    P.set(wx, gy - 0.4, wz, 0); P.box(0, 0, 0, 0.9, hh, 0.9, WOOD);
    if (j === 1 || j === 3) { P.set(wx, gy + hh * 0.45, wz, yaw); P.box(0, 0, 0, 5.4, 0.35, 0.35, WOOD); }   // 貫
  }
};

export function buildTemples() {
  const P = new Parts(), lit = [], yawToward = (fx, fz) => Math.atan2(fx, fz);
  // 八坂神社：西楼門（四条通の突き当たり、西向き）と舞殿・本殿
  const [gx, gz] = YASAKA.gate; gate(P, gx + 6, H(gx, gz), gz, yawToward(-1, 0), 1.0);
  P.set(0, 0, 0, 0); P.set(YASAKA.hall[0], H(...YASAKA.hall), YASAKA.hall[1], yawToward(-1, 0)); P.box(0, 0, 0, 26, 3, 22, STONE); P.box(0, 3, 0, 20, 5, 16, VERM); P.roof(0, 8, 0, 30, 24, 8, TILE, 0.2);
  lit.push([gx - 4, H(gx, gz) + 3, gz - 4, 1], [gx - 4, H(gx, gz) + 3, gz + 4, 1], [YASAKA.hall[0] - 12, H(...YASAKA.hall) + 4, YASAKA.hall[1], 1.4]);
  gate(P, YASAKA.south[0], H(...YASAKA.south), YASAKA.south[1] + 6, yawToward(0, 1), 0.7);                 // 南楼門
  // 高台寺の門
  gate(P, KODAIJI.c[0] - 30, H(KODAIJI.c[0] - 30, KODAIJI.c[1]), KODAIJI.c[1], yawToward(-1, 0), 0.5);
  // 八坂の塔（法観寺）
  const [tx, tz] = YASAKA_TOWER; pagoda(P, tx, H(tx, tz) - 0.5, tz, 46, 5); lit.push([tx, H(tx, tz) + 12, tz, 2.2], [tx, H(tx, tz) + 24, tz, 2.0], [tx, H(tx, tz) + 36, tz, 1.8]);
  // 清水寺
  const K = KIYOMIZU, f = K.facing, fx = Math.sin(f), fz = Math.cos(f);
  const [hx, hz] = K.hondo, deck = H(hx, hz) + 0.5;
  hondo(P, hx, deck, hz, f); stageLegs(P, hx + fx * 4, deck, hz + fz * 4, f);
  gate(P, K.nioumon[0], H(...K.nioumon), K.nioumon[1], yawToward(-0.7, -0.7), 0.9);
  gate(P, K.saimon[0], H(...K.saimon), K.saimon[1], yawToward(-0.6, 0.8), 0.55);
  pagoda(P, K.pagoda[0], H(...K.pagoda) - 0.5, K.pagoda[1], 31, 3);
  pagoda(P, K.koyasu[0], H(...K.koyasu) - 0.5, K.koyasu[1], 16, 3);
  P.set(K.bell[0], H(...K.bell), K.bell[1], 0); P.box(0, 0, 0, 5, 6, 5, WOOD); P.roof(0, 6, 0, 8, 8, 3, TILE, 0.3);   // 鐘楼
  lit.push([K.pagoda[0], H(...K.pagoda) + 8, K.pagoda[1], 2.0], [K.pagoda[0], H(...K.pagoda) + 18, K.pagoda[1], 1.8], [hx + fx * 12, deck + 4, hz + fz * 12, 2.2], [hx - fx * 6, deck + 6, hz - fz * 6, 2.0],
    [K.nioumon[0], H(...K.nioumon) + 6, K.nioumon[1], 1.6]);
  const geo = P.merge(), mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, metalness: 0, emissive: new THREE.Color(1.0, 0.55, 0.22), emissiveIntensity: 0.0 });
  mat.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying float vYW;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvYW = (modelMatrix * vec4(transformed, 1.0)).y;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vYW;').replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance *= vColor.rgb * 1.6;');
  };
  mat.customProgramCacheKey = () => 'kyoto-temples-v1';
  const mesh = new THREE.Mesh(geo, mat); mesh.castShadow = false; mesh.receiveShadow = false; mesh.name = 'temples';
  return { mesh, mat, lit, tris: geo.attributes.position.count / 3 };
}
