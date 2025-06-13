import { DECK_CARD_SERVICE_PALETTE } from '@features/buildings/ui';
import type { InstrumentCost } from '@features/instruments/model';
import { RESOURCE_INFOS, type ResourceState } from '@features/resources/model';
import { useTranslation } from 'react-i18next';

interface ForgeTableInstrumentPriceProps {
  isNextLevelExist: boolean;
  instrumentNextLevelCost?: InstrumentCost;
}

export const ForgeTableInstrumentPrice = ({
  isNextLevelExist,
  instrumentNextLevelCost,
}: ForgeTableInstrumentPriceProps) => {
  const { t } = useTranslation('Forge');
  const instrumentCostMaterialsCards =
    instrumentNextLevelCost !== undefined
      ? Object.entries(instrumentNextLevelCost).map(([resourceKey, resourceAmount]) => {
          const availableResource = resourceKey as keyof ResourceState;
          return (
            <div key={resourceKey} className="flex flex-col justify-center items-center">
              <img width="50px" src={RESOURCE_INFOS[availableResource].imageSrc} alt="Resource Image" />
              <span className={`text-lg ${DECK_CARD_SERVICE_PALETTE.textColorClassName}`}>{resourceAmount}</span>
            </div>
          );
        })
      : [];
  return isNextLevelExist ? (
    <span className="grid grid-cols-3 gap-2">{instrumentCostMaterialsCards}</span>
  ) : (
    <span>{t('table.body.max')}</span>
  );
};
