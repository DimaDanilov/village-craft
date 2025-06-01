import type { InstrumentsState } from '../slice';
import AxeImageSrc from '@assets/instruments/Axe.png';
import PickaxeImageSrc from '@assets/instruments/Pickaxe.png';
import type {
  AxeLevelEfficiencyRecord,
  AxeUpgradeCostRecord,
  InstrumentLevelEfficiencyRecord,
  InstrumentName,
  InstrumentUpgradeCostRecord,
  PickaxeLevelEfficiencyRecord,
  PickaxeUpgradeCostRecord,
} from '../types';
import type { ResourceName } from '@features/resources/model';

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

export const INSTRUMENT_LEVEL_EFFICIENCY: Record<InstrumentName, InstrumentLevelEfficiencyRecord> = {
  axe: AXE_LEVEL_EFFICIENCY,
  pickaxe: PICKAXE_LEVEL_EFFICIENCY,
};

export const INSTRUMENT_UPGRADE_COST: Record<InstrumentName, InstrumentUpgradeCostRecord> = {
  axe: AXE_UPGRADE_COST,
  pickaxe: PICKAXE_UPGRADE_COST,
};

export const INSTRUMENT_RESOURCE_MINING: Record<InstrumentName, ResourceName> = {
  axe: 'wood',
  pickaxe: 'stone',
};

export const INSTRUMENTS_IMAGES: Record<keyof InstrumentsState['instruments'], string> = {
  axe: AxeImageSrc,
  pickaxe: PickaxeImageSrc,
};
