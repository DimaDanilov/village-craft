import type { InstrumentsState } from '../slice';

export const selectAxeLevel = (state: InstrumentsState) => state.axe.level;
export const selectPickaxeLevel = (state: InstrumentsState) => state.pickaxe.level;
