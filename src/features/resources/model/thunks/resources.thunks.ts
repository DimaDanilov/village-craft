import type { AppThunk } from '@store';
import { resourcesSlice } from '../slice';
import { INSTRUMENT_LEVEL_EFFICIENCY, selectInstrumentLevel } from '@features/instruments/model';

export const chopWoodWithAxe = (): AppThunk => (dispatch, getState) => {
  const instrumentState = getState().instruments;
  const axeLevel = selectInstrumentLevel(instrumentState, 'axe');
  const axeLevelEfficiencyList = INSTRUMENT_LEVEL_EFFICIENCY.axe;
  const woodChopedWithAxe = axeLevelEfficiencyList[axeLevel];
  dispatch(resourcesSlice.actions._chopWood({ count: woodChopedWithAxe }));
};

export const mineStoneWithPickaxe = (): AppThunk => (dispatch, getState) => {
  const instrumentState = getState().instruments;
  const pickaxeLevel = selectInstrumentLevel(instrumentState, 'pickaxe');
  const pickaxeLevelEfficiencyList = INSTRUMENT_LEVEL_EFFICIENCY.pickaxe;
  const stoneMinedWithPickaxe = pickaxeLevelEfficiencyList[pickaxeLevel];
  dispatch(resourcesSlice.actions._mineStone({ count: stoneMinedWithPickaxe }));
};
