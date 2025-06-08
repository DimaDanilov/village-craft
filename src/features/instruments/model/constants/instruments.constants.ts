import type { InstrumentsState } from '../slice';
import AxeImageSrc from '@assets/instruments/Axe.png';
import PickaxeImageSrc from '@assets/instruments/Pickaxe.png';
import type {
  AxeLevelEfficiencyRecord,
  AxeUpgradeCostRecord,
  InstrumentInfo,
  InstrumentInfos,
  PickaxeLevelEfficiencyRecord,
  PickaxeUpgradeCostRecord,
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

const INSTRUMENTS_IMAGES: Record<keyof InstrumentsState['instruments'], string> = {
  axe: AxeImageSrc,
  pickaxe: PickaxeImageSrc,
};

const AXE_INFO: InstrumentInfo = {
  imageSrc: INSTRUMENTS_IMAGES.axe,
  resourceMined: 'wood',
  levelEfficiency: AXE_LEVEL_EFFICIENCY,
  upgradeCost: AXE_UPGRADE_COST,
} as const;

const PICKAXE_INFO: InstrumentInfo = {
  imageSrc: INSTRUMENTS_IMAGES.pickaxe,
  resourceMined: 'stone',
  levelEfficiency: PICKAXE_LEVEL_EFFICIENCY,
  upgradeCost: PICKAXE_UPGRADE_COST,
} as const;

export const INSTRUMENT_INFOS: InstrumentInfos = {
  axe: AXE_INFO,
  pickaxe: PICKAXE_INFO,
};
