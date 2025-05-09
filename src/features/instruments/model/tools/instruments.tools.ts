export function isInstrumentUpgradeAvailable<T extends Record<string, unknown>>(
  nextLevel: PropertyKey,
  allLevels: T,
): nextLevel is keyof T {
  return String(nextLevel) in allLevels;
}
