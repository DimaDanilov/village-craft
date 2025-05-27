import { buildingsSlice } from '@features/buildings/model';
import { Button } from '@shared/Button/Button';
import { Modal } from '@shared/Modal/Modal';
import { useAppDispatch } from '@store';
import { useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';

interface AddServiceModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ServiceBuilderModal = ({ isModalOpen, setIsModalOpen }: AddServiceModalProps) => {
  const dispatch = useAppDispatch();

  const onCloseServiceBuilder = useCallback(() => {
    setIsModalOpen(false);
  }, [dispatch]);

  const onBuildForge = useCallback(() => {
    dispatch(buildingsSlice.actions.upgradeForge());
    onCloseServiceBuilder();
  }, [dispatch]);

  const onBuildMarket = useCallback(() => {
    dispatch(buildingsSlice.actions.upgradeMarket());
    onCloseServiceBuilder();
  }, [dispatch]);

  return (
    <Modal title="Service Builder" isOpen={isModalOpen} onClose={onCloseServiceBuilder}>
      <div className="flex flex-col gap-2">
        <Button onClick={onBuildForge}>Build Forge</Button>
        <Button onClick={onBuildMarket}>Build Market</Button>
      </div>
    </Modal>
  );
};
