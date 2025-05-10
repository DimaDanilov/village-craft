import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import {
  INSTRUMENTS_IMAGES,
  instrumentsSlice,
  isInstrumentNextLevelExist,
  isInstrumentUpgradeAvailable,
  PICKAXE_LEVEL_EFFICIENCY,
  PICKAXE_UPGRADE_COST,
  UpgradePickaxeWithResources,
} from '@features/instruments/model';
import type { PickaxeLevel, InstrumentCost } from '@features/instruments/model';

import { ForgeTableBodyRow } from './ForgeTableBodyRow';
import { resourcesSlice } from '@features/resources/model';
import type { ResourcesInfo } from '@features/resources/model';

export const ForgeTablePickaxeUpgradeRow = () => {
  const dispatch = useAppDispatch();
  const pickaxeLevel: PickaxeLevel = useAppSelector(instrumentsSlice.selectors.selectPickaxeLevel);
  const pickaxeNextLevel: string = String(Number(pickaxeLevel) + 1);

  const allResources: ResourcesInfo = useAppSelector(resourcesSlice.selectors.selectAllResources);
  const isNextLevelExist = isInstrumentNextLevelExist(pickaxeNextLevel, PICKAXE_UPGRADE_COST);
  const isPickaxeUpgradeAvailable = isInstrumentUpgradeAvailable(pickaxeNextLevel, PICKAXE_UPGRADE_COST, allResources);

  const pickaxeCurrentLevelEfficiency: number = PICKAXE_LEVEL_EFFICIENCY[pickaxeLevel];
  const pickaxeNextLevelEfficiency: number | undefined = isNextLevelExist
    ? PICKAXE_LEVEL_EFFICIENCY[pickaxeNextLevel]
    : undefined;

  const pickaxeNextLevelPrice: InstrumentCost | undefined = isNextLevelExist
    ? PICKAXE_UPGRADE_COST[pickaxeNextLevel]
    : undefined;

  const onUpgradePickaxe = useCallback(
    () => dispatch(UpgradePickaxeWithResources()),
    [dispatch, UpgradePickaxeWithResources],
  );

  return (
    <ForgeTableBodyRow
      resourceName="Stone"
      instrumentCurrentLevel={pickaxeLevel}
      instrumentCurrentLevelEfficiency={pickaxeCurrentLevelEfficiency}
      instrumentImageSrc={INSTRUMENTS_IMAGES.pickaxe}
      instrumentNextLevel={pickaxeNextLevel}
      instrumentNextLevelEfficiency={pickaxeNextLevelEfficiency}
      instrumentNextLevelPrice={pickaxeNextLevelPrice}
      isNextLevelExist={isNextLevelExist}
      isUpgradeAvailable={isPickaxeUpgradeAvailable}
      onUpgrade={onUpgradePickaxe}
    />
  );
};
