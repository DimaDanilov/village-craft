import { INSTRUMENT_RESOURCE_MINING, INSTRUMENTS_IMAGES } from '@features/instruments/model';
import type { InstrumentName, UseInstrumentUpgradeEfficiencyReturn } from '@features/instruments/model';
import { RESOURCES_IMAGES } from '@features/resources/model';

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
  const instrumentImageSrc = INSTRUMENTS_IMAGES[instrumentName];
  const resourceMiningByInstrument = INSTRUMENT_RESOURCE_MINING[instrumentName];
  const resourceImageSrc = RESOURCES_IMAGES[resourceMiningByInstrument];

  return (
    <div className="flex flex-col gap-1 items-center">
      <img src={instrumentImageSrc} width="90px" alt="Instrument Image" />
      <div className="flex flex-row items-center gap-2">
        <img src={resourceImageSrc} width="40px" alt="Resource Image" />
        <span>{instrumentCurrentLevelEfficiency}/click</span>
      </div>
      <span className="text-xl">level {instrumentCurrentLevel}</span>
    </div>
  );
}
