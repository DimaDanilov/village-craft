import type {
  BuildingName,
  BuildingUpgradeCostRecord,
  ForgeUpgradeCostRecord,
  GateToTheFutureUpgradeCostRecord,
  MarketUpgradeCostRecord,
} from '../types';

const FORGE_UPGRADE_COST: ForgeUpgradeCostRecord = {
  '0': {},
  '1': {
    wood: 15,
    stone: 10,
  },
};

const MARKET_UPGRADE_COST: MarketUpgradeCostRecord = {
  '0': {},
  '1': {
    wood: 80,
    stone: 50,
  },
};

const GATE_TO_THE_FUTURE_UPGRADE_COST: GateToTheFutureUpgradeCostRecord = {
  '0': {},
  '1': {
    wood: 500,
    stone: 300,
    coins: 800,
  },
};

export const BUILDING_UPGRADE_COST: Record<BuildingName, BuildingUpgradeCostRecord> = {
  forge: FORGE_UPGRADE_COST,
  market: MARKET_UPGRADE_COST,
  gateToTheFuture: GATE_TO_THE_FUTURE_UPGRADE_COST,
};
