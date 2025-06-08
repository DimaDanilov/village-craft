import { useAppSelector } from '@store';
import { RESOURCE_INFOS, resourcesSlice } from '@features/resources/model';
import { ResourceCard } from '../ResourceCard';
import type { ResourceCardFlexDirection, ResourceCardImageWidth } from '../ResourceCard';

interface WoodStatsProps {
  flexDirection: ResourceCardFlexDirection;
  imageWidth: ResourceCardImageWidth;
}

export const WoodStats = ({ flexDirection, imageWidth }: WoodStatsProps) => {
  const woodCount = useAppSelector((state) => resourcesSlice.selectors.selectResourceCount(state, 'wood'));
  return (
    <ResourceCard
      resourceCount={woodCount}
      flexDirection={flexDirection}
      imageSrc={RESOURCE_INFOS.wood.imageSrc}
      imageWidth={imageWidth}
    />
  );
};
