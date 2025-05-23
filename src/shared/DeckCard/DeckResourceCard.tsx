import { DECK_CARD_RESOURCE_PALETTE } from './constants';
import { DeckCardHeader } from './DeckCardHeader';
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
  const { title, description, imageSrc } = deckCardInfo;
  const { bgColorClassName, textColorClassName, borderColorClassName, iconStrokeColorClassName } =
    DECK_CARD_RESOURCE_PALETTE;

  return (
    <div
      className={`flex flex-col justify-between w-60 h-90 ${bgColorClassName} ${textColorClassName} ${borderColorClassName} border-1 rounded-xl transition ease-in-out hover:scale-105 select-none cursor-pointer`}
      onClick={onClick}
    >
      <DeckCardHeader title={title} description={description} imageSrc={imageSrc} />
      <div className="flex flex-row justify-end items-center mx-3 my-5 gap-1">
        <ResourceIconComponent
          width={30}
          height={30}
          className={`fill-transparent ${iconStrokeColorClassName}`}
          strokeWidth="60px"
        />
        <span>{resourceCount}</span>
      </div>
    </div>
  );
};
