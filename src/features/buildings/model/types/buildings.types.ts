export type ForgeLevel = '0' | '1';
export type MarketLevel = '0' | '1';

export type BuildingLevel = ForgeLevel | MarketLevel;

export interface ForgeBuilding {
  level: ForgeLevel;
}

export interface MarketBuilding {
  level: MarketLevel;
}
