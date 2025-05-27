import { Modal } from '@shared/Modal/Modal';
import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { ServiceBuilderTable } from '../ServiceBuilderTable';

interface AddServiceModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ServiceBuilderModal = ({ isModalOpen, setIsModalOpen }: AddServiceModalProps) => {
  const onCloseServiceBuilder = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <Modal title="Service Builder" isOpen={isModalOpen} onClose={onCloseServiceBuilder}>
      <ServiceBuilderTable onCloseModal={onCloseServiceBuilder} />
    </Modal>
  );
};
