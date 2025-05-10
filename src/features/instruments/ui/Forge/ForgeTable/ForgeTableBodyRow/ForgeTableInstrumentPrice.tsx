import type { InstrumentCost } from '@features/instruments/model';
import { RESOURCES_IMAGES } from '@features/resources/model';
import type { ResourcesInfo } from '@features/resources/model';
import { ResourceCard } from '@widgets';

interface ForgeTableInstrumentPrice {
  isNextLevelExist: boolean;
  instrumentNextLevelCost?: InstrumentCost;
}

export const ForgeTableInstrumentPrice = ({ isNextLevelExist, instrumentNextLevelCost }: ForgeTableInstrumentPrice) => {
  const instrumentCostMaterialsCards =
    instrumentNextLevelCost !== undefined
      ? Object.entries(instrumentNextLevelCost).map(([resourceKey, resourcesCost]) => {
          const availableResource = resourceKey as keyof ResourcesInfo;
          const resourceImageSrc = RESOURCES_IMAGES[availableResource];
          return <ResourceCard resourceCount={resourcesCost} imageSrc={resourceImageSrc} />;
        })
      : [];
  return isNextLevelExist ? <span className="grid grid-cols-2 gap-4">{instrumentCostMaterialsCards}</span> : <span>MAX</span>;
};
