import { useAppSelector } from '@store';
import { isInstrumentNextLevelExist, isInstrumentUpgradeAvailable } from '../tools';
import type { InstrumentCost, InstrumentName } from '../types';
import { instrumentsSlice } from '../slice';
import { resourcesSlice } from '@features/resources/model';
import type { ResourcesInfo } from '@features/resources/model';
import { INSTRUMENT_INFOS } from '../constants';

export function useInstrumentUpgradeCost(instrumentName: InstrumentName) {
  const instrumentCurrentLevel = useAppSelector((state) =>
    instrumentsSlice.selectors.selectInstrumentLevel(state, instrumentName),
  );
  const allResources: ResourcesInfo = useAppSelector(resourcesSlice.selectors.selectAllResources);

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

  const instrumentLevelEfficiencyList = INSTRUMENT_INFOS[instrumentName].levelEfficiency;
  const instrumentCurrentLevelEfficiency: number = instrumentLevelEfficiencyList[instrumentCurrentLevel];
  const instrumentNextLevelEfficiency: number | undefined = isNextLevelExist
    ? instrumentLevelEfficiencyList[instrumentNextLevel]
    : undefined;

  return {
    instrumentCurrentLevel,
    instrumentNextLevel,
    isNextLevelExist,
    instrumentCurrentLevelEfficiency,
    instrumentNextLevelEfficiency,
  };
}

export type UseInstrumentUpgradeEfficiencyReturn = ReturnType<typeof useInstrumentUpgradeEfficiency>;
