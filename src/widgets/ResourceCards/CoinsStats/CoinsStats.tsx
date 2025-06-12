import { RESOURCE_INFOS, resourcesSlice } from '@features/resources/model';
import { useAppSelector } from '@store';
import { ResourceStatsCard, type ResourceCardFlexDirection } from '../ResourceStatsCard';

interface CoinsStatsProps {
  flexDirection: ResourceCardFlexDirection;
}

export const CoinsStats = ({ flexDirection }: CoinsStatsProps) => {
  const coinsCount = useAppSelector((state) => resourcesSlice.selectors.selectResourceCount(state, 'coins'));
  return (
    <ResourceStatsCard
      resourceCount={coinsCount}
      flexDirection={flexDirection}
      imageSrc={RESOURCE_INFOS.coins.imageSrc}
    />
  );
};
