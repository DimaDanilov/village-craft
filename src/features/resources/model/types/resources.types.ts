import type { InstrumentName } from '@features/instruments/model';
import type { ResourceState } from '../slice';

export type ResourceName = keyof ResourceState;
export type ResourceNameToSell = keyof Omit<ResourceState, 'coins'>;

export interface WoodPile {
  count: number;
}

export interface StonePile {
  count: number;
}

export interface CoinsStorage {
  count: number;
}

interface ResourceInfo {
  title: `resources.${ResourceName}.title`;
  imageSrc: string;
  instrumentMining?: InstrumentName;
}

export type ResourceInfos = Record<ResourceName, ResourceInfo>;
