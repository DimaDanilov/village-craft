import { buildingsSlice } from '@features/buildings/model';
import { Forge } from '@features/instruments/ui';
import { Market } from '@features/resources/ui';
import { useAppSelector } from '@store';
import { CardsSection } from './DefaultCardsSection';
import { DeckBuildingCard } from '@widgets/DeckCard';

export const ServicesSection = () => {
  const isEverythingBuild = useAppSelector(buildingsSlice.selectors.selectIsEveryBuildingBuilt);

  return (
    <CardsSection title="Services">
      <Market />
      <Forge />
      {!isEverythingBuild && <DeckBuildingCard />}
    </CardsSection>
  );
};
