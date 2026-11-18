// buildings.js — 多様な建物を InstancedMesh + 手続き型ファサードシェーダで描く（全都市で再利用）
//   aBld = (seed, kind, litBias, 予備)
//     kind: 0=事務所(タイル/コンクリート) 1=レンガ 2=カーテンウォール 3=集合住宅 4=商業/ホテル(縦ピア)
//           5=屋上設備(ルーバー付き金属パネル) 6=パラペット/塀(コンクリート)
//   aPar = (窓セル幅m, 階高m, 窓幅比, 窓高比)  … 建物ごとに窓の大きさ・配置を変える
//
// ファサードの近景ディテール（LOD: カメラ距離で 90m→420m にかけて段階的に消える）
//   窓の奥まり(法線バンプ)・サッシ/方立・窓台と窓台の雪・窓ごとの反射/ブラインド/点灯のばらつき・
//   ピラスター・ベルトコース・コーニス・1階の店舗ガラス/出入口/看板帯・雨だれ汚れ・足元の汚れ
import { NOISE } from './glsl.js';

export function createFacadeMaterial(THREE, { uNight, uSnow }) {
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8, metalness: 0.0 });
  mat.customProgramCacheKey = () => 'facade-v3';
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uNight = uNight;
    shader.uniforms.uSnow = uSnow;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>
        attribute vec4 aBld; attribute vec4 aPar;
        varying vec4 vBld; varying vec4 vPar; varying vec3 vWP; varying vec3 vON; varying float vTopDist;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vBld = aBld; vPar = aPar; vON = normal;
        mat4 fim = instanceMatrix;
        vWP = (modelMatrix * fim * vec4(transformed, 1.0)).xyz;
        vTopDist = (1.0 - position.y) * fim[1][1];`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform float uNight, uSnow;
        varying vec4 vBld; varying vec4 vPar; varying vec3 vWP; varying vec3 vON; varying float vTopDist;
        ${NOISE}
        vec3 wallPalette(float kind, float pr){
          int i = int(floor(pr * 8.0));
          if (kind > 0.5 && kind < 1.5) { // レンガ・タイル
            if (i == 0) return vec3(0.34, 0.15, 0.11); if (i == 1) return vec3(0.42, 0.22, 0.15);
            if (i == 2) return vec3(0.30, 0.17, 0.13); if (i == 3) return vec3(0.48, 0.30, 0.20);
            if (i == 4) return vec3(0.36, 0.26, 0.22); if (i == 5) return vec3(0.52, 0.36, 0.26);
            if (i == 6) return vec3(0.27, 0.15, 0.14); return vec3(0.40, 0.20, 0.14);
          }
          if (kind > 2.5 && kind < 3.5) { // 集合住宅（淡色の吹付け・タイル）
            if (i == 0) return vec3(0.72, 0.68, 0.60); if (i == 1) return vec3(0.62, 0.64, 0.66);
            if (i == 2) return vec3(0.70, 0.62, 0.52); if (i == 3) return vec3(0.55, 0.58, 0.55);
            if (i == 4) return vec3(0.78, 0.76, 0.72); if (i == 5) return vec3(0.66, 0.58, 0.50);
            if (i == 6) return vec3(0.82, 0.80, 0.76); return vec3(0.50, 0.52, 0.58);
          }
          // 事務所・商業（コンクリート、石張り、金属パネル、白タイル、濃色パネル）
          if (i == 0) return vec3(0.58, 0.58, 0.60); if (i == 1) return vec3(0.66, 0.62, 0.55);
          if (i == 2) return vec3(0.36, 0.38, 0.42); if (i == 3) return vec3(0.72, 0.70, 0.66);
          if (i == 4) return vec3(0.48, 0.45, 0.42); if (i == 5) return vec3(0.52, 0.56, 0.62);
          if (i == 6) return vec3(0.80, 0.79, 0.76); return vec3(0.28, 0.30, 0.34);
        }
        vec3 signCol(float h){
          int i = int(floor(h * 6.0));
          if (i == 0) return vec3(0.55, 0.08, 0.07); if (i == 1) return vec3(0.88, 0.86, 0.80);
          if (i == 2) return vec3(0.08, 0.12, 0.30); if (i == 3) return vec3(0.10, 0.28, 0.16);
          if (i == 4) return vec3(0.12, 0.12, 0.13); return vec3(0.75, 0.50, 0.12);
        }`)
      .replace('#include <color_fragment>', /* glsl */ `#include <color_fragment>
        vec3 fEmis = vec3(0.0); float fRough = 0.85; float fMetal = 0.0; float fH = 0.0;
        {
          vec3 N = normalize(vON);
          float seed = vBld.x, kind = vBld.y;
          float pr = fract(seed * 7.13);
          float dCam = length(vWP - cameraPosition);
          float lod = 1.0 - smoothstep(90.0, 420.0, dCam);              // 近景ディテールの量
          vec3 base = wallPalette(kind, pr);
          vec3 snowC = vec3(0.95, 0.96, 0.985);
          float us = clamp(uSnow, 0.0, 1.0);
          float groundSnow = 1.0 - smoothstep(0.35, 1.1, vWP.y);          // 足元に吹き溜まった雪
          bool plant = kind > 4.5 && kind < 5.5;
          if (N.y > 0.45) {
            // 屋根：厚みにムラのある積雪（機器まわりは吹き溜まり）
            float sn = 0.9 + (0.12 * vnoise(vWP.xz * 0.45) + 0.04 * vnoise(vWP.xz * 3.1)) * (1.0 - smoothstep(150.0, 700.0, dCam));
            diffuseColor.rgb = mix(base * 0.8, snowC * sn, us);
            fRough = 0.6;
          } else if (plant || kind > 5.5) {
            float u = (abs(N.x) > 0.5 ? vWP.z : vWP.x);
            vec3 wall = base * (kind > 5.5 ? 0.9 : 0.78);
            if (plant) {                                                   // 屋上設備：ルーバー
              float lv = fract(vWP.y * 6.0);
              wall *= 0.80 + 0.30 * smoothstep(0.35, 0.6, lv) * (1.0 - smoothstep(0.85, 1.0, lv));
              fH -= 0.03 * smoothstep(0.35, 0.6, lv);
            }
            float cap = 1.0 - smoothstep(0.1, 0.6, vTopDist);
            wall = mix(wall, snowC, cap * 0.95 * us);
            wall *= 0.86 + 0.2 * vnoise(vec2(u * 0.7, vWP.y * 0.6) + seed * 40.0);
            diffuseColor.rgb = wall; fRough = plant ? 0.5 : 0.85; fMetal = plant ? 0.35 : 0.0;
          } else if (N.y > -0.5) {
            float u = (abs(N.x) > 0.5 ? vWP.z : vWP.x) + seed * 53.0;
            float cw = vPar.x, ch = vPar.y;
            vec2 q = vec2(u / cw, vWP.y / ch);
            vec2 cell = floor(q), f = fract(q);
            float fw = max(fwidth(q.x), fwidth(q.y));
            float aa = smoothstep(0.12, 0.5, fw);                        // 遠くでは窓パターンを平均化
            bool glassK = kind > 1.5 && kind < 2.5;
            bool brick = kind > 0.5 && kind < 1.5;
            bool resid = kind > 2.5 && kind < 3.5;
            float ww = vPar.z, wh = vPar.w;
            float x0 = (1.0 - ww) * 0.5, y0 = (1.0 - wh) * 0.45;
            vec2 wUV = vec2((f.x - x0) / ww, (f.y - y0) / wh);
            float inWin = step(0.0, wUV.x) * step(wUV.x, 1.0) * step(0.0, wUV.y) * step(wUV.y, 1.0);
            if (glassK) inWin *= step(0.035, f.x);
            float inWinA = mix(inWin, ww * wh, aa);

            // ---- 壁面（素材・階ごとの色の揺らぎ・目地）
            vec3 wall = base * (0.94 + 0.12 * hash21(vec2(cell.y, seed * 17.0)));
            if (brick) {
              float bj = abs(fract(vWP.y / 0.25) - 0.5) * 2.0;
              float mortar = smoothstep(0.86, 0.96, bj) * (1.0 - aa);
              float bx = abs(fract((u + 0.25 * floor(vWP.y / 0.25)) / 0.5) - 0.5) * 2.0;
              mortar = max(mortar, smoothstep(0.9, 0.97, bx) * (1.0 - aa) * 0.8);
              wall = mix(wall, vec3(0.55, 0.5, 0.45), mortar * 0.6) * (0.88 + 0.22 * vnoise(vec2(u * 2.0, vWP.y * 4.0)));
            } else {
              wall *= 0.88 + 0.24 * vnoise(vec2(u * 0.12, vWP.y * 0.1) + seed * 10.0);
              float pj = smoothstep(0.02, 0.0, abs(fract(u / 1.5) - 0.5) - 0.495) * (1.0 - aa);
              wall *= 1.0 - 0.12 * pj;
            }
            // ピラスター（柱型）・ベルトコース・コーニス：立体感と陰影
            float usePil = step(0.45, fract(seed * 5.3)) * (resid ? 0.0 : 1.0);
            float pd = abs(fract(q.x / 4.0 + 0.5) - 0.5) * 4.0;
            float pil = (1.0 - smoothstep(0.16, 0.2, pd)) * usePil * (glassK ? 0.0 : 1.0);
            wall = mix(wall, wall * 1.1 + 0.02, pil);
            fH += pil * 0.16;
            float bn = 3.0 + floor(fract(seed * 9.1) * 4.0);
            float belt = step(mod(cell.y, bn), 0.5) * (1.0 - smoothstep(0.05, 0.1, f.y)) * (glassK ? 0.0 : 1.0);
            wall = mix(wall, wall * 1.15 + 0.03, belt); fH += belt * 0.12;
            float cornice = 1.0 - smoothstep(0.5, 0.95, vTopDist);
            float undercor = smoothstep(0.95, 1.1, vTopDist) * (1.0 - smoothstep(1.1, 1.8, vTopDist));
            wall = mix(wall * (1.0 - 0.18 * undercor), wall * 1.12 + 0.03, cornice);
            fH += cornice * 0.28;
            if (resid) {                                                   // バルコニーの腰壁・スラブ
              float slab = smoothstep(0.0, 0.1, f.y) * (1.0 - smoothstep(0.12, 0.22, f.y));
              wall = mix(wall, wall * 1.25, slab); fH += slab * 0.2;
              inWin *= step(0.0, f.y - 0.18); inWinA *= step(0.0, f.y - 0.18);
            }
            // 窓台（雪が積もる）・まぐさ
            float sill = step(y0 - 0.075, f.y) * step(f.y, y0) * step(x0 - 0.035, f.x) * step(f.x, 1.0 - x0 + 0.035) * (glassK ? 0.0 : 1.0);
            float sillSnow = sill * step(0.4, hash21(cell + seed * 7.7)) * us;
            wall = mix(wall, wall * 1.12 + 0.04, sill);
            wall = mix(wall, snowC, sillSnow * 0.92);
            fH += sill * 0.14 + sillSnow * 0.06;
            float lintel = step(y0 + wh, f.y) * step(f.y, y0 + wh + 0.07) * step(x0 - 0.03, f.x) * step(f.x, 1.0 - x0 + 0.03) * (glassK ? 0.0 : 1.0);
            wall = mix(wall, wall * 1.12 + 0.03, lintel);
            // 雨だれ・足元の汚れ・外壁の風化
            float streak = vnoise(vec2(u * 2.3, vWP.y * 0.05 + seed * 3.0));
            float stain = smoothstep(0.55, 0.9, streak) * (1.0 - smoothstep(0.0, 0.5, f.y)) * step(f.y, y0 + 0.05);
            wall *= 1.0 - 0.24 * stain * lod;
            wall *= 1.0 - 0.28 * (1.0 - smoothstep(0.0, 9.0, vWP.y));
            wall *= 0.93 + 0.1 * vnoise(vWP.xy * 0.35 + vWP.zy * 0.35);
            // 屋上縁・地上の雪
            float cap = 1.0 - smoothstep(0.30, 0.8, vTopDist);
            wall = mix(wall, snowC, max(cap * 0.9, groundSnow) * us);

            // ---- 窓
            float gh = hash21(cell + seed * 13.7), gh2 = hash21(cell + seed * 5.5), gh3 = hash21(cell + 3.3);
            float frameW = 0.075;
            float inner = step(frameW, wUV.x) * step(wUV.x, 1.0 - frameW) * step(frameW * 1.5, wUV.y) * step(wUV.y, 1.0 - frameW * 1.5);
            float mull = (ww * cw > 1.6 && !glassK) ? (1.0 - step(0.022, abs(wUV.x - 0.5))) : 0.0;
            float transom = (wh * ch > 1.9 && !glassK) ? (1.0 - step(0.02, abs(wUV.y - 0.72))) : 0.0;
            float frameM = inWin * (1.0 - inner * (1.0 - max(mull, transom)));
            float glassM = inWin * (1.0 - frameM);
            vec3 frameC = brick ? vec3(0.10, 0.09, 0.08) : (glassK ? vec3(0.17, 0.18, 0.2) : mix(vec3(0.72, 0.72, 0.7), vec3(0.2, 0.2, 0.22), step(0.5, fract(seed * 3.3))));
            // ガラス：窓ごとに反射量が違い、1枚の中でも上が明るい（空の写り込み）
            float refl = glassK ? 0.62 : (resid ? 0.2 : 0.4);
            vec3 skyG = mix(vec3(0.10, 0.13, 0.19), vec3(0.34, 0.43, 0.56), smoothstep(0.0, 1.0, wUV.y));
            vec3 glassC = mix(vec3(0.045, 0.058, 0.08), vec3(0.15, 0.19, 0.25), smoothstep(0.0, 90.0, vWP.y));
            glassC = mix(glassC, skyG, refl * (0.55 + 0.7 * gh));
            glassC *= 0.8 + 0.4 * gh3;
            float ao = 1.0 - 0.5 * (1.0 - smoothstep(0.0, 0.22, 1.0 - wUV.y)) - 0.25 * (1.0 - smoothstep(0.0, 0.14, wUV.x));  // 窓の奥まり(庇・縦枠の影)
            ao = mix(1.0, ao, lod);
            // ブラインド・カーテン
            float blind = step(0.74, gh2) * glassM;
            float blindH = 0.25 + 0.75 * gh3;
            float inBlind = blind * step(1.0 - blindH, wUV.y);
            vec3 blindC = mix(vec3(0.70, 0.66, 0.56), vec3(0.78, 0.78, 0.76), step(0.5, gh)) * (0.75 + 0.3 * gh3);
            // 点灯：階と列のまとまりで相関させる
            float r = 0.62 * hash21(vec2(cell.y, floor(cell.x / 6.0)) + seed * 91.0) + 0.38 * hash21(cell + seed * 91.0);
            float litP = clamp(mix(0.05, 0.55, uNight) * (0.4 + vBld.z), 0.0, 0.92);
            float lit = step(r, litP);
            float coolP = (kind < 0.5 || glassK) ? 0.7 : 0.15;
            float cool = step(hash21(vec2(cell.y, seed) * 3.1), coolP);
            vec3 lc = mix(vec3(1.0, 0.68, 0.38), vec3(0.80, 0.90, 1.0), cool) * (0.7 + 0.6 * hash21(cell + 4.3));
            float room = 0.55 + 0.45 * smoothstep(0.0, 1.0, wUV.y) * (0.7 + 0.3 * hash21(cell + 8.1));   // 室内の天井照明の明暗

            // ---- 1階：店舗ガラス・出入口・看板帯（住宅は小さな出入口のみ）
            bool gfl = vWP.y < 4.4 && !resid;
            vec3 col = wall; float isGlass = 0.0; float rough = 0.8; float metal = 0.0;
            if (gfl) {
              float bw = 3.2 + 2.2 * fract(seed * 3.7);
              float bi = floor(u / bw), gx = fract(u / bw);
              float plinth = 1.0 - smoothstep(0.65, 0.75, vWP.y);
              float shopG = step(0.06, gx) * step(gx, 0.94) * step(0.75, vWP.y) * step(vWP.y, 3.3);
              float door = step(0.84, hash21(vec2(bi, seed * 9.0))) * step(0.18, gx) * step(gx, 0.82) * step(vWP.y, 2.5);
              float sgn = step(3.35, vWP.y) * step(vWP.y, 4.25);
              vec3 sc = signCol(hash21(vec2(floor(u / (bw * 2.0)), seed * 4.0)));
              col = mix(col, col * 0.62, plinth);
              col = mix(col, sc, sgn * 0.95);
              fH += sgn * 0.12 - shopG * 0.12;
              float gl = max(shopG, door);
              col = mix(col, mix(vec3(0.05, 0.065, 0.085), vec3(0.2, 0.24, 0.3), (vWP.y - 0.75) / 2.5 * refl * 2.0), gl);
              col = mix(col, frameC, gl * (1.0 - step(0.04, min(gx, 1.0 - gx)) * step(0.04, abs(vWP.y - 2.0)) * step(abs(vWP.y - 3.3), 0.0)) * 0.0);
              isGlass = gl; rough = mix(0.8, 0.06, gl); metal = gl * 0.5;
              float shopLit = step(0.32, hash21(vec2(bi, seed))) * gl;
              vec3 shopC = mix(vec3(1.0, 0.76, 0.5), vec3(0.95, 0.97, 1.0), step(0.6, hash21(vec2(bi, seed + 1.0))));
              fEmis = shopLit * shopC * (0.25 + 0.95 * uNight) * (0.55 + 0.45 * (1.0 - (vWP.y - 0.75) / 2.6));
              fEmis += sgn * sc * (0.05 + 0.55 * uNight);
              if (door > 0.5) { col = mix(col, vec3(0.08, 0.075, 0.07), 0.6); }
            } else {
              vec3 wc = mix(wall, frameC, frameM * (1.0 - aa));
              wc = mix(wc, glassC * ao, glassM);
              wc = mix(wc, blindC * (0.5 + 0.5 * ao), inBlind);
              col = mix(wall, wc, step(0.001, inWinA));
              col = mix(col, mix(wall, vec3(0.1), ww * wh * 0.85), aa * 0.0);
              isGlass = glassM * (1.0 - inBlind) * (1.0 - max(cap, groundSnow * 0.6));
              rough = mix(0.8, 0.06, isGlass); rough = mix(rough, 0.9, inBlind);
              metal = isGlass * (glassK ? 0.85 : 0.4);
              float glow = glassM * lit * (0.2 + 0.8 * uNight) * (1.0 - cap);
              fEmis = glow * lc * room * ao * mix(1.0, 0.7, inBlind) * (inBlind > 0.5 ? 1.0 : 1.0);
              fH -= inWin * 0.14 * (1.0 - frameM);                          // 窓面の奥まり
              fH += frameM * 0.03;
              // 遠方：窓の平均色へフェード（窓パターンの面ノイズを抑える）
              col = mix(col, mix(wall, glassC, ww * wh * 0.85), aa);
              fEmis = mix(fEmis, lc * lit * (0.2 + 0.8 * uNight) * ww * wh * 0.8, aa);
            }
            diffuseColor.rgb = col;
            fRough = rough; fMetal = metal;
            fH *= lod * (1.0 - aa);
          } else {
            diffuseColor.rgb = base * 0.6;
          }
        }`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = fRough;`)
      .replace('#include <metalnessmap_fragment>', `#include <metalnessmap_fragment>
        metalnessFactor = fMetal;`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        {
          vec3 sX = dFdx(-vViewPosition), sY = dFdy(-vViewPosition);
          float px = length(sX) + 1e-5;
          float hx = clamp(dFdx(fH), -1.2 * px, 1.2 * px), hy = clamp(dFdy(fH), -1.2 * px, 1.2 * px);
          vec3 R1 = cross(sY, normal), R2 = cross(normal, sX);
          float det = dot(sX, R1);
          normal = normalize(abs(det) * normal - sign(det) * (hx * R1 + hy * R2));
        }`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        totalEmissiveRadiance += fEmis;`);
  };
  return mat;
}

// 切妻屋根の三角柱（x方向が幅、棟はz方向、底面y=0・棟y=1）
export function makeGableGeometry(THREE) {
  const A = [-0.5, 0, -0.5], B = [0.5, 0, -0.5], C = [0, 1, -0.5], D = [-0.5, 0, 0.5], E = [0.5, 0, 0.5], F = [0, 1, 0.5];
  const tris = [A, C, B, D, E, F, A, D, F, A, F, C, B, C, F, B, F, E, A, B, E, A, E, D];
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(tris.flat(), 3));
  g.computeVertexNormals();
  return g;
}

// 円柱（貯水槽・ダクト等。直径1・高さ1・底面y=0）
export function makeTankGeometry(THREE) {
  const g = new THREE.CylinderGeometry(0.5, 0.5, 1, 14, 1, false);
  g.translate(0, 0.5, 0);
  return g;
}

// ---- 建物バッチ（箱・切妻を種類別の InstancedMesh にまとめる）
export class BuildingBatch {
  constructor(THREE, material, capacity = 60000, geometry = null) {
    this.THREE = THREE; this.material = material; this.capacity = capacity; this.n = 0;
    this.geometry = geometry;
    this.mats = new Float32Array(capacity * 16);
    this.bld = new Float32Array(capacity * 4);
    this.par = new Float32Array(capacity * 4);
    this._m = new THREE.Matrix4(); this._p = new THREE.Vector3(); this._q = new THREE.Quaternion(); this._s = new THREE.Vector3();
  }
  /** 底面中心 (x,y,z)、幅w・高さh・奥行d、回転rotY。par は未指定なら kind から決める。 */
  add(x, y, z, w, h, d, kind, seed, litBias = 0.5, rotY = 0, par = null) {
    if (this.n >= this.capacity) return;
    const { _m: m, _p: p, _q: q, _s: s } = this;
    p.set(x, y, z); s.set(w, h, d); q.setFromAxisAngle(this.THREE.Object3D.DEFAULT_UP, rotY);
    m.compose(p, q, s); m.toArray(this.mats, this.n * 16);
    const o = this.n * 4;
    this.bld[o] = seed; this.bld[o + 1] = kind; this.bld[o + 2] = litBias; this.bld[o + 3] = 0;
    const pr = par ?? defaultPar(kind, seed);
    this.par[o] = pr[0]; this.par[o + 1] = pr[1]; this.par[o + 2] = pr[2]; this.par[o + 3] = pr[3];
    this.n++;
  }
  build({ castShadow = true } = {}) {
    const THREE = this.THREE;
    const geo = this.geometry ?? (() => { const g = new THREE.BoxGeometry(1, 1, 1); g.translate(0, 0.5, 0); return g; })();
    geo.setAttribute('aBld', new THREE.InstancedBufferAttribute(this.bld.slice(0, this.n * 4), 4));
    geo.setAttribute('aPar', new THREE.InstancedBufferAttribute(this.par.slice(0, this.n * 4), 4));
    const mesh = new THREE.InstancedMesh(geo, this.material, this.n);
    mesh.instanceMatrix.array.set(this.mats.subarray(0, this.n * 16));
    mesh.instanceMatrix.needsUpdate = true;
    mesh.castShadow = castShadow; mesh.receiveShadow = true; mesh.frustumCulled = false;
    return mesh;
  }
}

// kind ごとの典型的な窓寸法（建物ごとにばらつかせる）
export function defaultPar(kind, seed) {
  const r = (k) => { const v = Math.sin((seed + k) * 12.9898) * 43758.5453; return v - Math.floor(v); };
  switch (kind) {
    case 2: return [2.4 + r(1) * 1.4, 3.6 + r(2) * 0.6, 0.94, 0.55 + r(3) * 0.2];            // 連続窓＋スパンドレル
    case 3: return [2.6 + r(1) * 1.0, 2.8 + r(2) * 0.3, 0.55 + r(3) * 0.15, 0.5 + r(4) * 0.12]; // 住宅の小窓
    case 4: return [3.6 + r(1) * 1.6, 3.8 + r(2) * 0.8, 0.45 + r(3) * 0.2, 0.7];             // 縦ピアの商業/ホテル
    case 1: return [2.2 + r(1) * 0.8, 3.4 + r(2) * 0.6, 0.5 + r(3) * 0.15, 0.6 + r(4) * 0.12]; // レンガの縦長窓
    default: return [2.7 + r(1) * 1.2, 3.5 + r(2) * 0.5, 0.62 + r(3) * 0.2, 0.55 + r(4) * 0.15]; // 事務所
  }
}

// ---- 細い円柱（梁・枝・鉄塔部材）を2点指定で大量に配置。r2 を指定すると b 側へ向かって先細りになる。
export class BeamSet {
  constructor(THREE, material) { this.THREE = THREE; this.material = material; this.items = []; }
  add(a, b, r, r2 = r) { this.items.push([a, b, r, r2]); }
  build({ castShadow = false, sides = 6 } = {}) {
    const THREE = this.THREE;
    const geo = new THREE.CylinderGeometry(1, 1, 1, sides, 1, false);
    const mesh = new THREE.InstancedMesh(geo, this.material, this.items.length);
    const taper = new Float32Array(this.items.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0);
    const pa = new THREE.Vector3(), pb = new THREE.Vector3(), dir = new THREE.Vector3(), mid = new THREE.Vector3(), s = new THREE.Vector3();
    this.items.forEach(([a, b, r, r2], i) => {
      pa.set(...a); pb.set(...b);
      dir.subVectors(pb, pa); const len = dir.length(); dir.normalize();
      q.setFromUnitVectors(up, dir);
      mid.addVectors(pa, pb).multiplyScalar(0.5);
      s.set(r, len, r);
      m.compose(mid, q, s);
      mesh.setMatrixAt(i, m);
      taper[i] = r2 / r;
    });
    geo.setAttribute('aTaper', new THREE.InstancedBufferAttribute(taper, 1));
    const mat = this.material;
    if (!mat.userData.beamTaper) {                                  // 先細り：+y 端の半径を aTaper 倍にする
      mat.userData.beamTaper = true;
      const prev = mat.onBeforeCompile;
      mat.onBeforeCompile = (shader, r) => {
        prev?.(shader, r);
        shader.vertexShader = shader.vertexShader
          .replace('#include <common>', '#include <common>\nattribute float aTaper;')
          .replace('#include <begin_vertex>', '#include <begin_vertex>\n#ifdef USE_INSTANCING\ntransformed.xz *= mix(1.0, aTaper, position.y + 0.5);\n#endif');
      };
      const key = mat.customProgramCacheKey?.bind(mat);
      mat.customProgramCacheKey = () => (key ? key() : '') + '|taper';
      mat.needsUpdate = true;
    }
    mesh.instanceMatrix.needsUpdate = true;
    mesh.castShadow = castShadow; mesh.receiveShadow = false; mesh.frustumCulled = false;
    return mesh;
  }
}
