import { useAppSelector } from '@store';
import { BUILDING_INFOS, buildingsSlice } from '@features/buildings/model';
import { DeckServiceCard } from '../DeckCard';

export const GateToTheFuture = () => {
  const gateToTheFutureLevel = useAppSelector((state) =>
    buildingsSlice.selectors.selectBuildingLevel(state, 'gateToTheFuture'),
  );

  return (
    <>
      <DeckServiceCard buildingInfo={BUILDING_INFOS.gateToTheFuture} serviceLevel={Number(gateToTheFutureLevel)} />
    </>
  );
};
