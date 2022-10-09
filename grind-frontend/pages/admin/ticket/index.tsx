import { Button, Divider, Badge, Table, Typography, Tag, message } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import type { NextPage } from 'next'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import AddErrandForm from '../../../components/forms/AddErrandForm';
import AdminLayout from '../../../components/layouts/admin';
import AdminMain from '../../../components/layouts/AdminMain';
import { ErrandCategory, useGetErrandsLazyQuery } from '../../../generated/graphql';
import { IErrand } from '../../../models/errand';
import useTicketStore from '../../../stores/tickets';
import { useSession } from 'next-auth/react';
import { toMomentDate } from '../../../lib/utils';

const { Title } = Typography;

const columns: ColumnsType<IErrand> = [
  {
    title: 'Name',
    dataIndex: 'title',
    key: 'title',
    render: (text, record) => {
      let color = 'green';
      if(record.priority === 'high') {
        color = 'red';
      } else if(record.priority === 'low') {
        color = 'grey'
      }
      return (
        <Link href={`/admin/ticket/${record._id}`}>
          <a>
            <Badge color={color} />
            {text}
          </a>
        </Link>
      )
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text, record) => {
      let color = 'blue';
      if(record.status === 'in progress') {
        color = 'orange';
      } else if(record.status === 'closed') {
        color = 'green'
      }
      return (<Tag color={color}>{text}</Tag>);
    }
  },
  {
    title: 'Reporter',
    dataIndex: 'reporter',
    key: 'reporter',
    render: (reporter, record) => {
      if(!!!reporter) return '';
      return `${reporter?.firstName}`
    }
  },
  {
    title: 'Assignee',
    dataIndex: 'assignee',
    key: 'assignee',
    render: (assignee, record) => {
      if(!!!assignee) return '';
      return `${assignee?.firstName}`
    }
  },
  {
    title: 'Date Created',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (val, record) => {
      if(!!!val) return '';
      return `${toMomentDate(val)?.format('ll')}`
    }
  },
  {
    title: 'Due Date',
    dataIndex: 'endDate',
    key: 'endDate',
    render: (val, record) => {
      if(!!!val) return '';
      return `${toMomentDate(val)?.format('ll')}`
    }
  },
];

const TicketPage: NextPage = () => {
  const { data } = useSession()
  const ticketStore = useTicketStore();
  const [openErrandForm, setOpenErrandForm] = useState(false);
  const [getErrands, { loading: errandsLoading, error: errandsError, data: errandData }] = useGetErrandsLazyQuery();

  useEffect(() => {
    getErrands({ variables: { filters: { category: ErrandCategory.Ticket }  }}).then(result => {
      ticketStore.loadTickets(result?.data?.errands as IErrand[])
      filter({})
    }).catch(err => {
      message.success(`Failed to fetch errands`);
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
    ticketStore.filter(filters);
  }

  return (
    <>
      <section className="bg-slate-200 w-60 min-h-screen p-8">
        <Button type="dashed" className="mb-2 text-left" block onClick={() => setOpenErrandForm(true)}>New Ticket</Button>
        <Divider className="my-6" />
        <Button type="dashed" className="mb-2 text-left" block onClick={() => filter({})}>Clear Filters</Button>
        <Button type="dashed" className="mb-2 text-left" block onClick={() => filter({ assignee: (data?.user as any)?._id  })}>Mine</Button>
        <Button type="dashed" className="mb-2 text-left" block onClick={() => filter({ status: 'open' })}>Open</Button>
        <Button type="dashed" className="mb-2 text-left" block onClick={() => filter({ status: 'in progress' })}>In Progress</Button>
        <Button type="dashed" className="mb-2 text-left" block onClick={() => filter({ status: 'closed' })}>Closed</Button>
        <Button type="dashed" className="mb-2 text-left" block onClick={() => filter({ status: 'stuck' })}>Stuck</Button>
        <Divider className="my-6" />
        <Button type="dashed" className="mb-2 text-left" block onClick={() => filter({ other: 'new-today' })}>New Today</Button>
        <Button type="dashed" className="mb-2 text-left" block onClick={() => filter({ other: 'due-today' })}>Due Today</Button>
        <Button type="dashed" className="mb-2 text-left" block onClick={() => filter({ other: 'over-due' })}>Over Due</Button>
        <Divider className="my-6" />
        <Button type="dashed" className="mb-2 text-left" block onClick={() => filter({ priority: 'normal' })}><Badge color='green' />Normal Priority</Button>
        <Button type="dashed" className="mb-2 text-left" block onClick={() => filter({ priority: 'low' })}><Badge color='grey' />Low Priority</Button>
        <Button type="dashed" className="mb-2 text-left" block onClick={() => filter({ priority: 'high' })}><Badge color='red' />High Priority</Button>
      </section>

      <AdminMain>
        <Title level={2}>Tickets</Title>
        <Divider className="my-6" />

        <Table 
        rowClassName={(record, index) => index % 2 === 0 ? 'border-l-4 border-indigo-500' :  'border-l-4 border-red-500'}
        columns={columns} 
        rowKey="_id" 
        dataSource={ticketStore.filtered}
        size="small"
        pagination={
          { pageSize: 15,}
        }
        />
      </AdminMain>

      {/* Modals */}
      <AddErrandForm 
      open={openErrandForm} 
      setOpen={setOpenErrandForm} 
      goTo={'/admin/ticket/'} 
      category="TICKET"
      handleResponse={ticketStore.addTicket}
       />
    </>
  )
}

(TicketPage as any).PageLayout = AdminLayout;
export default TicketPage;
