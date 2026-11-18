# JAPAN — THE CITY COLLECTION

10 Cities. 10 Stories. One Japan.

## 使い方
- `index.html` をWebサーバ経由で開く（例: `npx serve .` / GitHub Pages）。`file://` では ES Modules が動きません。
- Three.js は **0.187.0 固定**。既定は jsDelivr CDN、`?three=local` で `vendor/three/`（r187）。CDN に届かない場合は自動でローカルへ切替。
- 画面下の「WebMを書き出す」で、その端末のGPUが1フレームずつ描画→WebCodecsでVP9エンコード→`<都市>.webm` を保存。
- 開発用: `node tools/export.mjs --city sapporo --stills 1,4,8,12`（静止画）/ `--preview`（Node+ヘッドレスChromeで連番→ffmpeg）。
- 検証: `node tools/selftest.mjs`, `node tools/check-three.mjs`, `node tools/test-browser-export.mjs`

## 都市の追加
1. `src/scenes/<id>.js` に `CityScene` を継承したクラスを作る（`sapporo.js` を参照）。
2. `src/main.js` の `cityModules` に1行足す。
3. `metadata/cities.json` の `status` を `ready` にする。

## SAPPORO CINEMATIC JOURNEY（約55秒）
- ショット: `?shot=odori`（実装済み 11–18秒）。他は `src/scenes/sapporo.js` の `SHOTS`（ready:false）。
- 位置は `src/geo.js`（条・丁目の住所グリッド）。ランドマークは手続き生成の概略モデルで、測量に基づく再現ではない。

## 未対応・既知の制限
- MP4 の書き出しはブラウザ側では未実装（WebMのみ）。`ffmpeg -i x.webm -c:v libx264 x.mp4` で変換可。
- 音声なし。
- 札幌は大通公園・テレビ塔のショットのみ。他の7ショットは未制作。札幌以外の9都市も未制作。

## スクロール連動版（SCENE 03・札幌／`scroll.html`）
- 開き方: `scroll.html` をWebサーバ経由で開く（GitHub Pages なら `…/scroll.html`）。縦スクロールの量で、大通公園・さっぽろテレビ塔のカメラが進む（動画版とは別ページ）。
- 読み込み: 既定は単一バンドル `dist/scroll.bundle.js`（Three.js r187 同梱）。`?bundle=0` でモジュール版（import map、CDN→ローカル `vendor/three` の自動切替）。バンドルが読み込めない場合も自動でモジュール版へ切り替わる。
- **`src/` を変更したら `npm run build:scroll` で `dist/scroll.bundle.js` を再生成すること。**（要 `npm install`。esbuild を使用。）
- URL パラメータ: `?debug=1`（診断パネル）、`?tier=T0|T1|T2|T3`（描画品質）、`?snow=light|normal`、`?bundle=0`、`?three=local`。
- 仕様と再構築の経緯: `docs/rebuild-spec.md`、検証画像: `docs/verification/`。
- 注意: 実機（iPhone / iPad）での FPS・発熱・メモリ・iOS Safari の挙動は未確認。
