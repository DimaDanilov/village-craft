import type { AxeLevel, InstrumentCost, PickaxeLevel } from '@features/instruments/model';
import { Button } from '@shared/Button/Button';
import { ForgeTableInstrumentPrice } from './ForgeTableInstrumentPrice';

interface ForgeTableBodyRowParams {
  resourceImageSrc: string;
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
  resourceImageSrc,
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
          <img src={instrumentImageSrc} width="80px" alt="Instrument Image" />
          <div className="flex flex-row items-center gap-1">
            <img src={resourceImageSrc} width="40px" alt="Resource Image" />
            <span>: {instrumentCurrentLevelEfficiency}</span>
          </div>
          <span className="text-xl">level {instrumentCurrentLevel}</span>
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
            <img src={instrumentImageSrc} width="80px" alt="Instrument Image" />
            <div className="flex flex-row items-center gap-1">
              <img src={resourceImageSrc} width="40px" alt="Resource Image" />
              <span>: {instrumentNextLevelEfficiency}</span>
            </div>
            <span className="text-xl">level {instrumentNextLevel}</span>
          </div>
        ) : (
          <span>MAX</span>
        )}
      </td>
    </tr>
  );
};
