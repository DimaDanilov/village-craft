import { Button } from '@shared/Button/Button';
import { ServiceBuilderTableBuildingPrice } from './ServiceBuilderTableBuildingPrice';
import type { BuildingCost, BuildingLevel } from '@features/buildings/model';

interface ServiceBuilderTableBodyRowProps {
  buildingTitle: string;
  buildingDescription: string;
  buildingImageSrc: string;
  onBuild: () => void;
  isBuildDisabled: boolean;
  currentLevel: BuildingLevel;
  isNextLevelExist: boolean;
  buildingNextLevelCost: BuildingCost | undefined;
}

export const ServiceBuilderTableBodyRow = ({
  buildingTitle,
  buildingDescription,
  buildingImageSrc,
  onBuild,
  isBuildDisabled,
  currentLevel,
  isNextLevelExist,
  buildingNextLevelCost,
}: ServiceBuilderTableBodyRowProps) => {
  if (currentLevel !== '0') return;

  return (
    <tr>
      <td>
        <div className="w-60 flex flex-col gap-1 justify-center items-center">
          <img width={300} src={buildingImageSrc} alt="Forge Image" />
          <span className="text-lg">{buildingTitle}</span>
        </div>
      </td>
      <td>{buildingDescription}</td>
      <td>
        <ServiceBuilderTableBuildingPrice
          currentLevel={currentLevel}
          isNextLevelExist={isNextLevelExist}
          buildingNextLevelCost={buildingNextLevelCost}
        />
      </td>
      <td>
        <Button onClick={onBuild} disabled={isBuildDisabled}>
          Build {buildingTitle}
        </Button>
      </td>
    </tr>
  );
};
