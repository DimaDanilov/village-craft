import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CoinsStorage, StonePile, WoodPile } from '../types';
import { selectCoinsCount, selectResourcesError, selectStoneCount, selectWoodCount } from '../selectors';

export interface ResourcesState {
  resources: {
    wood: WoodPile;
    stone: StonePile;
    coins: CoinsStorage;
  };
  error?: string;
}

const initialState: ResourcesState = {
  resources: {
    wood: {
      count: 0,
    },
    stone: {
      count: 0,
    },
    coins: {
      count: 3,
    },
  },
  error: undefined,
};

export const resourcesSlice = createSlice({
  name: 'resources',
  initialState,
  selectors: {
    selectWoodCount,
    selectStoneCount,
    selectCoinsCount,
    selectResourcesError,
  },
  reducers: {
    chopWood: (state) => {
      state.resources.wood.count += 1;
    },
    mineStone: (state) => {
      state.resources.stone.count += 1;
    },
    sellWood: (state, action: PayloadAction<{ woodCount: number }>) => {
      const { woodCount } = action.payload;

      if (state.resources.wood.count < woodCount) {
        state.error = 'Not enough wood to sell';
        return;
      }

      state.resources.wood.count -= woodCount;
      state.resources.coins.count += woodCount;
      state.error = undefined;
    },
    sellStone: (state, action: PayloadAction<{ stoneCount: number }>) => {
      const { stoneCount } = action.payload;

      if (state.resources.stone.count < stoneCount) {
        state.error = 'Not enough stone to sell';
        return;
      }

      state.resources.stone.count -= stoneCount;
      state.resources.coins.count += stoneCount;
      state.error = undefined;
    },
    clearError: (state) => {
      state.error = undefined;
    },
  },
});
