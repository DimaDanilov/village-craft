import { clearResourcesError } from '@features/resources/model';
import { useCallback, useState } from 'react';
import { MarketModal } from './MarketModal';
import { useAppDispatch, useAppSelector } from '@store';
import { BUILDING_INFOS, buildingsSlice } from '@features/buildings/model';
import { DeckServiceCard } from '@features/buildings/ui';

export const Market = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const marketLevel = useAppSelector((state) => buildingsSlice.selectors.selectBuildingLevel(state, 'market'));

  const openMarket = useCallback(() => {
    dispatch(clearResourcesError());
    setIsModalOpen(true);
  }, [dispatch]);

  return (
    <>
      <DeckServiceCard onClick={openMarket} buildingInfo={BUILDING_INFOS.market} serviceLevel={Number(marketLevel)} />
      <MarketModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
