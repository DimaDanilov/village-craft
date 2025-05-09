import type { AxeLevel, PickaxeLevel } from '../types';

export type AxeLevelEfficiencyRecord = Record<AxeLevel, number>;
export type PickaxeLevelEfficiencyRecord = Record<PickaxeLevel, number>;

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
