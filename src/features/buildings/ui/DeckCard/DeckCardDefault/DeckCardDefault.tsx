import type { ReactNode } from 'react';
import type { DeckCardPalette } from '../types';
import { DeckCardHeader } from '../DeckCardHeader';
import type { BuildingInfo } from '@features/buildings/model';

interface DeckCardDefaultProps {
  onClick?: () => void;
  deckCardPalette: DeckCardPalette;
  buildingInfo: BuildingInfo;
  children?: ReactNode;
}

export const DeckCardDefault = ({ onClick, deckCardPalette, buildingInfo, children }: DeckCardDefaultProps) => {
  const { title, description, imageSrc } = buildingInfo;
  const { bgColorClassName, textColorClassName, borderColorClassName } = deckCardPalette;

  return (
    <div
      className={`flex flex-col justify-between w-60 h-90 ${bgColorClassName} ${textColorClassName} ${borderColorClassName} border-1 rounded-xl transition ease-in-out hover:scale-105 select-none cursor-pointer pb-4`}
      onClick={onClick}
    >
      <DeckCardHeader title={title} description={description} imageSrc={imageSrc} />
      {children}
    </div>
  );
};
