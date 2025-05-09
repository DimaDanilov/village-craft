import { useAppSelector } from '@store';
import AxeImageSrc from '@assets/instruments/Axe.png';
import { instrumentsSlice } from '@features/instruments/model';

export const AxeStats = () => {
  const axeLevel = useAppSelector(instrumentsSlice.selectors.selectAxeLevel);
  return (
    <div className="flex flex-row gap-1 items-center">
      <img src={AxeImageSrc} width="120px" />
      <span className="text-[60px]">: {axeLevel}</span>
    </div>
  );
};
