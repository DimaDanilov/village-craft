import type { InstrumentCost } from '@features/instruments/model';
import type { ResourceState } from '@features/resources/model';
import { ResourceInfo } from '@widgets';
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
      ? Object.keys(instrumentNextLevelCost).map((resourceKey) => {
          const availableResource = resourceKey as keyof ResourceState;
          return <ResourceInfo key={resourceKey} resourceName={availableResource} imageWidth="60px" />;
        })
      : [];
  return isNextLevelExist ? (
    <span className="grid grid-cols-3 gap-2">{instrumentCostMaterialsCards}</span>
  ) : (
    <span>{t('table.body.max')}</span>
  );
};
