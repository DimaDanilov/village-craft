import type { AppThunk } from '@store';
import { resourcesSlice } from '../slice';
import {
  AxeLevelEfficiency,
  PickaxeLevelEfficiency,
  selectAxeLevel,
  selectPickaxeLevel,
} from '@features/instruments/model';

export const chopWoodWithAxe = (): AppThunk => (dispatch, getState) => {
  const instrumentState = getState().instruments;
  const axeLevel = selectAxeLevel(instrumentState);
  const woodChopedWithAxe = AxeLevelEfficiency[axeLevel];
  dispatch(resourcesSlice.actions._chopWood({ count: woodChopedWithAxe }));
};

export const mineStoneWithPickaxe = (): AppThunk => (dispatch, getState) => {
  const instrumentState = getState().instruments;
  const pickaxeLevel = selectPickaxeLevel(instrumentState);
  const stoneMinedWithPickaxe = PickaxeLevelEfficiency[pickaxeLevel];
  dispatch(resourcesSlice.actions._mineStone({ count: stoneMinedWithPickaxe }));
};
