import type {
  BuildingName,
  BuildingUpgradeCostRecord,
  BuildingInfo,
  BuildingInfos,
  ForgeUpgradeCostRecord,
  GateToTheFutureUpgradeCostRecord,
  MarketUpgradeCostRecord,
  ForestUpgradeCostRecord,
  MinesUpgradeCostRecord,
} from '../types';
import { LOCATIONS_IMAGES } from '@features/resources/model';

const FOREST_UPGRADE_COST: ForestUpgradeCostRecord = {
  '1': {},
};
const MINES_UPGRADE_COST: MinesUpgradeCostRecord = {
  '1': {},
};
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
  forest: FOREST_UPGRADE_COST,
  mines: MINES_UPGRADE_COST,
  forge: FORGE_UPGRADE_COST,
  market: MARKET_UPGRADE_COST,
  gateToTheFuture: GATE_TO_THE_FUTURE_UPGRADE_COST,
};

export const FOREST_INFO: BuildingInfo = {
  imageSrc: LOCATIONS_IMAGES.forest,
  title: 'buildings.forest.title',
  description: 'buildings.forest.description',
} as const;

export const MINES_INFO: BuildingInfo = {
  imageSrc: LOCATIONS_IMAGES.mines,
  title: 'buildings.mines.title',
  description: 'buildings.mines.description',
} as const;

export const FORGE_INFO: BuildingInfo = {
  imageSrc: LOCATIONS_IMAGES.forge,
  title: 'buildings.forge.title',
  description: 'buildings.forge.description',
} as const;

export const MARKET_INFO: BuildingInfo = {
  imageSrc: LOCATIONS_IMAGES.market,
  title: 'buildings.market.title',
  description: 'buildings.market.description',
} as const;

export const GATE_TO_THE_FUTURE_INFO: BuildingInfo = {
  imageSrc: LOCATIONS_IMAGES.gateToTheFuture,
  title: 'buildings.gateToTheFuture.title',
  description: 'buildings.gateToTheFuture.description',
} as const;

export const BUILDING_INFOS: BuildingInfos = {
  forest: FOREST_INFO,
  mines: MINES_INFO,
  forge: FORGE_INFO,
  market: MARKET_INFO,
  gateToTheFuture: GATE_TO_THE_FUTURE_INFO,
};
