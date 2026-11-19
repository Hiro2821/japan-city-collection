// scroll/haze.js — 空気遠近法の霞（スクロール版のみ）。シーン構築コード（動画版と共有）は変更せず、
// 構築後に各マテリアルの fog_fragment の後ろへ「距離に応じた霞」を差し込む。
//   - 霞色は「見ている方向のその時刻の空の地平線色」：空シェーダと同じ式 mix(uHorizon, uHorizonWarm, pow(mu,1.6)) を
//     フラグメントごとに評価する（空の uniform を共有するので、時刻による昼の青→夕方のピンクに自動で追従）。
//   - 距離 start→end で smoothstep し、strength を上限に霞色へ溶かし、同時に彩度を落とす（コントラストも霞色へ寄って下がる）。
//   - 山並み（mountains）は上限を mountain 倍に抑え、最終構図でシルエットが消えないようにする。
//   - 空（fog:false の ShaderMaterial）・雪や光点（独自シェーダ）は対象外。ドローコール・三角形は変わらない。
import * as THREE from 'three';

export const HAZE_DEFAULT = { start: 700, end: 7000, strength: 0.6, desat: 0.55, mountain: 0.5 };

/** URL の ?haze=（倍率。0 で無効）などから設定を作る。 */
export function hazeFromQuery(q) {
  const raw = q.get('haze');
  const mult = raw === null || raw === '' ? 1 : Math.max(0, parseFloat(raw));
  const num = (k, d) => (q.has(k) && isFinite(parseFloat(q.get(k))) ? parseFloat(q.get(k)) : d);
  return {
    mult: isFinite(mult) ? mult : 1,
    start: num('hazeStart', HAZE_DEFAULT.start), end: num('hazeEnd', HAZE_DEFAULT.end),
    strength: num('hazeMax', HAZE_DEFAULT.strength), desat: num('hazeDesat', HAZE_DEFAULT.desat), mountain: num('hazeMtn', HAZE_DEFAULT.mountain),
  };
}

const GLSL = /* glsl */ `
#ifdef USE_FOG
{
  float hz = smoothstep(uHazeP.x, uHazeP.y, vFogDepth) * uHazeP.z * HZ_K;
  if (hz > 0.0) {
    HAZE_COL
    float lm = dot(gl_FragColor.rgb, vec3(0.2126, 0.7152, 0.0722));
    gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(lm), hz * uHazeP.w);
    gl_FragColor.rgb = mix(gl_FragColor.rgb, hzCol, hz);
  }
}
#endif`;
const COL_DIR = /* glsl */ `
    vec3 hzV = normalize((vec4(-vViewPosition, 0.0) * viewMatrix).xyz);
    float hzMu = max(dot(hzV, uHazeSun), 0.0);
    vec3 hzCol = mix(uHazeHor, uHazeWarm, pow(hzMu, 1.6));`;
const COL_FLAT = /* glsl */ `
    vec3 hzCol = uHazeHor;`;

/**
 * scene 内の fog を使うマテリアルへ霞を差し込む。最初の描画（コンパイル）より前に呼ぶこと。
 * @param sky createSky() の戻り値の uniforms（uHorizon / uHorizonWarm / uSunDir を共有）
 * @returns {{params, uniforms, set(cfg), materials:number}}
 */
export function applyHaze(scene, skyUniforms, cfg) {
  const P = new THREE.Vector4();
  const uniforms = {
    uHazeP: { value: P }, uHazeHor: skyUniforms.uHorizon, uHazeWarm: skyUniforms.uHorizonWarm, uHazeSun: skyUniforms.uSunDir,
  };
  const api = {
    cfg: { ...cfg }, uniforms, materials: 0,
    set(c) { Object.assign(api.cfg, c); const s = api.cfg.strength * api.cfg.mult; P.set(api.cfg.start, api.cfg.end, Math.min(1, s), api.cfg.desat); },
  };
  api.set({});
  const seen = new Set();
  scene.traverse((o) => {
    const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
    for (const m of ms) {
      if (seen.has(m) || m.isShaderMaterial && !m.isMeshStandardMaterial || m.fog === false || m.isPointsMaterial) continue;
      seen.add(m);
      const k = String(o.name || '').startsWith('mountains') ? api.cfg.mountain : 1;
      const orig = m.onBeforeCompile, key = m.customProgramCacheKey();
      m.onBeforeCompile = function (shader, renderer) {
        orig?.call(this, shader, renderer);
        const fs = shader.fragmentShader;
        if (!fs.includes('#include <fog_fragment>')) return;
        const dir = fs.includes('vViewPosition');
        Object.assign(shader.uniforms, uniforms);
        shader.fragmentShader = fs
          .replace('#include <fog_pars_fragment>', '#include <fog_pars_fragment>\nuniform vec4 uHazeP; uniform vec3 uHazeHor, uHazeWarm, uHazeSun;')
          .replace('#include <fog_fragment>', '#include <fog_fragment>' + GLSL.replace('HAZE_COL', dir ? COL_DIR : COL_FLAT).replace('HZ_K', k.toFixed(3)));
      };
      m.customProgramCacheKey = () => key + '|haze1|' + k;
      m.needsUpdate = true;
      api.materials++;
    }
  });
  return api;
}
