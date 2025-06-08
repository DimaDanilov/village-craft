import type { InstrumentCost } from '@features/instruments/model';
import { RESOURCE_INFOS, type ResourceState } from '@features/resources/model';
import { ResourceCard } from '@widgets';

interface ForgeTableInstrumentPriceProps {
  isNextLevelExist: boolean;
  instrumentNextLevelCost?: InstrumentCost;
}

export const ForgeTableInstrumentPrice = ({
  isNextLevelExist,
  instrumentNextLevelCost,
}: ForgeTableInstrumentPriceProps) => {
  const instrumentCostMaterialsCards =
    instrumentNextLevelCost !== undefined
      ? Object.entries(instrumentNextLevelCost).map(([resourceKey, resourcesCost]) => {
          const availableResource = resourceKey as keyof ResourceState;
          const resourceImageSrc = RESOURCE_INFOS[availableResource].imageSrc;
          return (
            <ResourceCard
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
    <span>MAX</span>
  );
};
