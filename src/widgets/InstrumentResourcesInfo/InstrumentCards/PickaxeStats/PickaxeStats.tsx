import { useAppSelector } from '@store';
import PickaxeImageSrc from '@assets/instruments/Pickaxe.png';
import { instrumentsSlice } from '@features/instruments/model';
import { InstrumentCard } from '../InstrumentCard';

export const PickaxeStats = () => {
  const pickaxeLevel = useAppSelector(instrumentsSlice.selectors.selectPickaxeLevel);
  return <InstrumentCard instrumentLevel={pickaxeLevel} imageSrc={PickaxeImageSrc} />;
};
