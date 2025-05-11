import { selectCardPalette } from './tools';
import type { DeckCardCategory, DeckCardPalette } from './types';
import AxeIcon from '@assets/icons/Axe.svg?react';

interface DeckCardProps {
  onClick?: () => void;
  resourceCount?: number;
  imageSrc: string;
  title: string;
  description: string;
  cardCategory: DeckCardCategory;
}

export const DeckCard = ({ onClick, imageSrc, title, description, cardCategory, resourceCount }: DeckCardProps) => {
  const deckCardPalette: DeckCardPalette = selectCardPalette({ cardCategory });
  const { bgColorClassName, textColorClassName, borderColorClassName, iconStrokeColorClassName } = deckCardPalette;

  return (
    <div
      className={`flex flex-col justify-between w-60 h-90 ${bgColorClassName} ${textColorClassName} ${borderColorClassName} border-1 rounded-2xl transition ease-in-out hover:scale-105 select-none cursor-pointer`}
      onClick={onClick}
    >
      <div className={`flex flex-col`}>
        <img className="rounded-t-2xl" src={imageSrc} alt={title} />
        <div className="flex flex-col gap-4 mx-3 mt-5 mb-10 h-24">
          <h2 className="text-2xl font-semibold text-center">{title}</h2>
          <p className="text-justify">{description}</p>
        </div>
      </div>
      {resourceCount !== undefined && (
        <div className="flex flex-row justify-end items-center mx-3 my-5 gap-2">
          <AxeIcon stroke="60px" width={40} className={`fill-transparent ${iconStrokeColorClassName}`} />
          <span>{resourceCount}</span>
        </div>
      )}
    </div>
  );
};
