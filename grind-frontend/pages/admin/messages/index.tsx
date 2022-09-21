import { AntDesignOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Card, Divider, Dropdown, Menu, MenuProps, message, Space, Tooltip } from 'antd';
import { Typography } from 'antd';
import type { NextPage } from 'next'
import React from 'react';
import AdminLayout from '../../../components/layouts/admin';
import AdminMain from '../../../components/layouts/AdminMain';
const { Title, Text } = Typography;

const MessageBoardPage: NextPage = () => {

  return (
    <>
      <section className="bg-slate-200 w-60 min-h-screen p-8">
        <Button type="dashed" className="mb-2 text-left" block>New Message</Button>
        <Divider className="my-6" />
        <Button type="dashed" className="mb-2 text-left" block>View All</Button>
        <Button type="dashed" className="mb-2 text-left" block>Today</Button>
        <Button type="dashed" className="mb-2 text-left" block>This Week</Button>
        <Button type="dashed" className="mb-2 text-left" block>Unread</Button>
      </section>

      <AdminMain>
        <Title level={2}>Message Board</Title>
        <Divider className="my-6" />
  
        <div className="flex items-center">
          <div className="flex-none ml-4">
            <Avatar size={48} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>AM</Avatar>
          </div>
          <div className="grow ml-4">
            <Badge count={5} offset={[20, 0]}>
              <Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Title>
              <Text type="warning">Aurthur Musendame: 10-02-2022 08:00</Text> <br />
              <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, inventore reiciendis. Voluptatem fuga ut a natus veritatis similique ratione velit vitae molestiae deleniti amet.</Text>
            </Badge>
          </div>
        </div>
        <Divider className="my-6" />
  
        <div className="flex items-center">
          <div className="flex-none ml-4">
            <Avatar size={48} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>AM</Avatar>
          </div>
          <div className="grow ml-4">
            <Badge count={5} offset={[20, 0]}>
              <Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Title>
              <Text type="warning">Aurthur Musendame: 10-02-2022 08:00</Text> <br />
              <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, inventore reiciendis. Voluptatem fuga ut a natus veritatis similique ratione velit vitae molestiae deleniti amet.</Text>
            </Badge>
          </div>
        </div>
        <Divider className="my-6" />
        
        <div className="flex items-center">
          <div className="flex-none ml-4">
            <Avatar size={48} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>AM</Avatar>
          </div>
          <div className="grow ml-4">
            <Badge count={5} offset={[20, 0]}>
              <Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Title>
                    <Text type="warning">Aurthur Musendame: 10-02-2022 08:00</Text> <br />
              <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, inventore reiciendis. Voluptatem fuga ut a natus veritatis similique ratione velit vitae molestiae deleniti amet.</Text>
            </Badge>
          </div>
        </div>
        <Divider className="my-6" />
  
        <div className="flex items-center">
          <div className="flex-none ml-4">
            <Avatar size={48} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>AM</Avatar>
          </div>
          <div className="grow ml-4">
            <Badge count={5} offset={[20, 0]}>
              <Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Title>
                    <Text type="warning">Aurthur Musendame: 10-02-2022 08:00</Text> <br />
              <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, inventore reiciendis. Voluptatem fuga ut a natus veritatis similique ratione velit vitae molestiae deleniti amet.</Text>
            </Badge>
          </div>
        </div>
        <Divider className="my-6" />
        
        <div className="flex items-center">
          <div className="flex-none ml-4">
            <Avatar size={48} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>AM</Avatar>
          </div>
          <div className="grow ml-4">
            <Badge count={5} offset={[20, 0]}>
              <Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Title>
                    <Text type="warning">Aurthur Musendame: 10-02-2022 08:00</Text> <br />
              <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, inventore reiciendis. Voluptatem fuga ut a natus veritatis similique ratione velit vitae molestiae deleniti amet.</Text>
            </Badge>
          </div>
        </div>
        <Divider className="my-6" />
  
        <div className="flex items-center">
          <div className="flex-none ml-4">
            <Avatar size={48} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>AM</Avatar>
          </div>
          <div className="grow ml-4">
            <Badge count={5} offset={[20, 0]}>
              <Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Title>
              <Text type="warning">Aurthur Musendame: 10-02-2022 08:00</Text> <br />
              <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, inventore reiciendis. Voluptatem fuga ut a natus veritatis similique ratione velit vitae molestiae deleniti amet.</Text>
            </Badge>
          </div>
        </div>
        <Divider className="my-6" />

      </AdminMain>
    </>
  )
}

(MessageBoardPage as any).PageLayout = AdminLayout;
export default MessageBoardPage;
