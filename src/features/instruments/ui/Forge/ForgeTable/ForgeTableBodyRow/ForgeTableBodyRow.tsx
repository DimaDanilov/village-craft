import {
  UpgradeInstrumentWithResources,
  useInstrumentUpgradeCost,
  useInstrumentUpgradeEfficiency,
} from '@features/instruments/model';
import type { InstrumentName } from '@features/instruments/model';
import { Button } from '@shared/Button/Button';
import { ForgeTableInstrumentPrice } from './ForgeTableInstrumentPrice';
import { useCallback } from 'react';
import { useAppDispatch } from '@store';
import { ForgeTableNextLevelInstrument } from './ForgeTableNextLevelInstrument';
import { ForgeTableCurrentLevelInstrument } from './ForgeTableCurrentLevelInstrument';

interface ForgeTableBodyRowParams {
  instrumentName: InstrumentName;
}

export const ForgeTableBodyRow = ({ instrumentName }: ForgeTableBodyRowParams) => {
  const { isNextLevelExist, instrumentCurrentLevel, instrumentNextLevel, instrumentNextLevelCost, isUpgradeAvailable } =
    useInstrumentUpgradeCost(instrumentName);
  const { instrumentCurrentLevelEfficiency, instrumentNextLevelEfficiency } =
    useInstrumentUpgradeEfficiency(instrumentName);

  const dispatch = useAppDispatch();

  const onUpgrade = useCallback(
    () => dispatch(UpgradeInstrumentWithResources(instrumentName)),
    [dispatch, UpgradeInstrumentWithResources],
  );

  return (
    <tr>
      <td>
        <ForgeTableCurrentLevelInstrument
          instrumentName={instrumentName}
          instrumentCurrentLevel={instrumentCurrentLevel}
          instrumentCurrentLevelEfficiency={instrumentCurrentLevelEfficiency}
        />
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
        <ForgeTableNextLevelInstrument
          instrumentName={instrumentName}
          isNextLevelExist={isNextLevelExist}
          instrumentNextLevel={instrumentNextLevel}
          instrumentNextLevelEfficiency={instrumentNextLevelEfficiency}
        />
      </td>
    </tr>
  );
};
