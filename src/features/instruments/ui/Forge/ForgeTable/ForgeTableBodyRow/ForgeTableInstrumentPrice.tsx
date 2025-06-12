import type { InstrumentCost } from '@features/instruments/model';
import { RESOURCE_INFOS, type ResourceState } from '@features/resources/model';
import { ResourceStatsCard } from '@widgets';
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
      ? Object.entries(instrumentNextLevelCost).map(([resourceKey, resourcesCost]) => {
          const availableResource = resourceKey as keyof ResourceState;
          const resourceImageSrc = RESOURCE_INFOS[availableResource].imageSrc;
          return (
            <ResourceStatsCard
              key={resourceKey}
              resourceCount={resourcesCost}
              imageSrc={resourceImageSrc}
              imageWidth="60px"
            />
          );
        })
      : [];
  return isNextLevelExist ? (
    <span className="grid grid-cols-3 gap-2">{instrumentCostMaterialsCards}</span>
  ) : (
    <span>{t('table.body.max')}</span>
  );
};
