import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AxeInstrument, PickaxeInstrument } from '../types';
import { selectAxeLevel, selectInstrumentsError, selectPickaxeLevel } from '../selectors';
import { isInstrumentNextLevelExist } from '../tools';
import { AXE_UPGRADE_COST, PICKAXE_UPGRADE_COST } from '../constants';

export interface InstrumentsState {
  instruments: {
    axe: AxeInstrument;
    pickaxe: PickaxeInstrument;
  };
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
  selectors: { selectAxeLevel, selectPickaxeLevel, selectInstrumentsError },
  reducers: {
    _upgradeAxe: (state) => {
      const nextLevel = (Number(state.instruments.axe.level) + 1).toString();
      if (isInstrumentNextLevelExist(nextLevel, AXE_UPGRADE_COST)) {
        state.instruments.axe.level = nextLevel;
      }
    },
    _upgradePickaxe: (state) => {
      const nextLevel = (Number(state.instruments.pickaxe.level) + 1).toString();
      if (isInstrumentNextLevelExist(nextLevel, PICKAXE_UPGRADE_COST)) {
        state.instruments.pickaxe.level = nextLevel;
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
