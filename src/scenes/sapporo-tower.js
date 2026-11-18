// sapporo-tower.js — さっぽろテレビ塔（手続き生成の概略モデル）
//
// ■ 実物の主な特徴（高さ147.2m・展望台 約90m・鉄骨トラス）を踏まえた形状であり、図面に基づく正確な再現ではない。
//   寸法・パネル割り・窓割り・足元の建屋は概略。
//
// 構成:
//   ・主脚：4本×二重弦材。上へ向かって細くなり、パネルごとに部材径が細くなる（先細りの円柱）
//   ・各パネル：X ブレース、水平材、弦材のスリーブ/フランジ（節点）、ブレース端のカラー、内側リング+放射材（奥行き）
//   ・中央のエレベーター芯（4本の柱＋水平枠）、2か所の作業用プラットフォーム（床・手すり）
//   ・展望台：傾斜した下部スカート＋リブ、窓帯（方立・窓ごとに点灯がばらつくテクスチャ）、庇、屋上の手すり・機械室
//   ・展望台より上：先細りの角形トラス＋プラットフォーム＋パラボラ・パネルアンテナ → 多段マスト → 航空障害灯
//   ・足元：2層の建屋（店舗ファサード・入口の庇）＋ 脚の基礎・植え込み・ボラード・雪の山
import * as THREE_NS from 'three';
import { BeamSet } from '../lib/buildings.js';
import { createGlowPoints } from '../lib/glow.js';

const THREE = THREE_NS;

// ---- 窓・店舗のファサードテクスチャ（Canvas。ヘッドレス/ブラウザ共通で決定的）
function rng32(seed) { let a = seed >>> 0; return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

function facadeTextures({ panes, rows, w, h, seed, deck }) {
  const mk = () => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };
  const cd = mk(), ce = mk(), cr = mk();
  const d = cd.getContext('2d'), e = ce.getContext('2d'), rr = cr.getContext('2d');
  const R = rng32(seed);
  const pw = w / panes;
  // 下地：パネル色（鉄骨の白〜明灰）
  d.fillStyle = deck ? '#c9ccd0' : '#b9b5ac'; d.fillRect(0, 0, w, h);
  e.fillStyle = '#000'; e.fillRect(0, 0, w, h);
  rr.fillStyle = '#c8c8c8'; rr.fillRect(0, 0, w, h);                       // roughness(g) / metalness(b)
  const bands = deck
    ? [{ y0: 0.0, y1: 0.14, glass: false }, { y0: 0.14, y1: 0.84, glass: true }, { y0: 0.84, y1: 1.0, glass: false }]
    : [{ y0: 0.0, y1: 0.50, glass: true, shop: true }, { y0: 0.50, y1: 0.60, glass: false }, { y0: 0.60, y1: 0.90, glass: true }, { y0: 0.90, y1: 1.0, glass: false }];
  for (const b of bands) {
    const y0 = Math.round(b.y0 * h), y1 = Math.round(b.y1 * h);
    if (!b.glass) {
      // スパンドレル：横リブ
      d.fillStyle = deck ? '#aeb2b8' : '#9a968d'; d.fillRect(0, y0, w, y1 - y0);
      d.fillStyle = 'rgba(0,0,0,0.22)'; d.fillRect(0, y0, w, 2); d.fillRect(0, y1 - 3, w, 3);
      d.fillStyle = 'rgba(255,255,255,0.25)'; d.fillRect(0, y0 + 2, w, 2);
      continue;
    }
    for (let i = 0; i < panes; i++) {
      const x0 = Math.round(i * pw), x1 = Math.round((i + 1) * pw);
      const inset = 3, gx0 = x0 + inset, gx1 = x1 - inset, gy0 = y0 + inset, gy1 = y1 - inset;
      // ガラス：窓ごとに反射の明るさが違い、上ほど空を映して明るい
      const refl = 0.55 + 0.45 * R();
      const grad = d.createLinearGradient(0, gy0, 0, gy1);
      grad.addColorStop(0, `rgb(${Math.round(70 + 80 * refl)},${Math.round(95 + 90 * refl)},${Math.round(125 + 90 * refl)})`);
      grad.addColorStop(0.55, `rgb(${Math.round(24 + 30 * refl)},${Math.round(34 + 36 * refl)},${Math.round(50 + 40 * refl)})`);
      grad.addColorStop(1, `rgb(${Math.round(14 + 14 * refl)},${Math.round(18 + 16 * refl)},${Math.round(26 + 18 * refl)})`);
      d.fillStyle = grad; d.fillRect(gx0, gy0, gx1 - gx0, gy1 - gy0);
      // 方立・無目（サッシ）
      d.fillStyle = deck ? '#d7dade' : '#8e8a82';
      d.fillRect(gx0 + (gx1 - gx0) * 0.5 - 1, gy0, 2, gy1 - gy0);
      d.fillRect(gx0, gy0 + (gy1 - gy0) * 0.62, gx1 - gx0, 2);
      // 点灯：窓ごとにオン/オフ・色温度・明るさ・ブラインド量が異なる
      const lit = R() < (b.shop ? 0.82 : 0.62);
      const k = 0.35 + 0.65 * R();
      const warm = R() < 0.72;
      const blind = R() < 0.3 ? 0.2 + 0.6 * R() : 0;
      if (lit) {
        const eg = e.createLinearGradient(0, gy0, 0, gy1);
        const c1 = warm ? [255, 196, 130] : [215, 232, 255];
        eg.addColorStop(0, `rgb(${c1[0] * k | 0},${c1[1] * k | 0},${c1[2] * k | 0})`);
        eg.addColorStop(1, `rgb(${c1[0] * k * 0.55 | 0},${c1[1] * k * 0.55 | 0},${c1[2] * k * 0.55 | 0})`);
        e.fillStyle = eg; e.fillRect(gx0, gy0, gx1 - gx0, gy1 - gy0);
        // 室内の奥行き：中央の梁・照明の明暗
        e.fillStyle = 'rgba(0,0,0,0.25)'; e.fillRect(gx0, gy0 + (gy1 - gy0) * 0.62, gx1 - gx0, (gy1 - gy0) * 0.38);
      }
      if (blind > 0) {                                                       // ブラインド（上から降りている）
        d.fillStyle = '#b9ad98'; d.fillRect(gx0, gy0, gx1 - gx0, (gy1 - gy0) * blind);
        if (lit) { e.fillStyle = `rgb(${200 * k | 0},${150 * k | 0},${100 * k | 0})`; e.fillRect(gx0, gy0, gx1 - gx0, (gy1 - gy0) * blind); }
      }
      rr.fillStyle = '#1a1a60'; rr.fillRect(gx0, gy0, gx1 - gx0, gy1 - gy0);   // ガラス：低roughness・高metalness
      rr.fillStyle = '#c8c8a0'; rr.fillRect(gx0 + (gx1 - gx0) * 0.5 - 1, gy0, 2, gy1 - gy0);
    }
    if (b.shop) {                                                            // 1階：入口扉を数か所
      for (let i = 0; i < panes; i += 5) {
        const x0 = Math.round(i * pw) + 4;
        d.fillStyle = '#2a2a2c'; d.fillRect(x0, y0 + (y1 - y0) * 0.1, pw * 1.6, (y1 - y0) * 0.9);
        e.fillStyle = '#ffd9a8'; e.fillRect(x0 + 4, y0 + (y1 - y0) * 0.16, pw * 1.6 - 8, (y1 - y0) * 0.74);
      }
    }
  }
  const tex = (c, srgb) => { const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; return t; };
  return { map: tex(cd, true), emissiveMap: tex(ce, true), rough: tex(cr, false) };
}

export function buildTVTower(scene, { x: tx, z: tz }) {
  const out = {};
  const steel = new THREE.MeshStandardMaterial({ color: 0xdcdfe3, roughness: 0.5, metalness: 0.45, emissive: new THREE.Color(0.7, 0.8, 1.0), emissiveIntensity: 0 });
  const steelDark = new THREE.MeshStandardMaterial({ color: 0x9a9fa6, roughness: 0.55, metalness: 0.55, emissive: new THREE.Color(0.7, 0.8, 1.0), emissiveIntensity: 0 });
  const concrete = new THREE.MeshStandardMaterial({ color: 0x9d9a94, roughness: 0.9 });
  const snowMat = new THREE.MeshStandardMaterial({ color: 0xf1f4f9, roughness: 0.7 });
  out.steel = steel; out.steelDark = steelDark;
  const B = new BeamSet(THREE, steel);       // 白い鉄骨
  const D = new BeamSet(THREE, steelDark);   // 節点（スリーブ・フランジ・カラー）・床
  const mk = (g, m, x, y, z, cast = true) => { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.castShadow = cast; o.receiveShadow = true; scene.add(o); return o; };

  // ------- 主脚（高さ y0〜hL。中心からの半幅 w(y) は底 13.5m → 頂 3.7m）
  const y0 = 10.0, hL = 87.0, wB = 13.5, wT = 3.7;
  const wAt = (y) => wB + (wT - wB) * ((y - y0) / (hL - y0));
  const corners = [[1, 1], [1, -1], [-1, -1], [-1, 1]];
  const P = (cx, cz, y, k = 1) => { const w = wAt(y) * k; return [tx + cx * w, y, tz + cz * w]; };
  const lerp = (a, b, t) => a + (b - a) * t;
  const fOf = (y) => (y - y0) / (hL - y0);
  const levels = [y0, 18.5, 27, 35.5, 44.5, 53.5, 62.0, 70.0, 77.5, 83.0, hL];
  const lerp3 = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
  const dir3 = (a, b) => { const d = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], l = Math.hypot(...d); return [d[0] / l, d[1] / l, d[2] / l]; };
  const along = (a, d, s) => [a[0] + d[0] * s, a[1] + d[1] * s, a[2] + d[2] * s];
  const brace = (a, b, r) => {                                              // 斜材：端部にカラー（節点）を付ける
    B.add(a, b, r);
    const d = dir3(a, b);
    D.add(a, along(a, d, 0.7), r * 1.7, r * 1.35);
    D.add(b, along(b, d, -0.7), r * 1.7, r * 1.35);
  };
  for (let i = 0; i < levels.length - 1; i++) {
    const ya = levels[i], yb = levels[i + 1], fa = fOf(ya), fb = fOf(yb);
    const rcA = lerp(0.82, 0.36, fa), rcB = lerp(0.82, 0.36, fb);          // 弦材の半径（上ほど細い）
    const rd = lerp(0.30, 0.13, (fa + fb) / 2), rh = lerp(0.36, 0.16, fb);   // 斜材/水平材
    for (let c = 0; c < 4; c++) {
      const [ax, az] = corners[c], [bx, bz] = corners[(c + 1) % 4];
      // 二重弦材：外側の主弦材＋内側の副弦材（間をラチスで結ぶ）
      B.add(P(ax, az, ya), P(ax, az, yb), rcA, rcB);
      B.add(P(ax, az, ya, 0.9), P(ax, az, yb, 0.9), rcA * 0.5, rcB * 0.5);
      const mid = (ya + yb) / 2;
      B.add(P(ax, az, mid), P(ax, az, mid, 0.9), 0.08);
      // 各面のXブレース
      brace(P(ax, az, ya), P(bx, bz, yb), rd);
      brace(P(bx, bz, ya), P(ax, az, yb), rd);
      // 水平材（上端）。下層ほど太い。さらに偶数パネルは中段にも
      B.add(P(ax, az, yb), P(bx, bz, yb), rh);
      if (i % 2 === 0 && i < 6) { B.add(P(ax, az, mid), P(bx, bz, mid), rh * 0.55); }
      // 内側リング + 放射材：脚の内側に奥行きを作る
      const ia = P(ax, az, yb, 0.62), ib = P(bx, bz, yb, 0.62);
      B.add(ia, ib, rh * 0.5);
      B.add(P(ax, az, yb, 0.95), ia, rh * 0.45);
      // 節点：スリーブとフランジ
      D.add([P(ax, az, yb)[0], yb - 0.55, P(ax, az, yb)[2]], [P(ax, az, yb)[0], yb + 0.55, P(ax, az, yb)[2]], rcB * 1.5);
      D.add([P(ax, az, yb)[0], yb - 0.07, P(ax, az, yb)[2]], [P(ax, az, yb)[0], yb + 0.07, P(ax, az, yb)[2]], rcB * 2.7);
    }
    // 内側リング面の対角（ダイアフラム）
    if (i % 2 === 1) {
      const p = (cx, cz) => P(cx, cz, yb, 0.62);
      B.add(p(1, 1), p(-1, -1), 0.09); B.add(p(1, -1), p(-1, 1), 0.09);
    }
  }
  // 足元の基礎（脚の根元）
  for (const [cx, cz] of corners) {
    const p = P(cx, cz, y0);
    mk(new THREE.BoxGeometry(3.6, 1.6, 3.6), concrete, p[0], y0 + 0.2, p[2]);
    D.add([p[0], y0 + 0.9, p[2]], [p[0], y0 + 1.5, p[2]], 1.5, 1.0);
  }
  // 中央のエレベーター芯（4本の柱＋水平枠＋対角）
  const core = (sx, sz, y) => [tx + sx * 1.35, y, tz + sz * 1.35];
  for (const [cx, cz] of corners) B.add(core(cx, cz, y0), core(cx, cz, hL + 3), 0.2);
  for (let i = 0; i < levels.length; i++) {
    const y = levels[i];
    for (let c = 0; c < 4; c++) {
      const [ax, az] = corners[c], [bx, bz] = corners[(c + 1) % 4];
      B.add(core(ax, az, y), core(bx, bz, y), 0.1);
      if (i < levels.length - 1) { const yb = levels[i + 1]; B.add(core(ax, az, y), core(bx, bz, yb), 0.07); }
    }
  }
  // プラットフォーム（床・手すり）
  const platform = (y, kHalf) => {
    const w = wAt(y) * kHalf;
    mk(new THREE.BoxGeometry(w * 2, 0.22, w * 2), steelDark, tx, y, tz);
    for (let c = 0; c < 4; c++) {
      const [ax, az] = corners[c], [bx, bz] = corners[(c + 1) % 4];
      const a = [tx + ax * w, y + 1.05, tz + az * w], b = [tx + bx * w, y + 1.05, tz + bz * w];
      B.add(a, b, 0.045); B.add(lerp3(a, b, 0), lerp3(a, b, 1), 0.045);
      const n = Math.max(2, Math.round((w * 2) / 1.9));
      for (let k = 0; k < n; k++) { const s = lerp3([a[0], y, a[2]], [b[0], y, b[2]], k / n); B.add(s, [s[0], y + 1.05, s[2]], 0.035); }
      B.add([a[0], y + 0.55, a[2]], [b[0], y + 0.55, b[2]], 0.03);
    }
    // 床下の放射材
    for (const [cx, cz] of corners) B.add(core(cx, cz, y - 0.1), P(cx, cz, y, 0.85), 0.1);
  };
  platform(35.5, 0.86); platform(62.0, 0.86);

  // ------- 展望台（スカート・窓帯・庇・屋上）
  const dkW = 15.6, yD0 = 90.0, bodyH = 4.5;
  // 傾斜スカート（逆さ四角錐台）＋ リブ
  const skirt = mk(new THREE.CylinderGeometry(6.6 * Math.SQRT2, 3.9 * Math.SQRT2, 3.3, 4, 1), steel, tx, 88.35, tz); skirt.rotation.y = Math.PI / 4;
  for (const [cx, cz] of corners) {
    D.add([tx + cx * 3.9, 86.7, tz + cz * 3.9], [tx + cx * 6.6, 90.0, tz + cz * 6.6], 0.28);
    for (const t of [-0.5, 0, 0.5]) {                                     // 面中央のリブ
      const a = [tx + cx * 3.9 * (cz ? 1 : 1), 86.7, tz + cz * 3.9], b = [tx + cx * 6.6, 90.0, tz + cz * 6.6];
      void a; void b; void t;
    }
  }
  for (let c = 0; c < 4; c++) {                                            // 各面の中央リブ（面の中心線）
    const [ax, az] = corners[c], [bx, bz] = corners[(c + 1) % 4];
    const ma = [(ax + bx) / 2, (az + bz) / 2];
    D.add([tx + ma[0] * 3.9, 86.7, tz + ma[1] * 3.9], [tx + ma[0] * 6.6, 90.0, tz + ma[1] * 6.6], 0.16);
  }
  // 脚の頂部と下部スカートの結合部（支持プレート）
  for (const [cx, cz] of corners) mk(new THREE.BoxGeometry(1.6, 0.5, 1.6), steelDark, tx + cx * 3.7, 86.8, tz + cz * 3.7);
  mk(new THREE.BoxGeometry(dkW + 0.8, 0.45, dkW + 0.8), steelDark, tx, 90.0, tz);        // 下部スラブ
  for (let i = -3; i <= 3; i++) {                                                          // 床下の梁
    B.add([tx - dkW / 2, 89.6, tz + i * 2.2], [tx + dkW / 2, 89.6, tz + i * 2.2], 0.12);
    B.add([tx + i * 2.2, 89.6, tz - dkW / 2], [tx + i * 2.2, 89.6, tz + dkW / 2], 0.12);
  }
  // 窓帯
  const winTex = facadeTextures({ panes: 15, rows: 1, w: 1024, h: 192, seed: 77, deck: true });
  const deckMat = new THREE.MeshStandardMaterial({
    map: winTex.map, emissiveMap: winTex.emissiveMap, emissive: new THREE.Color(1, 1, 1), emissiveIntensity: 0.4,
    roughnessMap: winTex.rough, metalnessMap: winTex.rough, roughness: 1, metalness: 1,
  });
  out.deckMat = deckMat;
  const deckBox = mk(new THREE.BoxGeometry(dkW, bodyH, dkW), [deckMat, deckMat, steel, steelDark, deckMat, deckMat], tx, yD0 + 0.2 + bodyH / 2, tz);
  const yTop = yD0 + 0.2 + bodyH;
  mk(new THREE.BoxGeometry(dkW + 1.4, 0.55, dkW + 1.4), steel, tx, yTop + 0.28, tz);            // 庇・コーニス
  mk(new THREE.BoxGeometry(dkW + 0.9, 0.4, dkW + 0.9), steelDark, tx, yD0 + 0.2, tz);          // 下部ベルト
  // 屋上手すり
  const rw = (dkW + 1.4) / 2 - 0.2, yR = yTop + 0.55;
  for (let c = 0; c < 4; c++) {
    const [ax, az] = corners[c], [bx, bz] = corners[(c + 1) % 4];
    const a = [tx + ax * rw, yR + 1.0, tz + az * rw], b = [tx + bx * rw, yR + 1.0, tz + bz * rw];
    B.add(a, b, 0.05); B.add([a[0], yR + 0.5, a[2]], [b[0], yR + 0.5, b[2]], 0.03);
    for (let k = 0; k < 10; k++) { const s = lerp3([a[0], yR, a[2]], [b[0], yR, b[2]], k / 10); B.add(s, [s[0], yR + 1.0, s[2]], 0.035); }
  }
  // 屋上機械室・ダクト・タンク
  mk(new THREE.BoxGeometry(6.2, 2.8, 6.2), steel, tx, yR + 1.4, tz);
  mk(new THREE.BoxGeometry(3.6, 1.6, 3.6), steelDark, tx + 0.4, yR + 3.6, tz - 0.3);
  mk(new THREE.CylinderGeometry(0.9, 0.9, 1.4, 12), steelDark, tx - 4.8, yR + 0.7, tz + 3.8);
  mk(new THREE.CylinderGeometry(0.5, 0.5, 1.1, 10), steelDark, tx + 4.6, yR + 0.55, tz - 4.2);
  mk(new THREE.BoxGeometry(2.2, 1.0, 1.4), steelDark, tx + 4.5, yR + 0.5, tz + 4.4);

  // ------- 展望台より上の先細りトラス
  const yU0 = yR + 3.2, yU1 = 126.5;
  const uw = (y) => lerp(2.2, 0.95, (y - yU0) / (yU1 - yU0));
  const U = (cx, cz, y, k = 1) => [tx + cx * uw(y) * k, y, tz + cz * uw(y) * k];
  const nU = 6; const ul = []; for (let i = 0; i <= nU; i++) ul.push(lerp(yU0, yU1, i / nU));
  for (let i = 0; i < nU; i++) {
    const ya = ul[i], yb = ul[i + 1], f = i / nU;
    const rc = lerp(0.34, 0.17, f);
    for (let c = 0; c < 4; c++) {
      const [ax, az] = corners[c], [bx, bz] = corners[(c + 1) % 4];
      B.add(U(ax, az, ya), U(ax, az, yb), rc, rc * 0.92);
      brace(U(ax, az, ya), U(bx, bz, yb), 0.095); brace(U(bx, bz, ya), U(ax, az, yb), 0.095);
      B.add(U(ax, az, yb), U(bx, bz, yb), 0.12);
      const p = U(ax, az, yb);
      D.add([p[0], yb - 0.3, p[2]], [p[0], yb + 0.3, p[2]], rc * 1.5);
    }
  }
  const platformU = (y, w) => {
    mk(new THREE.BoxGeometry(w * 2, 0.15, w * 2), steelDark, tx, y, tz, false);
    for (let c = 0; c < 4; c++) {
      const [ax, az] = corners[c], [bx, bz] = corners[(c + 1) % 4];
      const a = [tx + ax * w, y + 0.95, tz + az * w], b = [tx + bx * w, y + 0.95, tz + bz * w];
      B.add(a, b, 0.04);
      for (let k = 0; k < 4; k++) { const s = lerp3([a[0], y, a[2]], [b[0], y, b[2]], k / 4); B.add(s, [s[0], y + 0.95, s[2]], 0.03); }
    }
  };
  platformU(ul[3], 2.9); platformU(ul[5], 2.4);
  // アンテナ類：パラボラ（半球殻）・パネルアンテナ
  const dishMat = new THREE.MeshStandardMaterial({ color: 0xf2f3f4, roughness: 0.4, metalness: 0.5, side: THREE.DoubleSide });
  const dishG = new THREE.SphereGeometry(1.15, 18, 8, 0, Math.PI * 2, 0, 0.75);
  const addDish = (ang, y, s) => {
    const dsh = new THREE.Mesh(dishG, dishMat);
    dsh.position.set(tx + Math.cos(ang) * 3.6, y, tz + Math.sin(ang) * 3.6);
    dsh.rotation.set(0, -ang + Math.PI / 2, Math.PI / 2 + 0.2 * 0); dsh.rotateZ(0); dsh.scale.setScalar(s);
    dsh.lookAt(tx + Math.cos(ang) * 30, y + 1, tz + Math.sin(ang) * 30); dsh.rotateX(Math.PI / 2 * 0);
    dsh.castShadow = true; scene.add(dsh);
    B.add([tx + Math.cos(ang) * 2.4, y - 0.1, tz + Math.sin(ang) * 2.4], [tx + Math.cos(ang) * 3.5, y, tz + Math.sin(ang) * 3.5], 0.1);
    B.add([tx + Math.cos(ang) * 3.6, y, tz + Math.sin(ang) * 3.6], [tx + Math.cos(ang) * 4.5, y + 0.1, tz + Math.sin(ang) * 4.5], 0.05, 0.03);
  };
  addDish(0.6, ul[4] + 0.3, 1.0); addDish(3.5, ul[4] + 0.3, 0.8); addDish(5.2, ul[2] + 0.3, 0.9);
  for (let c = 0; c < 4; c++) {                                              // パネルアンテナ
    const a = c * Math.PI / 2 + Math.PI / 4;
    const pa = new THREE.Mesh(new THREE.BoxGeometry(0.14, 2.4, 0.55), steel);
    pa.position.set(tx + Math.cos(a) * 3.3, ul[5] + 1.2, tz + Math.sin(a) * 3.3); pa.rotation.y = -a; pa.castShadow = true; scene.add(pa);
    B.add([tx + Math.cos(a) * 1.5, ul[5] + 1.2, tz + Math.sin(a) * 1.5], [tx + Math.cos(a) * 3.2, ul[5] + 1.2, tz + Math.sin(a) * 3.2], 0.06);
  }
  // 多段マスト
  const m0 = yU1;
  mk(new THREE.CylinderGeometry(0.5, 0.62, 0.9, 12), steelDark, tx, m0 + 0.45, tz);
  D.add([tx, m0, tz], [tx, m0 + 8, tz], 0.55, 0.42); B.add([tx, m0, tz], [tx, m0 + 8, tz], 0.5, 0.38);
  D.add([tx, m0 + 8, tz], [tx, m0 + 8.4, tz], 0.9, 0.9);
  D.add([tx, m0 + 4, tz], [tx, m0 + 4.3, tz], 0.8, 0.8);
  B.add([tx, m0 + 8.4, tz], [tx, m0 + 15, tz], 0.3, 0.2);
  D.add([tx, m0 + 12.2, tz], [tx, m0 + 12.45, tz], 0.55, 0.55);
  B.add([tx, m0 + 15, tz], [tx, 147.2, tz], 0.17, 0.045);
  B.add([tx - 1.7, m0 + 11.2, tz], [tx + 1.7, m0 + 11.2, tz], 0.05); B.add([tx, m0 + 11.2, tz - 1.4], [tx, m0 + 11.2, tz + 1.4], 0.05);
  for (let k = 0; k < 3; k++) { const a = (k / 3) * Math.PI * 2; B.add([tx, m0 + 4.2, tz], [tx + Math.cos(a) * 1.9, m0 + 1.5, tz + Math.sin(a) * 1.9], 0.05); }   // 支線風のステー

  // ------- 足元の建屋（2層）
  const mkBase = (panes, tex) => new THREE.MeshStandardMaterial({
    map: tex.map, emissiveMap: tex.emissiveMap, emissive: new THREE.Color(1, 1, 1), emissiveIntensity: 0.35,
    roughnessMap: tex.rough, metalnessMap: tex.rough, roughness: 1, metalness: 0.4,
  });
  const tW = facadeTextures({ panes: 12, rows: 2, w: 1024, h: 256, seed: 91, deck: false });
  const tD = facadeTextures({ panes: 8, rows: 2, w: 1024, h: 256, seed: 92, deck: false });
  const baseW = mkBase(12, tW), baseD = mkBase(8, tD);
  out.baseMats = [baseW, baseD];
  const roofM = new THREE.MeshStandardMaterial({ color: 0xeef1f6, roughness: 0.7 });
  const bx = 34, bz = 22, bh = 10;
  mk(new THREE.BoxGeometry(bx, bh, bz), [baseD, baseD, roofM, concrete, baseW, baseW], tx, bh / 2, tz + 0.5);
  mk(new THREE.BoxGeometry(bx + 0.8, 0.8, bz + 0.8), snowMat, tx, bh + 0.3, tz + 0.5);          // 屋根の雪
  // 入口の庇と柱（公園側＝西面）
  mk(new THREE.BoxGeometry(5.5, 0.35, 9.0), steel, tx - bx / 2 - 2.6, 3.8, tz + 0.5);
  for (const s of [-1, 1]) mk(new THREE.CylinderGeometry(0.17, 0.17, 3.8, 8), steel, tx - bx / 2 - 4.9, 1.9, tz + 0.5 + s * 4.2);
  // 周辺施設：植え込み(雪)・ボラード・フラッグポール・雪の山
  const bolM = new THREE.MeshStandardMaterial({ color: 0x4a4f57, roughness: 0.5, metalness: 0.5, emissive: new THREE.Color(1.0, 0.75, 0.45), emissiveIntensity: 0 });
  out.bolM = bolM;
  for (let a = 0; a < 26; a++) {
    const ang = (a / 26) * Math.PI * 2; const px = tx + Math.cos(ang) * 31, pz = tz + Math.sin(ang) * 21;
    if (Math.abs(pz - tz) < 12 && Math.abs(px - tx) < 19) continue;
    mk(new THREE.CylinderGeometry(0.16, 0.16, 0.9, 8), bolM, px, 0.45, pz, false);
  }
  const rng = rng32(5);
  for (const [px, pz, sx, sz] of [[-bx / 2 - 6, -9, 3, 2], [-bx / 2 - 6, 10, 3, 2], [bx / 2 + 4, -6, 2, 3], [bx / 2 + 4, 8, 2, 3]]) {
    mk(new THREE.BoxGeometry(sx * 2, 0.7, sz * 2), concrete, tx + px, 0.35, tz + pz, false);
    const m = mk(new THREE.SphereGeometry(1, 10, 6), snowMat, tx + px, 0.7, tz + pz, false); m.scale.set(sx * 0.95, 0.45, sz * 0.95);
  }
  for (let k = 0; k < 9; k++) {
    const a = rng() * Math.PI * 2, rr = 23 + rng() * 10;
    const m = mk(new THREE.SphereGeometry(1, 10, 6), snowMat, tx + Math.cos(a) * rr * 1.1, 0.2, tz + Math.sin(a) * rr * 0.75, false);
    m.scale.set(1.5 + rng() * 2.2, 0.5 + rng() * 0.6, 1.2 + rng() * 1.8); m.rotation.y = rng() * 3;
  }
  for (let k = 0; k < 3; k++) { const px = tx - 27, pz = tz - 6 + k * 6; B.add([px, 0, pz], [px, 8.5, pz], 0.09, 0.06); }

  scene.add(B.build({ castShadow: true, sides: 6 }), D.build({ castShadow: true, sides: 7 }));

  // ------- 航空障害灯（頂部・マスト中段・展望台上）
  out.beacon = createGlowPoints(THREE, {
    positions: new Float32Array([tx, 148.0, tz, tx, m0 + 8.6, tz, tx + 1.0, yR + 5.3, tz]),
    colors: new Float32Array([14, 0.6, 0.4, 6, 0.4, 0.3, 4, 0.3, 0.25]),
    sizes: new Float32Array([2.4, 1.4, 1.1]), fogDensity: 0.00004, minPx: 2, maxPx: 40,
  });
  scene.add(out.beacon.points);
  return out;
}
