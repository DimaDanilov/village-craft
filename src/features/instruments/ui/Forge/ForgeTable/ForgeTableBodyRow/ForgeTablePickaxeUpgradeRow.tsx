import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import {
  INSTRUMENTS_IMAGES,
  instrumentsSlice,
  isInstrumentUpgradeAvailable,
  PICKAXE_LEVEL_EFFICIENCY,
  PICKAXE_UPGRADE_COST,
  upgradePickaxe,
} from '@features/instruments/model';
import type { PickaxeLevel, InstrumentCost } from '@features/instruments/model';

import { ForgeTableBodyRow } from './ForgeTableBodyRow';

export const ForgeTablePickaxeUpgradeRow = () => {
  const dispatch = useAppDispatch();
  const pickaxeLevel: PickaxeLevel = useAppSelector(instrumentsSlice.selectors.selectPickaxeLevel);
  const pickaxeNextLevel: string = String(Number(pickaxeLevel) + 1);

  const isPickaxeUpgradeAvailable = isInstrumentUpgradeAvailable(pickaxeNextLevel, PICKAXE_LEVEL_EFFICIENCY);

  const pickaxeCurrentLevelEfficiency: number = PICKAXE_LEVEL_EFFICIENCY[pickaxeLevel];
  const pickaxeNextLevelEfficiency: number | undefined = isPickaxeUpgradeAvailable
    ? PICKAXE_LEVEL_EFFICIENCY[pickaxeNextLevel]
    : undefined;

  const pickaxeNextLevelPrice: InstrumentCost | undefined = isPickaxeUpgradeAvailable
    ? PICKAXE_UPGRADE_COST[pickaxeNextLevel]
    : undefined;

  const onUpgradePickaxe = useCallback(() => dispatch(upgradePickaxe()), [dispatch, upgradePickaxe]);

  return (
    <ForgeTableBodyRow
      instrumentCurrentLevel={pickaxeLevel}
      instrumentCurrentLevelEfficiency={pickaxeCurrentLevelEfficiency}
      instrumentImageSrc={INSTRUMENTS_IMAGES.pickaxe}
      instrumentNextLevel={pickaxeNextLevel}
      instrumentNextLevelEfficiency={pickaxeNextLevelEfficiency}
      instrumentNextLevelPrice={pickaxeNextLevelPrice}
      isUpgradeAvailable={isPickaxeUpgradeAvailable}
      onUpgrade={onUpgradePickaxe}
    />
  );
};
