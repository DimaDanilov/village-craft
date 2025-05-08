import { resourcesSlice } from '@features/resources/model';
import { useAppSelector } from '@store';
import StoneImageSrc from '@assets/Stone.png';

export const StoneStats = () => {
  const stoneCount = useAppSelector(resourcesSlice.selectors.selectStoneCount);

  return (
    <div className="flex flex-row gap-1 items-center">
      <img src={StoneImageSrc} width="120px" />
      <span className="text-[60px]">: {stoneCount}</span>
    </div>
  );
};
