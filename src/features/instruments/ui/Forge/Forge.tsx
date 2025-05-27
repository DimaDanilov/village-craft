import { useAppDispatch, useAppSelector } from '@store';
import { useCallback, useState } from 'react';
import { ForgeModal } from './ForgeModal';
import { clearInstrumentsError } from '@features/instruments/model';
import { buildingsSlice } from '@features/buildings/model';
import { DECK_CARD_INFOS, DeckServiceCard } from '@widgets';

export const Forge = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const forgeLevel = useAppSelector(buildingsSlice.selectors.selectForgeLevel);

  const openForge = useCallback(() => {
    dispatch(clearInstrumentsError());
    setIsModalOpen(true);
  }, [dispatch]);

  return (
    <>
      <DeckServiceCard onClick={openForge} deckCardInfo={DECK_CARD_INFOS.forge} serviceLevel={Number(forgeLevel)} />
      <ForgeModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
