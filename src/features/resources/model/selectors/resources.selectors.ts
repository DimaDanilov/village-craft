import type { ResourcesState } from '../slice';
import type { ResourceName } from '../types';

export const selectAllResources = (state: ResourcesState) => state.resources;
export const selectResourceCount = (state: ResourcesState, resourceName: ResourceName) =>
  state.resources[resourceName].count;
export const selectResourcesError = (state: ResourcesState) => state.error;
