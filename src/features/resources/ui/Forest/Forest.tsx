import { mineResourcesWithInstrument, RESOURCE_INFOS } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import AxeIcon from '@assets/icons/Axe.svg?react';
import { DeckResourceCard } from '@features/buildings/ui';
import { BUILDING_INFOS } from '@features/buildings/model';
import { instrumentsSlice } from '@features/instruments/model';
import { FlippableCard, useFlippableCard } from '@features/buildings/ui/FlippableCard';

export const Forest = () => {
  const dispatch = useAppDispatch();
  const { cardSide, animationStatus, animationDurationMs, handleRollCard } = useFlippableCard({
    animationDurationMs: 1000,
  });

  const axeCurrentLevel = useAppSelector((state) => instrumentsSlice.selectors.selectInstrumentLevel(state, 'axe'));

  const woodMiningAmount = RESOURCE_INFOS.wood.resourceMinedByInstrumentLevel?.[axeCurrentLevel] || 0;
  const hardwoodMiningAmount = RESOURCE_INFOS.hardwood.resourceMinedByInstrumentLevel?.[axeCurrentLevel] || 0;

  const chopWood = useCallback(() => dispatch(mineResourcesWithInstrument('wood')), [dispatch]);
  const chopHardwood = useCallback(() => dispatch(mineResourcesWithInstrument('hardwood')), [dispatch]);

  return (
    <FlippableCard animationStatus={animationStatus} animationDurationMs={animationDurationMs}>
      <DeckResourceCard
        onClick={cardSide === 'front' ? chopWood : chopHardwood}
        buildingInfo={BUILDING_INFOS[cardSide === 'front' ? 'forest' : 'forestDark']}
        InstrumentIconComponent={AxeIcon}
        resourceImageSrc={RESOURCE_INFOS[cardSide === 'front' ? 'wood' : 'hardwood'].imageSrc}
        resourceMiningAmount={cardSide === 'front' ? woodMiningAmount : hardwoodMiningAmount}
        onRollCard={handleRollCard}
        rollAnimationStatus={animationStatus}
      />
    </FlippableCard>
  );
};
