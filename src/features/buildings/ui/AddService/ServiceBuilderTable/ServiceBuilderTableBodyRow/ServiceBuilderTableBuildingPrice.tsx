import type { BuildingCost, BuildingLevel } from '@features/buildings/model';
import type { ResourceName } from '@features/resources/model';
import { useTranslation } from 'react-i18next';
import { ServiceBuilderResourceInfo } from './ServiceBuilderResourceInfo';

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

  const buildingCostMaterialsCards = Object.entries(buildingNextLevelCost).map(([resourceKey, resourceNeeded]) => {
    const availableResource = resourceKey as ResourceName;
    return (
      <ServiceBuilderResourceInfo key={resourceKey} resourceName={availableResource} resourceNeeded={resourceNeeded} />
    );
  });

  return <span className="grid grid-cols-3 gap-x-2 gap-y-4">{buildingCostMaterialsCards}</span>;
};
