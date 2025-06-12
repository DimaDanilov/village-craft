import { initReactI18next } from 'react-i18next';
import { AVAILABLE_LANGUAGES } from './i18next.constants';
import i18next from 'i18next';

import { getSafetyLocalStorageLanguage } from './tools';
import { englishNamespaces, russianNamespaces } from './i18next.namespaces';

const resources = {
  en: englishNamespaces,
  ru: russianNamespaces,
};

i18next.use(initReactI18next).init({
  resources,
  lng: getSafetyLocalStorageLanguage(),
  fallbackLng: AVAILABLE_LANGUAGES.en,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
