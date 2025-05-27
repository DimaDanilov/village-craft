import { createSlice } from '@reduxjs/toolkit';
import type { ForgeBuilding, MarketBuilding } from '../types';
import { selectForgeLevel, selectIsEveryBuildingBuilt, selectMarketLevel } from '../selectors';

export interface BuildingsState {
  buildings: {
    forge: ForgeBuilding;
    market: MarketBuilding;
  };
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
};

export const buildingsSlice = createSlice({
  name: 'buildings',
  initialState,
  selectors: { selectForgeLevel, selectMarketLevel, selectIsEveryBuildingBuilt },
  reducers: {
    buildForge: (state) => {
      if (state.buildings.forge.level === '0') {
        state.buildings.forge.level = '1';
      }
    },
    buildMarket: (state) => {
      if (state.buildings.market.level === '0') {
        state.buildings.market.level = '1';
      }
    },
  },
});
