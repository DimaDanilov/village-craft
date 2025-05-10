import { isSellAvailable, resourcesSlice, sellWood } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import { COINT_RECEIVED, RESOURCES_IMAGES, WOOD_SELL_AMOUNT } from '@features/resources/model/constants';
import { MarketTableBodyRow } from './MarketTableBodyRow';

export const MarketTableWoodSellRow = () => {
  const dispatch = useAppDispatch();

  const woodCount = useAppSelector(resourcesSlice.selectors.selectWoodCount);
  const isWoodSellAvailable = isSellAvailable({ currentResourcesAmount: woodCount, amountToSell: WOOD_SELL_AMOUNT });

  const onSellWood = useCallback(() => dispatch(sellWood({ woodCount: WOOD_SELL_AMOUNT })), [dispatch, sellWood]);

  return (
    <MarketTableBodyRow
      sellAmount={WOOD_SELL_AMOUNT}
      receiveAmount={COINT_RECEIVED}
      sellItemImageSrc={RESOURCES_IMAGES.wood}
      receiveItemImageSrc={RESOURCES_IMAGES.coins}
      sellBtnDisabled={!isWoodSellAvailable}
      onSell={onSellWood}
    />
  );
};
