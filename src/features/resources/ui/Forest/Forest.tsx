import { mineResourcesWithInstrument, resourcesSlice } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import AxeIcon from '@assets/icons/Axe.svg?react';
import { DeckResourceCard } from '@features/buildings/ui';
import { BUILDING_INFOS } from '@features/buildings/model';

export const Forest = () => {
  const dispatch = useAppDispatch();
  const woodAmount = useAppSelector((state) => resourcesSlice.selectors.selectResourceCount(state, 'wood'));

  const chopWood = useCallback(() => dispatch(mineResourcesWithInstrument('wood')), [dispatch]);

  return (
    <DeckResourceCard
      onClick={chopWood}
      buildingInfo={BUILDING_INFOS.forest}
      ResourceIconComponent={AxeIcon}
      resourceCount={woodAmount}
    />
  );
};
