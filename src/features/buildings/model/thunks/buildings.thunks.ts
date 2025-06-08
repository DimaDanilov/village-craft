import { resourcesSlice, selectAllResources } from '@features/resources/model';
import type { AppThunk } from '@store';
import { selectBuildingLevel } from '../selectors';
import { buildingsSlice } from '../slice';
import { isBuildingUpgradeAvailable } from '../tools';
import { BUILDING_UPGRADE_COST, type BuildingName } from '..';
import { useTranslation } from 'react-i18next';

export const useUpgradeBuildingWithResources = (buildingName: BuildingName): AppThunk => {
  const { t } = useTranslation('Buildings');

  return (dispatch, getState) => {
    const resourcesState = getState().resources;
    const buildingsState = getState().buildings;

    const allResources = selectAllResources(resourcesState);

    const currentBuildingLevel = selectBuildingLevel(buildingsState, buildingName);
    const nextLevel = (Number(currentBuildingLevel) + 1).toString();
    const buildingUpgradeCostList = BUILDING_UPGRADE_COST[buildingName];
    const isUpgradeAvailable = isBuildingUpgradeAvailable(nextLevel, buildingUpgradeCostList, allResources);

    if (!isUpgradeAvailable) {
      const translatedBuildingName = t(`buildings.${buildingName}.title`);
      dispatch(
        buildingsSlice.actions.setBuildingsError(t('errors.cantUpgrade', { buildingName: translatedBuildingName })),
      );
      return;
    }
    const buildingNextLevelCost = buildingUpgradeCostList[nextLevel];

    dispatch(
      resourcesSlice.actions._destroyResourcesForUpgrade({
        resourcesToDestroy: buildingNextLevelCost,
      }),
    );
    dispatch(buildingsSlice.actions._upgradeBuilding({ buildingName }));
  };
};
