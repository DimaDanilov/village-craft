import type { InstrumentCost } from '@features/instruments/model';
import { RESOURCES_IMAGES } from '@features/resources/model';
import type { ResourcesInfo } from '@features/resources/model';
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
          const availableResource = resourceKey as keyof ResourcesInfo;
          const resourceImageSrc = RESOURCES_IMAGES[availableResource];
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
