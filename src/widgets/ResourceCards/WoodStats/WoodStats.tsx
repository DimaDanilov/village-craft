import { useAppSelector } from '@store';
import { RESOURCE_INFOS, resourcesSlice } from '@features/resources/model';
import { ResourceStatsCard } from '../ResourceStatsCard';
import type { ResourceCardFlexDirection } from '../ResourceStatsCard';

interface WoodStatsProps {
  flexDirection: ResourceCardFlexDirection;
}

export const WoodStats = ({ flexDirection }: WoodStatsProps) => {
  const woodCount = useAppSelector((state) => resourcesSlice.selectors.selectResourceCount(state, 'wood'));
  return (
    <ResourceStatsCard
      resourceCount={woodCount}
      flexDirection={flexDirection}
      imageSrc={RESOURCE_INFOS.wood.imageSrc}
    />
  );
};
