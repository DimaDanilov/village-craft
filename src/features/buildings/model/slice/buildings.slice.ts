import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { BuildingName, ForgeBuilding, GateToTheFutureBuilding, MarketBuilding } from '../types';
import {
  selectBuildingLevel,
  selectBuildingsError,
  selectForgeLevel,
  selectGateToTheFutureLevel,
  selectIsEveryBuildingBuilt,
  selectMarketLevel,
} from '../selectors';
import { isBuildingNextLevelExist } from '../tools';
import { BUILDING_UPGRADE_COST } from '..';

export interface BuildingInfo {
  forge: ForgeBuilding;
  market: MarketBuilding;
  gateToTheFuture: GateToTheFutureBuilding;
}

export interface BuildingsState {
  buildings: BuildingInfo;
  error?: string;
}

const initialState: BuildingsState = {
  buildings: {
    forge: {
      level: '0',
    },
    market: {
      level: '0',
    },
    gateToTheFuture: {
      level: '0',
    },
  },
  error: undefined,
};

export const buildingsSlice = createSlice({
  name: 'buildings',
  initialState,
  selectors: {
    selectBuildingLevel,
    selectForgeLevel,
    selectMarketLevel,
    selectGateToTheFutureLevel,
    selectIsEveryBuildingBuilt,
    selectBuildingsError,
  },
  reducers: {
    _upgradeBuilding: (state, action: PayloadAction<{ buildingName: BuildingName }>) => {
      const { buildingName } = action.payload;
      const currentLevel = state.buildings[buildingName].level;
      const nextLevel = (Number(currentLevel) + 1).toString();
      const isNextLevelExist = isBuildingNextLevelExist(nextLevel, BUILDING_UPGRADE_COST[buildingName]);
      if (isNextLevelExist) {
        state.buildings[buildingName].level = nextLevel;
      }
    },
    setBuildingsError: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.error = payload;
    },
    clearBuildingsError: (state) => {
      state.error = undefined;
    },
  },
});

export const { setBuildingsError, clearBuildingsError } = buildingsSlice.actions;
