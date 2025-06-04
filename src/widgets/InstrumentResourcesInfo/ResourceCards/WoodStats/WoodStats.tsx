import { useAppSelector } from '@store';
import { RESOURCES_IMAGES, resourcesSlice } from '@features/resources/model';
import { ResourceCard } from '../ResourceCard';

export const WoodStats = () => {
  const woodCount = useAppSelector((state) => resourcesSlice.selectors.selectResourceCount(state, 'wood'));
  return <ResourceCard resourceCount={woodCount} imageSrc={RESOURCES_IMAGES.wood} />;
};
