import type { BuildingCost, BuildingLevel } from '@features/buildings/model';
import type { ResourceName } from '@features/resources/model';
import { ResourceInfo } from '@widgets';
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

  const buildingCostMaterialsCards = Object.keys(buildingNextLevelCost).map((resourceKey) => {
    const availableResource = resourceKey as ResourceName;
    return <ResourceInfo key={resourceKey} resourceName={availableResource} imageWidth="60px" />;
  });

  return <span className="grid grid-cols-3 gap-1">{buildingCostMaterialsCards}</span>;
};
