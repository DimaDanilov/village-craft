import { RESOURCE_INFOS, resourcesSlice } from '@features/resources/model';
import { useAppSelector } from '@store';
import { ResourceStatsCard } from '../ResourceStatsCard';
import type { ResourceCardFlexDirection } from '../ResourceStatsCard';

interface StoneStatsProps {
  flexDirection: ResourceCardFlexDirection;
}

export const StoneStats = ({ flexDirection }: StoneStatsProps) => {
  const stoneCount = useAppSelector((state) => resourcesSlice.selectors.selectResourceCount(state, 'stone'));
  return (
    <ResourceStatsCard
      resourceCount={stoneCount}
      flexDirection={flexDirection}
      imageSrc={RESOURCE_INFOS.stone.imageSrc}
    />
  );
};
