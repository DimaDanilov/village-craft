import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import PickaxeImageSrc from '@assets/instruments/Pickaxe.png';
import {
  instrumentsSlice,
  isInstrumentUpgradeAvailable,
  PICKAXE_LEVEL_EFFICIENCY,
  upgradePickaxe,
  type PickaxeLevel,
} from '@features/instruments/model';
import { ForgeTableBodyRow } from './ForgeTableBodyRow';

export const ForgeTablePickaxeUpgradeRow = () => {
  const dispatch = useAppDispatch();
  const pickaxeLevel: PickaxeLevel = useAppSelector(instrumentsSlice.selectors.selectPickaxeLevel);
  const pickaxeNextLevel: string = String(Number(pickaxeLevel) + 1);

  const isPickaxeUpgradeAvailable = isInstrumentUpgradeAvailable(pickaxeNextLevel, PICKAXE_LEVEL_EFFICIENCY);

  const pickaxeCurrentLevelEfficiency = PICKAXE_LEVEL_EFFICIENCY[pickaxeLevel];
  const pickaxeNextLevelEfficiency = isPickaxeUpgradeAvailable ? PICKAXE_LEVEL_EFFICIENCY[pickaxeNextLevel] : undefined;

  const onUpgradePickaxe = useCallback(() => dispatch(upgradePickaxe()), [dispatch, upgradePickaxe]);

  return (
    <ForgeTableBodyRow
      instrumentCurrentLevel={pickaxeLevel}
      instrumentCurrentLevelEfficiency={pickaxeCurrentLevelEfficiency}
      instrumentImageSrc={PickaxeImageSrc}
      instrumentNextLevel={pickaxeNextLevel}
      instrumentNextLevelEfficiency={pickaxeNextLevelEfficiency}
      isUpgradeAvailable={isPickaxeUpgradeAvailable}
      onUpgrade={onUpgradePickaxe}
    />
  );
};
