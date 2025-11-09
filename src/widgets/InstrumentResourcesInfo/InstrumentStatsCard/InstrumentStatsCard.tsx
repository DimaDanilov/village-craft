import { DECK_CARD_RESOURCE_PALETTE } from '@features/buildings/ui';
import { INSTRUMENT_INFOS, instrumentsSlice } from '@features/instruments/model';
import type { InstrumentName } from '@features/instruments/model';
import { useAppSelector } from '@store';

interface InstrumentCardProps {
  instrumentName: InstrumentName;
}

export const InstrumentCard = ({ instrumentName }: InstrumentCardProps) => {
  const instrumentLevel = useAppSelector((state) =>
    instrumentsSlice.selectors.selectInstrumentLevel(state, instrumentName),
  );

  return (
    <div className={`flex flex-row w-full h-full items-center ${DECK_CARD_RESOURCE_PALETTE.bgColorClassName}`}>
      <div className="w-10 h-10 m-1 p-1 bg-white flex justify-center rounded-2xl">
        <img src={INSTRUMENT_INFOS[instrumentName].imageSrc} alt="Instrument Image" />
      </div>
      <span className={`text-2xl px-2 ${DECK_CARD_RESOURCE_PALETTE.textColorClassName}`}>{instrumentLevel}</span>
    </div>
  );
};
