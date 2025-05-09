import { useAppSelector } from '@store';
import { resourcesSlice } from '@features/resources/model';
import WoodImageSrc from '@assets/resources/Wood.png';

export const WoodStats = () => {
  const woodCount = useAppSelector(resourcesSlice.selectors.selectWoodCount);
  return (
    <div className="flex flex-row gap-1 items-center">
      <img src={WoodImageSrc} width="120px" />
      <span className="text-[60px]">: {woodCount}</span>
    </div>
  );
};
