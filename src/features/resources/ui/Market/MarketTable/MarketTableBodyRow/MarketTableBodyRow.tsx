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
  const [resourceAmountToSell, setResourceAmountToSell] = useState<number>(1);

  const onResourceAmountChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setResourceAmountToSell(Number(e.target.value)),
    [],
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
    sellAction(resourceAmountToSell);
  }, [resourceAmountToSell]);

  return (
    <tr>
      <td>
        <input
          type="number"
          min={1}
          max={maxResourceAmount || 1}
          value={resourceAmountToSell}
          onChange={onResourceAmountChange}
        />
        <ResourceCard resourceCount={resourceAmountToSell} imageSrc={sellItemImageSrc} />
      </td>
      <td>
        <Button disabled={isSellBtnDisabled} onClick={onSellClick}>
          Sell
        </Button>
      </td>
      <td>
        <ResourceCard resourceCount={resourceAmountToSell} imageSrc={receiveItemImageSrc} />
      </td>
    </tr>
  );
};
