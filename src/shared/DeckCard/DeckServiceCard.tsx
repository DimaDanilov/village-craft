import { DECK_CARD_SERVICE_PALETTE } from './constants';
import { DeckCardHeader } from './DeckCardHeader';

interface DeckServiceCardProps {
  onClick?: () => void;
  imageSrc: string;
  title: string;
  description: string;
}

export const DeckServiceCard = ({ onClick, imageSrc, title, description }: DeckServiceCardProps) => {
  const { bgColorClassName, textColorClassName, borderColorClassName } = DECK_CARD_SERVICE_PALETTE;

  return (
    <div
      className={`flex flex-col justify-between w-60 h-90 ${bgColorClassName} ${textColorClassName} ${borderColorClassName} border-1 rounded-xl transition ease-in-out hover:scale-105 select-none cursor-pointer`}
      onClick={onClick}
    >
      <DeckCardHeader title={title} description={description} imageSrc={imageSrc} />
    </div>
  );
};
