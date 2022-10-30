import { Avatar, Card, Divider,Button, message } from 'antd';
import { ErrandCategory, useGetErrandsLazyQuery } from '../../../generated/graphql';
import { Typography } from 'antd';
import Link from 'next/link';
import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react';
import AddErrandForm from '../../../components/forms/AddErrandForm';
import AdminLayout from '../../../components/layouts/admin';
import { IErrand } from '../../../models/errand';
import useEngagementStore from '../../../stores/engagements';
import HtmlViewer from '../../../components/editors/HTMLViewer';
import { getInitials } from '../../../lib/utils'

const { Title, Text } = Typography;

const EngagementPage: NextPage = () => {
  const engagementStore = useEngagementStore();
  const [openErrandForm, setOpenErrandForm] = useState(false);
  const [getErrands, { loading: errandsLoading, error: errandsError, data: errandData }] = useGetErrandsLazyQuery();

  useEffect(() => {
    getErrands({ variables: { filters: { category: ErrandCategory.Engagement }  }}).then(result => {
      engagementStore.loadEngagements(result?.data?.errands as IErrand[])
      filter({})
    }).catch(err => {
      message.success(`Failed to fetch engagements`);
      console.log(err);
    })
  }, []);

  if (errandsLoading) {
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

  if (errandsError) {
    console.error(errandsError);
    return null;
  }

  const filter = (filters: any) => {
    engagementStore.filter(filters);
  }

  return (
    <>
    <div className="ml-8 pt-2 w-full">
      <section className="w-full">
        <Title level={2}>Lets keep you Engaged</Title>
        <Divider className="mt-4" />
        <Button type="dashed" className="mb-2 text-left w-64" onClick={() => setOpenErrandForm(true)}>Add New Engagement</Button>
        <Divider className="my-4" />

        {engagementStore.engagements.map((errand) => {
          return (
            <div key={errand._id} className="mb-8">
              <Card style={{ width: 700 }} >
                <Text type="secondary" italic>
                  <HtmlViewer content={errand.description} />
                </Text>
                <Link href={`/admin/engagement/${errand._id}`}>
                  <a>
                    {/* <Badge color={color} /> */}
                    <Title level={5}>{errand?.title}</Title>
                  </a>
                </Link>
                {!!!errand.members?.length ? '': 
                  <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                    {errand.members?.map((member: any) => (
                    <Avatar key={member._id} style={{ backgroundColor: '#f56a00' }}>
                      {getInitials(`${member?.firstName} ${member?.lastName}`)}
                    </Avatar>
                    ))}
                  </Avatar.Group>
                }
              </Card>
            </div>
          )
        })}
 
      </section>

      {/* Modals */}
      <AddErrandForm 
      open={openErrandForm} 
      setOpen={setOpenErrandForm} 
      category="ENGAGEMENT" 
      handleResponse={engagementStore.addEngagement}
      />

      </div>
    </>
  )
}

(EngagementPage as any).PageLayout = AdminLayout;
export default EngagementPage;
