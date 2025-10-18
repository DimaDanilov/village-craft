import type { BuildingInfo } from '@features/buildings/model';
import { DECK_CARD_SERVICE_PALETTE } from './constants';
import { useTranslation } from 'react-i18next';

interface DeckServiceCardProps {
  onClick: () => void;
  buildingInfo: BuildingInfo;
  serviceLevel: number;
}

export const DeckServiceCard = ({ onClick, buildingInfo, serviceLevel }: DeckServiceCardProps) => {
  const { t: addServiceTranslation } = useTranslation('AddService');
  const { t: buildingsTranslation } = useTranslation('Buildings');
  const isServiceExists = serviceLevel > 0;

  const { title, description, imageSrc } = buildingInfo;
  const { textColorClassName } = DECK_CARD_SERVICE_PALETTE;

  return (
    <>
      {isServiceExists && (
        <div
          className="relative w-52 h-72 overflow-hidden rounded-xl transition ease-in-out hover:scale-105 cursor-pointer select-none"
          onClick={onClick}
        >
          <img className="absolute -z-10 w-full h-full object-cover" src={imageSrc} alt="Resource Image" />

          <div className="flex flex-col justify-between h-full">
            <div className="mx-3">
              <h2
                className={`w-fit px-2 pb-1 mx-auto rounded-b-xl text-lg font-semibold text-center ${textColorClassName} bg-white`}
              >
                {buildingsTranslation(title)}
              </h2>
            </div>
            <div className="flex flex-col gap-1 mx-3 mb-3">
              <div className="w-fit self-center flex flex-row justify-center items-center px-4 py-1 bg-white rounded-xl">
                <span className={`text-sm font-semibold ${textColorClassName}`}>
                  {addServiceTranslation('deckCard.level')} {serviceLevel}
                </span>
              </div>
              <div className="p-1 bg-white rounded-xl">
                <p className={`text-center text-sm ${textColorClassName}`}>{buildingsTranslation(description)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
