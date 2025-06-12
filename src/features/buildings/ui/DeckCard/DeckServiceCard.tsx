import type { BuildingInfo } from '@features/buildings/model';
import { DECK_CARD_SERVICE_PALETTE } from './constants';
import { DeckCardDefault } from './DeckCardDefault';
import { useTranslation } from 'react-i18next';

interface DeckServiceCardProps {
  onClick?: () => void;
  buildingInfo: BuildingInfo;
  serviceLevel: number;
}

export const DeckServiceCard = ({ onClick, buildingInfo, serviceLevel }: DeckServiceCardProps) => {
  const { t } = useTranslation('AddService');
  const isServiceExists = serviceLevel > 0;

  return (
    <>
      {isServiceExists && (
        <DeckCardDefault buildingInfo={buildingInfo} deckCardPalette={DECK_CARD_SERVICE_PALETTE} onClick={onClick}>
          <div className="flex justify-end mx-3">
            <span>
              {t('deckCard.level')}: {serviceLevel}
            </span>
          </div>
        </DeckCardDefault>
      )}
    </>
  );
};
