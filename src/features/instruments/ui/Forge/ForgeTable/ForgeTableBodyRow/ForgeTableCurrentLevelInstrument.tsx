import { INSTRUMENT_INFOS } from '@features/instruments/model';
import type { InstrumentName, UseInstrumentUpgradeEfficiencyReturn } from '@features/instruments/model';
import { RESOURCE_INFOS } from '@features/resources/model';
import { useTranslation } from 'react-i18next';

type ForgeTableCurrentLevelInstrumentProps = Pick<
  UseInstrumentUpgradeEfficiencyReturn,
  'instrumentCurrentLevelEfficiency' | 'instrumentCurrentLevel'
> & {
  instrumentName: InstrumentName;
};

export function ForgeTableCurrentLevelInstrument({
  instrumentName,
  instrumentCurrentLevelEfficiency,
  instrumentCurrentLevel,
}: ForgeTableCurrentLevelInstrumentProps) {
  const { t } = useTranslation('Forge');
  const instrumentImageSrc = INSTRUMENT_INFOS[instrumentName].imageSrc;
  const resourceMiningByInstrument = INSTRUMENT_INFOS[instrumentName].resourceMined;
  const resourceImageSrc = RESOURCE_INFOS[resourceMiningByInstrument].imageSrc;

  return (
    <div className="flex flex-col gap-1 items-center">
      <img src={instrumentImageSrc} width="90px" alt="Instrument Image" />
      <div className="flex flex-row items-center gap-2">
        <img src={resourceImageSrc} width="40px" alt="Resource Image" />
        <span>
          {instrumentCurrentLevelEfficiency}/{t('table.body.click')}
        </span>
      </div>
      <span className="text-xl">
        {t('table.body.level')} {instrumentCurrentLevel}
      </span>
    </div>
  );
}
