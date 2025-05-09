import { resourcesSlice } from '@features/resources/model';
import { useAppSelector } from '@store';
import StoneImageSrc from '@assets/resources/Stone.png';
import { ResourceCard } from '../ResourceCard';

export const StoneStats = () => {
  const stoneCount = useAppSelector(resourcesSlice.selectors.selectStoneCount);
  return <ResourceCard resourceCount={stoneCount} imageSrc={StoneImageSrc} />;
};
