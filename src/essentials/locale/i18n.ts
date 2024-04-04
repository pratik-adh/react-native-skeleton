import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    ja: {
      translation: require('../../translations/ja.json'),
    },
  },
  lng: 'ja',
  keySeparator: false,
  nsSeparator: '|',
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
