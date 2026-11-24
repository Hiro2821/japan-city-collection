// cities/index.js — 都市モジュールのレジストリ。新しい都市は ここに 1 行足して cities/<id>/index.js を作る。
//   静的な文字列の import() なので、バンドル（esbuild 単一ファイル）にも含まれる。
import { validateCity } from '../city-api.js';

export const DEFAULT_CITY = 'sapporo';
const LOADERS = {
  sapporo: () => import('./sapporo/index.js'),
  sendai: () => import('./sendai/index.js'),
  tokyo: () => import('./tokyo/index.js'),
  kyoto: () => import('./kyoto/index.js'),
  osaka: () => import('./osaka/index.js'),
};
export const cityIds = () => Object.keys(LOADERS);

/** ?city= の値から都市モジュールを読み込む。未指定は札幌。未知の id は札幌にフォールバックし、理由を返す。 */
export async function loadCity(id) {
  let note = null, use = id || DEFAULT_CITY;
  if (!LOADERS[use]) { note = `未知の都市 "${use}" → ${DEFAULT_CITY} を表示`; use = DEFAULT_CITY; }
  const mod = (await LOADERS[use]()).default;
  validateCity(mod);
  return { mod, note };
}
