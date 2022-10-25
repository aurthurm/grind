import {
    CheckOutlined,
    DatabaseOutlined,
  FlagOutlined,
  MessageOutlined,
  PushpinOutlined,
  QuestionOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, message } from 'antd';
import React, { useEffect, useState } from 'react';
import type { MenuInfo } from 'rc-menu/lib/interface';
const { Sider, Content } = Layout;
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'
import SomethingLoading from '../Loading';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { status, data } = useSession()
    const router = useRouter()
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        if(status === 'unauthenticated') router.replace('/auth/signin');
    }, [status])

    if (status === "loading") {
        return (
            <SomethingLoading>
                <p>loading ...</p>
            </SomethingLoading>
        )
    }

    const logOut = async () => {
        message.info("Thank you for trusting Grind.")
        await signOut({ redirect: false, callbackUrl: "/" })
    }

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
                        key: 'user',
                        icon: <UserOutlined />,
                        label: 'Users',
                    },
                    {
                        key: 'settings',
                        icon: <SettingOutlined />,
                        label: 'Settings',
                    },
                ]}
                />
                <div className="">
                    <Button type="primary" className="bg-blue-500" loading={false} onClick={logOut}> 
                        SignOut
                    </Button>
                </div>
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