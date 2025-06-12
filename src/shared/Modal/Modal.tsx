import { ResourcesPanel } from '@widgets';
import type { ReactNode } from 'react';

interface ModalProps {
  title: string;
  description: string;
  displayResourcesPanel?: boolean;
  isOpen: boolean;
  onClose: () => void;
  error?: string;
  children?: ReactNode;
}

function onStopPropagationClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  e.stopPropagation();
}

export const Modal = ({ title, description, displayResourcesPanel, isOpen, onClose, error, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-center z-40 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        className="flex flex-col gap-1 bg-white mt-6 pt-3 pb-8 px-6 rounded-xl shadow-lg w-fit min-w-[50vw] max-w-[80vw] max-h-[90vh] overflow-hidden"
        onClick={onStopPropagationClick}
      >
        <div className="min-w-80 flex justify-between">
          <h2 className="text-xl">{title}</h2>
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
        <p className="my-2">{description}</p>
        {displayResourcesPanel && (
          <div className="mt-2">
            <ResourcesPanel />
          </div>
        )}
        {error && <div className="my-4 p-2 bg-red-100 text-red-700 rounded-xl">{error}</div>}
        <div className="mt-2 overflow-auto">{children}</div>
      </div>
    </div>
  );
};
