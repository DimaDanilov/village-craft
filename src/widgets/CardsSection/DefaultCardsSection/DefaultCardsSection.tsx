import { DECK_CARD_RESOURCE_PALETTE } from '@widgets/DeckCard';
import type { PropsWithChildren } from 'react';

interface CardsSectionProps extends PropsWithChildren {
  title: string;
}

export const CardsSection = ({ title, children }: CardsSectionProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className={`text-2xl font-bold ${DECK_CARD_RESOURCE_PALETTE.textColorClassName}`}>{title}</h1>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </div>
  );
};
