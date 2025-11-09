import type { BuildingInfo } from '@features/buildings/model';
import { DECK_CARD_RESOURCE_PALETTE, DECK_CARD_SERVICE_PALETTE } from './constants';
import { useCallback, type MouseEvent } from 'react';
import { useExecuteFunctionAfterTimer, useProgress } from '@shared/hooks';
import { useTranslation } from 'react-i18next';
import CircleArrowIcon from '@assets/icons/CircleArrow.svg?react';

interface DeckResourceCardProps {
  onClick: () => void;
  buildingInfo: BuildingInfo;
  resourceImageSrc: string;
  resourceMiningAmount: number;
  InstrumentIconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onRollCard?: () => void;
  rollAnimationStatus?: false | 'firstHalf' | 'secondHalf';
}

const TIMER_DURATION = 1400;
const TIMER_FREQUENCY = 70;

export const DeckResourceCard = ({
  onClick,
  buildingInfo,
  resourceImageSrc,
  resourceMiningAmount,
  InstrumentIconComponent,
  onRollCard,
  rollAnimationStatus,
}: DeckResourceCardProps) => {
  const { textColorClassName, iconStrokeColorClassName } = DECK_CARD_RESOURCE_PALETTE;
  const { title, description, imageSrc } = buildingInfo;

  const isCardRolling = !!rollAnimationStatus;
  const handleRollClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onRollCard?.();
    },
    [onRollCard],
  );

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
      className="relative w-52 h-72 overflow-hidden rounded-xl transition ease-in-out hover:scale-105 cursor-pointer select-none"
      onClick={handleClick}
    >
      <img className="absolute -z-10 w-full h-full object-cover" src={imageSrc} alt="Resource Image" />
      {progress !== 0 && (
        <div
          className="absolute w-full h-2 top-0 left-0 bg-amber-600 transition-transform duration-100"
          style={{
            transform: `translateX(-${100 - progress}%)`,
          }}
        />
      )}

      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2 mx-3">
          <h2
            className={`w-fit px-2 pb-1 mx-auto rounded-b-xl text-lg font-semibold text-center ${textColorClassName} bg-white`}
          >
            {t(title)}
          </h2>
          {onRollCard && (
            <button
              className="self-end cursor-pointer rounded-lg hover:bg-amber-600/70 p-0.5 transition ease-in-out"
              onClick={handleRollClick}
              disabled={isCardRolling}
            >
              <CircleArrowIcon width={28} />
            </button>
          )}
        </div>
        <div className="flex flex-col gap-1 mx-3 mb-3">
          <div className="grid grid-cols-[1fr_2fr_1fr] gap-2 items-end">
            <div className="flex flex-row justify-center items-center p-1 h-10 aspect-square bg-white rounded-xl">
              <InstrumentIconComponent
                width={24}
                height={24}
                className={`fill-transparent ${iconStrokeColorClassName}`}
                strokeWidth="60px"
              />
            </div>
            <div className="p-2 bg-white rounded-full aspect-square">
              <img src={resourceImageSrc} alt="Resource" />
            </div>
            <div className="flex flex-row justify-center aspect-square overflow-hidden items-center p-2 bg-white rounded-full">
              <span className={`text-md ${DECK_CARD_SERVICE_PALETTE.textColorClassName}`}>+{resourceMiningAmount}</span>
            </div>
          </div>
          <div className="p-1 bg-white rounded-xl">
            <p className={`text-center text-sm ${textColorClassName}`}>{t(description)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
