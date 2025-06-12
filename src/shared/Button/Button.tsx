type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = ({ children, ...restProps }: ButtonProps) => {
  return (
    <button
      className="min-w-30 min-h-10 text-lg px-3 bg-amber-600 text-white disabled:bg-amber-600/40 rounded-xl cursor-pointer disabled:cursor-not-allowed"
      {...restProps}
    >
      {children}
    </button>
  );
};
