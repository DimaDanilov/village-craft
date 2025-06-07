import { useTranslation } from 'react-i18next';

export const ServiceBuilderTableHeaderRow = () => {
  const { t } = useTranslation('Buildings');
  return (
    <tr>
      <th className="w-1/4 px-6">{t('table.imageColumn')}</th>
      <th className="w-1/4 px-6">{t('table.descriptionColumn')}</th>
      <th className="w-1/4 px-6">{t('table.costColumn')}</th>
      <th className="w-1/4 px-6"></th>
    </tr>
  );
};
