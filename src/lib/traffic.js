// traffic.js — 車体（左側通行）と歩行者。位置・歩容は時刻 t から解析的に決まる＝フレーム順序に依存しない。
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// 側面プロファイルを幅方向に押し出した車体（+x が前）。ボンネット・ウインドシールド・ルーフ・トランクの傾斜を持つ。
function carGeometry(THREE) {
  const L = 4.5, W = 1.8;
  const prof = [[-2.25, 0.34], [-2.25, 0.86], [-1.95, 0.98], [-1.45, 1.0], [-0.95, 1.46], [0.45, 1.47], [1.05, 1.02], [2.0, 0.9], [2.25, 0.78], [2.25, 0.34]];
  const shape = new THREE.Shape(prof.map(([x, y]) => new THREE.Vector2(x, y)));
  const body = new THREE.ExtrudeGeometry(shape, { depth: W - 0.12, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.06, bevelSegments: 1, curveSegments: 1 });
  body.translate(0, 0, -(W - 0.12) / 2);
  body.deleteAttribute('uv');
  // 窓：キャビン周りに少し張り出した暗色の帯
  const glass = new THREE.ExtrudeGeometry(new THREE.Shape([[-0.88, 1.03], [-0.5, 1.4], [0.4, 1.41], [0.96, 1.06]].map(([x, y]) => new THREE.Vector2(x, y))), { depth: W + 0.02, bevelEnabled: false });
  glass.translate(0, 0, -(W + 0.02) / 2); glass.deleteAttribute('uv');
  const wheels = [];
  for (const sx of [1.45, -1.4]) for (const sz of [-1, 1]) {
    const w = new THREE.CylinderGeometry(0.34, 0.34, 0.24, 10); w.rotateX(Math.PI / 2); w.translate(sx, 0.34, sz * (W / 2 - 0.1)); w.deleteAttribute('uv'); wheels.push(w);
  }
  const sill = new THREE.BoxGeometry(L - 0.5, 0.18, W - 0.08); sill.translate(0, 0.43, 0); sill.deleteAttribute('uv');   // 融雪剤で汚れた下回り
  const col = (g, rgb, part) => {
    const n = g.attributes.position.count, c = new Float32Array(n * 3), p = new Float32Array(n);
    for (let i = 0; i < n; i++) { c[i * 3] = rgb[0]; c[i * 3 + 1] = rgb[1]; c[i * 3 + 2] = rgb[2]; p[i] = part; }
    g.setAttribute('color', new THREE.BufferAttribute(c, 3)); g.setAttribute('aPart', new THREE.BufferAttribute(p, 1));
    return g;
  };
  const parts = [col(body, [1, 1, 1], 0), col(glass, [0.045, 0.055, 0.07], 1), col(sill, [0.34, 0.33, 0.32], 1), ...wheels.map((w) => col(w, [0.03, 0.03, 0.035], 1))];
  const g = mergeGeometries(parts.map((p) => { const q = p.index ? p.toNonIndexed() : p; return q; }));
  g.computeVertexNormals();
  return g;
}

const CAR_COLORS = [0xf2f2f2, 0xe8e8ea, 0xc9ccd2, 0x8d9199, 0x1b1d22, 0x2a2f3a, 0x7a1f1f, 0x1f3556, 0xd8d2c4, 0xb6bac0, 0x3e4651];

// 頂点カラーのうち aPart=1 は instanceColor を乗せない
function partColorPatch(mat) {
  mat.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aPart;')
      .replace('#include <color_vertex>', '#include <color_vertex>\nif (aPart > 0.5) vColor.xyz = color.xyz;');
  };
  mat.customProgramCacheKey = () => 'part-color-v1';
}

/**
 * lanes: [{ alongX, dir(+1/-1), fixed, speed, off, len, min, ph }]
 * 速度は一定ではなく、信号待ちの波のように 0.2〜1.8 倍で周期的に変動する（解析的に積分した位置）。
 */
export function createCars(THREE, lanes) {
  const geo = carGeometry(THREE);
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.34, metalness: 0.5, vertexColors: true });
  partColorPatch(mat);
  const mesh = new THREE.InstancedMesh(geo, mat, lanes.length);
  mesh.frustumCulled = false; mesh.castShadow = false; mesh.receiveShadow = false;
  const col = new THREE.Color();
  lanes.forEach((c, i) => { col.setHex(CAR_COLORS[(i * 7 + (c.ph * 97 | 0)) % CAR_COLORS.length]); mesh.setColorAt(i, col); });
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3(1, 1, 1);
  const up = new THREE.Vector3(0, 1, 0), right = new THREE.Vector3(0, 0, 1), qp = new THREE.Quaternion();

  const A = 0.8;
  const posOf = (c, t) => {
    const w = (Math.PI * 2) / (16 + c.ph * 26);
    const ph = c.ph * 40;
    const sRaw = c.speed * (t + (A * Math.sin(w * t + ph)) / w);
    const sAlong = ((c.off + c.dir * sRaw) % c.len + c.len) % c.len + c.min;
    const v = c.speed * (1 + A * Math.cos(w * t + ph));
    const acc = -c.speed * A * w * Math.sin(w * t + ph);     // 加速度（ブレーキ時のノーズダイブ用）
    return { pos: c.alongX ? [sAlong, c.fixed] : [c.fixed, sAlong], v, acc };
  };
  return {
    mesh, posOf,
    update(t, glowArr) {
      for (let i = 0; i < lanes.length; i++) {
        const c = lanes[i];
        const { pos: [x, z], acc } = posOf(c, t);
        const yaw = c.alongX ? (c.dir > 0 ? 0 : Math.PI) : (c.dir > 0 ? -Math.PI / 2 : Math.PI / 2);
        q.setFromAxisAngle(up, yaw);
        qp.setFromAxisAngle(right, Math.max(-0.03, Math.min(0.03, -acc * 0.012)));  // 減速でわずかに前のめり
        q.multiply(qp);
        p.set(x, 0, z);
        m.compose(p, q, s);
        mesh.setMatrixAt(i, m);
        if (glowArr) {
          const fx = c.alongX ? c.dir : 0, fz = c.alongX ? 0 : c.dir;
          const sx = c.alongX ? 0 : 0.7, sz = c.alongX ? 0.7 : 0;
          const hx = x + fx * 2.2, hz = z + fz * 2.2, tx = x - fx * 2.2, tz = z - fz * 2.2;
          let o = i * 12;
          glowArr[o++] = hx - sx; glowArr[o++] = 0.74; glowArr[o++] = hz - sz;
          glowArr[o++] = hx + sx; glowArr[o++] = 0.74; glowArr[o++] = hz + sz;
          glowArr[o++] = tx - sx; glowArr[o++] = 0.9; glowArr[o++] = tz - sz;
          glowArr[o++] = tx + sx; glowArr[o++] = 0.9; glowArr[o++] = tz + sz;
        }
      }
      mesh.instanceMatrix.needsUpdate = true;
    },
  };
}

const COATS = [0x15171c, 0x20242c, 0x2b2f3a, 0x3a2b2b, 0x1d2b3f, 0x4a4a52, 0x7a2a2a, 0x2c4a3a, 0x8a6a2a, 0xdcdcdc, 0x5a3b2a, 0x35506e];

// 歩行者の形状：胴・頭・ニット帽・脚2本・腕2本。脚・腕は股関節/肩を中心に歩容位相で振る（頂点シェーダ）。
function walkerGeometry(THREE) {
  const parts = [];
  const add = (g, rgb, part, side, pivotY) => {
    g.deleteAttribute('uv');
    const gi = g.index ? g.toNonIndexed() : g;
    const n = gi.attributes.position.count, c = new Float32Array(n * 3), p = new Float32Array(n), sd = new Float32Array(n), pv = new Float32Array(n);
    for (let i = 0; i < n; i++) { c[i * 3] = rgb[0]; c[i * 3 + 1] = rgb[1]; c[i * 3 + 2] = rgb[2]; p[i] = part; sd[i] = side; pv[i] = pivotY; }
    gi.setAttribute('color', new THREE.BufferAttribute(c, 3)); gi.setAttribute('aPart', new THREE.BufferAttribute(p, 1));
    gi.setAttribute('aSide', new THREE.BufferAttribute(sd, 1)); gi.setAttribute('aPivot', new THREE.BufferAttribute(pv, 1));
    parts.push(gi);
  };
  const torso = new THREE.BoxGeometry(0.44, 0.62, 0.26); torso.translate(0, 1.18, 0);
  add(torso, [1, 1, 1], 0, 0, 0);
  const head = new THREE.SphereGeometry(0.115, 8, 6); head.translate(0, 1.6, 0);
  add(head, [0.82, 0.64, 0.54], 1, 0, 0);
  const hat = new THREE.SphereGeometry(0.125, 8, 5, 0, Math.PI * 2, 0, Math.PI * 0.55); hat.translate(0, 1.625, 0);
  add(hat, [0.16, 0.17, 0.2], 1, 0, 0);
  for (const s of [-1, 1]) {
    const leg = new THREE.BoxGeometry(0.16, 0.86, 0.17); leg.translate(0, 0.43, s * 0.11);
    add(leg, [0.07, 0.075, 0.09], 1, s, 0.86);
    const arm = new THREE.BoxGeometry(0.11, 0.56, 0.11); arm.translate(0, 1.14, s * 0.27);
    add(arm, [1, 1, 1], 0, -s, 1.46);
    const boot = new THREE.BoxGeometry(0.24, 0.1, 0.18); boot.translate(0.04, 0.05, s * 0.11);
    add(boot, [0.05, 0.05, 0.05], 1, s, 0.86);
  }
  const g = mergeGeometries(parts);
  g.computeVertexNormals();
  return g;
}

/** 歩行者：walkers = [{ x0, x1, z, dir, speed, off, ph }]。進行方向を向き、歩幅は移動距離に同期する。 */
export function createPedestrians(THREE, walkers) {
  const geo = walkerGeometry(THREE);
  const gait = new Float32Array(walkers.length);
  geo.setAttribute('aGait', new THREE.InstancedBufferAttribute(gait, 1));
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, metalness: 0, vertexColors: true });
  mat.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aPart, aSide, aPivot, aGait;')
      .replace('#include <color_vertex>', '#include <color_vertex>\nif (aPart > 0.5) vColor.xyz = color.xyz;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        if (aSide != 0.0) {
          float ang = sin(aGait) * 0.62 * aSide;
          float cs = cos(ang), sn = sin(ang);
          vec2 d = vec2(transformed.x, transformed.y - aPivot);
          transformed.x = d.x * cs - d.y * sn;
          transformed.y = aPivot + d.x * sn + d.y * cs;
        }
        transformed.y += abs(sin(aGait)) * 0.035;`);
  };
  mat.customProgramCacheKey = () => 'walker-v1';
  const mesh = new THREE.InstancedMesh(geo, mat, walkers.length);
  mesh.frustumCulled = false; mesh.castShadow = false;
  const col = new THREE.Color();
  walkers.forEach((w, i) => { col.setHex(COATS[(i * 5 + (w.ph * 31 | 0)) % COATS.length]); mesh.setColorAt(i, col); });
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3(1, 1, 1);
  const up = new THREE.Vector3(0, 1, 0);
  const STRIDE = 1.35;
  return {
    mesh,
    update(t) {
      for (let i = 0; i < walkers.length; i++) {
        const w = walkers[i];
        const L = Math.abs(w.x1 - w.x0);
        const u = ((w.off + w.speed * t) % (2 * L) + 2 * L) % (2 * L);
        const along = u < L ? u : 2 * L - u;
        const going = (u < L ? 1 : -1) * (w.dir > 0 ? 1 : -1);          // +x へ進むか
        const x = Math.min(w.x0, w.x1) + (w.dir > 0 ? along : L - along);
        q.setFromAxisAngle(up, going > 0 ? 0 : Math.PI);
        p.set(x, 0, w.z + Math.sin(x * 0.07 + w.ph * 9) * 0.35);          // 歩行線は緩やかに蛇行
        m.compose(p, q, s);
        mesh.setMatrixAt(i, m);
        gait[i] = (u / STRIDE) * Math.PI * 2 + w.ph * 6.28;
      }
      mesh.instanceMatrix.needsUpdate = true;
      geo.attributes.aGait.needsUpdate = true;
    },
  };
}
