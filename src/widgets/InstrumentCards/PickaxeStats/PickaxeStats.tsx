import { useAppSelector } from '@store';
import { INSTRUMENT_INFOS, instrumentsSlice } from '@features/instruments/model';
import { InstrumentCard } from '../InstrumentCard';

export const PickaxeStats = () => {
  const pickaxeLevel = useAppSelector((state) => instrumentsSlice.selectors.selectInstrumentLevel(state, 'pickaxe'));
  return <InstrumentCard instrumentLevel={pickaxeLevel} imageSrc={INSTRUMENT_INFOS.pickaxe.imageSrc} />;
};
