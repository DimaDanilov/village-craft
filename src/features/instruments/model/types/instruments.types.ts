import type { ResourceName } from '@features/resources/model';
import type { InstrumentState } from '../slice';

export type InstrumentName = keyof InstrumentState;

export type AxeLevelEfficiencyRecord = Record<AxeLevel, number>;
export type PickaxeLevelEfficiencyRecord = Record<PickaxeLevel, number>;

export type InstrumentLevelEfficiencyRecord = AxeLevelEfficiencyRecord | PickaxeLevelEfficiencyRecord;

export type InstrumentCost = Partial<Record<ResourceName, number>>;

export type AxeUpgradeCostRecord = Record<AxeLevel, InstrumentCost>;
export type PickaxeUpgradeCostRecord = Record<PickaxeLevel, InstrumentCost>;

export type InstrumentUpgradeCostRecord = AxeUpgradeCostRecord | PickaxeUpgradeCostRecord;

export type AxeLevel = '1' | '2' | '3' | '4' | '5';
export type PickaxeLevel = '1' | '2' | '3' | '4' | '5';

export interface AxeInstrument {
  level: AxeLevel;
}

export interface PickaxeInstrument {
  level: PickaxeLevel;
}

export interface InstrumentInfo {
  title: `instruments.${InstrumentName}.title`;
  imageSrc: string;
  resourceMined: ResourceName;
  upgradeCost: InstrumentUpgradeCostRecord;
  levelEfficiency: InstrumentLevelEfficiencyRecord;
}

export type InstrumentInfos = Record<InstrumentName, InstrumentInfo>;
