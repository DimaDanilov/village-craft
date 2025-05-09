import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CoinsStorage, StonePile, WoodPile } from '../types';
import { selectCoinsCount, selectResourcesError, selectStoneCount, selectWoodCount } from '../selectors';
import { isSellAvailable } from '../tools';

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
    /* Use chopWoodWithAxe in component instead */
    _chopWood: (state, action: PayloadAction<{ count: number }>) => {
      state.resources.wood.count += action.payload.count;
    },
    /* Use mineStoneWithPickaxe in component instead */
    _mineStone: (state, action: PayloadAction<{ count: number }>) => {
      state.resources.stone.count += action.payload.count;
    },
    sellWood: (state, action: PayloadAction<{ woodCount: number }>) => {
      const { woodCount } = action.payload;
      const isSellWoodAvailable = isSellAvailable({
        currentResourcesAmount: state.resources.wood.count,
        amountToSell: woodCount,
      });

      if (!isSellWoodAvailable) {
        state.error = 'Not enough wood to sell';
        return;
      }

      state.resources.wood.count -= woodCount;
      state.resources.coins.count += woodCount;
      state.error = undefined;
    },
    sellStone: (state, action: PayloadAction<{ stoneCount: number }>) => {
      const { stoneCount } = action.payload;
      const isSellStoneAvailable = isSellAvailable({
        currentResourcesAmount: state.resources.stone.count,
        amountToSell: stoneCount,
      });

      if (!isSellStoneAvailable) {
        state.error = 'Not enough stone to sell';
        return;
      }

      state.resources.stone.count -= stoneCount;
      state.resources.coins.count += stoneCount;
      state.error = undefined;
    },
    clearResourcesError: (state) => {
      state.error = undefined;
    },
  },
});

export const { sellWood, sellStone, clearResourcesError } = resourcesSlice.actions;
