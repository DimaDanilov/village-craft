import { useTranslation } from 'react-i18next';
import { ResourceInfoPanel } from './ResourceInfoPanel';

export function ResourcesPanel() {
  const { t } = useTranslation('ResourcesPanel');
  return (
    <div className="flex flex-row gap-4 items-center">
      <h2>{t('resourcesTotal')}: </h2>
      <div className="flex flex-row gap-4 w-fit px-3 py-0.5 rounded-2xl border-amber-500 border-2">
        <ResourceInfoPanel resourceName="wood" />
        <ResourceInfoPanel resourceName="stone" />
        <ResourceInfoPanel resourceName="sand" />
        <ResourceInfoPanel resourceName="coins" />
      </div>
    </div>
  );
}
