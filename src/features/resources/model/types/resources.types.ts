import type { ResourcesInfo } from '../slice';

export type ResourceName = keyof ResourcesInfo;
export type ResourceNameToSell = keyof Omit<ResourcesInfo, 'coins'>;

export interface WoodPile {
  count: number;
}

export interface StonePile {
  count: number;
}

export interface CoinsStorage {
  count: number;
}
