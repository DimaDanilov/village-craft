import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ForgeBuilding, MarketBuilding } from '../types';
import { selectBuildingsError, selectForgeLevel, selectIsEveryBuildingBuilt, selectMarketLevel } from '../selectors';
import { isBuildingNextLevelExist } from '../tools';
import { FORGE_UPGRADE_COST, MARKET_UPGRADE_COST } from '../constants';

export interface BuildingsState {
  buildings: {
    forge: ForgeBuilding;
    market: MarketBuilding;
  };
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
  },
  error: undefined,
};

export const buildingsSlice = createSlice({
  name: 'buildings',
  initialState,
  selectors: { selectForgeLevel, selectMarketLevel, selectIsEveryBuildingBuilt, selectBuildingsError },
  reducers: {
    _upgradeForge: (state) => {
      const nextLevel = (Number(state.buildings.forge.level) + 1).toString();
      if (isBuildingNextLevelExist(nextLevel, FORGE_UPGRADE_COST)) {
        state.buildings.forge.level = nextLevel;
      }
    },
    _upgradeMarket: (state) => {
      const nextLevel = (Number(state.buildings.market.level) + 1).toString();
      if (isBuildingNextLevelExist(nextLevel, MARKET_UPGRADE_COST)) {
        state.buildings.market.level = nextLevel;
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
