import { Button, Dropdown, Input, Menu, MenuProps, message, Space, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import type { NextPage } from 'next'
import React, { useEffect } from 'react';
import AdminLayout from '../../../components/layouts/admin';
import { Typography } from 'antd';
import { IUser } from '../../../models/user';
import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import useUserStore from '../../../stores/users';
import UserForm from '../../../components/forms/UserForm';
import { useGetUsersQuery } from '../../../generated/graphql';
const { Title } = Typography;

const UsersPage: NextPage = () => {
  const userStore = useUserStore();
  const { data , loading, error } = useGetUsersQuery();

  if (loading) {
    return (
      <h2>
        <a href="#loading" aria-hidden="true" className="aal_anchor" id="loading">
          <svg aria-hidden="true" className="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16">
            <path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
            </path>
          </svg>
        </a>
        Loading Users
      </h2>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }

  if (data && userStore.users?.length === 0) {
    userStore.loadUsers(data?.users as IUser[])
  }

  const onCardMenuClick: MenuProps['onClick'] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const cardMenu = (
    <Menu
      onClick={onCardMenuClick}
      items={[
        {
          label: 'Update',
          key: 'update',
        },
        {
          label: 'Deactivate',
          key: 'deactivate',
        },
      ]}
    />
  );

  const columns: ColumnsType<IUser> = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Last Name',
      key: 'lastName',
      dataIndex: 'lastName',
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Community',
      dataIndex: 'community',
      key: 'community',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Dropdown overlay={cardMenu}>
        <a onClick={e => e.preventDefault()}>
          <Space>
            <EllipsisOutlined className="text-xl" />
          </Space>
        </a>
      </Dropdown>
      ),
    },
  ];
  
  return (
    <>
    <div className="mx-8 mt-4 w-full">
      <Title level={4} className="uppercase">Users</Title>
      <div className="flex items-center my-4">
        <Input placeholder="Type to search ..." className="w-64 mr-4" />
        <Button type="dashed" className="flex items-center" onClick={() => userStore.setOpenForm(true)} icon={<PlusOutlined />}>Add New</Button>
      </div>
      <Table columns={columns} dataSource={data?.users as IUser[]} />
    </div>
    {/* User Form Drawer */}
    <UserForm />
    </>
  )
}

(UsersPage as any).PageLayout = AdminLayout;
export default UsersPage;
