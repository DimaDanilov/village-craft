import { Button } from '@shared/Button/Button';
import { useMarketControlledInputs, useMarketIsSellDisabled, useMarketSellResources } from './hooks';
import { DECK_CARD_RESOURCE_PALETTE } from '@features/buildings/ui';
import { RESOURCE_INFOS, resourcesSlice, sellResources } from '@features/resources/model';
import type { ResourceName } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';

type MarketTableBodyRowProps = {
  resourceName: ResourceName;
};

export const MarketTableBodyRow = ({ resourceName }: MarketTableBodyRowProps) => {
  const dispatch = useAppDispatch();
  const maxResourceAmount = useAppSelector((state) =>
    resourcesSlice.selectors.selectResourceCount(state, resourceName),
  );

  const { borderColorClassName } = DECK_CARD_RESOURCE_PALETTE;
  const maxInputLimit = maxResourceAmount || 1;
  const { resourceAmountToSell, setResourceAmountToSell, onResourceAmountChange, onWheelResourceAmountChange } =
    useMarketControlledInputs({
      maxInputLimit,
    });

  const resourceCost = RESOURCE_INFOS[resourceName].cost;
  const totalCoinsReceived = resourceCost * resourceAmountToSell;

  const isSellDisabled = useMarketIsSellDisabled({ maxResourceAmount, resourceAmountToSell });

  const sellAction = useCallback(
    (amountToSell: number) => {
      if (resourceName !== 'coins') {
        dispatch(sellResources({ resourceName, resourcesCount: amountToSell }));
      } else {
        // SET ERROR
      }
    },
    [dispatch, resourceName],
  );

  const onSellResources = useMarketSellResources({
    maxResourceAmount,
    resourceAmountToSell,
    sellAction,
    setResourceAmountToSell,
  });

  return (
    <tr>
      <td>
        <div className="flex flex-row gap-2 items-center justify-between" onWheel={onWheelResourceAmountChange}>
          <div className="flex flex-col gap-1 items-center">
            <img src={RESOURCE_INFOS[resourceName].imageSrc} width="70px" alt="Resource Image" />
            <input
              type="number"
              min={1}
              max={maxInputLimit}
              value={resourceAmountToSell}
              disabled={isSellDisabled}
              onChange={onResourceAmountChange}
              className={`w-24 text-xl text-center ${borderColorClassName} border-2 bg-white disabled:bg-gray-100 disabled:border-gray-200 rounded-md shadow-sm [&::-webkit-inner-spin-button]:opacity-100`}
            />
          </div>
          <div className="w-4 flex justify-center">
            <input
              type="range"
              min={1}
              max={maxInputLimit}
              value={resourceAmountToSell}
              disabled={isSellDisabled}
              onChange={onResourceAmountChange}
              className="w-24 -rotate-90"
            />
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col gap-2 justify-center items-center">
          <span className={`text-lg ${borderColorClassName} bg-white border-2 rounded-xl px-5`}>
            x{RESOURCE_INFOS[resourceName].cost}
          </span>
          <Button disabled={isSellDisabled} onClick={onSellResources}>
            Sell
          </Button>
        </div>
      </td>
      <td>
        <div className="flex flex-col items-center gap-1" onWheel={onWheelResourceAmountChange}>
          <img src={RESOURCE_INFOS.coins.imageSrc} width="70px" alt="Resource Image" />
          <span className="text-xl">{totalCoinsReceived}</span>
        </div>
      </td>
    </tr>
  );
};
