import type { InstrumentsState } from '../slice';

export const selectAxeLevel = (state: InstrumentsState) => state.instruments.axe.level;
export const selectPickaxeLevel = (state: InstrumentsState) => state.instruments.pickaxe.level;
export const selectInstrumentsError = (state: InstrumentsState) => state.error;
