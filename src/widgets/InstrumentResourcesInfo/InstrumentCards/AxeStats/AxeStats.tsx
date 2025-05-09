import { useAppSelector } from '@store';
import AxeImageSrc from '@assets/instruments/Axe.png';
import { instrumentsSlice } from '@features/instruments/model';
import { InstrumentCard } from '../InstrumentCard';

export const AxeStats = () => {
  const axeLevel = useAppSelector(instrumentsSlice.selectors.selectAxeLevel);
  return <InstrumentCard instrumentLevel={axeLevel} imageSrc={AxeImageSrc} />;
};
