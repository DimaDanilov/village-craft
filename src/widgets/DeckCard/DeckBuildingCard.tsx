import PlusIcon from '@assets/icons/Plus.svg?react';
import { DECK_CARD_SERVICE_PALETTE } from './constants';

export const DeckBuildingCard = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center w-60 h-90 ${DECK_CARD_SERVICE_PALETTE.borderColorClassName} border-4 border-dashed rounded-xl transition ease-in-out hover:scale-105 select-none cursor-pointer`}
    >
      <PlusIcon className="w-30 fill-sky-300" />
    </div>
  );
};
