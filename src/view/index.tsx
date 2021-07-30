import React from "react";
import { Button } from "antd";
import { useHistory, withRouter } from "react-router-dom";

import Logo from "../assets/logo.png";

import "./index.scss";

const HomePage = () => {
  const history = useHistory();
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
};

export default HomePage;
