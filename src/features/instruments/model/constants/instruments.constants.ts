import type { ResourcesState } from '@features/resources/model';
import type { AxeLevel, PickaxeLevel } from '../types';
import type { InstrumentsState } from '../slice';
import AxeImageSrc from '@assets/instruments/Axe.png';
import PickaxeImageSrc from '@assets/instruments/Pickaxe.png';

export type AxeLevelEfficiencyRecord = Record<AxeLevel, number>;
export type PickaxeLevelEfficiencyRecord = Record<PickaxeLevel, number>;

export type InstrumentCost = Partial<Record<keyof ResourcesState['resources'], number>>;

export type AxeUpgradeCostRecord = Record<AxeLevel, InstrumentCost>;
export type PickaxeUpgradeCostRecord = Record<PickaxeLevel, InstrumentCost>;

export const AXE_LEVEL_EFFICIENCY: AxeLevelEfficiencyRecord = {
  '1': 1,
  '2': 3,
  '3': 5,
  '4': 10,
};

export const PICKAXE_LEVEL_EFFICIENCY: PickaxeLevelEfficiencyRecord = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 5,
};

export const AXE_UPGRADE_COST: AxeUpgradeCostRecord = {
  '1': {},
  '2': {
    wood: 10,
  },
  '3': {
    wood: 20,
    stone: 15,
  },
  '4': {
    wood: 50,
    stone: 40,
  },
};

export const PICKAXE_UPGRADE_COST: PickaxeUpgradeCostRecord = {
  '1': {},
  '2': {
    wood: 10,
  },
  '3': {
    wood: 20,
    stone: 15,
  },
  '4': {
    wood: 50,
    stone: 40,
  },
};

export const INSTRUMENTS_IMAGES: Record<keyof InstrumentsState['instruments'], string> = {
  axe: AxeImageSrc,
  pickaxe: PickaxeImageSrc,
};
