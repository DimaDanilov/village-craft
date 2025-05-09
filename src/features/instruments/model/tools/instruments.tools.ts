export function isInstrumentUpgradeAvailable<T extends Record<string, unknown>, K extends PropertyKey>(
  nextLevel: K,
  allLevels: T,
): nextLevel is Extract<keyof T, K> {
  return String(nextLevel) in allLevels;
}
