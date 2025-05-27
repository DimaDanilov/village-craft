import { resourcesSlice, selectAllResources } from '@features/resources/model';
import type { AppThunk } from '@store';
import { selectForgeLevel, selectMarketLevel } from '../selectors';
import { FORGE_UPGRADE_COST, MARKET_UPGRADE_COST } from '../constants';
import { buildingsSlice } from '../slice';
import { isBuildingUpgradeAvailable } from '../tools';

export const UpgradeForgeWithResources = (): AppThunk => (dispatch, getState) => {
  const resourcesState = getState().resources;
  const buildingsState = getState().buildings;

  const allResources = selectAllResources(resourcesState);

  const currentForgeLevel = selectForgeLevel(buildingsState);
  const nextLevel = (Number(currentForgeLevel) + 1).toString();

  if (!isBuildingUpgradeAvailable(nextLevel, FORGE_UPGRADE_COST, allResources)) {
    dispatch(buildingsSlice.actions.setBuildingsError('Can`t upgrade forge'));
    return;
  }
  dispatch(resourcesSlice.actions._destroyResourcesForUpgrade({ resourcesToDestroy: FORGE_UPGRADE_COST[nextLevel] }));
  dispatch(buildingsSlice.actions._upgradeForge());
};

export const UpgradeMarketWithResources = (): AppThunk => (dispatch, getState) => {
  const resourcesState = getState().resources;
  const buildingsState = getState().buildings;

  const allResources = selectAllResources(resourcesState);

  const currentMarketLevel = selectMarketLevel(buildingsState);
  const nextLevel = (Number(currentMarketLevel) + 1).toString();

  if (!isBuildingUpgradeAvailable(nextLevel, MARKET_UPGRADE_COST, allResources)) {
    dispatch(buildingsSlice.actions.setBuildingsError('Can`t upgrade market'));
    return;
  }
  dispatch(resourcesSlice.actions._destroyResourcesForUpgrade({ resourcesToDestroy: MARKET_UPGRADE_COST[nextLevel] }));
  dispatch(buildingsSlice.actions._upgradeMarket());
};
