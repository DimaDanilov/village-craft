interface DeckCardProps {
  onClick?: () => void;
  imageSrc: string;
  title: string;
  description: string;
}

export const DeckCard = ({ onClick, imageSrc, title, description }: DeckCardProps) => {
  return (
    <div
      className="flex flex-col w-60 bg-orange-300 text-amber-700 border-1 border-amber-500 rounded-2xl transition ease-in-out hover:scale-105 select-none cursor-pointer"
      onClick={onClick}
    >
      <img className="rounded-t-2xl" src={imageSrc} alt={title} />
      <div className="flex flex-col gap-4 mx-3 mt-5 mb-10" onClick={onClick}>
        <h2 className="text-2xl font-semibold text-center">{title}</h2>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};
