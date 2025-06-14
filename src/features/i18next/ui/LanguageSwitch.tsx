import { AVAILABLE_LANGUAGES } from '../model/i18next.constants';
import type { TAppLanguage } from '../model/i18next.types';
import { getSafetyLocalStorageLanguage, useChangeAppLanguage } from '../model/tools';

export function LanguageSwitch() {
  const currentLanguage: TAppLanguage = getSafetyLocalStorageLanguage();
  const languageToSet = currentLanguage === AVAILABLE_LANGUAGES.en ? AVAILABLE_LANGUAGES.ru : AVAILABLE_LANGUAGES.en;
  const changeAppLanguage = useChangeAppLanguage();

  return (
    <button
      className={`bg-orange-300 hover:bg-amber-500 transition text-white text-lg font-semibold rounded-xl cursor-pointer w-12 h-12`}
      onClick={() => changeAppLanguage({ language: languageToSet })}
    >
      {currentLanguage.toUpperCase()}
    </button>
  );
}
