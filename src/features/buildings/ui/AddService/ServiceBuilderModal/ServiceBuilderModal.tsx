import { buildingsSlice } from '@features/buildings/model';
import { Button } from '@shared/Button/Button';
import { Modal } from '@shared/Modal/Modal';
import { useAppDispatch, useAppSelector } from '@store';
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
    dispatch(buildingsSlice.actions.buildForge());
    onCloseServiceBuilder();
  }, [dispatch]);

  const onBuildMarket = useCallback(() => {
    dispatch(buildingsSlice.actions.buildMarket());
    onCloseServiceBuilder();
  }, [dispatch]);

  const forgeLevel = useAppSelector(buildingsSlice.selectors.selectForgeLevel);
  const isBuildForgeDisabled = Number(forgeLevel) >= 1;

  const marketLevel = useAppSelector(buildingsSlice.selectors.selectMarketLevel);
  const isBuildMarketDisabled = Number(marketLevel) >= 1;

  return (
    <Modal title="Service Builder" isOpen={isModalOpen} onClose={onCloseServiceBuilder}>
      <div className="flex flex-col gap-2">
        <Button onClick={onBuildForge} disabled={isBuildForgeDisabled}>
          Build Forge
        </Button>
        <Button onClick={onBuildMarket} disabled={isBuildMarketDisabled}>
          Build Market
        </Button>
      </div>
    </Modal>
  );
};
