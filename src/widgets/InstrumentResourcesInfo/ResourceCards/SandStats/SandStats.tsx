import { RESOURCE_INFOS, resourcesSlice } from '@features/resources/model';
import { useAppSelector } from '@store';
import { ResourceCard } from '../ResourceCard';
import type { ResourceCardFlexDirection, ResourceCardImageWidth } from '../ResourceCard';

interface SandStatsProps {
  flexDirection: ResourceCardFlexDirection;
  imageWidth: ResourceCardImageWidth;
}

export const SandStats = ({ flexDirection, imageWidth }: SandStatsProps) => {
  const sandCount = useAppSelector((state) => resourcesSlice.selectors.selectResourceCount(state, 'sand'));
  return (
    <ResourceCard
      resourceCount={sandCount}
      flexDirection={flexDirection}
      imageSrc={RESOURCE_INFOS.sand.imageSrc}
      imageWidth={imageWidth}
    />
  );
};
