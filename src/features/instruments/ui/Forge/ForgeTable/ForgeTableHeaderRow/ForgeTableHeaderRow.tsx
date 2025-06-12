import { useTranslation } from 'react-i18next';

export const ForgeTableHeaderRow = () => {
  const { t } = useTranslation('Forge');
  return (
    <tr>
      <th className="w-1/3 px-6">{t('table.header.currentTool')}</th>
      <th className="w-1/3 px-6">{t('table.header.cost')}</th>
      <th className="w-1/3 px-6"></th>
      <th className="w-1/3 px-6">{t('table.header.receive')}</th>
    </tr>
  );
};
