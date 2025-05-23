import { Button } from '@shared/Button/Button';
import { ResourceCard } from '@widgets';
import { useCallback, useState } from 'react';
import type { ChangeEvent } from 'react';

interface MarketTableBodyRowProps {
  sellItemImageSrc: string;
  receiveItemImageSrc: string;
  sellAction: (resourceAmountToSell: number) => void;
  sellBtnDisabled: boolean;
}

export const MarketTableBodyRow = ({
  sellItemImageSrc,
  receiveItemImageSrc,
  sellAction,
  sellBtnDisabled,
}: MarketTableBodyRowProps) => {
  const [resourceAmountToSell, setResourceAmountToSell] = useState<number>(1);

  const onResourceAmountChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setResourceAmountToSell(Number(e.target.value)),
    [],
  );

  const onSellClick = useCallback(() => {
    sellAction(resourceAmountToSell);
  }, [resourceAmountToSell]);

  return (
    <tr>
      <td>
        <input type="number" value={resourceAmountToSell} onChange={onResourceAmountChange} />
        <ResourceCard resourceCount={resourceAmountToSell} imageSrc={sellItemImageSrc} />
      </td>
      <td>
        <Button disabled={sellBtnDisabled} onClick={onSellClick}>
          Sell
        </Button>
      </td>
      <td>
        <ResourceCard resourceCount={resourceAmountToSell} imageSrc={receiveItemImageSrc} />
      </td>
    </tr>
  );
};
