import { chopWoodWithAxe, resourcesSlice } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import AxeIcon from '@assets/icons/Axe.svg?react';
import { DECK_CARD_INFOS, DeckResourceCard } from '@shared/DeckCard';

export const Forest = () => {
  const dispatch = useAppDispatch();
  const woodAmount = useAppSelector(resourcesSlice.selectors.selectWoodCount);

  const chopWood = useCallback(() => dispatch(chopWoodWithAxe()), [dispatch, resourcesSlice]);

  return (
    <DeckResourceCard
      onClick={chopWood}
      deckCardInfo={DECK_CARD_INFOS.forest}
      ResourceIconComponent={AxeIcon}
      resourceCount={woodAmount}
    />
  );
};
