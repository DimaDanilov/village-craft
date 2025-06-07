import { useAppDispatch, useAppSelector } from '@store';
import { useCallback, useState } from 'react';
import { ForgeModal } from './ForgeModal';
import { clearInstrumentsError } from '@features/instruments/model';
import { BUILDING_INFOS, buildingsSlice } from '@features/buildings/model';
import { DeckServiceCard } from '@features/buildings/ui';

export const Forge = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const forgeLevel = useAppSelector((state) => buildingsSlice.selectors.selectBuildingLevel(state, 'forge'));

  const openForge = useCallback(() => {
    dispatch(clearInstrumentsError());
    setIsModalOpen(true);
  }, [dispatch]);

  return (
    <>
      <DeckServiceCard onClick={openForge} buildingInfo={BUILDING_INFOS.forge} serviceLevel={Number(forgeLevel)} />
      <ForgeModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
