import type { ResourceName } from '@features/resources/model';
import type { BuildingState } from '../slice';

export type BuildingName = keyof BuildingState;

export type BuildingCost = Partial<Record<ResourceName, number>>;

export type ForestUpgradeCostRecord = Record<ForestLevel, BuildingCost>;
export type MinesUpgradeCostRecord = Record<MinesLevel, BuildingCost>;
export type DeepMinesUpgradeCostRecord = Record<DeepMinesLevel, BuildingCost>;
export type BeachUpgradeCostRecord = Record<BeachLevel, BuildingCost>;
export type ForgeUpgradeCostRecord = Record<ForgeLevel, BuildingCost>;
export type MarketUpgradeCostRecord = Record<MarketLevel, BuildingCost>;
export type GateToTheFutureUpgradeCostRecord = Record<GateToTheFutureLevel, BuildingCost>;

export type BuildingUpgradeCostRecord =
  | ForestUpgradeCostRecord
  | MinesUpgradeCostRecord
  | DeepMinesUpgradeCostRecord
  | BeachUpgradeCostRecord
  | ForgeUpgradeCostRecord
  | MarketUpgradeCostRecord
  | GateToTheFutureUpgradeCostRecord;

export type ForestLevel = '1';
export type DeepMinesLevel = '1';
export type MinesLevel = '1';
export type BeachLevel = '1';
export type ForgeLevel = '0' | '1';
export type MarketLevel = '0' | '1';
export type GateToTheFutureLevel = '0' | '1';

export type BuildingLevel = ForestLevel | MinesLevel | DeepMinesLevel | BeachLevel | ForgeLevel | MarketLevel | GateToTheFutureLevel;

export interface ForestBuilding {
  level: ForestLevel;
}

export interface MinesBuilding {
  level: MinesLevel;
}

export interface DeepMinesBuilding {
  level: DeepMinesLevel;
}

export interface BeachBuilding {
  level: BeachLevel;
}

export interface ForgeBuilding {
  level: ForgeLevel;
}

export interface MarketBuilding {
  level: MarketLevel;
}

export interface GateToTheFutureBuilding {
  level: GateToTheFutureLevel;
}

export type BuildingCategory = 'resource' | 'service';

export interface BuildingInfo {
  imageSrc: string;
  title: `buildings.${BuildingName}.title`;
  description: `buildings.${BuildingName}.description`;
}

export type BuildingInfos = Record<BuildingName, BuildingInfo>;
