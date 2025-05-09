import { resourcesSlice } from '@features/resources/model';
import { useAppSelector } from '@store';
import CoinsImageSrc from '@assets/resources/Coins.png';
import { ResourceCard } from '../ResourceCard';

export const CoinsStats = () => {
  const coinsCount = useAppSelector(resourcesSlice.selectors.selectCoinsCount);
  return <ResourceCard resourceCount={coinsCount} imageSrc={CoinsImageSrc} />;
};
