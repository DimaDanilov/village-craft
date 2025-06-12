interface DeckCardHeaderProps {
  imageSrc: string;
  title: string;
  description: string;
}

export const DeckCardHeader = ({ imageSrc, title, description }: DeckCardHeaderProps) => {
  return (
    <div className={`flex flex-col`}>
      <img className="rounded-t-xl" src={imageSrc} alt={title} />
      <div className="flex flex-col gap-4 mx-3 mt-2 h-24">
        <h2 className="text-xl font-semibold text-center">{title}</h2>
        <p className="text-justify text-sm">{description}</p>
      </div>
    </div>
  );
};
