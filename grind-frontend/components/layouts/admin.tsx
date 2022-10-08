import {
    CheckOutlined,
    DatabaseOutlined,
  FlagOutlined,
  MessageOutlined,
  PushpinOutlined,
  QuestionOutlined,
  SettingOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import type { MenuInfo } from 'rc-menu/lib/interface';
const { Sider, Content } = Layout;
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { status, data } = useSession()
    const router = useRouter()
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        if(status === 'unauthenticated') router.replace('/auth/signin');
    }, [status])

    const onMenuClick = (event: MenuInfo) => {
        const { key, keyPath } = event;
        console.log(event)
        // router.push('/'+ keyPath.reverse().join('/'));
        router.push("/admin/" + key);
    };

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} className="bg-white">
                <div className="h-7 m-4 font-semibold text-xl">GRIND</div>
                <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                onClick={onMenuClick}
                items={[
                    {
                        key: '',
                        icon: <PushpinOutlined />,
                        label: 'Overview',
                    },
                    {
                        key: 'todo',
                        icon: <UnorderedListOutlined />,
                        label: 'TODO',
                    },
                    {
                        key: 'messages',
                        icon: <MessageOutlined />,
                        label: 'Message Board',
                    },
                    {
                        key: 'engagement',
                        icon: <CheckOutlined />,
                        label: 'Engagement',
                    },
                    {
                        key: 'projects',
                        icon: <DatabaseOutlined />,
                        label: 'Projects',
                    },
                    {
                        key: 'ticket',
                        icon: <FlagOutlined />,
                        label: 'Tickets',
                    },
                    {
                        key: 'help',
                        icon: <QuestionOutlined />,
                        label: 'Help',
                    },
                    {
                        key: 'user',
                        icon: <QuestionOutlined />,
                        label: 'Users',
                    },
                    {
                        key: 'settings',
                        icon: <SettingOutlined />,
                        label: 'Settings',
                    },
                ]}
                />
            </Sider>
            {/* <Sidebar /> */}
            <Layout className="">
                <Content
                className="bg-white flex justify-start"
                style={{
                    minHeight: 280,
                }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}