import { RESOURCES_IMAGES, resourcesSlice } from '@features/resources/model';
import { useAppSelector } from '@store';
import { ResourceCard, type ResourceCardFlexDirection, type ResourceCardImageWidth } from '../ResourceCard';

interface CoinsStatsProps {
  flexDirection: ResourceCardFlexDirection;
  imageWidth: ResourceCardImageWidth;
}

export const CoinsStats = ({ flexDirection, imageWidth }: CoinsStatsProps) => {
  const coinsCount = useAppSelector((state) => resourcesSlice.selectors.selectResourceCount(state, 'coins'));
  return (
    <ResourceCard
      resourceCount={coinsCount}
      flexDirection={flexDirection}
      imageSrc={RESOURCES_IMAGES.coins}
      imageWidth={imageWidth}
    />
  );
};
