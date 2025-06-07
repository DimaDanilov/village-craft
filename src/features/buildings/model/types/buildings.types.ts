import type { ResourceName } from '@features/resources/model';
import type { BuildingState } from '../slice';

export type BuildingName = keyof BuildingState;

export type BuildingCost = Partial<Record<ResourceName, number>>;

export type ForgeUpgradeCostRecord = Record<ForgeLevel, BuildingCost>;
export type MarketUpgradeCostRecord = Record<MarketLevel, BuildingCost>;
export type GateToTheFutureUpgradeCostRecord = Record<GateToTheFutureLevel, BuildingCost>;

export type BuildingUpgradeCostRecord =
  | ForgeUpgradeCostRecord
  | MarketUpgradeCostRecord
  | GateToTheFutureUpgradeCostRecord;

export type ForgeLevel = '0' | '1';
export type MarketLevel = '0' | '1';
export type GateToTheFutureLevel = '0' | '1';

export type BuildingLevel = ForgeLevel | MarketLevel | GateToTheFutureLevel;

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
  title: string;
  description: string;
}

export interface BuildingInfos {
  forest: BuildingInfo;
  mines: BuildingInfo;
  forge: BuildingInfo;
  market: BuildingInfo;
  gateToTheFuture: BuildingInfo;
}
