# 都市モジュール契約（スクロール版）

札幌が最初の実装。2都市目以降は `src/scroll/cities/<id>/` を作り、`src/scroll/cities/index.js` の `LOADERS` に 1 行足す。共通側（スクロール制御と減衰・品質ティア・デバッグ表示・バンドルとフォールバック・霞とグレーディングの仕組み）は変更しない。

URL: `scroll.html?city=<id>`（未指定・未知の id は札幌。未知の id は console.warn）。

## 都市モジュール（`cities/<id>/index.js` の default export）
```js
{
  contract: 1,
  meta: { id, name: { ja, en }, season, theme, docTitle },     // id は metadata/cities.json の id と一致させる
  captions: [{ id, title, sub, a, b }],                         // 表示区間は進行度 p（a<b、窓は重ならない）。title=大見出し、sub=小見出し
  timeline: { globalStart, duration },                          // ショットのグローバル開始秒と尺（秒）
  ambient: { name, counts: { normal, light } },                 // 環境アニメーション（札幌=雪）の粒数。light=スマホ
  tuning: { haze: {}, grade: {} },                              // 霞・グレーディングの既定の上書き（部分指定、空でよい）
  async buildScene(ctx) -> scene                                // ctx: { renderer, cityMeta, index, total, fx:{tiled,haze} }
}
```
`captions` は `src/scroll/city-api.js: validateCity` が起動時に検証する（窓の重なりも）。キャプションの DOM は共通側が生成する。

## シーン（buildScene の戻り値）
動画版の `CityScene` 互換（`scene`, `camera`, `look`, `frameState(t)`, `onBeforeRender`）に加えて:
- `rig`: カメラ経路。`rig.sample(tGlobal, w)` → `{position, target, fov}`（w=縦画面の重み 0..1）、`rig.weight`。共通の `ScrollRig`（`src/scroll/rig.js`）に **経路データ**（`globalStart, duration, landscapeKeys, adj, portraitSpec, axis`）を渡して作る。札幌のデータは `cities/sapporo/camera.js`。
- `setAmbientCount(n)`: 環境アニメーションの粒数を設定する（描画頂点数だけ変える）。
- `setLayoutWeight(w)`: 縦画面経路の重み。
- `build()` の最後で共通の `applyScrollEffects(city, { tiled, haze, tileExclude, skyUniforms })` を呼ぶ（タイル分割＋視錐台カリング、空の地平線色に追従する霞）。動くもの（車・歩行者・風になびく飾り等）と、描画順を保ちたい重なり面のあるバッチは `tileExclude` に入れる。
- 破棄は共通の `disposeScene(city)`（`window.__scroll.dispose()`）。

シーン構築コードは動画版と共有する（`src/scenes/<id>.js`）。スクロール版の差分はサブクラス（`cities/<id>/scene.js`）で完結させ、共有ファイルを変更して動画版の見た目が変わる実装はしない。

## 共通側に残るもの
`app.js`（スクロール制御・追従・ティア・キャプション表示・フック）、`math.js`、`renderer.js`、`debug.js`、`haze.js`、`grade.js`、`tiling.js`、`rig.js`（経路の仕組み）、`city-api.js`、`tools/build-scroll.mjs`（バンドル）、`scroll.html`（フォールバック）。

## 札幌の移行後の構成
```
src/scroll/
  app.js  math.js  renderer.js  debug.js  haze.js  grade.js  tiling.js  rig.js  city-api.js
  cities/
    index.js                 レジストリ（?city=）
    sapporo/
      index.js               都市モジュール
      scene.js               SapporoScrollScene（旧 src/scroll/scene.js）
      captions.js            キャプション（純粋なデータ）
      camera.js              経路データ（旧 rig.js の LANDSCAPE_KEYS / LANDSCAPE_ADJ / PORTRAIT_SPEC / TOWER）
```
