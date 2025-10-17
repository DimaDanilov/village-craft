import type { BuildingInfo } from '@features/buildings/model';
import { DECK_CARD_SERVICE_PALETTE } from './constants';
import { useTranslation } from 'react-i18next';
import { DeckCardText } from './DeckCardText';
import { DeckCardImage } from './DeckCardImage';

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
  const { bgColorClassName, textColorClassName, borderColorClassName } = DECK_CARD_SERVICE_PALETTE;

  return (
    <>
      {isServiceExists && (
        <div
          className={`flex flex-col justify-between w-52 h-72 ${bgColorClassName} ${textColorClassName} ${borderColorClassName} border-1 rounded-xl transition ease-in-out hover:scale-105 select-none cursor-pointer pb-4`}
          onClick={onClick}
        >
          <DeckCardImage imageSrc={imageSrc} />
          <DeckCardText title={buildingsTranslation(title)} description={buildingsTranslation(description)} />
          <div className="flex justify-end mx-3">
            <span className="text-sm font-semibold">
              {addServiceTranslation('deckCard.level')} {serviceLevel}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
