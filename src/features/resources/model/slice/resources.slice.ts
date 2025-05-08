import { createSlice } from '@reduxjs/toolkit';
import type { CoinsStorage, StonePile, WoodPile } from '../types';
import { selectCoinsCount, selectStoneCount, selectWoodCount } from '../selectors';

export interface ResourcesState {
  wood: WoodPile;
  stone: StonePile;
  coins: CoinsStorage;
}

const initialState: ResourcesState = {
  wood: {
    count: 0,
  },
  stone: {
    count: 0,
  },
  coins: {
    count: 3,
  },
};

export const resourcesSlice = createSlice({
  name: 'resources',
  initialState,
  selectors: {
    selectWoodCount,
    selectStoneCount,
    selectCoinsCount,
  },
  reducers: {
    chopWood: (state) => {
      state.wood.count += 1;
    },
    mineStone: (state) => {
      state.stone.count += 1;
    },
    sellItems: (state) => {
      state.coins.count += 1;
    },
  },
});
