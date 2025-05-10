import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import AxeImageSrc from '@assets/instruments/Axe.png';
import {
  AXE_LEVEL_EFFICIENCY,
  instrumentsSlice,
  isInstrumentUpgradeAvailable,
  upgradeAxe,
  type AxeLevel,
} from '@features/instruments/model';
import { ForgeTableBodyRow } from './ForgeTableBodyRow';

export const ForgeTableAxeUpgradeRow = () => {
  const dispatch = useAppDispatch();
  const axeLevel: AxeLevel = useAppSelector(instrumentsSlice.selectors.selectAxeLevel);
  const axeNextLevel: string = String(Number(axeLevel) + 1);

  const isAxeUpgradeAvailable = isInstrumentUpgradeAvailable(axeNextLevel, AXE_LEVEL_EFFICIENCY);

  const axeCurrentLevelEfficiency = AXE_LEVEL_EFFICIENCY[axeLevel];
  const axeNextLevelEfficiency = isAxeUpgradeAvailable ? AXE_LEVEL_EFFICIENCY[axeNextLevel] : undefined;

  const onUpgradeAxe = useCallback(() => dispatch(upgradeAxe()), [dispatch, upgradeAxe]);

  return (
    <ForgeTableBodyRow
      instrumentCurrentLevel={axeLevel}
      instrumentCurrentLevelEfficiency={axeCurrentLevelEfficiency}
      instrumentImageSrc={AxeImageSrc}
      instrumentNextLevel={axeNextLevel}
      instrumentNextLevelEfficiency={axeNextLevelEfficiency}
      isUpgradeAvailable={isAxeUpgradeAvailable}
      onUpgrade={onUpgradeAxe}
    />
  );
};
