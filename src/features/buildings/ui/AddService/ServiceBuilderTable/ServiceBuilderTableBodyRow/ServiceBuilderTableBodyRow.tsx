import { Button } from '@shared/Button/Button';
import { ServiceBuilderTableBuildingPrice } from './ServiceBuilderTableBuildingPrice';
import { UpgradeBuildingWithResources, useBuildingUpgradePrice } from '@features/buildings/model';
import type { BuildingName } from '@features/buildings/model';
import { DECK_CARD_INFOS } from '@widgets';
import { useCallback } from 'react';
import { useAppDispatch } from '@store';

interface ServiceBuilderTableBodyRowProps {
  buildingName: BuildingName;
}

export const ServiceBuilderTableBodyRow = ({ buildingName }: ServiceBuilderTableBodyRowProps) => {
  const { title, description, imageSrc } = DECK_CARD_INFOS[buildingName];
  const { buildingCurrentLevel, buildingNextLevelCost, isUpgradeAvailable } = useBuildingUpgradePrice(buildingName);
  const isBuildDisabled = buildingCurrentLevel !== '0' || !isUpgradeAvailable;

  const dispatch = useAppDispatch();

  const onBuild = useCallback(() => {
    dispatch(UpgradeBuildingWithResources(buildingName));
  }, [buildingName, dispatch]);

  if (buildingCurrentLevel !== '0') return;
  return (
    <tr>
      <td>
        <div className="w-60 flex flex-col gap-1 justify-center items-center">
          <img width={300} src={imageSrc} alt="Forge Image" />
          <span className="text-lg">{title}</span>
        </div>
      </td>
      <td>{description}</td>
      <td>
        <ServiceBuilderTableBuildingPrice
          currentLevel={buildingCurrentLevel}
          buildingNextLevelCost={buildingNextLevelCost}
        />
      </td>
      <td>
        <Button onClick={onBuild} disabled={isBuildDisabled}>
          Build {title}
        </Button>
      </td>
    </tr>
  );
};
