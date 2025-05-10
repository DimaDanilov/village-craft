import { RESOURCES_IMAGES, resourcesSlice } from '@features/resources/model';
import { useAppSelector } from '@store';
import { ResourceCard } from '../ResourceCard';

export const StoneStats = () => {
  const stoneCount = useAppSelector(resourcesSlice.selectors.selectStoneCount);
  return <ResourceCard resourceCount={stoneCount} imageSrc={RESOURCES_IMAGES.stone} />;
};
