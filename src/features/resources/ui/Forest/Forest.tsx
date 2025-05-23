import { chopWoodWithAxe, LOCATIONS_IMAGES, resourcesSlice } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import AxeIcon from '@assets/icons/Axe.svg?react';
import { DeckResourceCard } from '@shared/DeckCard';

export const Forest = () => {
  const dispatch = useAppDispatch();
  const woodAmount = useAppSelector(resourcesSlice.selectors.selectWoodCount);

  const chopWood = useCallback(() => dispatch(chopWoodWithAxe()), [dispatch, resourcesSlice]);

  return (
    <DeckResourceCard
      onClick={chopWood}
      imageSrc={LOCATIONS_IMAGES.forest}
      title="Forest"
      description="Forest full of high trees. Nice place to chop wood with axe."
      ResourceIconComponent={AxeIcon}
      resourceCount={woodAmount}
    />
  );
};
