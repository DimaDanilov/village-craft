import { createSlice } from '@reduxjs/toolkit';
import type { AxeInstrument, PickaxeInstrument } from '../types';
import { selectAxeLevel, selectPickaxeLevel } from '../selectors';

export interface InstrumentsState {
  axe: AxeInstrument;
  pickaxe: PickaxeInstrument;
}

const initialState: InstrumentsState = {
  axe: {
    level: '1',
  },
  pickaxe: {
    level: '1',
  },
};

export const instrumentsSlice = createSlice({
  name: 'instruments',
  initialState,
  selectors: { selectAxeLevel, selectPickaxeLevel },
  reducers: {
    upgradeAxe: (state) => {
      const nextLevel: number = Number(state.axe.level) + 1;
      state.axe.level = nextLevel.toString();
    },
    upgradePickaxe: (state) => {
      const nextLevel: number = Number(state.pickaxe.level) + 1;
      state.pickaxe.level = nextLevel.toString();
    },
  },
});

export const { upgradeAxe, upgradePickaxe } = instrumentsSlice.actions;
