import { mineResourcesWithInstrument, resourcesSlice } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import PickaxeIcon from '@assets/icons/Pickaxe.svg?react';
import { DECK_CARD_INFOS, DeckResourceCard } from '@widgets';

export const Mines = () => {
  const dispatch = useAppDispatch();
  const stoneAmount = useAppSelector((state) => resourcesSlice.selectors.selectResourceCount(state, 'stone'));

  const mineStone = useCallback(() => dispatch(mineResourcesWithInstrument('stone')), [dispatch]);

  return (
    <DeckResourceCard
      onClick={mineStone}
      deckCardInfo={DECK_CARD_INFOS.mines}
      ResourceIconComponent={PickaxeIcon}
      resourceCount={stoneAmount}
    />
  );
};
