import {
  buildingsSlice,
  isBuildingNextLevelExist,
  isBuildingUpgradeAvailable,
  UpgradeBuildingWithResources,
  type BuildingCost,
  type ForgeLevel,
  BUILDING_UPGRADE_COST,
} from '@features/buildings/model';
import { useAppDispatch, useAppSelector } from '@store';
import { DECK_CARD_INFOS } from '@widgets';
import { useCallback } from 'react';
import { ServiceBuilderTableBodyRow } from './ServiceBuilderTableBodyRow';
import { resourcesSlice } from '@features/resources/model';
import type { ResourcesInfo } from '@features/resources/model';

export const ServiceBuilderTableForgeRow = () => {
  const dispatch = useAppDispatch();

  const allResources: ResourcesInfo = useAppSelector(resourcesSlice.selectors.selectAllResources);

  const forgeLevel: ForgeLevel = useAppSelector(buildingsSlice.selectors.selectForgeLevel);
  const forgeNextLevel: string = String(Number(forgeLevel) + 1);

  const isNextLevelExist = isBuildingNextLevelExist(forgeNextLevel, BUILDING_UPGRADE_COST.forge);
  const isForgeUpgradeAvailable = isBuildingUpgradeAvailable(forgeNextLevel, BUILDING_UPGRADE_COST.forge, allResources);
  const isBuildForgeDisabled = Number(forgeLevel) >= 1 || !isForgeUpgradeAvailable;

  const forgeNextLevelCost: BuildingCost | undefined = isNextLevelExist
    ? BUILDING_UPGRADE_COST.forge[forgeNextLevel]
    : undefined;

  const onBuildForge = useCallback(() => {
    dispatch(UpgradeBuildingWithResources('forge'));
  }, [dispatch]);

  return (
    <ServiceBuilderTableBodyRow
      buildingTitle={DECK_CARD_INFOS.forge.title}
      buildingDescription={DECK_CARD_INFOS.forge.description}
      buildingImageSrc={DECK_CARD_INFOS.forge.imageSrc}
      onBuild={onBuildForge}
      isBuildDisabled={isBuildForgeDisabled}
      currentLevel={forgeLevel}
      isNextLevelExist={isNextLevelExist}
      buildingNextLevelCost={forgeNextLevelCost}
    />
  );
};
