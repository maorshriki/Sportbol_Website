import { setCookie, getCookie, deleteCookie } from "./cookies";
import { setLS, getLS, deleteLS } from "../localStorage";

export const setAuthentication = (token, user, remember) => {
  setCookie("token", token, remember);
  setLS("user", user);
};

export const isAuthenticated = () => {
  if (getCookie("token") && getLS("user")) {
    return getLS("user");
  } else {
    return false;
  }
};

export const onLogOuut = (next) => {
  deleteCookie("token");
  deleteLS("user");
  deleteLS("checkOutPress");
  deleteLS("user_logInTime");
  deleteLS("user_email");
  deleteLS("user_Name");
  deleteLS("user_logInTime");
  deleteLS("userEmail");
  deleteLS("user_role");
  next();
};
