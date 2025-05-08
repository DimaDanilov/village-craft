import { Stone, Wood } from '../ResourceCards';

export const ResourcesPanel = () => {
  return (
    <div className="flex flex-col gap-8">
      <Wood />
      <Stone />
    </div>
  );
};
