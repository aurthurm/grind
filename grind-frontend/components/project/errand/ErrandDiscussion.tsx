import { MoreOutlined } from '@ant-design/icons';
import { Avatar, Divider, Dropdown, Menu, MenuProps, message, Space } from 'antd';
import { Typography } from 'antd';
import React, { useEffect } from 'react';
import { useGetDiscussionsLazyQuery } from '../../../generated/graphql';
import useDiscussionStore from '../../../stores/discussions';
import useErrandStore from '../../../stores/errand';
import ErrandDiscussionForm from '../../forms/ErrandDiscussionForm';
import HtmlViewer from '../../editors/HTMLViewer';
import { IErrandDiscussion } from '../../../models/errand-discussion';
const { Title, Text } = Typography;

const ErrandDiscussion = () => {
  const errandStore = useErrandStore();
  const discussionStore = useDiscussionStore();
  const [getDiscussions, {  loading: discussionsLoading, error: discussionsError }] = useGetDiscussionsLazyQuery();

  useEffect(() => {
    discussionStore.loadDiscussions([])
    getDiscussions({ variables:  { id: errandStore.errand._id }}).then(result => {
      discussionStore.loadDiscussions(result?.data?.discussions as IErrandDiscussion[])
    }).catch(err => {
      message.success(`Failed to fetch errand data`);
      console.log(err);
    })
  }, [getDiscussions, errandStore.errand])
   
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
    {discussionStore.discussions.map((discussion) => {
      return (
        <>
          <div className="flex items-center">
            <div className="flex-none ml-4">
              <div className="flex items-center">
                <div  className="flex flex-col items-center mr-16">
                  <Text type="warning">Today</Text>
                  <Text type="warning">08:30 AM</Text>
                </div>
                <Avatar size={42} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>AM</Avatar>
              </div>
            </div>
            <div className="grow ml-4">
                <Title level={5}>{discussion.createdBy?.firstName} {discussion.createdBy?.lastName} - <span className="text-gray-400 italic">Software Developer</span></Title>
                <HtmlViewer content={discussion.content} />
            </div>
            <div className="flex-none ml-4">
              <Dropdown overlay={cardMenu}>
                <a onClick={e => e.preventDefault()}>
                  <Space>
                    <MoreOutlined className="text-xl" />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
          <Divider className="my-4" />
        </>
      )
      })}

      {/* Modals */}
      <ErrandDiscussionForm errand={errandStore.errand} />
    </>
  );
}
export default ErrandDiscussion;
