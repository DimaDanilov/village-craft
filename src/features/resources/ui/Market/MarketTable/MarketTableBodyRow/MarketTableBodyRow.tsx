import { Button } from '@shared/Button/Button';
import { ResourceCard } from '@widgets';
import {
  useMarketControlledInputs,
  useMarketIsSellDisabled,
  useMarketSellResources,
  type UseMarketSellResourcesParams,
} from './hooks';

type MarketTableBodyRowProps = Pick<UseMarketSellResourcesParams, 'maxResourceAmount' | 'sellAction'> & {
  tradeMultiplier: number;
  sellItemImageSrc: string;
  receiveItemImageSrc: string;
};

export const MarketTableBodyRow = ({
  maxResourceAmount,
  tradeMultiplier,
  sellItemImageSrc,
  receiveItemImageSrc,
  sellAction,
}: MarketTableBodyRowProps) => {
  const maxInputLimit = maxResourceAmount || 1;
  const { resourceAmountToSell, setResourceAmountToSell, onResourceAmountChange, onWheelResourceAmountChange } =
    useMarketControlledInputs({
      maxInputLimit,
    });

  const isSellDisabled = useMarketIsSellDisabled({ maxResourceAmount, resourceAmountToSell });

  const onSellResources = useMarketSellResources({
    maxResourceAmount,
    resourceAmountToSell,
    sellAction,
    setResourceAmountToSell,
  });

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
              disabled={isSellDisabled}
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
              disabled={isSellDisabled}
              onChange={onResourceAmountChange}
              className="w-20 -rotate-90"
            />
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col gap-2 justify-center items-center">
          <span className="text-lg border-amber-500 bg-white border-2 rounded-xl px-5">x{tradeMultiplier}</span>
          <Button disabled={isSellDisabled} onClick={onSellResources}>
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
