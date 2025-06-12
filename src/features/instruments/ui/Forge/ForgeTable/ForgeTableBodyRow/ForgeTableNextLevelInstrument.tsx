import {
  INSTRUMENT_INFOS,
  type InstrumentName,
  type UseInstrumentUpgradeEfficiencyReturn,
} from '@features/instruments/model';
import { RESOURCE_INFOS } from '@features/resources/model';
import { useTranslation } from 'react-i18next';

type ForgeTableNextLevelInstrumentProps = Pick<
  UseInstrumentUpgradeEfficiencyReturn,
  'isNextLevelExist' | 'instrumentNextLevelEfficiency' | 'instrumentNextLevel'
> & {
  instrumentName: InstrumentName;
};

export function ForgeTableNextLevelInstrument({
  instrumentName,
  isNextLevelExist,
  instrumentNextLevelEfficiency,
  instrumentNextLevel,
}: ForgeTableNextLevelInstrumentProps) {
  const { t } = useTranslation('Forge');
  if (!isNextLevelExist) return <span>{t('table.body.max')}</span>;

  const instrumentImageSrc = INSTRUMENT_INFOS[instrumentName].imageSrc;
  const resourceMiningByInstrument = INSTRUMENT_INFOS[instrumentName].resourceMined;
  const resourceImageSrc = RESOURCE_INFOS[resourceMiningByInstrument].imageSrc;

  return (
    <div className="flex flex-col gap-1 items-center">
      <img src={instrumentImageSrc} width="90px" alt="Instrument Image" />
      <div className="flex flex-row items-center gap-2">
        <img src={resourceImageSrc} width="40px" alt="Resource Image" />
        <span>
          {instrumentNextLevelEfficiency}/{t('table.body.click')}
        </span>
      </div>
      <span className="text-xl">
        {t('table.body.level')} {instrumentNextLevel}
      </span>
    </div>
  );
}
