import React, { Component, ComponentType, ReactElement } from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { isAuthenticated } from "../../utils/auth";

interface Props extends Partial<RouteComponentProps> {
  path: string;
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
}

const RedirectRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  console.log(isAuthenticated(rest.location?.pathname) ? 1 : 0);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated(rest.location?.pathname) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default RedirectRoute;
