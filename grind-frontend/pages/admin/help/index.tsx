import { MoreOutlined } from '@ant-design/icons';
import { Avatar, Divider, Dropdown, Menu, MenuProps, message, Skeleton, Space } from 'antd';
import { Typography } from 'antd';
import type { NextPage } from 'next'
import React from 'react';
import AdminLayout from '../../../components/layouts/admin';
const { Title, Text } = Typography;

const HelpPage: NextPage = () => {

  const onCardMenuClick: MenuProps['onClick'] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const cardMenu = (
    <Menu
      onClick={onCardMenuClick}
      items={[
        {
          label: '1st menu item',
          key: '1',
        },
        {
          label: '2nd menu item',
          key: '2',
        },
        {
          label: '3rd menu item',
          key: '3',
        },
      ]}
    />
  );

  return (
    <>
      <div className="p-8 w-full mt-16">     
        <article className="px-64">

          <div className="text-center">
            <Title level={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Title>
            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>AM</Avatar>
            <Text type="secondary" className="ml-2" strong italic>Aurthur M - Oct 12 2021</Text>
          </div>

          <div className="mt-12 text-justify text-lg">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            <Skeleton className="my-6" />
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </div>

          <Divider className="my-4" />

          <section>
            <div className="flex items-center">
                <div className="flex-none ml-4">
                  <div className="flex items-center">
                    <div  className="flex flex-col items-center mr-16">
                      <Text type="warning">Today</Text>
                      <Text type="warning">08:30 AM</Text>
                    </div>
                    <Avatar size={42} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>AM</Avatar>
                  </div>
                </div>
                <div className="grow ml-4">
                    <Title level={5}>Aurthur Musendame - <span className="text-gray-400 italic">Software Developer</span></Title>
                    <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, inventore reiciendis. Voluptatem fuga ut a natus veritatis similique ratione velit vitae molestiae deleniti amet.</Text>
                </div>
                <div className="flex-none ml-4">
                  <Dropdown overlay={cardMenu}>
                    <a onClick={e => e.preventDefault()}>
                      <Space>
                        <MoreOutlined className="text-xl" />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              </div>
              <Divider className="my-4" />
              <div className="flex items-center">
                <div className="flex-none ml-4">
                  <div className="flex items-center">
                    <div  className="flex flex-col items-center mr-16">
                      <Text type="warning">Today</Text>
                      <Text type="warning">08:30 AM</Text>
                    </div>
                    <Avatar size={42} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>AM</Avatar>
                  </div>
                </div>
                <div className="grow ml-4">
                    <Title level={5}>Aurthur Musendame - <span className="text-gray-400 italic">Software Developer</span></Title>
                    <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, inventore reiciendis. Voluptatem fuga ut a natus veritatis similique ratione velit vitae molestiae deleniti amet.</Text>
                </div>
                <div className="flex-none ml-4">
                  <Dropdown overlay={cardMenu}>
                    <a onClick={e => e.preventDefault()}>
                      <Space>
                        <MoreOutlined className="text-xl" />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              </div>
              <Divider className="my-4" />
          </section>

        </article>

      </div>
    </>
  );
}

(HelpPage as any).PageLayout = AdminLayout;
export default HelpPage;
