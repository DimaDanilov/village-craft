import { Forest, Mines } from '@features/resources/ui';
import { CardsSection } from './DefaultCardsSection';
import { DECK_CARD_RESOURCE_PALETTE } from '@widgets/DeckCard';
import { useTranslation } from 'react-i18next';

export const ResourcesSection = () => {
  const { t } = useTranslation('Resources');
  return (
    <CardsSection title={t('title')} textColorClassName={DECK_CARD_RESOURCE_PALETTE.textColorClassName}>
      <Forest />
      <Mines />
    </CardsSection>
  );
};
