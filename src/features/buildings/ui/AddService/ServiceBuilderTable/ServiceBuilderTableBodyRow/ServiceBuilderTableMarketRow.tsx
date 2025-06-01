import {
  buildingsSlice,
  isBuildingNextLevelExist,
  isBuildingUpgradeAvailable,
  UpgradeBuildingWithResources,
  type BuildingCost,
  type MarketLevel,
  BUILDING_UPGRADE_COST,
} from '@features/buildings/model';
import { useAppDispatch, useAppSelector } from '@store';
import { DECK_CARD_INFOS } from '@widgets';
import { useCallback } from 'react';
import { ServiceBuilderTableBodyRow } from './ServiceBuilderTableBodyRow';
import { resourcesSlice, type ResourcesInfo } from '@features/resources/model';

export const ServiceBuilderTableMarketRow = () => {
  const dispatch = useAppDispatch();

  const allResources: ResourcesInfo = useAppSelector(resourcesSlice.selectors.selectAllResources);

  const marketLevel: MarketLevel = useAppSelector(buildingsSlice.selectors.selectMarketLevel);
  const marketNextLevel: string = String(Number(marketLevel) + 1);

  const isNextLevelExist = isBuildingNextLevelExist(marketNextLevel, BUILDING_UPGRADE_COST.market);
  const isMarketUpgradeAvailable = isBuildingUpgradeAvailable(
    marketNextLevel,
    BUILDING_UPGRADE_COST.market,
    allResources,
  );
  const isBuildMarketDisabled = Number(marketLevel) >= 1 || !isMarketUpgradeAvailable;

  const marketNextLevelCost: BuildingCost | undefined = isNextLevelExist
    ? BUILDING_UPGRADE_COST.market[marketNextLevel]
    : undefined;

  const onBuildMarket = useCallback(() => {
    dispatch(UpgradeBuildingWithResources('market'));
  }, [dispatch]);

  return (
    <ServiceBuilderTableBodyRow
      buildingTitle={DECK_CARD_INFOS.market.title}
      buildingDescription={DECK_CARD_INFOS.market.description}
      buildingImageSrc={DECK_CARD_INFOS.market.imageSrc}
      onBuild={onBuildMarket}
      isBuildDisabled={isBuildMarketDisabled}
      currentLevel={marketLevel}
      isNextLevelExist={isNextLevelExist}
      buildingNextLevelCost={marketNextLevelCost}
    />
  );
};
