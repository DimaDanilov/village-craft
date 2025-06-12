import { Button } from '@shared/Button/Button';
import { ServiceBuilderTableBuildingPrice } from './ServiceBuilderTableBuildingPrice';
import { BUILDING_INFOS, useUpgradeBuildingWithResources, useBuildingUpgradePrice } from '@features/buildings/model';
import type { BuildingName } from '@features/buildings/model';
import { useCallback } from 'react';
import { useAppDispatch } from '@store';
import { useTranslation } from 'react-i18next';

interface ServiceBuilderTableBodyRowProps {
  buildingName: BuildingName;
}

export const ServiceBuilderTableBodyRow = ({ buildingName }: ServiceBuilderTableBodyRowProps) => {
  const { t } = useTranslation('Buildings');
  const upgradeBuildingsWithResources = useUpgradeBuildingWithResources(buildingName);
  const { title, description, imageSrc } = BUILDING_INFOS[buildingName];
  const { buildingCurrentLevel, buildingNextLevelCost, isUpgradeAvailable } = useBuildingUpgradePrice(buildingName);
  const isBuildDisabled = buildingCurrentLevel !== '0' || !isUpgradeAvailable;

  const dispatch = useAppDispatch();

  const onBuild = useCallback(() => {
    dispatch(upgradeBuildingsWithResources);
  }, [dispatch, upgradeBuildingsWithResources]);

  if (buildingCurrentLevel !== '0') return;
  return (
    <tr>
      <td>
        <div className="w-60 flex flex-col gap-1 justify-center items-center">
          <img width="230px" src={imageSrc} alt="Forge Image" />
          <span>{t(title)}</span>
        </div>
      </td>
      <td className="text-sm">{t(description)}</td>
      <td>
        <ServiceBuilderTableBuildingPrice
          currentLevel={buildingCurrentLevel}
          buildingNextLevelCost={buildingNextLevelCost}
        />
      </td>
      <td>
        <Button onClick={onBuild} disabled={isBuildDisabled}>
          {t('table.body.buildButton', { ns: 'AddService' })}
        </Button>
      </td>
    </tr>
  );
};
