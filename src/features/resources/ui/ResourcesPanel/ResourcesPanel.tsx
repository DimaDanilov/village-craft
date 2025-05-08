import { Stone, Wood } from '../ResourceCards';

export const ResourcesPanel = () => {
  return (
    <div className="flex flex-col gap-1 border-3 border-amber-300 rounded-2xl px-10 py-6">
      <Wood />
      <Stone />
    </div>
  );
};
