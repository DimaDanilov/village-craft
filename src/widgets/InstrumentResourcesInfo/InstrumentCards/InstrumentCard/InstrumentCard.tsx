import type { AxeLevel, PickaxeLevel } from '@features/instruments/model';
import { useTranslation } from 'react-i18next';

interface InstrumentCardProps {
  instrumentLevel: AxeLevel | PickaxeLevel;
  imageSrc: string;
}

export const InstrumentCard = ({ instrumentLevel, imageSrc }: InstrumentCardProps) => {
  const { t } = useTranslation('Forge');
  return (
    <div className="flex flex-col gap-1 items-center">
      <img src={imageSrc} width="80px" alt="Instrument Image" />
      <span className="text-xl">
        {t('table.body.level')} {instrumentLevel}
      </span>
    </div>
  );
};
