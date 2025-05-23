import { createSelector } from '@reduxjs/toolkit';
import type { BuildingsState } from '../slice';

export const selectForgeLevel = (state: BuildingsState) => state.buildings.forge.level;
export const selectMarketLevel = (state: BuildingsState) => state.buildings.market.level;
export const selectIsEveryBuildingBuilt = createSelector([(state: BuildingsState) => state.buildings], (buildings) => {
  const buildingsInfoArray = Object.values(buildings);
  const isEverythingBuilt = buildingsInfoArray.every((building) => Number(building.level) > 0);
  return isEverythingBuilt;
});
