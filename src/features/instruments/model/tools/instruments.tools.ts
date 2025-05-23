import type { ResourcesInfo } from '@features/resources/model';
import type { InstrumentCost } from '../constants';

export function isInstrumentNextLevelExist<T extends Record<string, InstrumentCost>, K extends PropertyKey>(
  _nextLevel: K,
  allLevelsCost: T,
): _nextLevel is Extract<keyof T, K> {
  return String(_nextLevel) in allLevelsCost;
}

export function isResourcesEnoughToUpgradeInstrument<T extends Record<string, InstrumentCost>, K extends PropertyKey>(
  nextLevel: K,
  levelCost: T[keyof T],
  allResourcesState: ResourcesInfo,
): nextLevel is Extract<keyof T, K> {
  const hasEnoughResources = Object.entries(levelCost).every(([resourceKey, resourceCost]) => {
    const availableCount = allResourcesState[resourceKey as keyof ResourcesInfo]?.count ?? 0;
    return availableCount >= resourceCost;
  });

  return hasEnoughResources;
}

export function isInstrumentUpgradeAvailable<T extends Record<string, InstrumentCost>, K extends PropertyKey>(
  nextLevel: K,
  allLevelsCost: T,
  allResourcesState: ResourcesInfo,
): nextLevel is Extract<keyof T, K> {
  if (!isInstrumentNextLevelExist(nextLevel, allLevelsCost)) return false;

  const levelCost = allLevelsCost[String(nextLevel) as keyof T];
  return isResourcesEnoughToUpgradeInstrument(nextLevel, levelCost, allResourcesState);
}
