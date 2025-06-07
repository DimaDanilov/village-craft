import { initReactI18next } from 'react-i18next';
import { AVAILABLE_LANGUAGES } from './i18next.constants';
import i18next from 'i18next';

import mainResourcesEn from './locales/Resources/en.json';
import mainResourcesRu from './locales/Resources/ru.json';
import mainServicesEn from './locales/Services/en.json';
import mainServicesRu from './locales/Services/ru.json';
import { getSafetyLocalStorageLanguage } from './tools/getSafetyLocalStorageLanguage';

export const englishNamespaces = {
  Resources: mainResourcesEn,
  Services: mainServicesEn,
};

export const russianNamespaces = {
  Resources: mainResourcesRu,
  Services: mainServicesRu,
};

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
