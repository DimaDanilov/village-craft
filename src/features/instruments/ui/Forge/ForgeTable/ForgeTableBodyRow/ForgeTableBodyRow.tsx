import type { AxeLevel, InstrumentCost, PickaxeLevel } from '@features/instruments/model';
import { Button } from '@shared/Button/Button';
import { ForgeTableInstrumentPrice } from './ForgeTableInstrumentPrice';

interface ForgeTableBodyRowParams {
  resourceName: string;
  instrumentCurrentLevel: AxeLevel | PickaxeLevel;
  instrumentCurrentLevelEfficiency: number;
  instrumentImageSrc: string;
  instrumentNextLevel: string;
  instrumentNextLevelEfficiency: number | undefined;
  instrumentNextLevelCost: InstrumentCost | undefined;
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
  instrumentNextLevelCost,
  isNextLevelExist,
  isUpgradeAvailable,
  onUpgrade,
}: ForgeTableBodyRowParams) => {
  return (
    <tr>
      <td>
        <div className="flex flex-col gap-1 items-center">
          <img src={instrumentImageSrc} width="80px" />
          <span className="text-xl">level {instrumentCurrentLevel}</span>
          <span className="text-sm">
            {resourceName}: {instrumentCurrentLevelEfficiency}
          </span>
        </div>
      </td>
      <td>
        <ForgeTableInstrumentPrice
          isNextLevelExist={isNextLevelExist}
          instrumentNextLevelCost={instrumentNextLevelCost}
        />
      </td>
      <td>
        <Button disabled={!isUpgradeAvailable} onClick={onUpgrade}>
          Upgrade
        </Button>
      </td>
      <td>
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
