import { buildingsSlice } from '@features/buildings/model';
import { Forge } from '@features/instruments/ui';
import { Market } from '@features/resources/ui';
import { useAppSelector } from '@store';
import { CardsSection } from './DefaultCardsSection';
import { DECK_CARD_SERVICE_PALETTE, DeckBuildingCard } from '@widgets/DeckCard';

export const ServicesSection = () => {
  const isEverythingBuild = useAppSelector(buildingsSlice.selectors.selectIsEveryBuildingBuilt);

  return (
    <CardsSection title="Services" textColorClassName={DECK_CARD_SERVICE_PALETTE.textColorClassName}>
      <Market />
      <Forge />
      {!isEverythingBuild && <DeckBuildingCard />}
    </CardsSection>
  );
};
