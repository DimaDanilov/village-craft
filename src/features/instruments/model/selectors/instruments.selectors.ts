import type { InstrumentsState } from '../slice';
import type { InstrumentName } from '../types';

export const selectInstrumentLevel = (state: InstrumentsState, instrumentName: InstrumentName) =>
  state.instruments[instrumentName].level;
export const selectInstrumentsError = (state: InstrumentsState) => state.error;
