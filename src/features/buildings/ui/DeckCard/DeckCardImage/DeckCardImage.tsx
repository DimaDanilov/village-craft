interface DeckCardImageProps {
  imageSrc: string;
}

export const DeckCardImage = ({ imageSrc }: DeckCardImageProps) => {
  return (
    <div className="relative h-30 overflow-hidden rounded-t-xl">
      <img className="w-full h-full object-cover" src={imageSrc} alt="Resource Image" />
    </div>
  );
};
