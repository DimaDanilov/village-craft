import { useAppDispatch } from '@store';
import { useCallback, useState } from 'react';
import { ForgeModal } from './ForgeModal';
import { clearInstrumentsError } from '@features/instruments/model';
import { DeckCard } from '@shared/DeckCard/DeckCard';
import { LOCATIONS_IMAGES } from '@features/resources/model';

export const Forge = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openForge = useCallback(() => {
    dispatch(clearInstrumentsError());
    setIsModalOpen(true);
  }, [dispatch]);

  return (
    <>
      <DeckCard
        onClick={openForge}
        imageSrc={LOCATIONS_IMAGES.forge}
        title="Forge"
        description="Upgrade your instruments to collect resources more easily."
      />
      <ForgeModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
