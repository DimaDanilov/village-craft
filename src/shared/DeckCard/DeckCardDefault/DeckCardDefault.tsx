import type { ReactNode } from 'react';
import type { DeckCardInfo, DeckCardPalette } from '../types';
import { DeckCardHeader } from '../DeckCardHeader';

interface DeckCardDefaultProps {
  onClick?: () => void;
  deckCardPalette: DeckCardPalette;
  deckCardInfo: DeckCardInfo;
  children?: ReactNode;
}

export const DeckCardDefault = ({ onClick, deckCardPalette, deckCardInfo, children }: DeckCardDefaultProps) => {
  const { title, description, imageSrc } = deckCardInfo;
  const { bgColorClassName, textColorClassName, borderColorClassName } = deckCardPalette;

  return (
    <div
      className={`flex flex-col justify-between w-60 h-90 ${bgColorClassName} ${textColorClassName} ${borderColorClassName} border-1 rounded-xl transition ease-in-out hover:scale-105 select-none cursor-pointer`}
      onClick={onClick}
    >
      <DeckCardHeader title={title} description={description} imageSrc={imageSrc} />
      {children}
    </div>
  );
};
