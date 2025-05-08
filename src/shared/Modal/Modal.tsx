import { useCallback, type ReactNode } from 'react';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  error?: string;
  children?: ReactNode;
}

export const Modal = ({ title, isOpen, onClose, error, children }: ModalProps) => {
  if (!isOpen) return null;

  const onStopPropagationClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white pt-3 pb-8 px-6 rounded-lg shadow-lg w-full max-w-lg" onClick={onStopPropagationClick}>
        <div className="flex justify-between">
          <h2 className="text-2xl">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {error && <div className="my-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
        <div className="mt-10">{children}</div>
      </div>
    </div>
  );
};
