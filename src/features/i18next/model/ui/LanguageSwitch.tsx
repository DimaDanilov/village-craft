import { AVAILABLE_LANGUAGES } from '../i18next.constants';
import type { TAppLanguage } from '../i18next.types';
import { getSafetyLocalStorageLanguage, useChangeAppLanguage } from '../tools';

export function LanguageSwitch() {
  const currentLanguage: TAppLanguage = getSafetyLocalStorageLanguage();
  const languageToSet = currentLanguage === AVAILABLE_LANGUAGES.en ? AVAILABLE_LANGUAGES.ru : AVAILABLE_LANGUAGES.en;
  const changeAppLanguage = useChangeAppLanguage();

  return (
    <button
      className={`bg-orange-300 text-white text-xl font-semibold rounded-xl cursor-pointer w-14 h-14`}
      onClick={() => changeAppLanguage({ language: languageToSet })}
    >
      {currentLanguage.toUpperCase()}
    </button>
  );
}
