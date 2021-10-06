export const setLS = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLS = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const deleteLS = (key) => {
  localStorage.removeItem(key);
};
