import {
  buildingsSlice,
  isBuildingNextLevelExist,
  isBuildingUpgradeAvailable,
  UpgradeBuildingWithResources,
  type BuildingCost,
  type GateToTheFutureLevel,
  BUILDING_UPGRADE_COST,
} from '@features/buildings/model';
import { useAppDispatch, useAppSelector } from '@store';
import { DECK_CARD_INFOS } from '@widgets';
import { useCallback } from 'react';
import { ServiceBuilderTableBodyRow } from './ServiceBuilderTableBodyRow';
import { resourcesSlice, type ResourcesInfo } from '@features/resources/model';

export const ServiceBuilderTableGateToTheFutureRow = () => {
  const dispatch = useAppDispatch();

  const allResources: ResourcesInfo = useAppSelector(resourcesSlice.selectors.selectAllResources);

  const gateToTheFutureLevel: GateToTheFutureLevel = useAppSelector(
    buildingsSlice.selectors.selectGateToTheFutureLevel,
  );
  const gateToTheFutureNextLevel: string = String(Number(gateToTheFutureLevel) + 1);

  const isNextLevelExist = isBuildingNextLevelExist(gateToTheFutureNextLevel, BUILDING_UPGRADE_COST.gateToTheFuture);
  const isGateToTheFutureUpgradeAvailable = isBuildingUpgradeAvailable(
    gateToTheFutureNextLevel,
    BUILDING_UPGRADE_COST.gateToTheFuture,
    allResources,
  );
  const isBuildGateToTheFutureDisabled = Number(gateToTheFutureLevel) >= 1 || !isGateToTheFutureUpgradeAvailable;

  const gateToTheFutureNextLevelCost: BuildingCost | undefined = isNextLevelExist
    ? BUILDING_UPGRADE_COST.gateToTheFuture[gateToTheFutureNextLevel]
    : undefined;

  const onBuildGateToTheFuture = useCallback(() => {
    dispatch(UpgradeBuildingWithResources('gateToTheFuture'));
  }, [dispatch]);

  return (
    <ServiceBuilderTableBodyRow
      buildingTitle={DECK_CARD_INFOS.gateToTheFuture.title}
      buildingDescription={DECK_CARD_INFOS.gateToTheFuture.description}
      buildingImageSrc={DECK_CARD_INFOS.gateToTheFuture.imageSrc}
      onBuild={onBuildGateToTheFuture}
      isBuildDisabled={isBuildGateToTheFutureDisabled}
      currentLevel={gateToTheFutureLevel}
      isNextLevelExist={isNextLevelExist}
      buildingNextLevelCost={gateToTheFutureNextLevelCost}
    />
  );
};
