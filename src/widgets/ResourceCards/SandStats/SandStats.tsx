import { RESOURCE_INFOS, resourcesSlice } from '@features/resources/model';
import { useAppSelector } from '@store';
import { ResourceStatsCard } from '../ResourceStatsCard';
import type { ResourceCardFlexDirection } from '../ResourceStatsCard';

interface SandStatsProps {
  flexDirection: ResourceCardFlexDirection;
}

export const SandStats = ({ flexDirection }: SandStatsProps) => {
  const sandCount = useAppSelector((state) => resourcesSlice.selectors.selectResourceCount(state, 'sand'));
  return (
    <ResourceStatsCard
      resourceCount={sandCount}
      flexDirection={flexDirection}
      imageSrc={RESOURCE_INFOS.sand.imageSrc}
    />
  );
};
