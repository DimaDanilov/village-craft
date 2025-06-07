import { initReactI18next } from 'react-i18next';
import { AVAILABLE_LANGUAGES } from './i18next.constants';
import i18next from 'i18next';

import ResourcesEn from './locales/Resources/en.json';
import ResourcesRu from './locales/Resources/ru.json';
import BuildingsEn from './locales/Buildings/en.json';
import BuildingsRu from './locales/Buildings/ru.json';
import ServicesEn from './locales/Services/en.json';
import ServicesRu from './locales/Services/ru.json';
import { getSafetyLocalStorageLanguage } from './tools/getSafetyLocalStorageLanguage';

export const englishNamespaces = {
  Resources: ResourcesEn,
  Services: ServicesEn,
  Buildings: BuildingsEn,
};

export const russianNamespaces = {
  Resources: ResourcesRu,
  Services: ServicesRu,
  Buildings: BuildingsRu,
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
