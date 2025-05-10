import { isSellAvailable, resourcesSlice, sellWood } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import WoodImageSrc from '@assets/resources/Wood.png';
import CoinsImageSrc from '@assets/resources/Coins.png';
import { COINT_RECEIVED, WOOD_SELL_AMOUNT } from '@features/resources/model/constants';
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
      sellItemImageSrc={WoodImageSrc}
      receiveItemImageSrc={CoinsImageSrc}
      sellBtnDisabled={!isWoodSellAvailable}
      onSell={onSellWood}
    />
  );
};
