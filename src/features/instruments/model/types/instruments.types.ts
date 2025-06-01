import type { ResourceName } from '@features/resources/model';
import type { InstrumentInfo } from '../slice';

export type InstrumentName = keyof InstrumentInfo;

export type AxeLevelEfficiencyRecord = Record<AxeLevel, number>;
export type PickaxeLevelEfficiencyRecord = Record<PickaxeLevel, number>;

export type InstrumentCost = Partial<Record<ResourceName, number>>;

export type AxeUpgradeCostRecord = Record<AxeLevel, InstrumentCost>;
export type PickaxeUpgradeCostRecord = Record<PickaxeLevel, InstrumentCost>;

export type AxeLevel = '1' | '2' | '3' | '4' | '5';
export type PickaxeLevel = '1' | '2' | '3' | '4' | '5';

export interface AxeInstrument {
  level: AxeLevel;
}

export interface PickaxeInstrument {
  level: PickaxeLevel;
}
