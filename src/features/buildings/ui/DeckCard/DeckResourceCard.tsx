import type { BuildingInfo } from '@features/buildings/model';
import { DECK_CARD_RESOURCE_PALETTE } from './constants';
import { DeckCardDefault } from './DeckCardDefault';

interface DeckResourceCardProps {
  onClick?: () => void;
  buildingInfo: BuildingInfo;
  resourceCount: number;
  ResourceIconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const DeckResourceCard = ({
  onClick,
  buildingInfo,
  resourceCount,
  ResourceIconComponent,
}: DeckResourceCardProps) => {
  const { iconStrokeColorClassName } = DECK_CARD_RESOURCE_PALETTE;

  return (
    <DeckCardDefault buildingInfo={buildingInfo} deckCardPalette={DECK_CARD_RESOURCE_PALETTE} onClick={onClick}>
      <div className="flex flex-row justify-end items-center mx-3 mt-5 gap-1">
        <ResourceIconComponent
          width={25}
          height={25}
          className={`fill-transparent ${iconStrokeColorClassName}`}
          strokeWidth="60px"
        />
        <span className='text-sm'>{resourceCount}</span>
      </div>
    </DeckCardDefault>
  );
};
