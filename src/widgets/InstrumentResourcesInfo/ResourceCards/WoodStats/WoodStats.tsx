import { useAppSelector } from '@store';
import { RESOURCES_IMAGES, resourcesSlice } from '@features/resources/model';
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
      imageSrc={RESOURCES_IMAGES.wood}
      imageWidth={imageWidth}
    />
  );
};
