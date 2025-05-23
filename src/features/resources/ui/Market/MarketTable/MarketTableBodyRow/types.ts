import type { Dispatch, SetStateAction } from 'react';

export type SellActionType = (resourceAmountToSell: number) => void;
export type DispatchResourcesType = Dispatch<SetStateAction<number>>;
