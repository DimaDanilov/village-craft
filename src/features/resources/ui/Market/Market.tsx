import { clearResourcesError } from '@features/resources/model';
import { useCallback, useState } from 'react';
import { MarketModal } from './MarketModal';
import { useAppDispatch, useAppSelector } from '@store';
import { DECK_CARD_INFOS, DeckServiceCard } from '@shared/DeckCard';
import { buildingsSlice } from '@features/buildings/model';

export const Market = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const marketLevel = useAppSelector(buildingsSlice.selectors.selectMarketLevel);

  const openMarket = useCallback(() => {
    dispatch(clearResourcesError());
    setIsModalOpen(true);
  }, [dispatch]);

  return (
    <>
      <DeckServiceCard onClick={openMarket} deckCardInfo={DECK_CARD_INFOS.market} serviceLevel={Number(marketLevel)} />
      <MarketModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
