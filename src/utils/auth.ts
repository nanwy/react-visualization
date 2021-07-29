import { whiteList } from "./../constants/routes";
import Cookies from "js-cookie";

const TokenKey = "jwt";

export const getToken = () => Cookies.get(TokenKey);

export const setToken = (token: string) => Cookies.set(TokenKey, token);

export const removeToken = () => Cookies.remove(TokenKey);

export const isAuthenticated = (path: string = "/") => {
  return whiteList.includes(path) || getToken();
};
