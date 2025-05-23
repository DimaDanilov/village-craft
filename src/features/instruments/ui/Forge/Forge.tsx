import { useAppDispatch } from '@store';
import { useCallback, useState } from 'react';
import { ForgeModal } from './ForgeModal';
import { clearInstrumentsError } from '@features/instruments/model';
import { DECK_CARD_INFOS, DeckServiceCard } from '@shared/DeckCard';

export const Forge = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openForge = useCallback(() => {
    dispatch(clearInstrumentsError());
    setIsModalOpen(true);
  }, [dispatch]);

  return (
    <>
      <DeckServiceCard onClick={openForge} deckCardInfo={DECK_CARD_INFOS.forge} />
      <ForgeModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
