import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { TAppLanguage } from '../i18next.types';

interface IChangeAppLanguageParams {
  language: TAppLanguage;
}

export function useChangeAppLanguage() {
  const { i18n } = useTranslation();

  return useCallback(
    ({ language }: IChangeAppLanguageParams) => {
      i18n.changeLanguage(language);
      localStorage.setItem('language', language);
    },
    [i18n],
  );
}
