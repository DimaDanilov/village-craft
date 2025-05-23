import { LOCATIONS_IMAGES, mineStoneWithPickaxe, resourcesSlice } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import PickaxeIcon from '@assets/icons/Pickaxe.svg?react';
import { DeckResourceCard } from '@shared/DeckCard';

export const Mines = () => {
  const dispatch = useAppDispatch();
  const stoneAmount = useAppSelector(resourcesSlice.selectors.selectStoneCount);

  const mineStone = useCallback(() => dispatch(mineStoneWithPickaxe()), [dispatch, resourcesSlice]);

  return (
    <DeckResourceCard
      onClick={mineStone}
      imageSrc={LOCATIONS_IMAGES.mines}
      title="Mines"
      description="Mine stone with your pickaxe."
      ResourceIconComponent={PickaxeIcon}
      resourceCount={stoneAmount}
    />
  );
};
