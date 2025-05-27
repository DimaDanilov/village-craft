import {
  buildingsSlice,
  FORGE_UPGRADE_COST,
  isBuildingNextLevelExist,
  isBuildingUpgradeAvailable,
  UpgradeForgeWithResources,
  type BuildingCost,
  type ForgeLevel,
} from '@features/buildings/model';
import { useAppDispatch, useAppSelector } from '@store';
import { DECK_CARD_INFOS } from '@widgets';
import { useCallback } from 'react';
import { ServiceBuilderTableBodyRow } from './ServiceBuilderTableBodyRow';
import { resourcesSlice, type ResourcesInfo } from '@features/resources/model';

interface ServiceBuilderTableForgeRowProps {
  onCloseModal: () => void;
}

export const ServiceBuilderTableForgeRow = ({ onCloseModal }: ServiceBuilderTableForgeRowProps) => {
  const dispatch = useAppDispatch();

  const allResources: ResourcesInfo = useAppSelector(resourcesSlice.selectors.selectAllResources);

  const forgeLevel: ForgeLevel = useAppSelector(buildingsSlice.selectors.selectForgeLevel);
  const forgeNextLevel: string = String(Number(forgeLevel) + 1);

  const isNextLevelExist = isBuildingNextLevelExist(forgeNextLevel, FORGE_UPGRADE_COST);
  const isForgeUpgradeAvailable = isBuildingUpgradeAvailable(forgeNextLevel, FORGE_UPGRADE_COST, allResources);
  const isBuildForgeDisabled = Number(forgeLevel) >= 1 || !isForgeUpgradeAvailable;

  const forgeNextLevelCost: BuildingCost | undefined = isNextLevelExist
    ? FORGE_UPGRADE_COST[forgeNextLevel]
    : undefined;

  const onBuildForge = useCallback(() => {
    dispatch(UpgradeForgeWithResources());
    onCloseModal();
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
