export type ResourceCardFlexDirection = 'row' | 'col';
export type ResourceCardImageWidth = `${number}px`;

interface ResourceCardProps {
  resourceCount: number;
  flexDirection?: ResourceCardFlexDirection;
  imageSrc: string;
  imageWidth?: ResourceCardImageWidth;
}

export const ResourceCard = ({
  resourceCount,
  flexDirection = 'col',
  imageSrc,
  imageWidth = '80px',
}: ResourceCardProps) => {
  return (
    <div className={`flex flex-${flexDirection} gap-1 items-center`}>
      <img src={imageSrc} width={imageWidth || '80px'} alt="Resource Image" />
      <span className="text-xl">{resourceCount}</span>
    </div>
  );
};
