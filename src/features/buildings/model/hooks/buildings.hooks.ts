import { useAppSelector } from '@store';
import { BUILDING_UPGRADE_COST } from '../constants';
import { isBuildingNextLevelExist, isBuildingUpgradeAvailable } from '../tools';
import type { BuildingCost, BuildingName } from '../types';
import { buildingsSlice } from '../slice';
import { resourcesSlice, type ResourcesInfo } from '@features/resources/model';

export function useBuildingUpgradePrice(buildingName: BuildingName) {
  const buildingCurrentLevel = useAppSelector((state) =>
    buildingsSlice.selectors.selectBuildingLevel(state, buildingName),
  );
  const buildingNextLevel: string = String(Number(buildingCurrentLevel) + 1);

  const allResources: ResourcesInfo = useAppSelector(resourcesSlice.selectors.selectAllResources);

  const buildingUpgradeCostList = BUILDING_UPGRADE_COST[buildingName];

  const isNextLevelExist = isBuildingNextLevelExist(buildingNextLevel, buildingUpgradeCostList);
  const isUpgradeAvailable = isBuildingUpgradeAvailable(
    buildingNextLevel,
    BUILDING_UPGRADE_COST[buildingName],
    allResources,
  );

  const buildingNextLevelCost: BuildingCost | undefined = isNextLevelExist
    ? BUILDING_UPGRADE_COST[buildingName][buildingNextLevel]
    : undefined;

  return { buildingCurrentLevel, buildingNextLevel, buildingNextLevelCost, isNextLevelExist, isUpgradeAvailable };
}
