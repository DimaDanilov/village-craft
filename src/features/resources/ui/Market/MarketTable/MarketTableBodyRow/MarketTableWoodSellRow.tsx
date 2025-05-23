import { resourcesSlice, sellWood } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import { RESOURCES_IMAGES, STONE_TRADE_MULTIPLIER } from '@features/resources/model/constants';
import { MarketTableBodyRow } from './MarketTableBodyRow';

export const MarketTableWoodSellRow = () => {
  const dispatch = useAppDispatch();

  const woodCount = useAppSelector(resourcesSlice.selectors.selectWoodCount);

  const onSellWood = useCallback(
    (woodAmountToSell: number) => dispatch(sellWood({ woodCount: woodAmountToSell })),
    [dispatch, sellWood],
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
