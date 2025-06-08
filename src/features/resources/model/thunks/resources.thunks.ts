import type { AppThunk } from '@store';
import { resourcesSlice } from '../slice';
import { INSTRUMENT_INFOS, selectInstrumentLevel, type InstrumentState } from '@features/instruments/model';
import type { ResourceName } from '../types';
import { RESOURCE_MINED_BY_INSTRUMENT } from '../constants';

export const mineResourcesWithInstrument =
  (resourceName: ResourceName): AppThunk =>
  (dispatch, getState) => {
    const instrumentState = getState().instruments;
    const instrumentForTypeOfResource: keyof InstrumentState | undefined = RESOURCE_MINED_BY_INSTRUMENT[resourceName];
    if (instrumentForTypeOfResource === undefined) return;
    const instrumentLevel = selectInstrumentLevel(instrumentState, instrumentForTypeOfResource);
    const instrumentLevelEfficiencyList = INSTRUMENT_INFOS[instrumentForTypeOfResource].levelEfficiency;
    const resourcesMinedWithInstrument = instrumentLevelEfficiencyList[instrumentLevel];
    dispatch(resourcesSlice.actions._mineResources({ resourceName, count: resourcesMinedWithInstrument }));
  };
