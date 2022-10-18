import { AntDesignOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Card, Divider, Dropdown, Menu, MenuProps, message, Radio, Space, Tabs, Tooltip } from 'antd';
import { Typography } from 'antd';
import TabPane from 'antd/lib/tabs/TabPane';
import type { NextPage } from 'next'
import React from 'react';
import KhabBan from '../../../components/project/khanban/Board';
import AdminLayout from '../../../components/layouts/admin';
import AdminMain from '../../../components/layouts/AdminMain';
import BoardTabular from '../../../components/project/tabular/BoardTabular';
import BoardListing from '../../../components/project/listing/BoardListing';
import GantChart from '../../../components/timeline/GanttTask';
const { Title, Text } = Typography;

const ProjectsPage: NextPage = () => {

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
        <Button type="dashed" className="mb-2 text-left" block>New Project</Button>
        <Divider className="my-6" />
        <Button type="dashed" className="mb-2 text-left" block>View All</Button>
        {/* Mine - assigned to me */}
        <Button type="dashed" className="mb-2 text-left" block>Mine</Button>
        {/* Involved in - not assigned to me but i am a member somehow */}
        <Button type="dashed" className="mb-2 text-left" block>Involved In</Button>
      </section>

      <AdminMain>
        <Title level={2}>Projects</Title>
        <Divider className="my-6" />
        
        <section className="flex flex-wrap justify-start items-center gap-4 mt-6">

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
        </section>

        <Divider className="my-6" />
        <Title level={4}>Selected project Detail</Title>

        <Divider className="my-6" />
        <div className="flex justify-start items-center gap-6">
          <Title level={5}>Project Members</Title>
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
        </div>
        <Divider className="my-6" />

        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Radio.Button value="a">Board 1</Radio.Button>
          <Radio.Button value="b">Board 2</Radio.Button>
          <Radio.Button value="c">Board 3</Radio.Button>
          <Radio.Button value="d">Board 4</Radio.Button>
        </Radio.Group> <br />
        <Tabs defaultActiveKey="2">
          <TabPane tab="Discussions" key="1">
            <div className="flex items-center">
              <div className="flex-none ml-4">
                <div className="flex flex-col items-center">
                  <Avatar size='small' style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>AM</Avatar>
                  <Text type="warning">Today</Text>
                </div>
              </div>
              <div className="grow ml-4">
                  <Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Title>
                  <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, inventore reiciendis. Voluptatem fuga ut a natus veritatis similique ratione velit vitae molestiae deleniti amet.</Text>
              </div>
            </div>
            <Divider className="my-4" />
            <div className="flex items-center">
              <div className="flex-none ml-4">
                <div className="flex flex-col items-center">
                  <Avatar size='small' style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>AM</Avatar>
                  <Text type="warning">Today</Text>
                </div>
              </div>
              <div className="grow ml-4">
                  <Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Title>
                  <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, inventore reiciendis. Voluptatem fuga ut a natus veritatis similique ratione velit vitae molestiae deleniti amet.</Text>
              </div>
            </div>
            <Divider className="my-4" />
            <div className="flex items-center">
              <div className="flex-none ml-4">
                <div className="flex flex-col items-center">
                  <Avatar size='small' style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>AM</Avatar>
                  <Text type="warning">Today</Text>
                </div>
              </div>
              <div className="grow ml-4">
                  <Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Title>
                  <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, inventore reiciendis. Voluptatem fuga ut a natus veritatis similique ratione velit vitae molestiae deleniti amet.</Text>
              </div>
            </div>
            <Divider className="my-4" />
          </TabPane>
          <TabPane tab="Board View" key="2a">
            <KhabBan />
          </TabPane>
          <TabPane tab="Listing View" key="2b">
            <BoardListing />
          </TabPane>
          <TabPane tab="Tabular View" key="2c">
            <BoardTabular />
          </TabPane>
          <TabPane tab="TimeLine View" key="3">
           <GantChart />
          </TabPane>
          <TabPane tab="Files" key="4">
            Files
          </TabPane>
          <TabPane tab="Analytics" key="5">
            Analytics
          </TabPane>
        </Tabs>,

      </AdminMain>
    </>
  )
}

(ProjectsPage as any).PageLayout = AdminLayout;
export default ProjectsPage;
