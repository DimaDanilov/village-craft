import { clearResourcesError, resourcesSlice } from '@features/resources/model';
import { Modal } from '@shared/Modal/Modal';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { MarketTable } from '../MarketTable';

interface MarketModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const MarketModal = ({ isModalOpen, setIsModalOpen }: MarketModalProps) => {
  const dispatch = useAppDispatch();

  const error = useAppSelector(resourcesSlice.selectors.selectResourcesError);

  const onCloseMarket = useCallback(() => {
    dispatch(clearResourcesError());
    setIsModalOpen(false);
  }, [dispatch, clearResourcesError]);

  return (
    <Modal
      title="Market"
      description="Sell resources and earn money. You can enter amount of resources in the field or scroll your mouse wheel"
      displayResourcesPanel
      error={error}
      isOpen={isModalOpen}
      onClose={onCloseMarket}
    >
      <MarketTable />
    </Modal>
  );
};
