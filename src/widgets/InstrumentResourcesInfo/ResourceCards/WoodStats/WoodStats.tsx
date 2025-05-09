import { useAppSelector } from '@store';
import { resourcesSlice } from '@features/resources/model';
import WoodImageSrc from '@assets/resources/Wood.png';
import { ResourceCard } from '../ResourceCard';

export const WoodStats = () => {
  const woodCount = useAppSelector(resourcesSlice.selectors.selectWoodCount);
  return <ResourceCard resourceCount={woodCount} imageSrc={WoodImageSrc} />;
};
