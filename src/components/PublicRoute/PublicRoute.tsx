import { Redirect, Route } from "react-router-dom";
import React, { ComponentProps } from "react";
import { useAuth } from "../../context/auth/auth-context";
// import { useAuth } from "../../hooks/useAuth";
// import { PATH } from "../../constants";

const PublicRoute = ({ children, ...rest }: ComponentProps<typeof Route>) => {
  const { user: isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  return (
    <Route
      {...rest}
      render={
        /* prettier-ignore */
        ({ location }) =>
          !isAuthenticated
            ? (children)
            : (<Redirect to={{pathname: '/', state: { from: location }}}/>)
      }
    />
  );
};

export default PublicRoute;
