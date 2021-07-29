import React from "react";
import { Tabs } from "antd";

import { SignInForm } from "./Login";
import { SIGN_TYPE } from "../../constants";

import "./index.scss";

const { TabPane } = Tabs;

const SignIn = () => {
  return (
    <div className="sign-container">
      <div className="sign-content">
        <div className="sign-card">
          <Tabs defaultActiveKey="login">
            <TabPane tab="登录" key="login">
              <SignInForm type={SIGN_TYPE.LOGIN} />
            </TabPane>
            <TabPane tab="注册" key="register">
              <SignInForm type={SIGN_TYPE.REGISTER} />
            </TabPane>
          </Tabs>
        </div>
      </div>
      <div className="login-footer">版权信息</div>
    </div>
  );
};

export default SignIn;
