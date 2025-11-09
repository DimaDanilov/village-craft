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
  BeachUpgradeCostRecord,
  DeepMinesUpgradeCostRecord,
  ForestDarkUpgradeCostRecord,
} from '../types';

import ForestImageSrc from '@assets/locations/Forest.png';
import ForestDarkImageSrc from '@assets/locations/Forest_dark.png';
import MinesImageSrc from '@assets/locations/Mines.png';
import DeepMinesImageSrc from '@assets/locations/Deep_Mines.png';
import BeachImageSrc from '@assets/locations/Beach.png';
import MarketImageSrc from '@assets/locations/Market.png';
import ForgeImageSrc from '@assets/locations/Forge.png';
import GateToTheFutureImageSrc from '@assets/locations/Gate_to_the_future.png';

const FOREST_UPGRADE_COST: ForestUpgradeCostRecord = {
  '1': {},
};

const FOREST_DARK_UPGRADE_COST: ForestDarkUpgradeCostRecord = {
  '1': {},
};

const MINES_UPGRADE_COST: MinesUpgradeCostRecord = {
  '1': {},
};

const DEEP_MINES_UPGRADE_COST: DeepMinesUpgradeCostRecord = {
  '1': {},
};

const BEACH_UPGRADE_COST: BeachUpgradeCostRecord = {
  '1': {},
};

const FORGE_UPGRADE_COST: ForgeUpgradeCostRecord = {
  '0': {},
  '1': {
    wood: 5,
    stone: 3,
  },
};

const MARKET_UPGRADE_COST: MarketUpgradeCostRecord = {
  '0': {},
  '1': {
    wood: 50,
    hardwood: 15,
    stone: 20,
    sand: 15,
  },
};

const GATE_TO_THE_FUTURE_UPGRADE_COST: GateToTheFutureUpgradeCostRecord = {
  '0': {},
  '1': {
    wood: 250,
    hardwood: 200,
    stone: 200,
    ironOre: 140,
    sand: 500,
    coins: 800,
  },
};

export const BUILDING_UPGRADE_COST: Record<BuildingName, BuildingUpgradeCostRecord> = {
  forest: FOREST_UPGRADE_COST,
  forestDark: FOREST_DARK_UPGRADE_COST,
  mines: MINES_UPGRADE_COST,
  deepMines: DEEP_MINES_UPGRADE_COST,
  beach: BEACH_UPGRADE_COST,
  forge: FORGE_UPGRADE_COST,
  market: MARKET_UPGRADE_COST,
  gateToTheFuture: GATE_TO_THE_FUTURE_UPGRADE_COST,
};

export const FOREST_INFO: BuildingInfo = {
  imageSrc: ForestImageSrc,
  title: 'buildings.forest.title',
  description: 'buildings.forest.description',
} as const;

export const FOREST_DARK_INFO: BuildingInfo = {
  imageSrc: ForestDarkImageSrc,
  title: 'buildings.forestDark.title',
  description: 'buildings.forestDark.description',
} as const;

export const MINES_INFO: BuildingInfo = {
  imageSrc: MinesImageSrc,
  title: 'buildings.mines.title',
  description: 'buildings.mines.description',
} as const;

export const DEEP_MINES_INFO: BuildingInfo = {
  imageSrc: DeepMinesImageSrc,
  title: 'buildings.deepMines.title',
  description: 'buildings.deepMines.description',
} as const;

export const BEACH_INFO: BuildingInfo = {
  imageSrc: BeachImageSrc,
  title: 'buildings.beach.title',
  description: 'buildings.beach.description',
} as const;

export const FORGE_INFO: BuildingInfo = {
  imageSrc: ForgeImageSrc,
  title: 'buildings.forge.title',
  description: 'buildings.forge.description',
} as const;

export const MARKET_INFO: BuildingInfo = {
  imageSrc: MarketImageSrc,
  title: 'buildings.market.title',
  description: 'buildings.market.description',
} as const;

export const GATE_TO_THE_FUTURE_INFO: BuildingInfo = {
  imageSrc: GateToTheFutureImageSrc,
  title: 'buildings.gateToTheFuture.title',
  description: 'buildings.gateToTheFuture.description',
} as const;

export const BUILDING_INFOS: BuildingInfos = {
  forest: FOREST_INFO,
  forestDark: FOREST_DARK_INFO,
  mines: MINES_INFO,
  deepMines: DEEP_MINES_INFO,
  beach: BEACH_INFO,
  forge: FORGE_INFO,
  market: MARKET_INFO,
  gateToTheFuture: GATE_TO_THE_FUTURE_INFO,
};
