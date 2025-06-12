import { Forge } from '@features/instruments/ui';
import { Market } from '@features/resources/ui';
import { CardsSection } from './DefaultCardsSection';
import { AddService, DECK_CARD_SERVICE_PALETTE, GateToTheFuture } from '@features/buildings/ui';
import { useTranslation } from 'react-i18next';

export const ServicesSection = () => {
  const { t } = useTranslation('CardsSection');
  return (
    <CardsSection
      title={t('deckCardArea.services.title')}
      textColorClassName={DECK_CARD_SERVICE_PALETTE.textColorClassName}
    >
      <Forge />
      <Market />
      <GateToTheFuture />
      <AddService />
    </CardsSection>
  );
};
