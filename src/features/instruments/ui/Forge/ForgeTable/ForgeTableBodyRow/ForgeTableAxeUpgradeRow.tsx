import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import {
  AXE_LEVEL_EFFICIENCY,
  AXE_UPGRADE_COST,
  INSTRUMENTS_IMAGES,
  instrumentsSlice,
  isInstrumentUpgradeAvailable,
  upgradeAxe,
} from '@features/instruments/model';
import type { AxeLevel, InstrumentCost } from '@features/instruments/model';
import { ForgeTableBodyRow } from './ForgeTableBodyRow';

export const ForgeTableAxeUpgradeRow = () => {
  const dispatch = useAppDispatch();
  const axeLevel: AxeLevel = useAppSelector(instrumentsSlice.selectors.selectAxeLevel);
  const axeNextLevel: string = String(Number(axeLevel) + 1);

  const isAxeUpgradeAvailable = isInstrumentUpgradeAvailable(axeNextLevel, AXE_LEVEL_EFFICIENCY);

  const axeCurrentLevelEfficiency: number = AXE_LEVEL_EFFICIENCY[axeLevel];
  const axeNextLevelEfficiency: number | undefined = isAxeUpgradeAvailable
    ? AXE_LEVEL_EFFICIENCY[axeNextLevel]
    : undefined;

  const axeNextLevelPrice: InstrumentCost | undefined = isAxeUpgradeAvailable
    ? AXE_UPGRADE_COST[axeNextLevel]
    : undefined;

  const onUpgradeAxe = useCallback(() => dispatch(upgradeAxe()), [dispatch, upgradeAxe]);

  return (
    <ForgeTableBodyRow
      instrumentCurrentLevel={axeLevel}
      instrumentCurrentLevelEfficiency={axeCurrentLevelEfficiency}
      instrumentImageSrc={INSTRUMENTS_IMAGES.axe}
      instrumentNextLevel={axeNextLevel}
      instrumentNextLevelEfficiency={axeNextLevelEfficiency}
      instrumentNextLevelPrice={axeNextLevelPrice}
      isUpgradeAvailable={isAxeUpgradeAvailable}
      onUpgrade={onUpgradeAxe}
    />
  );
};
