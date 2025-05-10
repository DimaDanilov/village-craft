import type { AxeLevel, PickaxeLevel } from '@features/instruments/model';
import { Button } from '@shared/Button/Button';

interface ForgeTableBodyRowParams {
  instrumentCurrentLevel: AxeLevel | PickaxeLevel;
  instrumentCurrentLevelEfficiency: number;
  instrumentImageSrc: string;
  instrumentNextLevel: string;
  instrumentNextLevelEfficiency: number | undefined;
  isUpgradeAvailable: boolean;
  onUpgrade: () => void;
}

export const ForgeTableBodyRow = ({
  instrumentCurrentLevel,
  instrumentCurrentLevelEfficiency,
  instrumentImageSrc,
  instrumentNextLevel,
  instrumentNextLevelEfficiency,
  isUpgradeAvailable,
  onUpgrade,
}: ForgeTableBodyRowParams) => {
  return (
    <tr>
      <td className="w-1/3 px-6">
        <div className="flex flex-col gap-1 items-center">
          <img src={instrumentImageSrc} width="80px" />
          <span className="text-xl">level {instrumentCurrentLevel}</span>
          <span className="text-sm">Wood: {instrumentCurrentLevelEfficiency}</span>
        </div>
      </td>
      <td className="w-1/3 px-6">
        <span>Free</span>
      </td>
      <td className="w-1/3 px-6">
        <Button disabled={!isUpgradeAvailable} onClick={onUpgrade}>
          Upgrade
        </Button>
      </td>
      <td className="w-1/3 px-6">
        {isUpgradeAvailable ? (
          <div className="flex flex-col gap-1 items-center">
            <img src={instrumentImageSrc} width="80px" />
            <span className="text-xl">level {instrumentNextLevel}</span>
            <span className="text-sm">Wood: {instrumentNextLevelEfficiency}</span>
          </div>
        ) : (
          <span>MAX</span>
        )}
      </td>
    </tr>
  );
};
