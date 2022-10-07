import { CheckOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Avatar, Button, List, message, Popover, Radio, Select } from 'antd';
import React, { useEffect } from 'react';
import { useGetMilestonesLazyQuery, useDeleteMilestoneMutation, useEditMilestoneMutation } from '../../../generated/graphql';
import { getInitials } from '../../../lib/utils';
import { IMilestone } from '../../../models/milestone';
import useErrandStore from '../../../stores/errand';
import useMilestoneStore from '../../../stores/milestones';
import useUserStore from '../../../stores/users';
import ErrandMilestoneForm from '../../forms/ErrandMilestoneForm';

const ErrandMileStones = () => {
  const users = useUserStore((state) => state.users);
  const milestoneStore = useMilestoneStore();
  const errand = useErrandStore((state) => state.errand);
  const [getMilestones, {  loading, error }] = useGetMilestonesLazyQuery();
  const [updateMilestone, {  loading: updating, error: updateFailed }] = useEditMilestoneMutation();
  const [deleteMilestone, {  loading: deleting, error: deletFailed }] = useDeleteMilestoneMutation();

  useEffect(() => {
    getMilestones({ variables:  { errand: errand._id }}).then(result => {
      milestoneStore.loadMilestones(result?.data?.milestones as any)
    }).catch(err => {
      message.success(`Failed to fetch errand milestones`);
      console.log(err);
    })
  }, [errand])

  const editMilestone = (payload: any) => {
    updateMilestone({ variables: { payload }}).then(result => {
        message.success(`Errand Milestone Updated`);
        milestoneStore.updateMilestone({...result.data?.updateMilestone, pop: false} as IMilestone)
    }).catch(err => {
        message.success(`Errand Milestone update failed`);
    })
  };

  const removeMilestone = (milestone: IMilestone) => {
    deleteMilestone({ variables: { id: milestone._id }}).then(_ => {
        message.success(`Errand Milestone Deleted`);
        milestoneStore.removeMilestone(milestone._id)
    }).catch(err => {
        message.success(`Errand Milestone deletion failed`);
    })
  };

  const content = (item: IMilestone) => (
    <>
      <Radio.Group value="small">
        <Radio.Button onClick={() => editMilestone({ complete: !!!item.complete, id: item._id })}>
          {item.complete ? 'Un Finalise' : 'Finalise'}
        </Radio.Button>
        {/* <Radio.Button onClick={() => {
          milestoneStore.setMilestone(item);
        }}>Update</Radio.Button> */}
        <Select className="w-32" defaultValue={item.assignee?._id} onChange={(assignee) => editMilestone({ assignee, id: item._id })}>
            {users.map(user => (<Select.Option value={user._id} key={user._id}>{user.firstName} {user.lastName}</Select.Option>))}
        </Select>
        <Radio.Button onClick={() => removeMilestone(item)}>Delete</Radio.Button>
      </Radio.Group>
    </>
  );

  if(loading) {
    return (<><p>Loading Milestones</p></>)
  }

  if(error) {
    return (<><p>Error Loading Milestones</p></>)
  }

  return (
    <>

      <Button type="dashed" className="mb-2 text-center" block onClick={() => milestoneStore.setOpenForm(true)}>+ Add New</Button>
      <List
        size="small"
        dataSource={milestoneStore.milestones}
        renderItem={item => (
          <Popover placement="left" open={item.pop} content={() => content(item)} trigger="click" onOpenChange={() => milestoneStore.updateMilestone({...item, pop: !!!item.pop })}>
            <List.Item
            actions={ item.assignee ? [<Avatar key={item._id} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{getInitials(
              `${item.assignee?.firstName} ${item.assignee?.lastName}`
            )}</Avatar>]:[]}
            >
              <List.Item.Meta
                avatar={
                  item?.complete ? <CheckOutlined className="text-green-500 text-l" /> : <CloseCircleOutlined className="text-red-500 text-l" />
                }
                title={item.title}
                description={item.description}
              />
            </List.Item>
          </Popover>
        )}
      />
      {/* Modals */}
      <ErrandMilestoneForm errand={errand} />
    </>
  );
}
export default ErrandMileStones;
