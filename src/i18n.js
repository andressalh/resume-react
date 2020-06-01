import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// not like to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

const Languages = ['en', 'pt'];
i18n

  .use(Backend)

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    fallbackLng: 'pt',
    debug: true,
    whitelist: Languages,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

 
export default i18n;