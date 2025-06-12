import { Forest, Mines } from '@features/resources/ui';
import { CardsSection } from './DefaultCardsSection';
import { useTranslation } from 'react-i18next';
import { DECK_CARD_RESOURCE_PALETTE } from '../DeckCard';

export const ResourcesSection = () => {
  const { t } = useTranslation('CardsSection');
  return (
    <CardsSection
      title={t('deckCardArea.resources.title')}
      textColorClassName={DECK_CARD_RESOURCE_PALETTE.textColorClassName}
    >
      <Forest />
      <Mines />
    </CardsSection>
  );
};
