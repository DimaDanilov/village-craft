import { RESOURCES_IMAGES, resourcesSlice } from '@features/resources/model';
import { useAppSelector } from '@store';
import { ResourceCard } from '../ResourceCard';

export const CoinsStats = () => {
  const coinsCount = useAppSelector(resourcesSlice.selectors.selectCoinsCount);
  return <ResourceCard resourceCount={coinsCount} imageSrc={RESOURCES_IMAGES.coins} />;
};
