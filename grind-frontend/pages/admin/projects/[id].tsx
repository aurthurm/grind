import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Divider, message, Radio, Tabs, Tooltip } from 'antd';
import { Typography } from 'antd';
import TabPane from 'antd/lib/tabs/TabPane';
import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react';
import KhabBan from '../../../components/project/khanban/Board';
import AdminLayout from '../../../components/layouts/admin';
import BoardTabular from '../../../components/project/tabular/BoardTabular';
import BoardListing from '../../../components/project/listing/BoardListing';
import GantChart from '../../../components/timeline/GanttTask';
import { useRouter } from 'next/router';
import { IScheme } from '../../../models/scheme';
import { useGetSchemeLazyQuery } from '../../../generated/graphql';
import useSchemeStore from '../../../stores/schemes';
import { getInitials } from '../../../lib/utils';
import BoardForm from '../../../components/forms/BoardForm';
const { Title, Text } = Typography;

const ProjectsPage: NextPage = () => {
  const [openBoardForm, setOpenBoardForm] = useState(false);
  const schemeStore = useSchemeStore();
  const [getScheme, { loading: schemeLoading, error: erandError, data: schemeData }] = useGetSchemeLazyQuery()
  const router = useRouter()
  
  useEffect(() => {
    schemeStore.setScheme(null);
    fetchScheme()
    if(!router.query.id) return;
  }, [router]);

  const fetchScheme = () => {
    getScheme({ variables:  { id: router.query.id as string }}).then(result => {
      schemeStore.setScheme(result?.data?.scheme as IScheme)
    }).catch(err => {
      message.success(`Failed to fetch scheme data`);
      console.log(err);
    })
  }

  if (schemeLoading) {
    return (
      <h2>
        <a href="#loading" aria-hidden="true" className="aal_anchor" id="loading">
          <svg aria-hidden="true" className="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16">
            <path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
            </path>
          </svg>
        </a>
        Loading Scheme Data
      </h2>
    );
  }

  if (erandError) {
    console.error(erandError);
    return null;
  }

  return (
    <>
      <section className="pl-8 pt-4">
        <Title level={2}>{schemeStore.scheme?.title}</Title>
        
        <Divider className="" />
        <div className="flex justify-start items-center gap-6">
          <Title level={5}>Project Owner</Title>
          {!!schemeStore?.scheme?.assignee ? <Avatar style={{ backgroundColor: '#f56a00' }}>
              {getInitials(`${schemeStore?.scheme?.assignee?.firstName} ${schemeStore?.scheme?.assignee?.lastName}`)}
          </Avatar> : ''}
        </div>
        <div className="flex justify-start items-center gap-6 mt-4">
          <Title level={5}>Project Members</Title>
          <Avatar.Group maxCount={4} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
            {schemeStore.scheme?.members?.map(member => {
                return (
                  <>
                    <Avatar style={{ backgroundColor: '#f56a00' }}>
                      {getInitials(`${member?.firstName} ${member?.lastName}`)}
                    </Avatar>
                  </>
                )
            })}
          </Avatar.Group>
        </div>
        <Divider />

        <section className="my-4">
          <Radio.Group defaultValue="a" buttonStyle="solid">
            {schemeStore.scheme?.boards?.map(board => {
              return (<>
                <Radio.Button value={board._id} key={board._id}>{board?.title}</Radio.Button>
              </>)
            })}
            <Button type="primary" className="ml-2 text-blue-500" onClick={() => setOpenBoardForm(true)}>+ Board</Button>
          </Radio.Group>
        </section>

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

      </section>

       {/* Modals */}
       <BoardForm open={openBoardForm} setOpen={setOpenBoardForm} />
    </>
  )
}

(ProjectsPage as any).PageLayout = AdminLayout;
export default ProjectsPage;
