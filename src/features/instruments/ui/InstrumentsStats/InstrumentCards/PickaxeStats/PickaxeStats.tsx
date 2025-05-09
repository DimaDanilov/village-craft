import { useAppSelector } from '@store';
import PickaxeImageSrc from '@assets/instruments/Pickaxe.png';
import { instrumentsSlice } from '@features/instruments/model';

export const PickaxeStats = () => {
  const pickaxeLevel = useAppSelector(instrumentsSlice.selectors.selectPickaxeLevel);
  return (
    <div className="flex flex-row gap-1 items-center">
      <img src={PickaxeImageSrc} width="120px" />
      <span className="text-[60px]">: {pickaxeLevel}</span>
    </div>
  );
};
