import { createSlice } from '@reduxjs/toolkit';
import type { AxeInstrument, PickaxeInstrument } from '../types';
import { selectAxeLevel, selectPickaxeLevel } from '../selectors';

export interface InstrumentsState {
  axe: AxeInstrument;
  pickaxe: PickaxeInstrument;
}

const initialState: InstrumentsState = {
  axe: {
    level: 1,
  },
  pickaxe: {
    level: 1,
  },
};

export const instrumentsSlice = createSlice({
  name: 'instruments',
  initialState,
  selectors: { selectAxeLevel, selectPickaxeLevel },
  reducers: {},
});
