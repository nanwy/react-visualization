import React from "react";
import ROUTES from "./constants/routes";
import "./App.scss";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Login from "./view/Signin";
import RedirectRoute from "./components/PrivateRoute";
import HomePage from "./view";

function App() {
  console.log("object");
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <BrowserRouter>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          {/* <RedirectRoute path={ROUTES.ROOT} component={HomePage} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
