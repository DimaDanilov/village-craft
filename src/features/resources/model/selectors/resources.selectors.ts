import type { ResourcesState } from '../slice';

export const selectWoodCount = (state: ResourcesState) => state.wood.count;
export const selectStoneCount = (state: ResourcesState) => state.stone.count;
export const selectCoinsCount = (state: ResourcesState) => state.coins.count;
