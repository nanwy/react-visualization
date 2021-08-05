import React, { Suspense } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import Providers from "./components/providers/Providers";
import ROUTES from "./constants/routes";
import SignIn from "./view/Signin";
import RedirectRoute from "./components/PrivateRoute";
import HomePage from "./view";
import Dashboard from "./view/Dashboard";

import "./App.scss";
import HeaderNav from "./components/Menu";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./context/auth/auth-context";

function App() {
  // const { user } = useAuth();

  // console.log("object", user);
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      {/* <Providers> */}
      <AuthProvider>
        <BrowserRouter>
          {/* <AuthProvider> */}
          <Suspense fallback={null}>
            <HeaderNav />
            <Switch>
              <PublicRoute exact path={ROUTES.LOGIN}>
                <SignIn />
              </PublicRoute>
              <PrivateRoute exact path={"/"}>
                <HomePage />
              </PrivateRoute>
              <PrivateRoute exact path={ROUTES.DASHBOARD}>
                <Dashboard />
              </PrivateRoute>
              <Redirect to={ROUTES.LOGIN} />

              {/* <Route path={ROUTES.LOGIN} component={SignIn} /> */}
              {/* <Route path={ROUTES.DASHBOARD} component={Dashboard} /> */}

              {/* <RedirectRoute path={ROUTES.ROOT} component={HomePage} /> */}
            </Switch>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
      {/* </AuthProvider>
      {/* </Providers> */}
    </div>
  );
}

export default App;
