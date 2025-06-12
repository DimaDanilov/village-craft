import { useAppSelector } from '@store';
import { INSTRUMENT_INFOS, instrumentsSlice } from '@features/instruments/model';
import { InstrumentCard } from '../InstrumentCard';

export const ShovelStats = () => {
  const shovelLevel = useAppSelector((state) => instrumentsSlice.selectors.selectInstrumentLevel(state, 'shovel'));
  return <InstrumentCard instrumentLevel={shovelLevel} imageSrc={INSTRUMENT_INFOS.shovel.imageSrc} />;
};
