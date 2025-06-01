import { useAppSelector } from '@store';
import { buildingsSlice } from '@features/buildings/model';
import { DECK_CARD_INFOS, DeckServiceCard } from '@widgets';

export const GateToTheFuture = () => {
  const gateToTheFutureLevel = useAppSelector((state) =>
    buildingsSlice.selectors.selectBuildingLevel(state, 'gateToTheFuture'),
  );

  return (
    <>
      <DeckServiceCard deckCardInfo={DECK_CARD_INFOS.gateToTheFuture} serviceLevel={Number(gateToTheFutureLevel)} />
    </>
  );
};
