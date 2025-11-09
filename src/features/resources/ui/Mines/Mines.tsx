import { mineResourcesWithInstrument, RESOURCE_INFOS } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import PickaxeIcon from '@assets/icons/Pickaxe.svg?react';
import { DeckResourceCard } from '@features/buildings/ui';
import { BUILDING_INFOS } from '@features/buildings/model';
import { instrumentsSlice } from '@features/instruments/model';
import { FlippableCard, useFlippableCard } from '@features/buildings/ui/FlippableCard';

export const Mines = () => {
  const dispatch = useAppDispatch();
  const { cardSide, animationStatus, handleRollCard } = useFlippableCard();

  const pickAxeCurrentLevel = useAppSelector((state) =>
    instrumentsSlice.selectors.selectInstrumentLevel(state, 'pickaxe'),
  );

  const stoneMiningAmount = RESOURCE_INFOS.stone.resourceMinedByInstrumentLevel?.[pickAxeCurrentLevel] || 0;
  const ironMiningAmount = RESOURCE_INFOS.ironOre.resourceMinedByInstrumentLevel?.[pickAxeCurrentLevel] || 0;

  const mineStone = useCallback(() => {
    dispatch(mineResourcesWithInstrument('stone'));
  }, [dispatch]);

  const mineIron = useCallback(() => {
    dispatch(mineResourcesWithInstrument('ironOre'));
  }, [dispatch]);

  return (
    <div>
      <FlippableCard animationStatus={animationStatus}>
        <DeckResourceCard
          onClick={cardSide === 'front' ? mineStone : mineIron}
          buildingInfo={BUILDING_INFOS[cardSide === 'front' ? 'mines' : 'deepMines']}
          InstrumentIconComponent={PickaxeIcon}
          resourceImageSrc={RESOURCE_INFOS[cardSide === 'front' ? 'stone' : 'ironOre'].imageSrc}
          resourceMiningAmount={cardSide === 'front' ? stoneMiningAmount : ironMiningAmount}
          onRollCard={handleRollCard}
          rollAnimationStatus={animationStatus}
        />
      </FlippableCard>
    </div>
  );
};
