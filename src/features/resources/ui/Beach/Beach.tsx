import { mineResourcesWithInstrument, resourcesSlice } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import ShovelIcon from '@assets/icons/Shovel.svg?react';
import { DeckResourceCard } from '@features/buildings/ui';
import { BUILDING_INFOS } from '@features/buildings/model';

export const Beach = () => {
  const dispatch = useAppDispatch();
  const sandAmount = useAppSelector((state) => resourcesSlice.selectors.selectResourceCount(state, 'sand'));

  const digSand = useCallback(() => dispatch(mineResourcesWithInstrument('sand')), [dispatch]);

  return (
    <DeckResourceCard
      onClick={digSand}
      buildingInfo={BUILDING_INFOS.beach}
      ResourceIconComponent={ShovelIcon}
      resourceCount={sandAmount}
    />
  );
};
