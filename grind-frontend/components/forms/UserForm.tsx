import {
  Button,
  Divider,
  Drawer,
  Form,
  Input,
  Select,
  Space,
} from "antd";
import React from "react";
import useUserStore from "../../stores/users";
const { Option } = Select;

const UserForm = () => {
  const userStore = useUserStore();

  const onFinish = (values: any) => {
    console.log(values);
    userStore.setOpenForm(false);
  };

  const onFinishFailed = (values: any) => {
    console.error(values);
  };

  return (
    <>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={() => userStore.setOpenForm(false)}
        open={userStore.openForm}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={() => userStore.setOpenForm(false)}>Cancel</Button>
          </Space>
        }
      >
        <Form
          layout="horizontal"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              {
                required: true,
                message: "Please enter First Name",
              },
            ]}
          >
            <Input placeholder="Please enter first name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                required: true,
                message: "Please enter Last Name",
              },
            ]}
          >
            <Input placeholder="Please enter last name" />
          </Form.Item>

          <Form.Item
            name="userName"
            label="User Name"
            rules={[
              {
                required: true,
                message: "Please enter User Name",
              },
            ]}
          >
            <Input placeholder="Please enter user name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              {
                required: true,
                message: "Please enter Email Address",
              },
            ]}
          >
            <Input placeholder="Please enter email address" />
          </Form.Item>
          <Form.Item
            name="comminuty"
            label="Community"
            rules={[
              {
                required: true,
                message: "Please choose User Community",
              },
            ]}
          >
            <Select placeholder="Please choose the user community">
              <Option value="private">Private</Option>
              <Option value="public">Public</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: false,
                message: "Please enter Password",
              },
            ]}
          >
            <Input placeholder="Please enter password" />
          </Form.Item>

          <Form.Item
            name="passwordc"
            label="Confirmation"
            rules={[
              {
                required: false,
                message: "Please enter password again",
              },
            ]}
          >
            <Input placeholder="Please enter pasword again" />
          </Form.Item>

          <Divider></Divider>

          <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="bg-blue-400"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default UserForm;
