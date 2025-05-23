import { isSellAvailable } from '@features/resources/model';
import { Button } from '@shared/Button/Button';
import { ResourceCard } from '@widgets';
import { useCallback, useMemo, useState } from 'react';
import type { ChangeEvent, WheelEvent } from 'react';

interface MarketTableBodyRowProps {
  maxResourceAmount: number;
  tradeMultiplier: number;
  sellItemImageSrc: string;
  receiveItemImageSrc: string;
  sellAction: (resourceAmountToSell: number) => void;
}

export const MarketTableBodyRow = ({
  maxResourceAmount,
  tradeMultiplier,
  sellItemImageSrc,
  receiveItemImageSrc,
  sellAction,
}: MarketTableBodyRowProps) => {
  const maxInputLimit = maxResourceAmount || 1;
  const [resourceAmountToSell, setResourceAmountToSell] = useState<number>(maxInputLimit);

  const onResourceAmountChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < maxInputLimit) setResourceAmountToSell(Number(e.target.value));
  }, []);

  const onWheelResourceAmountChange = useCallback(
    (e: WheelEvent<HTMLInputElement>) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 1 : -1;
      setResourceAmountToSell((prev) => {
        const newValue = prev + delta;
        return Math.max(1, Math.min(maxInputLimit, newValue));
      });
    },
    [maxInputLimit],
  );

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
        <div className="flex flex-row gap-2 items-center" onWheel={onWheelResourceAmountChange}>
          <div className="flex flex-col gap-1 items-center">
            <img src={sellItemImageSrc} width="80px" alt="Resource Image" />
            <input
              type="number"
              min={1}
              max={maxInputLimit}
              value={resourceAmountToSell}
              disabled={isSellBtnDisabled}
              onChange={onResourceAmountChange}
              className="w-20 text-xl text-center"
            />
          </div>
          <div className="w-4 flex justify-center">
            <input
              type="range"
              min={1}
              max={maxInputLimit}
              value={resourceAmountToSell}
              disabled={isSellBtnDisabled}
              onChange={onResourceAmountChange}
              className="w-20 -rotate-90"
            />
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col gap-2 justify-center items-center">
          <span className="text-lg border-amber-500 bg-white border-2 rounded-3xl px-5">x{tradeMultiplier}</span>
          <Button disabled={isSellBtnDisabled} onClick={onSellClick}>
            Sell
          </Button>
        </div>
      </td>
      <td>
        <div onWheel={onWheelResourceAmountChange}>
          <ResourceCard resourceCount={resourceAmountToSell} imageSrc={receiveItemImageSrc} />
        </div>
      </td>
    </tr>
  );
};
