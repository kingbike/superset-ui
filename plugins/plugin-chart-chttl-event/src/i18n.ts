import { Locale } from '@superset-ui/core';

const en = {
  'subHeader.text': ['SubHeader Text'],
};

const translations: Partial<Record<Locale, typeof en>> = {
  en,
  fr: {
    'subHeader.text': ['SubHeader Text'],
  },
  zh: {
    'subHeader.text': ['SubHeader Text'],
  },
};

export default translations;
