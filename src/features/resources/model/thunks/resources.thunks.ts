import type { AppThunk } from '@store';
import { resourcesSlice } from '../slice';
import { selectAxeLevel, selectPickaxeLevel } from '@features/instruments/model';

export const chopWoodWithAxe = (): AppThunk => (dispatch, getState) => {
  const instrumentState = getState().instruments;
  const axeLevel = selectAxeLevel(instrumentState);
  dispatch(resourcesSlice.actions._chopWood({ count: axeLevel }));
};

export const mineStoneWithPickaxe = (): AppThunk => (dispatch, getState) => {
  const instrumentState = getState().instruments;
  const pickaxeLevel = selectPickaxeLevel(instrumentState);
  dispatch(resourcesSlice.actions._mineStone({ count: pickaxeLevel }));
};
