import type { ResourcesState } from '../slice';

export const selectAllResources = (state: ResourcesState) => state.resources;
export const selectWoodCount = (state: ResourcesState) => state.resources.wood.count;
export const selectStoneCount = (state: ResourcesState) => state.resources.stone.count;
export const selectCoinsCount = (state: ResourcesState) => state.resources.coins.count;
export const selectResourcesError = (state: ResourcesState) => state.error;
