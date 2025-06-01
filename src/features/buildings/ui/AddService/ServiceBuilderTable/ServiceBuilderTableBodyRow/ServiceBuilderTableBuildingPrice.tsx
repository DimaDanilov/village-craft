import type { BuildingCost, BuildingLevel } from '@features/buildings/model';
import { RESOURCES_IMAGES } from '@features/resources/model';
import type { ResourceName } from '@features/resources/model';
import { ResourceCard } from '@widgets';

interface ServiceBuilderTableBuildingPriceProps {
  currentLevel: BuildingLevel;
  buildingNextLevelCost?: BuildingCost;
}

export const ServiceBuilderTableBuildingPrice = ({
  currentLevel,
  buildingNextLevelCost,
}: ServiceBuilderTableBuildingPriceProps) => {
  if (currentLevel !== '0' || buildingNextLevelCost === undefined) return <span>Done</span>;

  const buildingCostMaterialsCards = Object.entries(buildingNextLevelCost).map(([resourceKey, resourcesCost]) => {
    const availableResource = resourceKey as ResourceName;
    const resourceImageSrc = RESOURCES_IMAGES[availableResource];
    return <ResourceCard resourceCount={resourcesCost} imageSrc={resourceImageSrc} />;
  });

  return <span className="grid grid-cols-2 gap-4">{buildingCostMaterialsCards}</span>;
};
