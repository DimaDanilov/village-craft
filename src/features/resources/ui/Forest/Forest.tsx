import { mineResourcesWithInstrument, resourcesSlice } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import AxeIcon from '@assets/icons/Axe.svg?react';
import { DECK_CARD_INFOS, DeckResourceCard } from '@widgets';

export const Forest = () => {
  const dispatch = useAppDispatch();
  const woodAmount = useAppSelector((state) => resourcesSlice.selectors.selectResourceCount(state, 'wood'));

  const chopWood = useCallback(() => dispatch(mineResourcesWithInstrument('wood')), [dispatch]);

  return (
    <DeckResourceCard
      onClick={chopWood}
      deckCardInfo={DECK_CARD_INFOS.forest}
      ResourceIconComponent={AxeIcon}
      resourceCount={woodAmount}
    />
  );
};
