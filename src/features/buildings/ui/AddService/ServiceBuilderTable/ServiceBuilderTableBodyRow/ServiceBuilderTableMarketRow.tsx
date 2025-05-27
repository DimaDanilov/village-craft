import {
  buildingsSlice,
  isBuildingNextLevelExist,
  isBuildingUpgradeAvailable,
  MARKET_UPGRADE_COST,
  UpgradeMarketWithResources,
  type BuildingCost,
  type MarketLevel,
} from '@features/buildings/model';
import { useAppDispatch, useAppSelector } from '@store';
import { DECK_CARD_INFOS } from '@widgets';
import { useCallback } from 'react';
import { ServiceBuilderTableBodyRow } from './ServiceBuilderTableBodyRow';
import { resourcesSlice, type ResourcesInfo } from '@features/resources/model';

interface ServiceBuilderTableMarketRowProps {
  onCloseModal: () => void;
}

export const ServiceBuilderTableMarketRow = ({ onCloseModal }: ServiceBuilderTableMarketRowProps) => {
  const dispatch = useAppDispatch();

  const allResources: ResourcesInfo = useAppSelector(resourcesSlice.selectors.selectAllResources);

  const marketLevel: MarketLevel = useAppSelector(buildingsSlice.selectors.selectMarketLevel);
  const marketNextLevel: string = String(Number(marketLevel) + 1);

  const isNextLevelExist = isBuildingNextLevelExist(marketNextLevel, MARKET_UPGRADE_COST);
  const isMarketUpgradeAvailable = isBuildingUpgradeAvailable(marketNextLevel, MARKET_UPGRADE_COST, allResources);
  const isBuildMarketDisabled = Number(marketLevel) >= 1 || !isMarketUpgradeAvailable;

  const marketNextLevelCost: BuildingCost | undefined = isNextLevelExist
    ? MARKET_UPGRADE_COST[marketNextLevel]
    : undefined;

  const onBuildMarket = useCallback(() => {
    dispatch(UpgradeMarketWithResources());
    onCloseModal();
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
