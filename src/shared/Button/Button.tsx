import type { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children?: ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button className="min-w-30 min-h-10 text-xl bg-amber-600 text-white" onClick={onClick}>
      {children}
    </button>
  );
};
