import { useAppSelector } from '@store';
import { INSTRUMENT_INFOS, instrumentsSlice } from '@features/instruments/model';
import { InstrumentCard } from '../InstrumentCard';

export const AxeStats = () => {
  const axeLevel = useAppSelector((state) => instrumentsSlice.selectors.selectInstrumentLevel(state, 'axe'));
  return <InstrumentCard instrumentLevel={axeLevel} imageSrc={INSTRUMENT_INFOS.axe.imageSrc} />;
};
