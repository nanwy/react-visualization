import { getToken, setToken, removeToken } from "./../utils/auth";
import { createContext, useCallback, useContext, useEffect } from "react";
import { useGetUser, useLogin, useSignup } from "./../api/signin";
import useBoolean from "./useBoolean/useBoolean";
// import { usePostLogin, useGetMyInfo, usePostSignup } from "../useApi/useApi";
// import { MemberLoginRequest, MyInfoResponse, MemberSignupRequest } from "../constants";
import { unwrapResult } from "./useFetch";
// import { SESSION_STORAGE_KEY } from "../../constants";
const SESSION_STORAGE_KEY = { ACCESS_TOKEN: "jwt" };
type MemberType = "MANAGER" | "USER";
interface AuthContext {
  isAuthenticated: boolean;
  //   signup: ({ email, password, name, memberType }: MemberSignupRequest) => Promise<void>;
  //   login: ({ email, password }: MemberLoginRequest) => Promise<void>;
  logout: (arg: never) => Promise<unknown>;
  signup: any;
  login: any;
  done: () => void;
  isLoading: boolean;
  isError: boolean;
  isSucceed: boolean;
  isIdle: boolean;
  //   myInfo: MyInfoResponse | null;
  myInfo: any;
}

export const authContext = createContext<AuthContext | null>(null);

export const useAuth = () => {
  const cxt = useContext(authContext);

  if (!cxt) {
    throw new Error("AuthProvider 안에서 호출해주세요 ");
  }

  return cxt;
};

export const useRequest = () => {
  const {
    makeRequest: requestLogin,
    status: loginStatus,
    done: loginDone,
  } = useLogin();

  const {
    makeRequest: fetchMyInfo,
    status: myInfoStatus,
    data: myInfo,
    done: myInfoDone,
  } = useGetUser();

  const {
    makeRequest: requestSignup,
    status: signupStatus,
    done: signupDone,
  } = useSignup();

  console.log([loginStatus, myInfoStatus, signupStatus]);

  const isIdle = [loginStatus, myInfoStatus, signupStatus].every(
    (status) => status === "idle"
  );

  const isLoading = [loginStatus, myInfoStatus, signupStatus].some(
    (status) => status === "loading"
  );

  const isError = [loginStatus, myInfoStatus, signupStatus].some(
    (status) => status === "failed"
  );

  const isSucceed =
    [loginStatus, myInfoStatus, signupStatus].every(
      (status) => status === "succeed" || status === "idle"
    ) &&
    [loginStatus, myInfoStatus, signupStatus].find(
      (status) => status === "succeed"
    ) !== undefined;

  const done = useCallback(() => {
    loginDone();
    myInfoDone();
    signupDone();
  }, [loginDone, myInfoDone, signupDone]);

  return {
    requestLogin,
    requestSignup,
    fetchMyInfo,
    myInfo,
    isLoading,
    isError,
    done,
    isSucceed,
    isIdle,
  };
};

export const useAuthProvider = () => {
  const [isAuthenticated, authenticate, unauthenticate] = useBoolean(false);

  const {
    isLoading,
    isError,
    requestLogin,
    requestSignup,
    fetchMyInfo,
    myInfo,
    done,
    isSucceed,
    isIdle,
  } = useRequest();

  const signup = useCallback(
    async ({
      email,
      labId,
      password,
      name,
      memberType,
    }: {
      email: string;
      labId: number;
      memberType: MemberType;
      name: string;
      password: string;
    }) => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      requestSignup({ email, labId, password, name, memberType });
    },
    [requestSignup]
  );

  const login = useCallback(
    async ({ username, password }: { username: string; password: string }) => {
      const { data } = await requestLogin({ username, password });
      if (!data) {
        return;
      }
      const { token } = data;

      //   sessionStorage.setItem(SESSION_STORAGE_KEY.ACCESS_TOKEN, accessToken);
      setToken(token);
      authenticate();

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      fetchMyInfo();
    },
    [authenticate, fetchMyInfo, requestLogin]
  );

  const logout = useCallback(async () => {
    unauthenticate();

    // removeToken();
  }, [unauthenticate]);

  useEffect(() => {
    console.log(getToken());
    if (getToken()) {
      fetchMyInfo().then(unwrapResult).then(authenticate).catch(logout);
    } else {
      unauthenticate();
    }
  }, [authenticate, fetchMyInfo, logout]);

  return {
    isAuthenticated,
    isLoading,
    isError,
    signup,
    login,
    logout,
    myInfo,
    done,
    isSucceed,
    isIdle,
  };
};
