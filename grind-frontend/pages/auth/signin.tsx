import { NextPage } from "next";
import { Typography, Button, Checkbox, Form, Input, message } from "antd";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface Props {}

const SignInPage: NextPage = (props): JSX.Element => {
  const router = useRouter();

  const onFinish = async (values: any) => {
    const res = await signIn("credentials", {
      ...values,
      redirect: false,
    });
    if (res?.status === 200) {
      const session = await getSession()
      message.info("Authentication success ...");
      router.replace("/admin");
    } else {
      message.error(res?.error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center gap-x-32">
      <div>
        <Title level={1} className="mb-8 text-center">
          Grind Systems
        </Title>
      </div>
      <div className="w-96">
        <Form
          className="mt-8"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            name="username"
            className="w-full"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon w-full" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button bg-blue-500"
            >
              Log in
            </Button>
            <p>Or <a href="">register now!</a></p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignInPage;
