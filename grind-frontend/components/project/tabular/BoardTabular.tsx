import { Space, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import type { NextPage } from 'next'
import React from 'react';
import AdminLayout from '../../../components/layouts/admin';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Task Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Label',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Due Date',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Time Remaining',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Archive</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: '4 weeks, 1 day',
    tags: ['TO-DO',],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: '3 hurs',
    tags: ['RESEARCHING'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: '2 months, 3 days',
    tags: ['DOING'],
  },
];


const BoardTabular: NextPage = () => {
 
  return (
    <>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  )
}

(BoardTabular as any).PageLayout = AdminLayout;
export default BoardTabular;
