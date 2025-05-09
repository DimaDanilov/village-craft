interface InstrumentCardProps {
  instrumentLevel: number;
  imageSrc: string;
}

export const InstrumentCard = ({ instrumentLevel, imageSrc }: InstrumentCardProps) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <img src={imageSrc} width="80px" />
      <span className="text-xl">level {instrumentLevel}</span>
    </div>
  );
};
