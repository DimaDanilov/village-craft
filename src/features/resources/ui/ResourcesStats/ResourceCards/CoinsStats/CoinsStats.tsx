import { resourcesSlice } from '@features/resources/model';
import { useAppSelector } from '@store';
import CoinsImageSrc from '@assets/resources/Coins.png';

export const CoinsStats = () => {
  const coinsCount = useAppSelector(resourcesSlice.selectors.selectCoinsCount);

  return (
    <div className="flex flex-row gap-1 items-center">
      <img src={CoinsImageSrc} width="120px" />
      <span className="text-[60px]">: {coinsCount}</span>
    </div>
  );
};
