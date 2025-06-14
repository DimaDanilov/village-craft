import PlusIcon from '@assets/icons/Plus.svg?react';
import type { DeckCardPalette } from './types';

interface DeckAddCardProps {
  palette: DeckCardPalette;
  title?: string;
  onClick?: () => void;
}

export const DeckAddCard = ({ palette, title, onClick }: DeckAddCardProps) => {
  return (
    <div
      className={`flex flex-col gap-4 justify-center items-center w-52 h-72 ${palette.borderColorClassName} border-4 border-dashed rounded-xl transition ease-in-out hover:scale-105 select-none cursor-pointer`}
      onClick={onClick}
    >
      <PlusIcon className={`w-30 ${palette.fillColorClassName}`} />
      {title && <h3 className={`text-sm text-center ${palette.textColorClassName}`}>{title}</h3>}
    </div>
  );
};
