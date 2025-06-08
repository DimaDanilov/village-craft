import { Modal } from '@shared/Modal/Modal';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { clearInstrumentsError, instrumentsSlice } from '@features/instruments/model';
import { ForgeTable } from '../ForgeTable';
import { useTranslation } from 'react-i18next';

interface ForgeModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ForgeModal = ({ isModalOpen, setIsModalOpen }: ForgeModalProps) => {
  const { t } = useTranslation('Buildings');
  const dispatch = useAppDispatch();

  const error = useAppSelector(instrumentsSlice.selectors.selectInstrumentsError);

  const onCloseForge = useCallback(() => {
    dispatch(clearInstrumentsError());
    setIsModalOpen(false);
  }, [dispatch, setIsModalOpen]);

  return (
    <Modal
      title={t('buildings.forge.title')}
      description={t('buildings.forge.description')}
      displayResourcesPanel
      error={error}
      isOpen={isModalOpen}
      onClose={onCloseForge}
    >
      <ForgeTable />
    </Modal>
  );
};
