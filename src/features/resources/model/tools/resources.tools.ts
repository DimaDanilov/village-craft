interface IsSellAvailableParams {
  currentResourcesAmount: number;
  amountToSell: number;
}

export function isSellAvailable({ currentResourcesAmount, amountToSell }: IsSellAvailableParams): boolean {
  return currentResourcesAmount >= amountToSell;
}
