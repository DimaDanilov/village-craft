import AxeImageSrc from '@assets/instruments/Axe.png';
import PickaxeImageSrc from '@assets/instruments/Pickaxe.png';
import ShovelImageSrc from '@assets/instruments/Shovel.png';
import type {
  AxeLevelEfficiencyRecord,
  AxeUpgradeCostRecord,
  InstrumentInfo,
  InstrumentInfos,
  PickaxeLevelEfficiencyRecord,
  PickaxeUpgradeCostRecord,
  ShovelLevelEfficiencyRecord,
  ShovelUpgradeCostRecord,
} from '../types';

const AXE_LEVEL_EFFICIENCY: AxeLevelEfficiencyRecord = {
  '1': 1,
  '2': 5,
  '3': 10,
  '4': 16,
  '5': 40,
};

const PICKAXE_LEVEL_EFFICIENCY: PickaxeLevelEfficiencyRecord = {
  '1': 1,
  '2': 3,
  '3': 8,
  '4': 14,
  '5': 30,
};

const SHOVEL_LEVEL_EFFICIENCY: ShovelLevelEfficiencyRecord = {
  '1': 1,
  '2': 12,
  '3': 18,
  '4': 30,
  '5': 90,
};

const AXE_UPGRADE_COST: AxeUpgradeCostRecord = {
  '1': {},
  '2': {
    wood: 3,
  },
  '3': {
    wood: 20,
    stone: 15,
  },
  '4': {
    wood: 80,
    stone: 40,
    coins: 30,
  },
  '5': {
    wood: 110,
    stone: 90,
    coins: 90,
  },
};

const PICKAXE_UPGRADE_COST: PickaxeUpgradeCostRecord = {
  '1': {},
  '2': {
    wood: 2,
    stone: 4,
  },
  '3': {
    wood: 40,
    stone: 15,
  },
  '4': {
    wood: 100,
    stone: 45,
    coins: 45,
  },
  '5': {
    wood: 130,
    stone: 100,
    coins: 100,
  },
};

const SHOVEL_UPGRADE_COST: ShovelUpgradeCostRecord = {
  '1': {},
  '2': { wood: 30 },
  '3': { stone: 35, coins: 70 },
  '4': { sand: 60, coins: 120 },
  '5': { stone: 60, sand: 120, coins: 150 },
};

const AXE_INFO: InstrumentInfo = {
  title: 'instruments.axe.title',
  imageSrc: AxeImageSrc,
  resourceMined: 'wood',
  levelEfficiency: AXE_LEVEL_EFFICIENCY,
  upgradeCost: AXE_UPGRADE_COST,
} as const;

const PICKAXE_INFO: InstrumentInfo = {
  title: 'instruments.pickaxe.title',
  imageSrc: PickaxeImageSrc,
  resourceMined: 'stone',
  levelEfficiency: PICKAXE_LEVEL_EFFICIENCY,
  upgradeCost: PICKAXE_UPGRADE_COST,
} as const;

const SHOVEL_INFO: InstrumentInfo = {
  title: 'instruments.shovel.title',
  imageSrc: ShovelImageSrc,
  resourceMined: 'sand',
  levelEfficiency: SHOVEL_LEVEL_EFFICIENCY,
  upgradeCost: SHOVEL_UPGRADE_COST,
};

export const INSTRUMENT_INFOS: InstrumentInfos = {
  axe: AXE_INFO,
  pickaxe: PICKAXE_INFO,
  shovel: SHOVEL_INFO,
};
