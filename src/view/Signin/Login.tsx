import React from "react";
import { Form, Input, Button } from "antd";
import { SIGN_TYPE } from "../../constants";
import { login } from "../../api/signin";

interface Props {
  type: number;
}

interface IValues {
  username: string;
  password: string;
}

export const SignInForm: React.FC<Props> = ({ type }) => {
  const onFinish = (values: IValues) => {
    if (type === SIGN_TYPE.LOGIN) {
      login(values);
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
