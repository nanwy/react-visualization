import React from "react";
import { Form, Input, Button } from "antd";
import { SIGN_TYPE } from "../../constants";
import { getData, login, loginReq } from "../../api/signin";
import { setToken } from "../../utils/auth";
import { useHistory } from "react-router-dom";
console.log(loginReq);
interface Props {
  type: number;
}

interface IValues {
  username: string;
  password: string;
}

export const SignInForm: React.FC<Props> = ({ type }) => {
  const history = useHistory();
  const onFinish = async (values: IValues) => {
    if (type === SIGN_TYPE.LOGIN) {
      //   const { data } = await loginReq(values);
      //   setToken(data.token);
      //   login;
      history.push("/");
    } else {
    }
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      //   onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="username" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="password" />
      </Form.Item>
      <Form.Item>
        <Button className="sign-button" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export const Register = () => {
  return (
    <div className="sign-card">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        initialValues={{ remember: true }}
        //   onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="password" />
        </Form.Item>
        <Form.Item>
          <Button className="sign-button" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
