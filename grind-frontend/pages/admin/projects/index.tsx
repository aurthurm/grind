import { EllipsisOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Divider, Dropdown, Menu, MenuProps, message, Space } from 'antd';
import { Typography } from 'antd';
import type { NextPage } from 'next'
import AdminLayout from '../../../components/layouts/admin';
import AdminMain from '../../../components/layouts/AdminMain';
import { useGetSchemesLazyQuery } from '../../../generated/graphql';
import ProjectForm from '../../../components/forms/ProjectForm';
import useSchemeStore from '../../../stores/schemes';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { IScheme } from '../../../models/scheme';
import { getInitials } from '../../../lib/utils';
import Link from 'next/link';
const { Title, Text } = Typography;

const ProjectsPage: NextPage = () => {
  const { data } = useSession()
  const schemeStore = useSchemeStore();
  const [getSchemes, { loading, error }] = useGetSchemesLazyQuery();

  useEffect(() => {
    getSchemes({ variables: {}}).then(result => {
      schemeStore.loadSchemes(result?.data?.schemes as IScheme[])
      filter({})
    }).catch(err => {
      message.success(`Failed to fetch schemes`);
      console.log(err);
    })
  },[]);

  if (loading) {
    return (
      <h2>
        <a href="#loading" aria-hidden="true" className="aal_anchor" id="loading">
          <svg aria-hidden="true" className="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16">
            <path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
            </path>
          </svg>
        </a>
        Loading Instruments and Time Frames
      </h2>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }

  const filter = (filters: any) => {
    // schemeStore.filter(filters);
  }

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
        <Button type="dashed" className="mb-2 text-left" block onClick={() => schemeStore.setOpenForm(true)}>New Project</Button>
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
          {schemeStore.schemes?.map(scheme => {
            return (
              <Link href={`/admin/projects/${scheme._id}`} key={scheme._id}>
                  <Card className="w-80" bodyStyle={{ padding: 4 }}>
                    <div className="flex justify-between items-center">
                      <Title level={5}>{scheme?.title}</Title>
                      <Dropdown overlay={cardMenu}>
                        <a onClick={e => e.preventDefault()}>
                          <Space>
                            <EllipsisOutlined className="text-xl" />
                          </Space>
                        </a>
                      </Dropdown>
                    </div>
                    <Text type="secondary" italic>{scheme?.description}</Text>
                    <Divider  className="my-2" />
                    <Avatar.Group maxCount={4} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                      {!!scheme?.assignee ? <Avatar style={{ backgroundColor: '#f56a00' }}>
                        {getInitials(`${scheme?.assignee?.firstName} ${scheme?.assignee?.lastName}`)}
                        </Avatar> : ''}
                        {scheme.members?.map(member => {
                          return (
                            <Avatar style={{ backgroundColor: '#f56a00' }} key={member._id}>
                              {getInitials(`${member?.firstName} ${member?.lastName}`)}
                            </Avatar>
                          )
                        })}
                      
                    </Avatar.Group>
                  </Card>
                </Link>
              )
          })}
        </section>

      </AdminMain>

      {/* Modals */}
      <ProjectForm goTo={'/admin/projects/'} />
    </>
  )
}

(ProjectsPage as any).PageLayout = AdminLayout;
export default ProjectsPage;
