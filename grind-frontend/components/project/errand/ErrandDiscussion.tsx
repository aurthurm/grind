import { MoreOutlined } from '@ant-design/icons';
import { Avatar, Divider, Dropdown, Menu, message, Space } from 'antd';
import { Typography } from 'antd';
import React, { useEffect } from 'react';
import { useGetDiscussionsLazyQuery, useDeleteDiscussionMutation } from '../../../generated/graphql';
import useDiscussionStore from '../../../stores/discussions';
import useErrandStore from '../../../stores/errand';
import ErrandDiscussionForm from '../../forms/ErrandDiscussionForm';
import HtmlViewer from '../../editors/HTMLViewer';
import { IErrandDiscussion } from '../../../models/errand-discussion';
import { formatDate, getInitials, getTimeStamp } from '../../../lib/utils';
const { Title, Text } = Typography;

const ErrandDiscussion = () => {
  const errandStore = useErrandStore();
  const discussionStore = useDiscussionStore();
  const [getDiscussions,] = useGetDiscussionsLazyQuery();
  const [deleteDiscussion,] = useDeleteDiscussionMutation();

  useEffect(() => {
    discussionStore.loadDiscussions([])
    getDiscussions({ variables:  { id: errandStore.errand._id }}).then(result => {
      discussionStore.loadDiscussions(result?.data?.discussions as IErrandDiscussion[])
    }).catch(err => {
      message.success(`Failed to fetch errand data`);
      console.log(err);
    })
  }, [errandStore.errand])
   
  const onCardMenuClick = (discussion:IErrandDiscussion, { key }: any) => {
    if(key === 'edit') {
      discussionStore.setDiscussion(discussion);
      discussionStore.setOpenForm(true);
    } else {
      deleteDiscussion({ variables: { id: discussion._id }}).then(result => {
        discussionStore.removeDiscussion(result.data?.removeDiscussion?._id as string)
        message.success(`Deleted discussion success`);
      }).catch(err => {
        message.success(`deletng discussion failed ${err.message}`);
      })
    }
  };

  const cardMenu = (discussion: IErrandDiscussion) => {
    return (
      <Menu
        onClick={(v: any) => onCardMenuClick(discussion, v)}
        items={[
          {
            label: 'Edit',
            key: 'edit',
          },
          {
            label: 'Delete',
            key: 'delete',
          },
        ]}
      />)
  };

  return (
    <>
    {discussionStore.discussions.map((discussion) => {
      return (
        <>
          <div className="flex">
            <div className="flex-none ml-4">
              <div className="flex items-center">
                <div  className="flex flex-col items-center mr-16">
                  <Text type="warning">
                  {formatDate(errandStore.errand?.createdAt, 'dddd DD-MM-YYYY')}
                  </Text>
                  <Text type="warning">
                  {getTimeStamp(errandStore.errand?.createdAt)}
                  </Text>
                </div>
                <Avatar size={42} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                {getInitials(`${discussion.createdBy?.firstName} ${discussion.createdBy?.lastName}`)}
                </Avatar>
              </div>
            </div>
            <div className="grow ml-4">
                <Title level={5}>{discussion.createdBy?.firstName} {discussion.createdBy?.lastName} 
                {/* - <span className="text-gray-400 italic">Software Developer</span> */}
                </Title>
                <HtmlViewer content={discussion.content} />
            </div>
            <div className="flex-none ml-4">
              <Dropdown overlay={cardMenu(discussion)}>
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
