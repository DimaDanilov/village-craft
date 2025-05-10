import type { AxeLevel, InstrumentCost, PickaxeLevel } from '@features/instruments/model';
import { Button } from '@shared/Button/Button';

interface ForgeTableBodyRowParams {
  resourceName: string;
  instrumentCurrentLevel: AxeLevel | PickaxeLevel;
  instrumentCurrentLevelEfficiency: number;
  instrumentImageSrc: string;
  instrumentNextLevel: string;
  instrumentNextLevelEfficiency: number | undefined;
  instrumentNextLevelPrice: InstrumentCost | undefined;
  isNextLevelExist: boolean;
  isUpgradeAvailable: boolean;
  onUpgrade: () => void;
}

export const ForgeTableBodyRow = ({
  resourceName,
  instrumentCurrentLevel,
  instrumentCurrentLevelEfficiency,
  instrumentImageSrc,
  instrumentNextLevel,
  instrumentNextLevelEfficiency,
  instrumentNextLevelPrice,
  isNextLevelExist,
  isUpgradeAvailable,
  onUpgrade,
}: ForgeTableBodyRowParams) => {
  return (
    <tr>
      <td className="w-1/3 px-6">
        <div className="flex flex-col gap-1 items-center">
          <img src={instrumentImageSrc} width="80px" />
          <span className="text-xl">level {instrumentCurrentLevel}</span>
          <span className="text-sm">
            {resourceName}: {instrumentCurrentLevelEfficiency}
          </span>
        </div>
      </td>
      <td className="w-1/3 px-6">
        <span>{isNextLevelExist ? JSON.stringify(instrumentNextLevelPrice) : 'MAX'}</span>
      </td>
      <td className="w-1/3 px-6">
        <Button disabled={!isUpgradeAvailable} onClick={onUpgrade}>
          Upgrade
        </Button>
      </td>
      <td className="w-1/3 px-6">
        {isNextLevelExist ? (
          <div className="flex flex-col gap-1 items-center">
            <img src={instrumentImageSrc} width="80px" />
            <span className="text-xl">level {instrumentNextLevel}</span>
            <span className="text-sm">
              {resourceName}: {instrumentNextLevelEfficiency}
            </span>
          </div>
        ) : (
          <span>MAX</span>
        )}
      </td>
    </tr>
  );
};
