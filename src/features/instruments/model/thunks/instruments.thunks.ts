import { resourcesSlice, selectAllResources } from '@features/resources/model';
import type { AppThunk } from '@store';
import { selectInstrumentLevel } from '../selectors';
import { INSTRUMENT_UPGRADE_COST } from '../constants';
import { isInstrumentUpgradeAvailable } from '../tools';
import { instrumentsSlice } from '../slice';
import type { InstrumentName } from '../types';

export const UpgradeInstrumentWithResources =
  (instrumentName: InstrumentName): AppThunk =>
  (dispatch, getState) => {
    const resourcesState = getState().resources;
    const instrumentsState = getState().instruments;

    const allResources = selectAllResources(resourcesState);

    const instrumentUpgradeCostList = INSTRUMENT_UPGRADE_COST[instrumentName];
    const currentInstrumentLevel = selectInstrumentLevel(instrumentsState, instrumentName);
    const nextInstrumentLevel = (Number(currentInstrumentLevel) + 1).toString();

    if (!isInstrumentUpgradeAvailable(nextInstrumentLevel, instrumentUpgradeCostList, allResources)) {
      dispatch(instrumentsSlice.actions.setInstrumentsError(`Can't upgrade ${instrumentName}`));
      return;
    }
    const instrumentNextLevelCost = instrumentUpgradeCostList[nextInstrumentLevel];

    dispatch(
      resourcesSlice.actions._destroyResourcesForUpgrade({
        resourcesToDestroy: instrumentNextLevelCost,
      }),
    );
    dispatch(instrumentsSlice.actions._upgradeInstrument({ instrumentName }));
  };
