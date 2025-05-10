import { LOCATIONS_IMAGES, mineStoneWithPickaxe, resourcesSlice } from '@features/resources/model';
import { DeckCard } from '@shared/DeckCard/DeckCard';
import { useAppDispatch } from '@store';
import { useCallback } from 'react';

export const Mines = () => {
  const dispatch = useAppDispatch();

  const mineStone = useCallback(() => dispatch(mineStoneWithPickaxe()), [dispatch, resourcesSlice]);

  return (
    <DeckCard
      onClick={mineStone}
      imageSrc={LOCATIONS_IMAGES.mines}
      title="Mines"
      description="Mine stone with your pickaxe."
      cardCategory="resource"
    />
  );
};
