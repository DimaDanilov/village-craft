import { DECK_CARD_SERVICE_PALETTE } from '@features/buildings/ui';

export type ResourceCardFlexDirection = 'row' | 'col';
export type ResourceCardImageWidth = `${number}px`;

interface ResourceStatsCardProps {
  resourceCount: number;
  flexDirection?: ResourceCardFlexDirection;
  imageSrc: string;
  imageWidth?: ResourceCardImageWidth;
}

export const ResourceStatsCard = ({
  resourceCount,
  flexDirection = 'col',
  imageSrc,
  imageWidth = '60px',
}: ResourceStatsCardProps) => {
  return (
    <div
      className={`flex flex-${flexDirection} gap-1 w-20 h-26 items-center ${DECK_CARD_SERVICE_PALETTE.bgColorClassName}`}
    >
      <div className="bg-white w-full flex justify-center rounded-b-2xl">
        <img src={imageSrc} width={imageWidth} alt="Resource Image" />
      </div>
      <span className={`text-2xl ${DECK_CARD_SERVICE_PALETTE.textColorClassName}`}>{resourceCount}</span>
    </div>
  );
};
