import { Button, Divider, Space, Table, Tag, Typography } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import type { NextPage } from 'next'
import Link from 'next/link';
import React, { useState } from 'react';
import AddErrandForm from '../../../components/forms/AddErrandForm';
import AdminLayout from '../../../components/layouts/admin';
import AdminMain from '../../../components/layouts/AdminMain';
import { useGetErrandsQuery } from '../../../generated/graphql';
import { IErrand } from '../../../models/errand';
import useTicketStore from '../../../stores/tickers';

const { Title } = Typography;

const columns: ColumnsType<IErrand> = [
  {
    title: 'Name',
    dataIndex: 'title',
    key: 'title',
    render: (text, record) => (
      <Link href={`/admin/ticket/${record._id}`}>
        <a>{text}</a>
      </Link>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map(tag => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record._id}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const TicketPage: NextPage = () => {
  const ticketStore = useTicketStore();
  const [openErrandForm, setOpenErrandForm] = useState(false);
  const { data: errandsData, loading: errandsLoading, error: errandsError } = useGetErrandsQuery();

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

  if (errandsData && ticketStore.tickets?.length === 0) {
    ticketStore.loadTickets(errandsData?.errands as IErrand[])
  }
 
  return (
    <>
      <section className="bg-slate-200 w-60 min-h-screen p-8">
        <Button type="dashed" className="mb-2 text-left" block onClick={() => setOpenErrandForm(true)}>New Ticket</Button>
        <Divider className="my-6" />
        <Button type="dashed" className="mb-2 text-left" block>View All</Button>
        <Button type="dashed" className="mb-2 text-left" block>Mine</Button>
        <Button type="dashed" className="mb-2 text-left" block>Complete</Button>
        <Button type="dashed" className="mb-2 text-left" block>In Complete</Button>
        <Button type="dashed" className="mb-2 text-left" block>Blockers</Button>
        <Button type="dashed" className="mb-2 text-left" block>Stuck</Button>
        <Button type="dashed" className="mb-2 text-left" block>Need Help</Button>
        <Button type="dashed" className="mb-2 text-left" block>Due Today</Button>
        <Button type="dashed" className="mb-2 text-left" block>New Today</Button>
        <Button type="dashed" className="mb-2 text-left" block>Active</Button>
        <Button type="dashed" className="mb-2 text-left" block>In Active</Button>
      </section>

      <AdminMain>
        <Title level={2}>Tickets</Title>
        <Divider className="my-6" />

        <Table columns={columns} dataSource={ticketStore.tickets} />
      </AdminMain>

      {/* Modals */}
      <AddErrandForm open={openErrandForm} setOpen={setOpenErrandForm} goTo={'/admin/ticket/'} />
    </>
  )
}

(TicketPage as any).PageLayout = AdminLayout;
export default TicketPage;
