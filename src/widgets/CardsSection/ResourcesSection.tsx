import { Forest, Mines } from '@features/resources/ui';
import { CardsSection } from './DefaultCardsSection';

export const ResourcesSection = () => {
  return (
    <CardsSection title="Resources">
      <Forest />
      <Mines />
    </CardsSection>
  );
};
