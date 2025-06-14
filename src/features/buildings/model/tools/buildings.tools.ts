import type { ResourceState } from '@features/resources/model';
import type { BuildingCost } from '../types';

export function isBuildingNextLevelExist<T extends Record<string, BuildingCost>, K extends PropertyKey>(
  _nextLevel: K,
  allLevelsCost: T,
): _nextLevel is Extract<keyof T, K> {
  return String(_nextLevel) in allLevelsCost;
}

export function isResourcesEnoughToUpgradeBuilding<T extends Record<string, BuildingCost>, K extends PropertyKey>(
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

export function isBuildingUpgradeAvailable<T extends Record<string, BuildingCost>, K extends PropertyKey>(
  _nextLevel: K,
  allLevelsCost: T,
  allResourcesState: ResourceState,
): _nextLevel is Extract<keyof T, K> {
  if (!isBuildingNextLevelExist(_nextLevel, allLevelsCost)) return false;

  const levelCost = allLevelsCost[String(_nextLevel) as keyof T];
  return isResourcesEnoughToUpgradeBuilding(_nextLevel, levelCost, allResourcesState);
}
