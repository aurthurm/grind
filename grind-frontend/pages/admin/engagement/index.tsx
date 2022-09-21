import { AntDesignOutlined, CheckOutlined, EyeOutlined, HighlightOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Divider, Tooltip } from 'antd';
import { Typography } from 'antd';
import type { NextPage } from 'next'
import React, { useState } from 'react';
import dynamic from "next/dynamic";
import AdminLayout from '../../../components/layouts/admin';
import HtmlViewer from '../../../components/editors/HTMLViewer';

const EditorCK = dynamic(() => import("../../../components/editors/EditorCK"), { ssr: false });
const { Title, Text } = Typography;

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
officia deserunt mollit anim id est laborum.`

const EngagementPage: NextPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [edData, setEdData] = useState(text);


  const onClick = () => {
    setIsEditing(true);
    console.log('onClick: ', isEditing);
  }

  return (
    <>
    <div className="ml-8 pt-2 w-full">

      <section className="w-2/3 my-6">
        <Typography.Title 
        editable={{
          triggerType: ['text'],
          enterIcon: <CheckOutlined />,
        }} 
        level={5} 
        style={{ marginBottom: 20 }}>
          I am a Editable Heading Title
        </Typography.Title>
        {!isEditing ?
          <article onClick={() => setIsEditing(true)}>
              <HtmlViewer content={edData} />
          </article> :
        <div>
          <EditorCK value={edData} onChange={setEdData}/>
          <Button className=" flex items-center mt-2 bg-blue-500" shape="round" icon={<EyeOutlined />} size='small' onClick={() => setIsEditing(false)} >Preview</Button>
        </div>}
        
      </section>


      <section className="w-full">
        <Title level={2}>Lets keep you Engaged</Title>
        <Divider className="my-4" />
 
        <Card style={{ width: 700 }}>
          <Text type="secondary" italic>Answer as you work so you dont forget. keey your mates informed</Text>
          <Title level={5}>What did you work on Today?</Title>
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
 
        <Card className="mt-4" style={{ width: 700 }}>
          <Text type="secondary" italic>Plan your week ahead and stay focused</Text>
          <Title level={5}>What will you be working on this week?</Title>
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
 
        <Card className="mt-4" style={{ width: 700 }}>
          <Text type="secondary" italic>Dont keep it to yourself. Spread the word, sharing is caring</Text>
          <Title level={5}>What did you learn today?</Title>
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

      </div>
    </>
  )
}

(EngagementPage as any).PageLayout = AdminLayout;
export default EngagementPage;
