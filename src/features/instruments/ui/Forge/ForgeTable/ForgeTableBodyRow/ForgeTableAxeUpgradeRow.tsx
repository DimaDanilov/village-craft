import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import {
  AXE_LEVEL_EFFICIENCY,
  AXE_UPGRADE_COST,
  INSTRUMENTS_IMAGES,
  instrumentsSlice,
  isInstrumentNextLevelExist,
  isInstrumentUpgradeAvailable,
  UpgradeAxeWithResources,
} from '@features/instruments/model';
import type { AxeLevel, InstrumentCost } from '@features/instruments/model';
import { ForgeTableBodyRow } from './ForgeTableBodyRow';
import { resourcesSlice } from '@features/resources/model';
import type { ResourcesInfo } from '@features/resources/model';

export const ForgeTableAxeUpgradeRow = () => {
  const dispatch = useAppDispatch();
  const axeLevel: AxeLevel = useAppSelector(instrumentsSlice.selectors.selectAxeLevel);
  const axeNextLevel: string = String(Number(axeLevel) + 1);

  const allResources: ResourcesInfo = useAppSelector(resourcesSlice.selectors.selectAllResources);
  const isNextLevelExist = isInstrumentNextLevelExist(axeNextLevel, AXE_UPGRADE_COST);
  const isAxeUpgradeAvailable = isInstrumentUpgradeAvailable(axeNextLevel, AXE_UPGRADE_COST, allResources);

  const axeCurrentLevelEfficiency: number = AXE_LEVEL_EFFICIENCY[axeLevel];
  const axeNextLevelEfficiency: number | undefined = isNextLevelExist ? AXE_LEVEL_EFFICIENCY[axeNextLevel] : undefined;

  const axeNextLevelCost: InstrumentCost | undefined = isNextLevelExist ? AXE_UPGRADE_COST[axeNextLevel] : undefined;

  const onUpgradeAxe = useCallback(() => dispatch(UpgradeAxeWithResources()), [dispatch, UpgradeAxeWithResources]);

  return (
    <ForgeTableBodyRow
      resourceName="Wood"
      instrumentCurrentLevel={axeLevel}
      instrumentCurrentLevelEfficiency={axeCurrentLevelEfficiency}
      instrumentImageSrc={INSTRUMENTS_IMAGES.axe}
      instrumentNextLevel={axeNextLevel}
      instrumentNextLevelEfficiency={axeNextLevelEfficiency}
      instrumentNextLevelCost={axeNextLevelCost}
      isNextLevelExist={isNextLevelExist}
      isUpgradeAvailable={isAxeUpgradeAvailable}
      onUpgrade={onUpgradeAxe}
    />
  );
};
