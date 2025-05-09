import { createSlice } from '@reduxjs/toolkit';
import type { AxeInstrument, PickaxeInstrument } from '../types';
import { selectAxeLevel, selectPickaxeLevel } from '../selectors';

export interface InstrumentsState {
  axe: AxeInstrument;
  pickaxe: PickaxeInstrument;
}

const initialState: InstrumentsState = {
  axe: {
    level: 0,
  },
  pickaxe: {
    level: 0,
  },
};

export const instrumentsSlice = createSlice({
  name: 'instruments',
  initialState,
  selectors: { selectAxeLevel, selectPickaxeLevel },
  reducers: {},
});
