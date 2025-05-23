import { clearResourcesError, LOCATIONS_IMAGES } from '@features/resources/model';
import { useCallback, useState } from 'react';
import { MarketModal } from './MarketModal';
import { useAppDispatch } from '@store';
import { DeckServiceCard } from '@shared/DeckCard';

export const Market = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openMarket = useCallback(() => {
    dispatch(clearResourcesError());
    setIsModalOpen(true);
  }, [dispatch]);

  return (
    <>
      <DeckServiceCard
        onClick={openMarket}
        imageSrc={LOCATIONS_IMAGES.market}
        title="Market"
        description="Sell your resources to earn money."
      />
      <MarketModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
