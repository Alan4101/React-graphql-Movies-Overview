import { LOCALES, SHOURT_LOCALES } from "../i18n/locales";

export const saveTolocalStorage = (key: string, value: any) => {
  if (!window || !window.localStorage) {
    return;
  }
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: any) => {
  if (!window || !window.localStorage) {
    return null;
  }

  try {
    const data = window.localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};
export const changeLanguage = (language: string) => {
  switch (language) {
    case LOCALES.ENGLISH:
      return SHOURT_LOCALES.EN;
    case LOCALES.UKRANIAN:
      return SHOURT_LOCALES.UA;
    default:
      return SHOURT_LOCALES.EN;
  }
};
