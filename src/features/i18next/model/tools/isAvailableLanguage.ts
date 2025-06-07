import { AVAILABLE_LANGUAGES } from '../i18next.constants';
import type { TAppLanguage } from '../i18next.types';

export function isAvailableLanguage(value: unknown): value is TAppLanguage {
  if (typeof value !== 'string') return false;
  return value in AVAILABLE_LANGUAGES;
}
