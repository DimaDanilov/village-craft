import type { PropsWithChildren } from 'react';

interface CardsSectionProps extends PropsWithChildren {
  title: string;
  textColorClassName?: string;
}

export const CardsSection = ({ title, textColorClassName, children }: CardsSectionProps) => {
  const textColorClassNameToDisplay = textColorClassName ?? 'text-black';

  return (
    <div className="flex flex-col gap-4">
      <h1 className={`text-2xl font-bold ${textColorClassNameToDisplay}`}>{title}</h1>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </div>
  );
};
