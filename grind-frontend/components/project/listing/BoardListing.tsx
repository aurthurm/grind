import { Button, Divider, List, Space, Table, Tag, Typography } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import type { NextPage } from 'next'
import React from 'react';
import AdminLayout from '../../../components/layouts/admin';
import AdminMain from '../../../components/layouts/AdminMain';

const { Title } = Typography;


interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
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
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '5',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];



const BoardListing: NextPage = () => {
 
  return (
    <>
      <section>
        <List
          size="small"
          className="mb-6"
          header={<div className="flex justify-between">
              <Tag className="px-4 py-1 font-semibold text-white bg-sky-700">TODO</Tag>
              <div className="flex font-semibold text-gray-400">
                <div className="w-32">Asignee</div>
                <div className="w-32">Due Date</div>
                <div className="w-32">status</div>
                <div className="w-32">Priority</div>
              </div>
            </div>}
          bordered={false}
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item className="flex justify-between">
            <div>{item.address}</div>
            <div className="flex">
              <div className="w-32">{item.name}</div>
              <div className="w-32">10-10-2022</div>
              <div className="w-32">
                <Tag key={index}>
                  {item.tags[0]?.toUpperCase()}
                </Tag>
              </div>
              <div className="w-32">Low</div>
            </div>
          </List.Item>
          )}
        />

        <List
          size="small"
          className="mb-6"
          header={<div className="flex justify-between">
          <Tag className="px-4 py-1 font-semibold text-white bg-pink-400">TODO</Tag>
        </div>}
          bordered={false}
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item className="flex justify-between">
            <div>{item.address}</div>
            <div className="flex">
              <div className="w-32">{item.name}</div>
              <div className="w-32">10-10-2022</div>
              <div className="w-32">
                <Tag key={index}>
                  {item.tags[0]?.toUpperCase()}
                </Tag>
              </div>
              <div className="w-32">Low</div>
            </div>
          </List.Item>
          )}
        />


        <List
          size="small"
          className="mb-6"
          header={<div className="flex justify-between">
          <Tag className="px-4 py-1 font-semibold text-white bg-orange-400">TODO</Tag>
          <div className="flex font-semibold text-gray-400">
            <div className="w-32">Asignee</div>
            <div className="w-32">Due Date</div>
            <div className="w-32">status</div>
            <div className="w-32">Priority</div>
          </div>
        </div>}
          bordered={false}
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item className="flex justify-between">
            <div>{item.address}</div>
            <div className="flex">
              <div className="w-32">{item.name}</div>
              <div className="w-32">10-10-2022</div>
              <div className="w-32">
                <Tag key={index}>
                  {item.tags[0]?.toUpperCase()}
                </Tag>
              </div>
              <div className="w-32">Low</div>
            </div>
          </List.Item>
          )}
        />
      </section>
    </>
  )
}

(BoardListing as any).PageLayout = AdminLayout;
export default BoardListing;
