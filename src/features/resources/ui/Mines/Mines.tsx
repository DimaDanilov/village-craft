import { mineResourcesWithInstrument, resourcesSlice } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import PickaxeIcon from '@assets/icons/Pickaxe.svg?react';
import { DeckResourceCard } from '@features/buildings/ui';
import { BUILDING_INFOS } from '@features/buildings/model';

export const Mines = () => {
  const dispatch = useAppDispatch();
  const stoneAmount = useAppSelector((state) => resourcesSlice.selectors.selectResourceCount(state, 'stone'));

  const mineStone = useCallback(() => dispatch(mineResourcesWithInstrument('stone')), [dispatch]);

  return (
    <DeckResourceCard
      onClick={mineStone}
      buildingInfo={BUILDING_INFOS.mines}
      ResourceIconComponent={PickaxeIcon}
      resourceCount={stoneAmount}
    />
  );
};
