import { useTranslation } from 'react-i18next';

export const ServiceBuilderTableHeaderRow = () => {
  const { t } = useTranslation('AddService');
  return (
    <tr>
      <th className="px-2">{t('table.header.imageColumn')}</th>
      <th className="w-52 px-2">{t('table.header.descriptionColumn')}</th>
      <th className="px-2">{t('table.header.costColumn')}</th>
      <th className="px-2"></th>
    </tr>
  );
};
