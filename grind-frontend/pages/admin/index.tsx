import { AntDesignOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Card, Divider, Dropdown, Menu, MenuProps, message, Space, Tooltip } from 'antd';
import { Typography } from 'antd';
import type { NextPage } from 'next'
import React from 'react';
import AdminLayout from '../../components/layouts/admin';
import AdminMain from '../../components/layouts/AdminMain';
const { Title, Text } = Typography;

const Dashboard: NextPage = () => {

  const  onTeamsMenuClick = () => {};
  const teamsMenu = (
    <Menu
      onClick={onTeamsMenuClick}
      items={[
        {
          key: '1',
          label: 'Add New',
        },
        {
          key: '2',
          label: 'View All',
        },
      ]}
    />
  );

  const  onProjectsMenuClick = () => {};
  const projectsMenu = (
    <Menu
      onClick={onProjectsMenuClick}
      items={[
        {
          key: '1',
          label: 'Add New',
        },
        {
          key: '2',
          label: 'View All',
        },
      ]}
    />
  );

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
      <section className="bg-slate-200 w-60 min-h-screen p-8">
        <p>SideBar</p>
      </section>
      <AdminMain>
        
        <div className="flex items-center">
          <div className="grow">
            <Divider>GRIND-HQ</Divider>
          </div>
          <div className="flex-none w-24">
            <Divider></Divider>
          </div>
        </div>
        <section className="flex justify-center items-center">
          <Card className="w-80">
            <Title level={5}>Ant Design</Title>
            <Text type="secondary" italic>Company wide announcements and stuff everyone needs to know</Text>
          </Card>
        </section>
        
        <div className="flex items-center">
          <div className="grow">
            <Divider>Communities </Divider>
          </div>
          <div className="flex-none">
            <Dropdown.Button overlay={teamsMenu}>More</Dropdown.Button>
          </div>
        </div>
        <section className="flex flex-wrap justify-center items-center gap-4">
          <Card className="w-80">
            <Title level={5}>NMRL IT</Title>
            <Text type="secondary" italic>We are the Team!</Text>
          </Card>
          <Card className="w-80">
            <Title level={5}>Gweru</Title>
            <Text type="secondary" italic>We are the Team!</Text>
          </Card>
          <Card className="w-80">
            <Title level={5}>Marondera</Title>
            <Text type="secondary" italic>We are the Team!</Text>
          </Card>
          <Card className="w-80">
            <Title level={5}>Kadoma</Title>
            <Text type="secondary" italic>We are the Team!</Text>
          </Card>
          <Card className="w-80">
            <Title level={5}>Gwanda</Title>
            <Text type="secondary" italic>We are the Team!</Text>
          </Card>
          <Card className="w-80">
            <Title level={5}>BRIDH</Title>
            <Text type="secondary" italic>We are the Team!</Text>
          </Card>
          <Card className="w-80">
            <Title level={5}>NMRL</Title>
            <Text type="secondary" italic>We are the Team!</Text>
          </Card>
        </section>

        <div className="flex items-center">
          <div className="grow">
            <Divider>Projects <Badge count="13" style={{ backgroundColor: '#52c41a' }} /></Divider>
          </div>
          <div className="flex-none">
            <Dropdown.Button overlay={projectsMenu}>More</Dropdown.Button>
          </div>
        </div>
        <section className="flex flex-wrap justify-center items-center gap-4">

          <Card className="w-80" bodyStyle={{ padding: 4 }}>
            <div className="flex justify-between items-center">
              <Title level={5}>Sample Tracking</Title>
              <Dropdown overlay={cardMenu}>
                <a onClick={e => e.preventDefault()}>
                  <Space>
                    <EllipsisOutlined className="text-xl" />
                  </Space>
                </a>
              </Dropdown>
            </div>
            <Text type="secondary" italic>We are the Team!</Text>
            <Divider  className="my-2" />
            <Avatar.Group maxCount={4} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
              <Avatar style={{ backgroundColor: '#f56a00' }}>AM</Avatar>
              <Avatar style={{ backgroundColor: '#f56a00' }}>PU</Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
              </Tooltip>
              <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
            </Avatar.Group>
          </Card>

          <Card className="w-80">
            <Title level={5}>Dispatch Centers</Title>
            <Text type="secondary" italic>We are the Team!</Text>
          </Card>
          <Card className="w-80">
            <Title level={5}>USSD</Title>
            <Text type="secondary" italic>We are the Team!</Text>
          </Card>
          <Card className="w-80">
            <Title level={5}>POC</Title>
            <Text type="secondary" italic>We are the Team!</Text>
          </Card>
        </section>

      </AdminMain>
    </>
  )
}

(Dashboard as any).PageLayout = AdminLayout;
export default Dashboard;
