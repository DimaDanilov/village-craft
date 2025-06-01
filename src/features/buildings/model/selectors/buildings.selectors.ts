import { createSelector } from '@reduxjs/toolkit';
import type { BuildingsState } from '../slice';
import type { BuildingName } from '../types';

export const selectBuildingLevel = (state: BuildingsState, buildingKey: BuildingName) => state.buildings[buildingKey].level;
export const selectForgeLevel = (state: BuildingsState) => state.buildings.forge.level;
export const selectMarketLevel = (state: BuildingsState) => state.buildings.market.level;
export const selectGateToTheFutureLevel = (state: BuildingsState) => state.buildings.gateToTheFuture.level;
export const selectIsEveryBuildingBuilt = createSelector([(state: BuildingsState) => state.buildings], (buildings) => {
  const buildingsInfoArray = Object.values(buildings);
  const isEverythingBuilt = buildingsInfoArray.every((building) => Number(building.level) > 0);
  return isEverythingBuilt;
});
export const selectBuildingsError = (state: BuildingsState) => state.error;
