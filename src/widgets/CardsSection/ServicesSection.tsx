import { Forge } from '@features/instruments/ui';
import { Market } from '@features/resources/ui';
import { CardsSection } from './DefaultCardsSection';
import { DECK_CARD_SERVICE_PALETTE } from '@widgets/DeckCard';
import { AddService, GateToTheFuture } from '@features/buildings/ui';
import { useTranslation } from 'react-i18next';

export const ServicesSection = () => {
  const { t } = useTranslation('Services');
  return (
    <CardsSection title={t('title')} textColorClassName={DECK_CARD_SERVICE_PALETTE.textColorClassName}>
      <Forge />
      <Market />
      <GateToTheFuture />
      <AddService />
    </CardsSection>
  );
};
