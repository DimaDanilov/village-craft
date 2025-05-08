import type { ResourcesState } from '../slice/resources.slice';

export const selectWoodCount = (state: ResourcesState) => state.wood.count;
export const selectStoneCount = (state: ResourcesState) => state.stone.count;
