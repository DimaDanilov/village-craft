import { DECK_CARD_SERVICE_PALETTE } from './constants';
import { DeckCardDefault } from './DeckCardDefault';
import type { DeckCardInfo } from './types';

interface DeckServiceCardProps {
  onClick?: () => void;
  deckCardInfo: DeckCardInfo;
  serviceLevel: number;
}

export const DeckServiceCard = ({ onClick, deckCardInfo, serviceLevel }: DeckServiceCardProps) => {
  const isServiceExists = serviceLevel > 0;

  return (
    <>
      {isServiceExists ? (
        <DeckCardDefault deckCardInfo={deckCardInfo} deckCardPalette={DECK_CARD_SERVICE_PALETTE} onClick={onClick} />
      ) : (
        <span>{deckCardInfo.title} doesn't exist</span>
      )}
    </>
  );
};
