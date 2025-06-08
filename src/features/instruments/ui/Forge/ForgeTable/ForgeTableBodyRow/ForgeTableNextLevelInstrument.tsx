import {
  INSTRUMENT_INFOS,
  type InstrumentName,
  type UseInstrumentUpgradeEfficiencyReturn,
} from '@features/instruments/model';
import { RESOURCES_IMAGES } from '@features/resources/model';

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
  if (!isNextLevelExist) return <span>MAX</span>;

  const instrumentImageSrc = INSTRUMENT_INFOS[instrumentName].imageSrc;
  const resourceMiningByInstrument = INSTRUMENT_INFOS[instrumentName].resourceMined;
  const resourceImageSrc = RESOURCES_IMAGES[resourceMiningByInstrument];

  return (
    <div className="flex flex-col gap-1 items-center">
      <img src={instrumentImageSrc} width="90px" alt="Instrument Image" />
      <div className="flex flex-row items-center gap-2">
        <img src={resourceImageSrc} width="40px" alt="Resource Image" />
        <span>{instrumentNextLevelEfficiency}/click</span>
      </div>
      <span className="text-xl">level {instrumentNextLevel}</span>
    </div>
  );
}
