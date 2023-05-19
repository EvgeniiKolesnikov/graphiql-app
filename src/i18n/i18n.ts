import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import z from 'zod';
import { makeZodI18nMap } from 'zod-i18n-map';
import { resources } from './resources';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    partialBundledLanguages: true,
    debug: true,
    ...resources,
    interpolation: {
      escapeValue: false,
    },
  });

z.setErrorMap(makeZodI18nMap({ ns: ['zod', 'custom'] }));

export default i18n;
