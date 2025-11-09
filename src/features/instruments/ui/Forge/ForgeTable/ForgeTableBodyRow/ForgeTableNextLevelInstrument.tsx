import {
  INSTRUMENT_INFOS,
  type InstrumentName,
  type UseInstrumentUpgradeEfficiencyReturn,
} from '@features/instruments/model';
import { RESOURCE_INFOS } from '@features/resources/model';
import { useTranslation } from 'react-i18next';

type ForgeTableNextLevelInstrumentProps = Pick<
  UseInstrumentUpgradeEfficiencyReturn,
  'isNextLevelExist' | 'resourcesMinedEfficiencyNextLevel' | 'instrumentNextLevel'
> & {
  instrumentName: InstrumentName;
};

export function ForgeTableNextLevelInstrument({
  instrumentName,
  isNextLevelExist,
  resourcesMinedEfficiencyNextLevel,
  instrumentNextLevel,
}: ForgeTableNextLevelInstrumentProps) {
  const { t } = useTranslation('Forge');
  if (!isNextLevelExist) return <span>{t('table.body.max')}</span>;

  const instrumentImageSrc = INSTRUMENT_INFOS[instrumentName].imageSrc;
  const resourcesMiningByInstrument = INSTRUMENT_INFOS[instrumentName].resourcesMined;

  return (
    <div className="flex flex-col gap-1 items-center">
      <img src={instrumentImageSrc} width="80px" alt="Instrument Image" />

      {resourcesMiningByInstrument.map((resource) => {
        const resourceAmountNextLevel = resourcesMinedEfficiencyNextLevel[resource];
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
        {t('table.body.level')} {instrumentNextLevel}
      </span>
    </div>
  );
}
