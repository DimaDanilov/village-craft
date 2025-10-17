import type { BuildingInfo } from '@features/buildings/model';
import { DECK_CARD_RESOURCE_PALETTE } from './constants';
import { useCallback } from 'react';
import { useExecuteFunctionAfterTimer, useProgress } from '@shared/hooks';
import { DeckCardText } from './DeckCardText';
import { useTranslation } from 'react-i18next';
import { DeckCardImage } from './DeckCardImage';

interface DeckResourceCardProps {
  onClick: () => void;
  buildingInfo: BuildingInfo;
  resourceCount: number;
  ResourceIconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const TIMER_DURATION = 1400;
const TIMER_FREQUENCY = 70;

export const DeckResourceCard = ({
  onClick,
  buildingInfo,
  resourceCount,
  ResourceIconComponent,
}: DeckResourceCardProps) => {
  const { bgColorClassName, textColorClassName, borderColorClassName, iconStrokeColorClassName } =
    DECK_CARD_RESOURCE_PALETTE;
  const { title, description, imageSrc } = buildingInfo;

  const { t } = useTranslation('Buildings');
  const { progress, launchProgress } = useProgress({ totalTimeMs: TIMER_DURATION, frequencyMs: TIMER_FREQUENCY });
  const { isTimerActive, launchFunctionAfterTimer } = useExecuteFunctionAfterTimer({
    fn: onClick,
    timeoutMs: TIMER_DURATION,
  });

  const handleClick = useCallback(() => {
    if (!isTimerActive) {
      launchFunctionAfterTimer();
      launchProgress();
    }
  }, [isTimerActive, launchFunctionAfterTimer, launchProgress]);

  return (
    <div
      className={`flex flex-col justify-between w-52 h-72 ${bgColorClassName} ${textColorClassName} ${borderColorClassName} border-1 rounded-xl transition ease-in-out hover:scale-105 select-none cursor-pointer pb-4`}
      onClick={handleClick}
    >
      <DeckCardImage imageSrc={imageSrc} />
      <div className="h-1 transition-all duration-100 bg-amber-600" style={{ width: `${progress}%` }} />
      <DeckCardText title={t(title)} description={t(description)} />
      <div className="flex flex-row justify-end items-center mx-3 mt-5 gap-1">
        <ResourceIconComponent
          width={25}
          height={25}
          className={`fill-transparent ${iconStrokeColorClassName}`}
          strokeWidth="60px"
        />
        <span className="text-sm">{resourceCount}</span>
      </div>
    </div>
  );
};
