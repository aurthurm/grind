import { CheckOutlined, EyeOutlined, MessageOutlined } from '@ant-design/icons';
import { Avatar, Button, Divider, message, Tabs } from 'antd';
import { Typography } from 'antd';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { useEditErrandMutation } from '../../../generated/graphql';
import { IErrand } from '../../../models/errand';
import useDiscussionStore from '../../../stores/discussions';
import useEngagementStore from '../../../stores/engagements';
import useErrandStore from '../../../stores/errand';
import useTicketStore from '../../../stores/tickets';
import HtmlViewer from '../../editors/HTMLViewer';
import ErrandActivity from './ErrandActivity';
import ErrandDiscussion from './ErrandDiscussion';
import ErrandFiles from './ErrandFiles';
import ErrandMeta from './ErrandMeta';
import ErrandMileStones from './ErrandMilestone';
const { Text } = Typography;
const EditorCK = dynamic(() => import("../../editors/EditorCK"), { ssr: false });


const ErrandDetail = () => {
  const errandStore = useErrandStore();
  const discussionStore = useDiscussionStore();
  const updateTicket = useTicketStore((state) => state.updateTicket);
  const updateEngagement = useEngagementStore((state) => state.updateEngagement);
  const [isEditing, setIsEditing] = useState(false);
  const [updateErrandMutation, { loading, data, error }] = useEditErrandMutation();

  const updateErrand = (data: any) => {
    const prev = errandStore.errand;
    errandStore.updateErrand(data);

    updateErrandMutation({ variables: { payload: { id: prev._id, ...data } }}).then(result => {
      if(errandStore.errand.category === "TICKET") {
        updateTicket(result.data?.updateErrand as IErrand)
      }
      if(errandStore.errand.category === "ENGAGEMENT") {
        updateEngagement(result.data?.updateErrand as IErrand)
      }
      message.success(`Update success`);
    }).catch(err => {
      message.success(`update failed ${err.message}`);
      errandStore.updateErrand(prev)
    })

  }

  let tabs: any[] = [];
  if(errandStore.errand?.category === "TICKET") {
    tabs = [
      { label: 'Milestones', key: 'milestone', children: <ErrandMileStones /> },
      { label: 'Activity Stream', key: 'activity', children: <ErrandActivity target='errand' targetId={errandStore.errand._id} /> },
      { label: 'Files', key: 'files', children: <ErrandFiles /> },
    ]
  }
   
  return (
    <>
      <div className="p-8 w-full mt-16 grid grid-cols-4 gap-4">  
         {/* Left Column */}
        <div className="col-span-3">
          <article className="px-8">

            <div className="text-center">
              <Typography.Title 
                editable={{
                  triggerType: ['text'],
                  enterIcon: <CheckOutlined />,
                  onChange(title) {
                    updateErrand({ title });
                  },
                }} 
                level={1} 
                style={{ marginBottom: 20 }}
                className="hover:bg-gray-100"
                >
                  {errandStore.errand?.title}
              </Typography.Title>

              <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>AM</Avatar>
              <Text type="secondary" className="ml-2" strong italic>Aurthur M - Oct 12 2021</Text>
            </div>

            <div className="mt-12 text-justify text-lg">
              {!isEditing ?
                <article onDoubleClick={() => setIsEditing(true)} className="hover:bg-gray-100 p-4 hover:rounded-md">
                    <HtmlViewer content={errandStore.errand?.description} />
                </article> :
              <div>
                <EditorCK value={errandStore.errand?.description} onChange={(description: string) => errandStore.updateErrand({ description })}/>
                <Button className="flex items-center mt-2 bg-white" icon={<EyeOutlined />} size='small' onClick={() => {
                  setIsEditing(false);
                  updateErrand({description: errandStore.errand.description});
                }}>Save</Button>
              </div>}
            </div>

            <Divider className="my-4" />
            <section className="flex justify-between">
              <div></div>
              <div>
                <Button type="dashed" icon={<MessageOutlined />} className="flex items-center" onClick={() => discussionStore.setOpenForm(true)}>
                  Reply
                </Button>
              </div>
            </section>
            <Divider className="my-4" />

          </article>
          <section className="px-8">
            <ErrandDiscussion />
          </section>
        </div>   
        
         {/* Right Column */}  
        <div className="col-span-1">
          <ErrandMeta />
          <Tabs items={tabs} />
        </div>

      </div>
    </>
  );
}
export default ErrandDetail;

