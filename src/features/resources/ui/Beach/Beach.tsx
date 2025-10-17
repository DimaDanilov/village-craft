import { mineResourcesWithInstrument, RESOURCE_INFOS } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import ShovelIcon from '@assets/icons/Shovel.svg?react';
import { DeckResourceCard } from '@features/buildings/ui';
import { BUILDING_INFOS } from '@features/buildings/model';
import { INSTRUMENT_INFOS, instrumentsSlice } from '@features/instruments/model';

export const Beach = () => {
  const dispatch = useAppDispatch();

  const shovelCurrentLevel = useAppSelector((state) =>
    instrumentsSlice.selectors.selectInstrumentLevel(state, 'shovel'),
  );
  const sandMiningAmount = INSTRUMENT_INFOS.shovel.levelEfficiency[shovelCurrentLevel];

  const digSand = useCallback(() => dispatch(mineResourcesWithInstrument('sand')), [dispatch]);

  return (
    <DeckResourceCard
      onClick={digSand}
      buildingInfo={BUILDING_INFOS.beach}
      InstrumentIconComponent={ShovelIcon}
      resourceImageSrc={RESOURCE_INFOS.sand.imageSrc}
      resourceMiningAmount={sandMiningAmount}
    />
  );
};
