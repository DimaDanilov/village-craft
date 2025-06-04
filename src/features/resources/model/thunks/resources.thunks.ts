import type { AppThunk } from '@store';
import { resourcesSlice } from '../slice';
import { INSTRUMENT_LEVEL_EFFICIENCY, selectInstrumentLevel, type InstrumentInfo } from '@features/instruments/model';
import type { ResourceName } from '../types';
import { RESOURCE_MINED_BY_INSTRUMENT } from '../constants';

export const mineResourcesWithInstrument =
  (resourceName: ResourceName): AppThunk =>
  (dispatch, getState) => {
    const instrumentState = getState().instruments;
    const instrumentForTypeOfResource: keyof InstrumentInfo | undefined = RESOURCE_MINED_BY_INSTRUMENT[resourceName];
    if (instrumentForTypeOfResource === undefined) return;
    const instrumentLevel = selectInstrumentLevel(instrumentState, instrumentForTypeOfResource);
    const instrumentLevelEfficiencyList = INSTRUMENT_LEVEL_EFFICIENCY[instrumentForTypeOfResource];
    const resourcesMinedWithInstrument = instrumentLevelEfficiencyList[instrumentLevel];
    dispatch(resourcesSlice.actions._mineResources({ resourceName, count: resourcesMinedWithInstrument }));
  };
