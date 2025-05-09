interface ResourceCardProps {
  resourceCount: number;
  imageSrc: string;
}

export const ResourceCard = ({ resourceCount, imageSrc }: ResourceCardProps) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <img src={imageSrc} width="80px" />
      <span className="text-xl">{resourceCount}</span>
    </div>
  );
};
