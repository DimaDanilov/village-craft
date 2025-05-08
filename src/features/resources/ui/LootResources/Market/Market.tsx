import { resourcesSlice } from '@features/resources/model';
import { Button } from '@shared/Button/Button';
import { Modal } from '@shared/Modal/Modal';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback, useState } from 'react';

export const Market = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const error = useAppSelector(resourcesSlice.selectors.selectResourcesError);

  const openMarket = useCallback(() => {
    dispatch(resourcesSlice.actions.clearError());
    setIsModalOpen(true);
  }, [dispatch]);

  const closeMarket = useCallback(() => {
    dispatch(resourcesSlice.actions.clearError());
    setIsModalOpen(false);
  }, [dispatch]);

  const sellWood = useCallback(
    () => dispatch(resourcesSlice.actions.sellWood({ woodCount: 1 })),
    [dispatch, resourcesSlice],
  );

  const sellStone = useCallback(
    () => dispatch(resourcesSlice.actions.sellStone({ stoneCount: 1 })),
    [dispatch, resourcesSlice],
  );

  return (
    <>
      <Button onClick={openMarket}>Market</Button>
      <Modal title="Market" isOpen={isModalOpen} onClose={closeMarket}>
        {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
        <div className="flex flex-col gap-2">
          <Button onClick={sellWood}>Sell Wood</Button>
          <Button onClick={sellStone}>Sell Stone</Button>
        </div>
      </Modal>
    </>
  );
};
