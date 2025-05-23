import { useAppDispatch } from '@store';
import { useCallback, useState } from 'react';
import { ForgeModal } from './ForgeModal';
import { clearInstrumentsError } from '@features/instruments/model';
import { LOCATIONS_IMAGES } from '@features/resources/model';
import { DeckServiceCard } from '@shared/DeckCard';

export const Forge = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openForge = useCallback(() => {
    dispatch(clearInstrumentsError());
    setIsModalOpen(true);
  }, [dispatch]);

  return (
    <>
      <DeckServiceCard
        onClick={openForge}
        imageSrc={LOCATIONS_IMAGES.forge}
        title="Forge"
        description="Upgrade your instruments to collect resources more easily."
      />
      <ForgeModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
