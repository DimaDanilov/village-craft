import type { AxeLevel, InstrumentName, PickaxeLevel, ShovelLevel } from '@features/instruments/model';
import type { ResourceState } from '../slice';

export type ResourceName = keyof ResourceState;
export type ResourceNameToSell = keyof Omit<ResourceState, 'coins'>;

export interface WoodPile {
  count: number;
}

export interface HardwoodPile {
  count: number;
}

export interface StonePile {
  count: number;
}

export interface IronOreStack {
  count: number;
}

export interface SandPile {
  count: number;
}

export interface CoinsStorage {
  count: number;
}

export type WoodMinedEfficiencyRecord = Record<AxeLevel, number>;
export type HardwoodMinedEfficiencyRecord = Record<AxeLevel, number>;
export type StoneMinedEfficiencyRecord = Record<PickaxeLevel, number>;
export type IronOreMinedEfficiencyRecord = Record<PickaxeLevel, number>;
export type SandMinedEfficiencyRecord = Record<ShovelLevel, number>;

export type InstrumentLevelEfficiencyRecord =
  | WoodMinedEfficiencyRecord
  | HardwoodMinedEfficiencyRecord
  | StoneMinedEfficiencyRecord
  | IronOreMinedEfficiencyRecord
  | SandMinedEfficiencyRecord;

interface ResourceInfo {
  title: `resources.${ResourceName}.title`;
  imageSrc: string;
  instrumentMining?: InstrumentName;
  resourceMinedByInstrumentLevel?: InstrumentLevelEfficiencyRecord;
  cost: number;
}

export type ResourceInfos = Record<ResourceName, ResourceInfo>;
