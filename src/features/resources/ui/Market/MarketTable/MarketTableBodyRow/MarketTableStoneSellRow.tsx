import { isSellAvailable, resourcesSlice, sellStone } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import { RESOURCES_IMAGES, STONE_SELL_AMOUNT } from '@features/resources/model/constants';
import { MarketTableBodyRow } from './MarketTableBodyRow';

export const MarketTableStoneSellRow = () => {
  const dispatch = useAppDispatch();

  const stoneCount = useAppSelector(resourcesSlice.selectors.selectStoneCount);
  const isStoneSellAvailable = isSellAvailable({ currentResourcesAmount: stoneCount, amountToSell: STONE_SELL_AMOUNT });

  const onSellStone = useCallback((stoneAmountToSell: number) => dispatch(sellStone({ stoneCount: stoneAmountToSell })), [dispatch, sellStone]);

  return (
    <MarketTableBodyRow
      sellItemImageSrc={RESOURCES_IMAGES.stone}
      receiveItemImageSrc={RESOURCES_IMAGES.coins}
      sellBtnDisabled={!isStoneSellAvailable}
      sellAction={onSellStone}
    />
  );
};
