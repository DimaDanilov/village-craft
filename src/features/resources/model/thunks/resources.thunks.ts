import type { AppThunk } from '@store';
import { resourcesSlice } from '../slice';
import { selectInstrumentLevel } from '@features/instruments/model';
import type { InstrumentState } from '@features/instruments/model';
import type { InstrumentLevelEfficiencyRecord, ResourceName } from '../types';
import { RESOURCE_INFOS } from '../constants';

export const mineResourcesWithInstrument =
  (resourceName: ResourceName): AppThunk =>
  (dispatch, getState) => {
    const instrumentState = getState().instruments;
    const instrumentForTypeOfResource: keyof InstrumentState | undefined =
      RESOURCE_INFOS[resourceName].instrumentMining;
    if (instrumentForTypeOfResource === undefined) return;

    const resourceMinedByInstrumentLevelRecord: InstrumentLevelEfficiencyRecord | undefined =
      RESOURCE_INFOS[resourceName].resourceMinedByInstrumentLevel;
    if (resourceMinedByInstrumentLevelRecord === undefined) return;

    const instrumentLevel = selectInstrumentLevel(instrumentState, instrumentForTypeOfResource);
    const resourcesMinedWithInstrument = resourceMinedByInstrumentLevelRecord[instrumentLevel];
    dispatch(resourcesSlice.actions._mineResources({ resourceName, count: resourcesMinedWithInstrument }));
  };
