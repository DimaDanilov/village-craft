import type {
  BuildingName,
  BuildingUpgradeCostRecord,
  BuildingInfo,
  BuildingInfos,
  ForgeUpgradeCostRecord,
  GateToTheFutureUpgradeCostRecord,
  MarketUpgradeCostRecord,
} from '../types';
import { LOCATIONS_IMAGES } from '@features/resources/model';

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

export const FOREST_INFO: BuildingInfo = {
  imageSrc: LOCATIONS_IMAGES.forest,
  title: 'Forest',
  description: 'Forest full of high trees. Nice place to chop wood with axe.',
} as const;

export const MINES_INFO: BuildingInfo = {
  imageSrc: LOCATIONS_IMAGES.mines,
  title: 'Mines',
  description: 'Mine stone with your pickaxe.',
} as const;

export const FORGE_INFO: BuildingInfo = {
  imageSrc: LOCATIONS_IMAGES.forge,
  title: 'Forge',
  description: 'Upgrade your instruments to collect resources more easily.',
} as const;

export const MARKET_INFO: BuildingInfo = {
  imageSrc: LOCATIONS_IMAGES.market,
  title: 'Market',
  description: 'Sell your resources to earn money.',
} as const;

export const GATE_TO_THE_FUTURE_INFO: BuildingInfo = {
  imageSrc: LOCATIONS_IMAGES.gateToTheFuture,
  title: 'Gate To The Future',
  description: 'Enter the future and reach your final goal in the new world.',
} as const;

export const BUILDING_INFOS: BuildingInfos = {
  forest: FOREST_INFO,
  mines: MINES_INFO,
  forge: FORGE_INFO,
  market: MARKET_INFO,
  gateToTheFuture: GATE_TO_THE_FUTURE_INFO,
};
