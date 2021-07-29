import React, { Component, ComponentType, ReactElement } from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { getToken } from "../../utils/auth";

interface Props {
  path: string;
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
}

const RedirectRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        getToken() ? (
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
