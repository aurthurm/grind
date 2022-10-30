import { Button, Divider, message } from 'antd';
import { Typography } from 'antd';
import type { NextPage } from 'next'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import HtmlViewer from '../../../components/editors/HTMLViewer';
import AddErrandForm from '../../../components/forms/AddErrandForm';
import AdminLayout from '../../../components/layouts/admin';
import AdminMain from '../../../components/layouts/AdminMain';
import { ErrandCategory, useGetErrandsLazyQuery } from '../../../generated/graphql';
import { toMomentDate } from '../../../lib/utils';
import { IErrand } from '../../../models/errand';
import useMessageBoardStore from '../../../stores/message-board';
const { Title, Text } = Typography;

const MessageBoardPage: NextPage = () => {  
  const messageBoadStore = useMessageBoardStore();
  const [openErrandForm, setOpenErrandForm] = useState(false);
  const [getErrands, { loading: errandsLoading, error: errandsError, data: errandData }] = useGetErrandsLazyQuery();

  useEffect(() => {
    getErrands({ variables: { filters: { category: ErrandCategory.Message }  }}).then(result => {
      messageBoadStore.loadMessages(result?.data?.errands as IErrand[])
      filter({})
    }).catch(err => {
      message.success(`Failed to fetch messages`);
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
        Loading Board Messages
      </h2>
    );
  }

  if (errandsError) {
    console.error(errandsError);
    return null;
  }

  const filter = (filters: any) => {
    messageBoadStore.filter(filters);
  }

  return (
    <>
      <section className="bg-slate-200 w-60 min-h-screen p-8">
        <Button type="dashed" className="mb-2 text-left" block  onClick={() => setOpenErrandForm(true)}>New Message</Button>
        <Divider className="my-6" />
        <Button type="dashed" className="mb-2 text-left" block>View All</Button>
        <Button type="dashed" className="mb-2 text-left" block>New Today</Button>
        <Button type="dashed" className="mb-2 text-left" block>This Week</Button>
        <Button type="dashed" className="mb-2 text-left" block>Unread</Button>
        <Button type="dashed" className="mb-2 text-left" block>Read</Button>
      </section>

      <AdminMain>
        <Title level={2}>Message Board</Title>
        <Divider className="my-6" />
  
        {messageBoadStore?.messages?.map(message => (
          <div key={message._id}>
            <div className="grow ml-4">
              {/* <Badge count={5} offset={[20, 0]}>
              </Badge> */}
              <Link href={`/admin/messages/${message._id}`}>
                <a>
                  <Title level={5}>{message?.title}</Title>
                </a>
              </Link>
              <div className="flex gap-x-2">
                <Text type="warning">{message?.createdBy?.firstName} {message?.createdBy?.lastName}</Text>
                <span className="italic">on</span>
                <Text type="warning">{toMomentDate(message?.createdAt)?.format('ll')}</Text>
              </div>
              <Text type="secondary" italic>
                <HtmlViewer content={message.description?.substring(0, 50)} ellipsis={50} />
              </Text>
            </div>
            <Divider className="my-6" />
          </div>
        ))}

        {/* Modals */}
        <AddErrandForm 
        open={openErrandForm} 
        setOpen={setOpenErrandForm} 
        category="MESSAGE" 
        handleResponse={messageBoadStore.addMessage}
        />
      </AdminMain>      
    </>
  )
}

(MessageBoardPage as any).PageLayout = AdminLayout;
export default MessageBoardPage;
