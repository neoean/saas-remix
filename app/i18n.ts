import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: [
      'en',    // English
      'zh',    // Chinese (Simplified)
      'ja',    // Japanese
      'ko',    // Korean
      'es',    // Spanish
      'fr',    // French
      'de',    // German
      'it',    // Italian
      'pt',    // Portuguese
      'ru',    // Russian
      'ar',    // Arabic
      'hi',    // Hindi
      'vi',    // Vietnamese
      'th',    // Thai
      'id',    // Indonesian
    ],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
