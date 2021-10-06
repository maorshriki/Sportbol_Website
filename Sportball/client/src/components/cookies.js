import Cookies from "js-cookie";

export const setCookie = (key, value, remember) => {
  if (remember) {
    // if remember me expire after 1 year
    Cookies.set(key, value, { expires: 1 });
  } else {
    // else expire after 30 minutes
    var date = new Date();
    date.setTime(date.getTime() + 30 * 60 * 1000);
    Cookies.set(key, value, { expires: date });
  }
};

export const getCookie = (key) => {
  return Cookies.get(key);
};

export const deleteCookie = (key) => {
  Cookies.remove(key);
};
