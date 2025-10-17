import { mineResourcesWithInstrument, RESOURCE_INFOS } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import AxeIcon from '@assets/icons/Axe.svg?react';
import { DeckResourceCard } from '@features/buildings/ui';
import { BUILDING_INFOS } from '@features/buildings/model';
import { INSTRUMENT_INFOS, instrumentsSlice } from '@features/instruments/model';

export const Forest = () => {
  const dispatch = useAppDispatch();

  const axeCurrentLevel = useAppSelector((state) => instrumentsSlice.selectors.selectInstrumentLevel(state, 'axe'));
  const woodMiningAmount = INSTRUMENT_INFOS.axe.levelEfficiency[axeCurrentLevel];

  const chopWood = useCallback(() => dispatch(mineResourcesWithInstrument('wood')), [dispatch]);

  return (
    <DeckResourceCard
      onClick={chopWood}
      buildingInfo={BUILDING_INFOS.forest}
      InstrumentIconComponent={AxeIcon}
      resourceImageSrc={RESOURCE_INFOS.wood.imageSrc}
      resourceMiningAmount={woodMiningAmount}
    />
  );
};
