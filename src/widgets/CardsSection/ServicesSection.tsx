import { Forge } from '@features/instruments/ui';
import { Market } from '@features/resources/ui';
import { CardsSection } from './DefaultCardsSection';
import { DECK_CARD_SERVICE_PALETTE } from '@widgets/DeckCard';
import { AddService } from '@features/buildings/ui';

export const ServicesSection = () => {
  return (
    <CardsSection title="Services" textColorClassName={DECK_CARD_SERVICE_PALETTE.textColorClassName}>
      <Forge />
      <Market />
      <AddService />
    </CardsSection>
  );
};
