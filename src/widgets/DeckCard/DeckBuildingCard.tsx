import PlusIcon from '@assets/icons/Plus.svg?react';

export const DeckBuildingCard = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center w-60 h-90 border-gray-300 border-4 border-dashed rounded-xl transition ease-in-out hover:scale-105 select-none cursor-pointer`}
    >
      <PlusIcon className="w-30 fill-gray-300" />
    </div>
  );
};
