import { buildingsSlice } from '@features/buildings/model';
import { useAppSelector } from '@store';
import { useCallback, useState } from 'react';
import { ServiceBuilderModal } from './ServiceBuilderModal';
import { DECK_CARD_SERVICE_PALETTE, DeckAddCard } from '../DeckCard';

export const AddService = () => {
  const isEverythingBuild = useAppSelector(buildingsSlice.selectors.selectIsEveryBuildingBuilt);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openServiceBuilder = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return (
    !isEverythingBuild && (
      <>
        <DeckAddCard onClick={openServiceBuilder} title="Build a new building" palette={DECK_CARD_SERVICE_PALETTE} />
        <ServiceBuilderModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </>
    )
  );
};
