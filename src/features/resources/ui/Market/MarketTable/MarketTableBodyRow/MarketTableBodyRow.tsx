import { isSellAvailable } from '@features/resources/model';
import { Button } from '@shared/Button/Button';
import { ResourceCard } from '@widgets';
import { useCallback, useMemo, useState } from 'react';
import type { ChangeEvent } from 'react';

interface MarketTableBodyRowProps {
  maxResourceAmount: number;
  sellItemImageSrc: string;
  receiveItemImageSrc: string;
  sellAction: (resourceAmountToSell: number) => void;
}

export const MarketTableBodyRow = ({
  maxResourceAmount,
  sellItemImageSrc,
  receiveItemImageSrc,
  sellAction,
}: MarketTableBodyRowProps) => {
  const maxInputLimit = maxResourceAmount || 1;
  const [resourceAmountToSell, setResourceAmountToSell] = useState<number>(maxInputLimit);

  const onResourceAmountChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < maxInputLimit) setResourceAmountToSell(Number(e.target.value));
  }, []);

  const isSellBtnDisabled = useMemo(
    () =>
      !isSellAvailable({
        currentResourcesAmount: maxResourceAmount,
        amountToSell: resourceAmountToSell,
      }),
    [maxResourceAmount, resourceAmountToSell],
  );

  const onSellClick = useCallback(() => {
    const resourceAmountLeftAfterTrade = maxResourceAmount - resourceAmountToSell;
    const newTradeAmountToSet = resourceAmountLeftAfterTrade > 0 ? resourceAmountLeftAfterTrade : 1; // If after trade there is no resources to trade, then set resources to 1 in trade window
    sellAction(resourceAmountToSell);
    setResourceAmountToSell(newTradeAmountToSet);
  }, [resourceAmountToSell]);

  return (
    <tr>
      <td>
        <div className="flex flex-row gap-2 items-center">
          <div className="flex flex-col gap-1 items-center">
            <img src={sellItemImageSrc} width="80px" alt="Resource Image" />
            <input
              className="w-20 text-xl text-center"
              type="number"
              min={1}
              max={maxInputLimit}
              value={resourceAmountToSell}
              onChange={onResourceAmountChange}
            />
          </div>
          <div className="w-4 flex justify-center">
            <input
              type="range"
              min={1}
              max={maxInputLimit}
              value={resourceAmountToSell}
              onChange={onResourceAmountChange}
              className="w-20 -rotate-90"
            />
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col gap-3 justify-center items-center">
          <Button disabled={isSellBtnDisabled} onClick={onSellClick}>
            Sell
          </Button>
        </div>
      </td>
      <td>
        <ResourceCard resourceCount={resourceAmountToSell} imageSrc={receiveItemImageSrc} />
      </td>
    </tr>
  );
};
