import type { ResourceState } from '@features/resources/model';
import type { InstrumentCost } from '../types';

export function isInstrumentNextLevelExist<T extends Record<string, InstrumentCost>, K extends PropertyKey>(
  _nextLevel: K,
  allLevelsCost: T,
): _nextLevel is Extract<keyof T, K> {
  return String(_nextLevel) in allLevelsCost;
}

export function isResourcesEnoughToUpgradeInstrument<T extends Record<string, InstrumentCost>, K extends PropertyKey>(
  _nextLevel: K,
  levelCost: T[keyof T],
  allResourcesState: ResourceState,
): _nextLevel is Extract<keyof T, K> {
  const hasEnoughResources = Object.entries(levelCost).every(([resourceKey, resourceCost]) => {
    const availableCount = allResourcesState[resourceKey as keyof ResourceState]?.count ?? 0;
    return availableCount >= resourceCost;
  });

  return hasEnoughResources;
}

export function isInstrumentUpgradeAvailable<T extends Record<string, InstrumentCost>, K extends PropertyKey>(
  _nextLevel: K,
  allLevelsCost: T,
  allResourcesState: ResourceState,
): _nextLevel is Extract<keyof T, K> {
  if (!isInstrumentNextLevelExist(_nextLevel, allLevelsCost)) return false;

  const levelCost = allLevelsCost[String(_nextLevel) as keyof T];
  return isResourcesEnoughToUpgradeInstrument(_nextLevel, levelCost, allResourcesState);
}
