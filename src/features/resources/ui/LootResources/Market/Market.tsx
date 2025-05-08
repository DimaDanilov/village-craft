import { resourcesSlice } from '@features/resources/model';
import { Button } from '@shared/Button/Button';
import { useCallback, useState } from 'react';
import { MarketModal } from './MarketModal';
import { useAppDispatch } from '@store';

export const Market = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openMarket = useCallback(() => {
    dispatch(resourcesSlice.actions.clearError());
    setIsModalOpen(true);
  }, [dispatch]);

  return (
    <>
      <Button onClick={openMarket}>Market</Button>
      <MarketModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
