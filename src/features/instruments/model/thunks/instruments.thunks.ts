import { resourcesSlice, selectAllResources } from '@features/resources/model';
import type { AppThunk } from '@store';
import { selectInstrumentLevel } from '../selectors';
import { isInstrumentUpgradeAvailable } from '../tools';
import { instrumentsSlice } from '../slice';
import type { InstrumentName } from '../types';
import { INSTRUMENT_INFOS } from '../constants';
import { useTranslation } from 'react-i18next';

export const useUpgradeInstrumentWithResources = (instrumentName: InstrumentName): AppThunk => {
  const { t } = useTranslation('Instruments');

  return (dispatch, getState) => {
    const resourcesState = getState().resources;
    const instrumentsState = getState().instruments;

    const allResources = selectAllResources(resourcesState);

    const instrumentUpgradeCostList = INSTRUMENT_INFOS[instrumentName].upgradeCost;
    const currentInstrumentLevel = selectInstrumentLevel(instrumentsState, instrumentName);
    const nextInstrumentLevel = (Number(currentInstrumentLevel) + 1).toString();

    if (!isInstrumentUpgradeAvailable(nextInstrumentLevel, instrumentUpgradeCostList, allResources)) {
      const translatedInstrumentName = t(INSTRUMENT_INFOS[instrumentName].title);
      dispatch(
        instrumentsSlice.actions.setInstrumentsError(
          t('errors.cantUpgrade', { instrumentName: translatedInstrumentName }),
        ),
      );
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
};
