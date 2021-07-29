import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./view/Login";
import RedirectRoute from "./components/PrivateRoute";
import HomePage from "./view";

function App() {
  console.log("object");
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <RedirectRoute path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
