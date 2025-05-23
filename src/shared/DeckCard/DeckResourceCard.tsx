import { DECK_CARD_RESOURCE_PALETTE } from './constants';
import { DeckCardDefault } from './DeckCardDefault';
import type { DeckCardInfo } from './types';

interface DeckResourceCardProps {
  onClick?: () => void;
  deckCardInfo: DeckCardInfo;
  resourceCount: number;
  ResourceIconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const DeckResourceCard = ({
  onClick,
  deckCardInfo,
  resourceCount,
  ResourceIconComponent,
}: DeckResourceCardProps) => {
  const { iconStrokeColorClassName } = DECK_CARD_RESOURCE_PALETTE;

  return (
    <DeckCardDefault deckCardInfo={deckCardInfo} deckCardPalette={DECK_CARD_RESOURCE_PALETTE} onClick={onClick}>
      <div className="flex flex-row justify-end items-center mx-3 my-5 gap-1">
        <ResourceIconComponent
          width={30}
          height={30}
          className={`fill-transparent ${iconStrokeColorClassName}`}
          strokeWidth="60px"
        />
        <span>{resourceCount}</span>
      </div>
    </DeckCardDefault>
  );
};
