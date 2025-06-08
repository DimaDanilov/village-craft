import { RESOURCE_INFOS, resourcesSlice } from '@features/resources/model';
import { useAppSelector } from '@store';
import { ResourceCard } from '../ResourceCard';
import type { ResourceCardFlexDirection, ResourceCardImageWidth } from '../ResourceCard';

interface StoneStatsProps {
  flexDirection: ResourceCardFlexDirection;
  imageWidth: ResourceCardImageWidth;
}

export const StoneStats = ({ flexDirection, imageWidth }: StoneStatsProps) => {
  const stoneCount = useAppSelector((state) => resourcesSlice.selectors.selectResourceCount(state, 'stone'));
  return (
    <ResourceCard
      resourceCount={stoneCount}
      flexDirection={flexDirection}
      imageSrc={RESOURCE_INFOS.stone.imageSrc}
      imageWidth={imageWidth}
    />
  );
};
