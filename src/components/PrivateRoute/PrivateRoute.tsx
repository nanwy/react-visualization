import { Redirect, Route } from "react-router-dom";
import React, { ComponentProps } from "react";
// import { useAuth } from "../../hooks/useAuth";
import { useAuth } from "../../context/auth/auth-context";
import ROUTES from "../../constants/routes";

const PrivateRoute = ({ children, ...rest }: ComponentProps<typeof Route>) => {
  const { user: isAuthenticated } = useAuth();
  console.log("渲染", isAuthenticated);
  // if (isLoading) return <div>loading</div>;
  // return isAuthenticated ? <Route {...rest} /> : <Redirect to={ROUTES.LOGIN} />;
  // console.log(isIdle, isLoading, isAuthenticated);
  return (
    <Route
      {...rest}
      render={
        /* prettier-ignore */
        ({ location }) =>
        isAuthenticated
            ? (children)
            : (<Redirect to={{pathname: ROUTES.LOGIN, state: { from: location }}}/>)
      }
    />
  );
};

export default PrivateRoute;
