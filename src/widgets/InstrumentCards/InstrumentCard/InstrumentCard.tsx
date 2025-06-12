import { DECK_CARD_RESOURCE_PALETTE } from '@features/buildings/ui';
import type { AxeLevel, PickaxeLevel } from '@features/instruments/model';

interface InstrumentCardProps {
  instrumentLevel: AxeLevel | PickaxeLevel;
  imageSrc: string;
}

export const InstrumentCard = ({ instrumentLevel, imageSrc }: InstrumentCardProps) => {
  return (
    <div
      className={`flex flex-col gap-1 w-20 h-26 items-center ${DECK_CARD_RESOURCE_PALETTE.bgColorClassName}`}
    >
      <div className="bg-white w-full flex justify-center rounded-b-2xl">
        <img src={imageSrc} width="60px" alt="Instrument Image" />
      </div>
      <span className={`text-2xl ${DECK_CARD_RESOURCE_PALETTE.textColorClassName}`}>{instrumentLevel}</span>
    </div>
  );
};
