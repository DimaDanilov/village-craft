import { useAppSelector } from '@store';
import { BUILDING_INFOS, buildingsSlice } from '@features/buildings/model';
import { DeckServiceCard } from '../DeckCard';
import { GateToTheFutureModal } from './GateToTheFutureModal';
import { useCallback, useState } from 'react';

export const GateToTheFuture = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const gateToTheFutureLevel = useAppSelector((state) =>
    buildingsSlice.selectors.selectBuildingLevel(state, 'gateToTheFuture'),
  );
  const isGateToTheFutureBuilt = Number(gateToTheFutureLevel) > 0;

  const openGateToTheFuture = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return (
    isGateToTheFutureBuilt && (
      <>
        <div>
          <DeckServiceCard
            buildingInfo={BUILDING_INFOS.gateToTheFuture}
            serviceLevel={Number(gateToTheFutureLevel)}
            onClick={openGateToTheFuture}
          />
          <GateToTheFutureModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
      </>
    )
  );
};
