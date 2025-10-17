import { mineResourcesWithInstrument, RESOURCE_INFOS } from '@features/resources/model';
import { useAppDispatch, useAppSelector } from '@store';
import { useCallback } from 'react';
import PickaxeIcon from '@assets/icons/Pickaxe.svg?react';
import { DeckResourceCard } from '@features/buildings/ui';
import { BUILDING_INFOS } from '@features/buildings/model';
import { INSTRUMENT_INFOS, instrumentsSlice } from '@features/instruments/model';

export const Mines = () => {
  const dispatch = useAppDispatch();
  
  const pickAxeCurrentLevel = useAppSelector((state) =>
    instrumentsSlice.selectors.selectInstrumentLevel(state, 'pickaxe'),
  );
  const stoneMiningAmount = INSTRUMENT_INFOS.pickaxe.levelEfficiency[pickAxeCurrentLevel];

  const mineStone = useCallback(() => dispatch(mineResourcesWithInstrument('stone')), [dispatch]);

  return (
    <DeckResourceCard
      onClick={mineStone}
      buildingInfo={BUILDING_INFOS.mines}
      InstrumentIconComponent={PickaxeIcon}
      resourceImageSrc={RESOURCE_INFOS.stone.imageSrc}
      resourceMiningAmount={stoneMiningAmount}
    />
  );
};
