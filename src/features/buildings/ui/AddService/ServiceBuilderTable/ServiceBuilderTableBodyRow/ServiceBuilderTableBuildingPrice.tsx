import type { BuildingCost, BuildingLevel } from '@features/buildings/model';
import { RESOURCES_IMAGES } from '@features/resources/model';
import type { ResourcesInfo } from '@features/resources/model';
import { ResourceCard } from '@widgets';

interface ServiceBuilderTableBuildingPriceProps {
  currentLevel: BuildingLevel;
  isNextLevelExist: boolean;
  buildingNextLevelCost?: BuildingCost;
}

export const ServiceBuilderTableBuildingPrice = ({
  currentLevel,
  isNextLevelExist,
  buildingNextLevelCost,
}: ServiceBuilderTableBuildingPriceProps) => {
  const buildingCostMaterialsCards =
    buildingNextLevelCost !== undefined
      ? Object.entries(buildingNextLevelCost).map(([resourceKey, resourcesCost]) => {
          const availableResource = resourceKey as keyof ResourcesInfo;
          const resourceImageSrc = RESOURCES_IMAGES[availableResource];
          return <ResourceCard resourceCount={resourcesCost} imageSrc={resourceImageSrc} />;
        })
      : [];
  return currentLevel === '0' && isNextLevelExist ? (
    <span className="grid grid-cols-2 gap-4">{buildingCostMaterialsCards}</span>
  ) : (
    <span>Done</span>
  );
};
