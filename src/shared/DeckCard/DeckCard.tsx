import { selectCardPalette } from './tools';
import type { DeckCardCategory, DeckCardPalette } from './types';

interface DeckCardProps {
  onClick?: () => void;
  imageSrc: string;
  title: string;
  description: string;
  cardCategory: DeckCardCategory;
}

export const DeckCard = ({ onClick, imageSrc, title, description, cardCategory }: DeckCardProps) => {
  const deckCardPalette: DeckCardPalette = selectCardPalette({ cardCategory });
  const { bgColorClassName, textColorClassName, borderColorClassName } = deckCardPalette;

  return (
    <div
      className={`flex flex-col w-60 ${bgColorClassName} ${textColorClassName} ${borderColorClassName} border-1 rounded-2xl transition ease-in-out hover:scale-105 select-none cursor-pointer`}
      onClick={onClick}
    >
      <img className="rounded-t-2xl" src={imageSrc} alt={title} />
      <div className="flex flex-col gap-4 mx-3 mt-5 mb-10 h-24" onClick={onClick}>
        <h2 className="text-2xl font-semibold text-center">{title}</h2>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};
