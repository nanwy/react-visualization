import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import ROUTES from "./constants/routes";
import SignIn from "./view/Signin";
import RedirectRoute from "./components/PrivateRoute";
import HomePage from "./view";
import Dashboard from "./view/Dashboard";
import { AuthProvider } from "./context/auth/auth-context";

import "./App.scss";
import HeaderNav from "./components/Menu";

function App() {
  console.log("object");
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <BrowserRouter>
        <AuthProvider>
          <HeaderNav />
          <Switch>
            <Route path={ROUTES.LOGIN} component={SignIn} />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} />
            <RedirectRoute path={ROUTES.ROOT} component={HomePage} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
