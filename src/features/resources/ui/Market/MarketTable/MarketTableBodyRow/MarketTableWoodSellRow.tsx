import { resourcesSlice, sellResources } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import { RESOURCES_IMAGES, STONE_TRADE_MULTIPLIER } from '@features/resources/model/constants';
import { MarketTableBodyRow } from './MarketTableBodyRow';

export const MarketTableWoodSellRow = () => {
  const dispatch = useAppDispatch();

  const woodCount = useAppSelector((state) => resourcesSlice.selectors.selectResourceCount(state, 'wood'));

  const onSellWood = useCallback(
    (woodAmountToSell: number) => dispatch(sellResources({ resourceName: 'wood', resourcesCount: woodAmountToSell })),
    [dispatch],
  );

  return (
    <MarketTableBodyRow
      maxResourceAmount={woodCount}
      tradeMultiplier={STONE_TRADE_MULTIPLIER}
      sellItemImageSrc={RESOURCES_IMAGES.wood}
      receiveItemImageSrc={RESOURCES_IMAGES.coins}
      sellAction={onSellWood}
    />
  );
};
