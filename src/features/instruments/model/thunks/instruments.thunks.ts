import { resourcesSlice, selectAllResources } from '@features/resources/model';
import type { AppThunk } from '@store';
import { selectAxeLevel, selectPickaxeLevel } from '../selectors';
import { AXE_UPGRADE_COST, PICKAXE_UPGRADE_COST } from '../constants';
import { isInstrumentUpgradeAvailable } from '../tools';
import { instrumentsSlice } from '../slice';

export const UpgradeAxeWithResources = (): AppThunk => (dispatch, getState) => {
  const resourceState = getState().resources;
  const instrumentState = getState().instruments;

  const allResources = selectAllResources(resourceState);

  const currentAxeLevel = selectAxeLevel(instrumentState);
  const nextLevel = (Number(currentAxeLevel) + 1).toString();

  if (!isInstrumentUpgradeAvailable(nextLevel, AXE_UPGRADE_COST, allResources)) {
    instrumentsSlice.actions.setInstrumentsError('Can`t upgrade axe');
    return;
  }
  dispatch(resourcesSlice.actions._destroyResourcesForUpgrade({ resourcesToDestroy: AXE_UPGRADE_COST[nextLevel] }));
  dispatch(instrumentsSlice.actions._upgradeAxe());
};

export const UpgradePickaxeWithResources = (): AppThunk => (dispatch, getState) => {
  const resourceState = getState().resources;
  const instrumentState = getState().instruments;

  const allResources = selectAllResources(resourceState);

  const currentPickaxeLevel = selectPickaxeLevel(instrumentState);
  const nextLevel = (Number(currentPickaxeLevel) + 1).toString();

  if (!isInstrumentUpgradeAvailable(nextLevel, PICKAXE_UPGRADE_COST, allResources)) {
    instrumentsSlice.actions.setInstrumentsError('Can`t upgrade pickaxe');
    return;
  }
  dispatch(resourcesSlice.actions._destroyResourcesForUpgrade({ resourcesToDestroy: PICKAXE_UPGRADE_COST[nextLevel] }));
  dispatch(instrumentsSlice.actions._upgradePickaxe());
};
