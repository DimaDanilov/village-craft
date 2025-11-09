import { INSTRUMENT_INFOS } from '@features/instruments/model';
import type { InstrumentName, UseInstrumentUpgradeEfficiencyReturn } from '@features/instruments/model';
import { RESOURCE_INFOS } from '@features/resources/model';
import { useTranslation } from 'react-i18next';

type ForgeTableCurrentLevelInstrumentProps = Pick<
  UseInstrumentUpgradeEfficiencyReturn,
  'resourcesMinedEfficiencyCurrentLevel' | 'instrumentCurrentLevel'
> & {
  instrumentName: InstrumentName;
};

export function ForgeTableCurrentLevelInstrument({
  instrumentName,
  resourcesMinedEfficiencyCurrentLevel,
  instrumentCurrentLevel,
}: ForgeTableCurrentLevelInstrumentProps) {
  const { t } = useTranslation('Forge');

  const instrumentImageSrc = INSTRUMENT_INFOS[instrumentName].imageSrc;
  const resourcesMiningByInstrument = INSTRUMENT_INFOS[instrumentName].resourcesMined;

  return (
    <div className="flex flex-col gap-1 items-center">
      <img src={instrumentImageSrc} width="80px" alt="Instrument Image" />

      {resourcesMiningByInstrument.map((resource) => {
        const resourceAmountNextLevel = resourcesMinedEfficiencyCurrentLevel[resource];
        return (
          <div key={resource} className="flex flex-row items-center gap-2">
            <img src={RESOURCE_INFOS[resource].imageSrc} width="40px" alt="Resource Image" />
            <span>
              {resourceAmountNextLevel}/{t('table.body.click')}
            </span>
          </div>
        );
      })}

      <span className="text-xl">
        {t('table.body.level')} {instrumentCurrentLevel}
      </span>
    </div>
  );
}
