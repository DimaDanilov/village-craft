import { Modal } from '@shared/Modal/Modal';
import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { ServiceBuilderTable } from '../ServiceBuilderTable';
import { useAppDispatch, useAppSelector } from '@store';
import { buildingsSlice, clearBuildingsError } from '@features/buildings/model';

interface AddServiceModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ServiceBuilderModal = ({ isModalOpen, setIsModalOpen }: AddServiceModalProps) => {
  const dispatch = useAppDispatch();

  const error = useAppSelector(buildingsSlice.selectors.selectBuildingsError);

  const onCloseServiceBuilder = useCallback(() => {
    dispatch(clearBuildingsError());
    setIsModalOpen(false);
  }, [dispatch, setIsModalOpen]);

  return (
    <Modal
      title="Service Builder"
      description="Create new building to open new resources and features"
      displayResourcesPanel
      error={error}
      isOpen={isModalOpen}
      onClose={onCloseServiceBuilder}
    >
      <ServiceBuilderTable />
    </Modal>
  );
};
