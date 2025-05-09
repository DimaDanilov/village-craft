import type { AppThunk } from '@store';
import { resourcesSlice } from '../slice';
import {
  AXE_LEVEL_EFFICIENCY,
  PICKAXE_LEVEL_EFFICIENCY,
  selectAxeLevel,
  selectPickaxeLevel,
} from '@features/instruments/model';

export const chopWoodWithAxe = (): AppThunk => (dispatch, getState) => {
  const instrumentState = getState().instruments;
  const axeLevel = selectAxeLevel(instrumentState);
  const woodChopedWithAxe = AXE_LEVEL_EFFICIENCY[axeLevel];
  dispatch(resourcesSlice.actions._chopWood({ count: woodChopedWithAxe }));
};

export const mineStoneWithPickaxe = (): AppThunk => (dispatch, getState) => {
  const instrumentState = getState().instruments;
  const pickaxeLevel = selectPickaxeLevel(instrumentState);
  const stoneMinedWithPickaxe = PICKAXE_LEVEL_EFFICIENCY[pickaxeLevel];
  dispatch(resourcesSlice.actions._mineStone({ count: stoneMinedWithPickaxe }));
};
