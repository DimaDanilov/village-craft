import { Forest, Mines } from '@features/resources/ui';
import { CardsSection } from './DefaultCardsSection';
import { DECK_CARD_RESOURCE_PALETTE } from '@widgets/DeckCard';

export const ResourcesSection = () => {
  return (
    <CardsSection title="Resources" textColorClassName={DECK_CARD_RESOURCE_PALETTE.textColorClassName}>
      <Forest />
      <Mines />
    </CardsSection>
  );
};
