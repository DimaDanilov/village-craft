import { DEFAULT_LANGUAGE } from '../i18next.constants';
import type { TAppLanguage } from '../i18next.types';
import { isAvailableLanguage } from './isAvailableLanguage';

export function getSafetyLocalStorageLanguage(): TAppLanguage {
  const storedValue = localStorage.getItem('language');
  return isAvailableLanguage(storedValue) ? storedValue : DEFAULT_LANGUAGE;
}
