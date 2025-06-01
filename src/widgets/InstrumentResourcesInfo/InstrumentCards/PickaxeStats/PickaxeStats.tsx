import { useAppSelector } from '@store';
import { INSTRUMENTS_IMAGES, instrumentsSlice } from '@features/instruments/model';
import { InstrumentCard } from '../InstrumentCard';

export const PickaxeStats = () => {
  const pickaxeLevel = useAppSelector((state) => instrumentsSlice.selectors.selectInstrumentLevel(state, 'pickaxe'));
  return <InstrumentCard instrumentLevel={pickaxeLevel} imageSrc={INSTRUMENTS_IMAGES.pickaxe} />;
};
