import { Button } from '@shared/Button/Button';
import { useAppDispatch } from '@store';
import { useCallback, useState } from 'react';
import { ForgeModal } from './ForgeModal';

export const Forge = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openMarket = useCallback(() => {
    setIsModalOpen(true);
  }, [dispatch]);

  return (
    <>
      <Button onClick={openMarket}>Forge</Button>
      <ForgeModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
