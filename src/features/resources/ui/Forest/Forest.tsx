import { chopWoodWithAxe, LOCATIONS_IMAGES, resourcesSlice } from '@features/resources/model';
import { DeckCard } from '@shared/DeckCard/DeckCard';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';

export const Forest = () => {
  const dispatch = useAppDispatch();
  const woodAmount = useAppSelector(resourcesSlice.selectors.selectWoodCount);

  const chopWood = useCallback(() => dispatch(chopWoodWithAxe()), [dispatch, resourcesSlice]);

  return (
    <DeckCard
      onClick={chopWood}
      imageSrc={LOCATIONS_IMAGES.forest}
      title="Forest"
      description="Forest full of high trees. Nice place to chop wood with axe."
      cardCategory="resource"
      resourceCount={woodAmount}
    />
  );
};
