import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

const i18n = i18next
  .use(Backend)
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
      order: ['path', 'navigator'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18next;
