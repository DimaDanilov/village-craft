import {
  buildingsSlice,
  GATE_TO_THE_FUTURE_UPGRADE_COST,
  isBuildingNextLevelExist,
  isBuildingUpgradeAvailable,
  UpgradeGateToTheFutureWithResources,
  type BuildingCost,
  type GateToTheFutureLevel,
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

  const isNextLevelExist = isBuildingNextLevelExist(gateToTheFutureNextLevel, GATE_TO_THE_FUTURE_UPGRADE_COST);
  const isGateToTheFutureUpgradeAvailable = isBuildingUpgradeAvailable(
    gateToTheFutureNextLevel,
    GATE_TO_THE_FUTURE_UPGRADE_COST,
    allResources,
  );
  const isBuildGateToTheFutureDisabled = Number(gateToTheFutureLevel) >= 1 || !isGateToTheFutureUpgradeAvailable;

  const gateToTheFutureNextLevelCost: BuildingCost | undefined = isNextLevelExist
    ? GATE_TO_THE_FUTURE_UPGRADE_COST[gateToTheFutureNextLevel]
    : undefined;

  const onBuildGateToTheFuture = useCallback(() => {
    dispatch(UpgradeGateToTheFutureWithResources());
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
