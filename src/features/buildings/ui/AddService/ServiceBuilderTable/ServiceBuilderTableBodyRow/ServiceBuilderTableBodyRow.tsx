import { Button } from '@shared/Button/Button';

interface ServiceBuilderTableBodyRowProps {
  buildingTitle: string;
  buildingDescription: string;
  buildingImageSrc: string;
  onBuild: () => void;
  isBuildDisabled: boolean;
}

export const ServiceBuilderTableBodyRow = ({
  buildingTitle,
  buildingDescription,
  buildingImageSrc,
  onBuild,
  isBuildDisabled,
}: ServiceBuilderTableBodyRowProps) => {
  return (
    <tr>
      <td>
        <div className="w-60 flex flex-col gap-1 justify-center items-center">
          <img width={300} src={buildingImageSrc} alt="Forge Image" />
          <span className="text-lg">{buildingTitle}</span>
        </div>
      </td>
      <td>{buildingDescription}</td>
      <td></td>
      <td>
        <Button onClick={onBuild} disabled={isBuildDisabled}>
          Build {buildingTitle}
        </Button>
      </td>
    </tr>
  );
};
