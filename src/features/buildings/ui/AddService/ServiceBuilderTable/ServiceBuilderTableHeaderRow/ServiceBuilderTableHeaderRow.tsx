import { useTranslation } from 'react-i18next';

export const ServiceBuilderTableHeaderRow = () => {
  const { t } = useTranslation('AddService');
  return (
    <tr>
      <th className="w-1/4 px-6">{t('table.header.imageColumn')}</th>
      <th className="w-1/4 px-6">{t('table.header.descriptionColumn')}</th>
      <th className="w-1/4 px-6">{t('table.header.costColumn')}</th>
      <th className="w-1/4 px-6"></th>
    </tr>
  );
};
