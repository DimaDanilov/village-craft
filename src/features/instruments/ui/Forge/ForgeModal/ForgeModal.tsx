import { Modal } from '@shared/Modal/Modal';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { clearInstrumentsError, instrumentsSlice } from '@features/instruments/model';
import { ForgeTable } from '../ForgeTable';

interface ForgeModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ForgeModal = ({ isModalOpen, setIsModalOpen }: ForgeModalProps) => {
  const dispatch = useAppDispatch();

  const error = useAppSelector(instrumentsSlice.selectors.selectInstrumentsError);

  const onCloseMarket = useCallback(() => {
    dispatch(clearInstrumentsError());
    setIsModalOpen(false);
  }, [dispatch, clearInstrumentsError]);

  return (
    <Modal title="Forge" error={error} isOpen={isModalOpen} onClose={onCloseMarket}>
      <ForgeTable />
    </Modal>
  );
};
