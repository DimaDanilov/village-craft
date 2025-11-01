import { mineResourcesWithInstrument, RESOURCE_INFOS } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback, useState } from 'react';
import PickaxeIcon from '@assets/icons/Pickaxe.svg?react';
import { DeckResourceCard } from '@features/buildings/ui';
import { BUILDING_INFOS } from '@features/buildings/model';
import { instrumentsSlice } from '@features/instruments/model';

export const Mines = () => {
  const dispatch = useAppDispatch();

  const [cardSide, setCardSide] = useState<'front' | 'back'>('front');
  const handleRollCard = useCallback(() => {
    setCardSide((prevSide) => (prevSide === 'front' ? 'back' : 'front'));
  }, []);

  const pickAxeCurrentLevel = useAppSelector((state) =>
    instrumentsSlice.selectors.selectInstrumentLevel(state, 'pickaxe'),
  );

  const stoneMiningAmount = RESOURCE_INFOS.stone.resourceMinedByInstrumentLevel?.[pickAxeCurrentLevel] || 0;
  const ironMiningAmount = RESOURCE_INFOS.iron.resourceMinedByInstrumentLevel?.[pickAxeCurrentLevel] || 0;

  const mineStone = useCallback(() => {
    dispatch(mineResourcesWithInstrument('stone'));
  }, [dispatch]);

  const mineIron = useCallback(() => {
    dispatch(mineResourcesWithInstrument('iron'));
  }, [dispatch]);

  return (
    <div>
      {cardSide === 'front' ? (
        <DeckResourceCard
          onClick={mineStone}
          buildingInfo={BUILDING_INFOS.mines}
          InstrumentIconComponent={PickaxeIcon}
          resourceImageSrc={RESOURCE_INFOS.stone.imageSrc}
          resourceMiningAmount={stoneMiningAmount}
        />
      ) : (
        <DeckResourceCard
          onClick={mineIron}
          buildingInfo={BUILDING_INFOS.deepMines}
          InstrumentIconComponent={PickaxeIcon}
          resourceImageSrc={RESOURCE_INFOS.iron.imageSrc}
          resourceMiningAmount={ironMiningAmount}
        />
      )}
      <button onClick={handleRollCard}>Roll Card</button>
    </div>
  );
};
