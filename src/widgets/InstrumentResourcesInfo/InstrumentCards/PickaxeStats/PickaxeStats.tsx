import { useAppSelector } from '@store';
import { INSTRUMENTS_IMAGES, instrumentsSlice } from '@features/instruments/model';
import { InstrumentCard } from '../InstrumentCard';

export const PickaxeStats = () => {
  const pickaxeLevel = useAppSelector(instrumentsSlice.selectors.selectPickaxeLevel);
  return <InstrumentCard instrumentLevel={pickaxeLevel} imageSrc={INSTRUMENTS_IMAGES.pickaxe} />;
};
