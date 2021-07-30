import { getUser, loginReq } from "../../api/signin";
import { setToken } from "../../utils/auth";
import React, { ReactNode, useEffect } from "react";
import * as auth from "./auth-provider";
import { AuthForm, UserInfo } from "../../constants/user";
import useAsyncFn from "../../hooks/useAsyncFn";

const initialUser = async () => {
  const { data } = await getUser();
  return data.user;
};

const AuthContext = React.createContext<
  | {
      user: UserInfo;
      login: (params: AuthForm) => Promise<void>;
    }
  | undefined
>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useAsyncFn(getUser);
  const { value: user } = state;
  useEffect(() => {
    setState();
    console.log(state);
  }, []);

  return (
    <AuthContext.Provider
      children={children}
      value={{ user: user?.userinfo, login: auth.login }}
    />
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }
  return context;
};
