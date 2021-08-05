import React from "react";
import { Button } from "antd";
import { Route, Switch, useHistory, withRouter } from "react-router-dom";

// import { useAuth } from "../context/auth/auth-context";
import ROUTES from "../constants/routes";
import Dashboard from "./Dashboard";
import SignIn from "./Signin";

import Logo from "../assets/logo.png";

import "./index.scss";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const history = useHistory();
  const { myInfo } = useAuth();
  return (
    <div className="home-container">
      <img src={Logo} />
      <div className="home-title">react打造的数据可视化分析</div>
      <Button
        type="primary"
        size="large"
        onClick={() => history.push("/dashboard")}
      >
        开始
      </Button>
    </div>
  );
  //   return (
  //     <Switch>
  //       {/* <Route path={ROUTES.LOGIN} component={SignIn} /> */}
  //       <Route path={ROUTES.DASHBOARD} component={Dashboard} />
  //     </Switch>
  //   );
  return !myInfo?.userinfo?.username ? (
    <div className="home-container">
      <img src={Logo} />
      <div className="home-title">react打造的数据可视化分析</div>
      <Button
        type="primary"
        size="large"
        onClick={() => history.push("/dashboard")}
      >
        开始
      </Button>
    </div>
  ) : (
    <Switch>
      {/* <Route path={ROUTES.LOGIN} component={SignIn} /> */}
      <Route path={ROUTES.DASHBOARD} component={Dashboard} />
    </Switch>
  );
};

export default HomePage;
