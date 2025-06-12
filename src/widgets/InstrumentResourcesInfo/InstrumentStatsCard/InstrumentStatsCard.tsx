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
    <div className={`flex flex-col w-fit h-fit items-center ${DECK_CARD_RESOURCE_PALETTE.bgColorClassName}`}>
      <div className="bg-white w-full px-1 flex justify-center">
        <img src={INSTRUMENT_INFOS[instrumentName].imageSrc} width="60px" alt="Instrument Image" />
      </div>
      <span className={`text-2xl my-1 ${DECK_CARD_RESOURCE_PALETTE.textColorClassName}`}>{instrumentLevel}</span>
    </div>
  );
};
