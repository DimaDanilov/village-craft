import { AVAILABLE_LANGUAGES } from '../i18next.constants';
import type { TAppLanguage } from '../i18next.types';
import { getSafetyLocalStorageLanguage, useChangeAppLanguage } from '../tools';

export function LanguageSwitch() {
  const currentLanguage: TAppLanguage = getSafetyLocalStorageLanguage();
  const languageToSet = currentLanguage === AVAILABLE_LANGUAGES.en ? AVAILABLE_LANGUAGES.ru : AVAILABLE_LANGUAGES.en;
  const changeAppLanguage = useChangeAppLanguage();

  return (
    <div>
      <button onClick={() => changeAppLanguage({ language: languageToSet })}>Now current {currentLanguage}</button>
    </div>
  );
}
