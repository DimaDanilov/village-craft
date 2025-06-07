import type { BuildingCost, BuildingLevel } from '@features/buildings/model';
import { RESOURCES_IMAGES } from '@features/resources/model';
import type { ResourceName } from '@features/resources/model';
import { ResourceCard } from '@widgets';
import { useTranslation } from 'react-i18next';

interface ServiceBuilderTableBuildingPriceProps {
  currentLevel: BuildingLevel;
  buildingNextLevelCost?: BuildingCost;
}

export const ServiceBuilderTableBuildingPrice = ({
  currentLevel,
  buildingNextLevelCost,
}: ServiceBuilderTableBuildingPriceProps) => {
  const { t } = useTranslation('Buildings');
  if (currentLevel !== '0' || buildingNextLevelCost === undefined) return <span>{t('errors.buildingIsReady')}</span>;

  const buildingCostMaterialsCards = Object.entries(buildingNextLevelCost).map(([resourceKey, resourcesCost]) => {
    const availableResource = resourceKey as ResourceName;
    const resourceImageSrc = RESOURCES_IMAGES[availableResource];
    return (
      <ResourceCard key={resourceKey} resourceCount={resourcesCost} imageSrc={resourceImageSrc} imageWidth="60px" />
    );
  });

  return <span className="grid grid-cols-3 gap-1">{buildingCostMaterialsCards}</span>;
};
