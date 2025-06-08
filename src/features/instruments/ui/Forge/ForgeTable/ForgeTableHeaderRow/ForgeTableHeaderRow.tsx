import { useTranslation } from 'react-i18next';

export const ForgeTableHeaderRow = () => {
  const { t } = useTranslation('Instruments');
  return (
    <tr>
      <th className="w-1/3 px-6">{t('forge.table.header.currentTool')}</th>
      <th className="w-1/3 px-6">{t('forge.table.header.cost')}</th>
      <th className="w-1/3 px-6"></th>
      <th className="w-1/3 px-6">{t('forge.table.header.receive')}</th>
    </tr>
  );
};
