import { loginReq } from "../../api/signin";
import { setToken } from "../../utils/auth";

export const login = async (params: { username: string; password: string }) => {
  const { token } = await loginReq(params);
  setToken(token);
  return token;
};
