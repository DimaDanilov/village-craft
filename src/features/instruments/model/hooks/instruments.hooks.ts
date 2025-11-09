import { useAppSelector } from '@store';
import { isInstrumentNextLevelExist, isInstrumentUpgradeAvailable } from '../tools';
import type { InstrumentCost, InstrumentName } from '../types';
import { instrumentsSlice } from '../slice';
import { RESOURCE_INFOS, resourcesSlice } from '@features/resources/model';
import type { ResourceName, ResourceState } from '@features/resources/model';
import { INSTRUMENT_INFOS } from '../constants';

export function useInstrumentUpgradeCost(instrumentName: InstrumentName) {
  const instrumentCurrentLevel = useAppSelector((state) =>
    instrumentsSlice.selectors.selectInstrumentLevel(state, instrumentName),
  );
  const allResources: ResourceState = useAppSelector(resourcesSlice.selectors.selectAllResources);

  const instrumentUpgradeCostList = INSTRUMENT_INFOS[instrumentName].upgradeCost;

  const instrumentNextLevel: string = String(Number(instrumentCurrentLevel) + 1);

  const isNextLevelExist = isInstrumentNextLevelExist(instrumentNextLevel, instrumentUpgradeCostList);
  const isUpgradeAvailable = isInstrumentUpgradeAvailable(instrumentNextLevel, instrumentUpgradeCostList, allResources);

  const instrumentNextLevelCost: InstrumentCost | undefined = isNextLevelExist
    ? instrumentUpgradeCostList[instrumentNextLevel]
    : undefined;

  return { instrumentCurrentLevel, instrumentNextLevel, isNextLevelExist, isUpgradeAvailable, instrumentNextLevelCost };
}

export function useInstrumentUpgradeEfficiency(instrumentName: InstrumentName) {
  const instrumentCurrentLevel = useAppSelector((state) =>
    instrumentsSlice.selectors.selectInstrumentLevel(state, instrumentName),
  );

  const instrumentUpgradeCostList = INSTRUMENT_INFOS[instrumentName].upgradeCost;

  const instrumentNextLevel: string = String(Number(instrumentCurrentLevel) + 1);

  const isNextLevelExist = isInstrumentNextLevelExist(instrumentNextLevel, instrumentUpgradeCostList);

  const resourcesMinedByInstrument = INSTRUMENT_INFOS[instrumentName].resourcesMined;

  const resourcesMinedEfficiencyCurrentLevel = resourcesMinedByInstrument.reduce((acc, resource) => {
    const instrumentLevelEfficiencyList = RESOURCE_INFOS[resource].resourceMinedByInstrumentLevel;
    const instrumentCurrentLevelEfficiency: number | undefined =
      instrumentLevelEfficiencyList?.[instrumentCurrentLevel];
    acc[resource] = instrumentCurrentLevelEfficiency;
    return acc;
  }, {} as Partial<Record<ResourceName, number | undefined>>);

  const resourcesMinedEfficiencyNextLevel = resourcesMinedByInstrument.reduce((acc, resource) => {
    const instrumentLevelEfficiencyList = RESOURCE_INFOS[resource].resourceMinedByInstrumentLevel;
    const instrumentNextLevelEfficiency: number | undefined = isNextLevelExist
      ? instrumentLevelEfficiencyList?.[instrumentNextLevel]
      : undefined;
    acc[resource] = instrumentNextLevelEfficiency;
    return acc;
  }, {} as Partial<Record<ResourceName, number | undefined>>);

  return {
    instrumentCurrentLevel,
    instrumentNextLevel,
    isNextLevelExist,
    resourcesMinedEfficiencyCurrentLevel,
    resourcesMinedEfficiencyNextLevel,
  };
}

export type UseInstrumentUpgradeEfficiencyReturn = ReturnType<typeof useInstrumentUpgradeEfficiency>;
