import { Modal } from '@shared/Modal/Modal';
import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { ServiceBuilderTable } from '../ServiceBuilderTable';
import { useAppDispatch, useAppSelector } from '@store';
import { buildingsSlice, clearBuildingsError } from '@features/buildings/model';
import { useTranslation } from 'react-i18next';

interface AddServiceModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ServiceBuilderModal = ({ isModalOpen, setIsModalOpen }: AddServiceModalProps) => {
  const { t } = useTranslation('Buildings');
  const dispatch = useAppDispatch();

  const error = useAppSelector(buildingsSlice.selectors.selectBuildingsError);

  const onCloseServiceBuilder = useCallback(() => {
    dispatch(clearBuildingsError());
    setIsModalOpen(false);
  }, [dispatch, setIsModalOpen]);

  return (
    <Modal
      title={t('addService.modal.title')}
      description={t('addService.modal.description')}
      displayResourcesPanel
      error={error}
      isOpen={isModalOpen}
      onClose={onCloseServiceBuilder}
    >
      <ServiceBuilderTable />
    </Modal>
  );
};
