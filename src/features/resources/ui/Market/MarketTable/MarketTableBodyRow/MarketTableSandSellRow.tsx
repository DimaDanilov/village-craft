import { resourcesSlice, sellResources } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import { RESOURCE_INFOS, SAND_TRADE_MULTIPLIER } from '@features/resources/model/constants';
import { MarketTableBodyRow } from './MarketTableBodyRow';

export const MarketTableSandSellRow = () => {
  const dispatch = useAppDispatch();

  const sandCount = useAppSelector((state) => resourcesSlice.selectors.selectResourceCount(state, 'sand'));

  const onSellSand = useCallback(
    (sandAmountToSell: number) => dispatch(sellResources({ resourceName: 'sand', resourcesCount: sandAmountToSell })),
    [dispatch],
  );

  return (
    <MarketTableBodyRow
      maxResourceAmount={sandCount}
      tradeMultiplier={SAND_TRADE_MULTIPLIER}
      sellItemImageSrc={RESOURCE_INFOS.sand.imageSrc}
      receiveItemImageSrc={RESOURCE_INFOS.coins.imageSrc}
      sellAction={onSellSand}
    />
  );
};
