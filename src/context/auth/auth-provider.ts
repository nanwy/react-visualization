import { loginReq } from "../../api/signin";
import { setToken } from "../../utils/auth";

export const login = async (params: { username: string; password: string }) => {
  const { data } = await loginReq(params);
  setToken(data.token);
  return data;
};
