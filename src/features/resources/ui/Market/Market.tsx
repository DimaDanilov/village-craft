import { clearResourcesError } from '@features/resources/model';
import { useCallback, useState } from 'react';
import { MarketModal } from './MarketModal';
import { useAppDispatch } from '@store';
import { DECK_CARD_INFOS, DeckServiceCard } from '@shared/DeckCard';

export const Market = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openMarket = useCallback(() => {
    dispatch(clearResourcesError());
    setIsModalOpen(true);
  }, [dispatch]);

  return (
    <>
      <DeckServiceCard onClick={openMarket} deckCardInfo={DECK_CARD_INFOS.market} />
      <MarketModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
