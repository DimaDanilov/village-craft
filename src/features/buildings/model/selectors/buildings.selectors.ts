import type { BuildingsState } from '../slice';

export const selectForgeLevel = (state: BuildingsState) => state.buildings.forge.level;
export const selectMarketLevel = (state: BuildingsState) => state.buildings.market.level;
