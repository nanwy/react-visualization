import React, { ReactNode, useEffect } from "react";
import { Spin } from "antd";

import { authContext, useAuthProvider } from "../../hooks/useAuth";

interface AuthProviderProps {
  children: ReactNode;
}

const FullPageLoading = () => (
  <div className="fullpage">
    <Spin size={"large"} />
  </div>
);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useAuthProvider();
  console.log(auth);
  if (auth.isLoading) {
    return <FullPageLoading />;
  }
  // useEffect(() => {
  //   auth.done();
  // });
  // return !auth.isLoading ? (
  //   <authContext.Provider value={auth}>{children}</authContext.Provider>
  // ) : (
  //   <div>loading</div>
  // );
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export default AuthProvider;
