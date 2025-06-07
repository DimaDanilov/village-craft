import { resourcesSlice, sellResources } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import { RESOURCES_IMAGES, WOOD_TRADE_MULTIPLIER } from '@features/resources/model/constants';
import { MarketTableBodyRow } from './MarketTableBodyRow';

export const MarketTableStoneSellRow = () => {
  const dispatch = useAppDispatch();

  const stoneCount = useAppSelector((state) => resourcesSlice.selectors.selectResourceCount(state, 'stone'));

  const onSellStone = useCallback(
    (stoneAmountToSell: number) =>
      dispatch(sellResources({ resourceName: 'stone', resourcesCount: stoneAmountToSell })),
    [dispatch],
  );

  return (
    <MarketTableBodyRow
      maxResourceAmount={stoneCount}
      tradeMultiplier={WOOD_TRADE_MULTIPLIER}
      sellItemImageSrc={RESOURCES_IMAGES.stone}
      receiveItemImageSrc={RESOURCES_IMAGES.coins}
      sellAction={onSellStone}
    />
  );
};
