import { useAppSelector } from '@store';
import { INSTRUMENTS_IMAGES, instrumentsSlice } from '@features/instruments/model';
import { InstrumentCard } from '../InstrumentCard';

export const AxeStats = () => {
  const axeLevel = useAppSelector(instrumentsSlice.selectors.selectAxeLevel);
  return <InstrumentCard instrumentLevel={axeLevel} imageSrc={INSTRUMENTS_IMAGES.axe} />;
};
