import { CoinsStats, SandStats, StoneStats, WoodStats } from '@widgets/ResourceCards';
import { useTranslation } from 'react-i18next';

export function ResourcesPanel() {
  const { t } = useTranslation('ResourcesPanel');
  return (
    <div className="flex flex-row gap-3 items-center">
      <h2 className="text text-lg">{t('resourcesTotal')}: </h2>
      <div className="flex flex-row gap-6 w-fit px-6 py-1 rounded-2xl border-amber-500 border-2">
        <WoodStats flexDirection="row" imageWidth="40px" />
        <StoneStats flexDirection="row" imageWidth="40px" />
        <SandStats flexDirection="row" imageWidth="40px" />
        <CoinsStats flexDirection="row" imageWidth="40px" />
      </div>
    </div>
  );
}
