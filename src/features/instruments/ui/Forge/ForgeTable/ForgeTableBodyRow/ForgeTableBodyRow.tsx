import { useInstrumentUpgradeCost, useInstrumentUpgradeEfficiency } from '@features/instruments/model';
import { useUpgradeInstrumentWithResources, type InstrumentName } from '@features/instruments/model';
import { Button } from '@shared/Button/Button';
import { ForgeTableInstrumentPrice } from './ForgeTableInstrumentPrice';
import { useCallback } from 'react';
import { useAppDispatch } from '@store';
import { ForgeTableNextLevelInstrument } from './ForgeTableNextLevelInstrument';
import { ForgeTableCurrentLevelInstrument } from './ForgeTableCurrentLevelInstrument';
import { useTranslation } from 'react-i18next';

interface ForgeTableBodyRowParams {
  instrumentName: InstrumentName;
}

export const ForgeTableBodyRow = ({ instrumentName }: ForgeTableBodyRowParams) => {
  const { t } = useTranslation('Forge');
  const upgradeInstrumentWithResources = useUpgradeInstrumentWithResources(instrumentName);
  const { isNextLevelExist, instrumentCurrentLevel, instrumentNextLevel, instrumentNextLevelCost, isUpgradeAvailable } =
    useInstrumentUpgradeCost(instrumentName);
  const { instrumentCurrentLevelEfficiency, instrumentNextLevelEfficiency } =
    useInstrumentUpgradeEfficiency(instrumentName);

  const dispatch = useAppDispatch();

  const onUpgrade = useCallback(
    () => dispatch(upgradeInstrumentWithResources),
    [dispatch, upgradeInstrumentWithResources],
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
        <ForgeTableNextLevelInstrument
          instrumentName={instrumentName}
          isNextLevelExist={isNextLevelExist}
          instrumentNextLevel={instrumentNextLevel}
          instrumentNextLevelEfficiency={instrumentNextLevelEfficiency}
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
          {t('table.body.upgrade')}
        </Button>
      </td>
    </tr>
  );
};
