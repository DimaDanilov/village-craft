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
  '2': 3,
  '3': 5,
  '4': 10,
  '5': 16,
};

const PICKAXE_LEVEL_EFFICIENCY: PickaxeLevelEfficiencyRecord = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 5,
  '5': 8,
};

const SHOVEL_LEVEL_EFFICIENCY: ShovelLevelEfficiencyRecord = {
  '1': 1,
  '2': 3,
  '3': 8,
};

const AXE_UPGRADE_COST: AxeUpgradeCostRecord = {
  '1': {},
  '2': {
    wood: 10,
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
    wood: 150,
    stone: 120,
    coins: 80,
  },
};

const PICKAXE_UPGRADE_COST: PickaxeUpgradeCostRecord = {
  '1': {},
  '2': {
    wood: 15,
  },
  '3': {
    wood: 30,
    stone: 25,
  },
  '4': {
    wood: 120,
    stone: 55,
    coins: 50,
  },
  '5': {
    wood: 200,
    stone: 150,
    coins: 120,
  },
};

const SHOVEL_UPGRADE_COST: ShovelUpgradeCostRecord = {
  '1': {},
  '2': { wood: 30 },
  '3': { stone: 35, coins: 70 },
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
