import { createSlice } from '@reduxjs/toolkit';
import type { AxeInstrument, PickaxeInstrument } from '../types';
import { selectAxeLevel, selectInstrumentsError, selectPickaxeLevel } from '../selectors';
import { isInstrumentUpgradeAvailable } from '../tools';
import { AXE_LEVEL_EFFICIENCY, PICKAXE_LEVEL_EFFICIENCY } from '../constants';

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
    upgradeAxe: (state) => {
      const nextLevel = (Number(state.instruments.axe.level) + 1).toString();

      if (!isInstrumentUpgradeAvailable(nextLevel, AXE_LEVEL_EFFICIENCY)) {
        state.error = 'Can`t upgrade axe';
        return;
      }
      state.instruments.axe.level = nextLevel;
    },
    upgradePickaxe: (state) => {
      const nextLevel = (Number(state.instruments.pickaxe.level) + 1).toString();
      if (!isInstrumentUpgradeAvailable(nextLevel, PICKAXE_LEVEL_EFFICIENCY)) {
        state.error = 'Can`t upgrade pickaxe';
        return;
      }
      state.instruments.pickaxe.level = nextLevel;
    },
    clearInstrumentsError: (state) => {
      state.error = undefined;
    },
  },
});

export const { upgradeAxe, upgradePickaxe, clearInstrumentsError } = instrumentsSlice.actions;
