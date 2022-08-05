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
