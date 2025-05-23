import { isSellAvailable } from '@features/resources/model';
import { useCallback, useMemo, useState } from 'react';
import type { ChangeEvent, WheelEvent } from 'react';
import type { DispatchResourcesType, SellActionType } from './types';

interface UseMarketControlledInputsParams {
  maxInputLimit: number;
}

interface UseMarketDisableTradeParams {
  maxResourceAmount: number;
  resourceAmountToSell: number;
}

export interface UseMarketSellResourcesParams {
  maxResourceAmount: number;
  resourceAmountToSell: number;
  sellAction: SellActionType;
  setResourceAmountToSell: DispatchResourcesType;
}

export function useMarketControlledInputs({ maxInputLimit }: UseMarketControlledInputsParams) {
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
  return { resourceAmountToSell, setResourceAmountToSell, onResourceAmountChange, onWheelResourceAmountChange };
}

export function useMarketIsSellDisabled({ maxResourceAmount, resourceAmountToSell }: UseMarketDisableTradeParams) {
  const isSellDisabled = useMemo(
    () =>
      !isSellAvailable({
        currentResourcesAmount: maxResourceAmount,
        amountToSell: resourceAmountToSell,
      }),
    [maxResourceAmount, resourceAmountToSell],
  );

  return isSellDisabled;
}

export function useMarketSellResources({
  maxResourceAmount,
  resourceAmountToSell,
  sellAction,
  setResourceAmountToSell,
}: UseMarketSellResourcesParams) {
  const onSellResources = useCallback(() => {
    const resourceAmountLeftAfterTrade = maxResourceAmount - resourceAmountToSell;
    const newTradeAmountToSet = resourceAmountLeftAfterTrade > 0 ? resourceAmountLeftAfterTrade : 1; // If after trade there is no resources to trade, then set resources to 1 in trade window
    sellAction(resourceAmountToSell);
    setResourceAmountToSell(newTradeAmountToSet);
  }, [resourceAmountToSell]);

  return onSellResources;
}
