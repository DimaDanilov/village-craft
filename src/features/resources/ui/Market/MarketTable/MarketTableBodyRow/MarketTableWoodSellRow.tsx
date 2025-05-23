import { isSellAvailable, resourcesSlice, sellWood } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import { RESOURCES_IMAGES, WOOD_SELL_AMOUNT } from '@features/resources/model/constants';
import { MarketTableBodyRow } from './MarketTableBodyRow';

export const MarketTableWoodSellRow = () => {
  const dispatch = useAppDispatch();

  const woodCount = useAppSelector(resourcesSlice.selectors.selectWoodCount);
  const isWoodSellAvailable = isSellAvailable({ currentResourcesAmount: woodCount, amountToSell: WOOD_SELL_AMOUNT });

  const onSellWood = useCallback((woodAmountToSell: number) => dispatch(sellWood({ woodCount: woodAmountToSell })), [dispatch, sellWood]);

  return (
    <MarketTableBodyRow
      sellItemImageSrc={RESOURCES_IMAGES.wood}
      receiveItemImageSrc={RESOURCES_IMAGES.coins}
      sellBtnDisabled={!isWoodSellAvailable}
      sellAction={onSellWood}
    />
  );
};
