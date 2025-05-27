import { buildingsSlice } from '@features/buildings/model';
import { useAppDispatch, useAppSelector } from '@store';
import { DECK_CARD_INFOS } from '@widgets';
import { useCallback } from 'react';
import { ServiceBuilderTableBodyRow } from './ServiceBuilderTableBodyRow';

interface ServiceBuilderTableMarketRowProps {
  onCloseModal: () => void;
}

export const ServiceBuilderTableMarketRow = ({ onCloseModal }: ServiceBuilderTableMarketRowProps) => {
  const dispatch = useAppDispatch();

  const onBuildMarket = useCallback(() => {
    dispatch(buildingsSlice.actions.buildMarket());
    onCloseModal();
  }, [dispatch]);

  const marketLevel = useAppSelector(buildingsSlice.selectors.selectMarketLevel);
  const isBuildMarketDisabled = Number(marketLevel) >= 1;

  return (
    <ServiceBuilderTableBodyRow
      buildingTitle={DECK_CARD_INFOS.market.title}
      buildingDescription={DECK_CARD_INFOS.market.description}
      buildingImageSrc={DECK_CARD_INFOS.market.imageSrc}
      onBuild={onBuildMarket}
      isBuildDisabled={isBuildMarketDisabled}
    />
  );
};
