import { getUser, loginReq } from "../../api/signin";
import { setToken } from "../../utils/auth";
import React, { ReactNode, useEffect, useState } from "react";
import * as auth from "./auth-provider";
import { AuthForm, UserInfo } from "../../constants/user";
import useAsyncFn from "../../hooks/useAsyncFn";
import { useAsync } from "../../utils/use-async";

const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // TODO 依赖项里加上callback会造成无限循环，这个和useCallback以及useMemo有关系
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

const initialUser = async () => {
  const data = await getUser();
  console.log(data, "data");
  return data.userinfo;
};

const AuthContext = React.createContext<
  | {
      user: UserInfo | undefined;
      login?: (params: AuthForm) => Promise<void>;
    }
  | undefined
>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // getUser();
  // const {
  //   data: user,
  //   error,
  //   isLoading,
  //   isIdle,
  //   isError,
  //   run,
  //   setData: setUser,
  // } = useAsync<UserInfo | null>();
  const [state, setState] = useAsyncFn(getUser);
  const { value: user, loading } = state;
  // const [user, setUser] = useState<UserInfo>();
  useMount(() => {
    // run(initialUser());
    setState();
    // initialUser().then((res) => {
    //   setUser(res);
    // });
  });
  // console.log(getUser());
  // getUser().then((res) => {
  //   setUser(res);
  // });
  // initialUser();
  // const user = { id: 1, username: "lll" };
  console.log(user);
  return !loading ? (
    <AuthContext.Provider children={children} value={{ user: user }} />
  ) : (
    <div>loading</div>
  );
};
