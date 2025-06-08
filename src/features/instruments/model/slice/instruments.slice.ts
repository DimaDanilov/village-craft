import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AxeInstrument, InstrumentName, PickaxeInstrument } from '../types';
import { selectInstrumentLevel, selectInstrumentsError } from '../selectors';
import { isInstrumentNextLevelExist } from '../tools';
import { INSTRUMENT_INFOS } from '../constants';

export interface InstrumentState {
  axe: AxeInstrument;
  pickaxe: PickaxeInstrument;
}

export interface InstrumentsState {
  instruments: InstrumentState;
  error?: string;
}

const initialState: InstrumentsState = {
  instruments: {
    axe: {
      level: '1',
    },
    pickaxe: {
      level: '1',
    },
  },
  error: undefined,
};

export const instrumentsSlice = createSlice({
  name: 'instruments',
  initialState,
  selectors: { selectInstrumentLevel, selectInstrumentsError },
  reducers: {
    _upgradeInstrument: (state, action: PayloadAction<{ instrumentName: InstrumentName }>) => {
      const { instrumentName } = action.payload;
      const currentLevel = state.instruments[instrumentName].level;
      const nextLevel = (Number(currentLevel) + 1).toString();
      const isNextLevelExist = isInstrumentNextLevelExist(nextLevel, INSTRUMENT_INFOS[instrumentName].upgradeCost);
      if (isNextLevelExist) {
        state.instruments[instrumentName].level = nextLevel;
      }
    },
    setInstrumentsError: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.error = payload;
    },
    clearInstrumentsError: (state) => {
      state.error = undefined;
    },
  },
});

export const { setInstrumentsError, clearInstrumentsError } = instrumentsSlice.actions;
