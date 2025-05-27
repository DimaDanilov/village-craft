import type { ResourcesState } from '@features/resources/model';
import type { ForgeLevel, MarketLevel } from '../types';

export type BuildingCost = Partial<Record<keyof ResourcesState['resources'], number>>;

export type ForgeUpgradeCostRecord = Record<ForgeLevel, BuildingCost>;
export type MarketUpgradeCostRecord = Record<MarketLevel, BuildingCost>;

export const FORGE_UPGRADE_COST: ForgeUpgradeCostRecord = {
  '0': {},
  '1': {
    wood: 15,
    stone: 10,
  },
};

export const MARKET_UPGRADE_COST: MarketUpgradeCostRecord = {
  '0': {},
  '1': {
    wood: 80,
    stone: 50,
  },
};
