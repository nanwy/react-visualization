import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useAuth } from "../../context/auth/auth-context";

const { SubMenu } = Menu;

const HeaderNav = () => {
  const { user } = useAuth();
  console.log("user: ", user);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <Menu.Item key="alipay">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
      <div>{user?.username}</div>
    </div>
  );
};

export default HeaderNav;
