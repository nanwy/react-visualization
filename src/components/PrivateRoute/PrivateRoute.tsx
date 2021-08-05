import { Redirect, Route } from "react-router-dom";
import React, { ComponentProps } from "react";
import { useAuth } from "../../hooks/useAuth";
import ROUTES from "../../constants/routes";

const PrivateRoute = ({ children, ...rest }: ComponentProps<typeof Route>) => {
  const { isAuthenticated, isLoading } = useAuth();
  // return isAuthenticated ? <Route {...rest} /> : <Redirect to={ROUTES.LOGIN} />;
  console.log(!isLoading);
  return isLoading || isAuthenticated ? (
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
  ) : (
    <div>loading11</div>
  );
};

export default PrivateRoute;
