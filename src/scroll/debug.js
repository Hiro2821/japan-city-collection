// scroll/debug.js — ?debug=1 のときだけ表示する診断パネル。通常表示では DOM も作らない。
//   表示: FPS(直近1秒の平均と最大フレーム間隔) / 品質ティアと変更履歴 / 実描画解像度・DPR・描画スケール /
//         p と t / GL呼び出し数・三角形数 / WebGL レンダラー(GPU)文字列。タップで内容をコピー。
export class DebugPanel {
  constructor() {
    this.el = document.createElement('pre');
    this.el.id = 'dbg';
    this.el.setAttribute('aria-hidden', 'true');
    this.el.style.cssText = [
      'position:fixed', 'left:max(6px,env(safe-area-inset-left))', 'top:max(6px,env(safe-area-inset-top))', 'z-index:99',
      'margin:0', 'padding:6px 8px', 'max-width:calc(100vw - 12px)', 'box-sizing:border-box',
      'font:10px/1.35 ui-monospace,Menlo,monospace', 'color:#cfe', 'background:rgba(0,0,0,.62)',
      'border-radius:6px', 'white-space:pre-wrap', 'word-break:break-all', 'pointer-events:auto', 'user-select:text',
    ].join(';');
    document.body.appendChild(this.el);
    this.frames = []; // [timestampMs]
    this.history = []; // ティア変更履歴
    this.text = '';
    this.el.addEventListener('click', () => this.copy());
  }

  /** 毎フレーム呼ぶ（描画した時刻を記録）。 */
  tick(now) {
    this.frames.push(now);
    const cut = now - 1000;
    while (this.frames.length && this.frames[0] < cut) this.frames.shift();
  }

  logTier(from, to, reason) {
    this.history.push(`${new Date().toISOString().slice(11, 19)} ${from}→${to} (${reason})`);
    if (this.history.length > 6) this.history.shift();
  }

  fps() {
    const f = this.frames;
    if (f.length < 2) return { avg: 0, maxGap: 0 };
    let maxGap = 0;
    for (let i = 1; i < f.length; i++) maxGap = Math.max(maxGap, f[i] - f[i - 1]);
    return { avg: ((f.length - 1) * 1000) / (f[f.length - 1] - f[0]), maxGap };
  }

  update(s) {
    const { avg, maxGap } = this.fps();
    const lines = [
      `FPS ${avg.toFixed(1)}  最大間隔 ${maxGap.toFixed(0)}ms  (直近1秒)`,
      `tier ${s.tierLabel}${this.history.length ? '  履歴: ' + this.history.join(' | ') : '  履歴: なし'}`,
      `canvas ${s.width}x${s.height} (${(s.width * s.height / 1e6).toFixed(2)}MP)  DPR ${s.dpr}  scale ${s.scale.toFixed(3)}`,
      `p ${s.p.toFixed(4)}${s.target !== undefined ? ' →目標 ' + s.target.toFixed(4) : ''}  t ${s.t.toFixed(3)}s  layout 縦${(s.wPortrait * 100).toFixed(0)}%`,
      `GL calls ${s.calls}  tris ${s.triangles}`,
      s.haze ? `haze ×${s.haze.mult}${s.haze.mult === 0 ? '(無効)' : ''}  開始 ${s.haze.start}m 到達 ${s.haze.end}m 上限 ${s.haze.strength}（山 ×${s.haze.mountain}） 彩度減 ${s.haze.desat}` : 'haze なし',
      `GPU ${s.gpu}`,
    ];
    this.text = lines.join('\n');
    this.el.textContent = this.text;
  }

  async copy() {
    try { await navigator.clipboard.writeText(this.text); this.flash('copied'); }
    catch {
      const r = document.createRange(); r.selectNodeContents(this.el);
      const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r);
      try { document.execCommand('copy'); this.flash('copied'); } catch { this.flash('選択しました（手動でコピー）'); }
    }
  }
  flash(msg) { const o = this.el.style.outline; this.el.style.outline = '1px solid #6f6'; this.el.title = msg; setTimeout(() => { this.el.style.outline = o; }, 600); }
}
