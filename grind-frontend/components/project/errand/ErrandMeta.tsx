import {  message, Progress, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import useErrandStore from '../../../stores/errand';
import useUserStore from '../../../stores/users';
import { useEditErrandMutation, useGetUsersLazyQuery } from '../../../generated/graphql';
import { IErrand } from '../../../models/errand';
import useTicketStore from '../../../stores/tickers';
import { IUser } from '../../../models/user';

const ErrandMeta = () => {
  const users = useUserStore((state) => state.users);
  const loadUsers = useUserStore((state) => state.loadUsers);
  const errandStore = useErrandStore();
  const [updateErrandMutation, { loading, data, error }] = useEditErrandMutation();
  const [queryUsers] = useGetUsersLazyQuery()
  const updateTicket = useTicketStore((state) => state.updateTicket);

  useEffect(() => {
    if(!users.length){
      queryUsers().then(result => {
        loadUsers(result.data?.users as IUser[])
      })
    }
  },[])

  const updateErrand = (update: any) => {
    updateErrandMutation({ variables: { payload: { id: errandStore.errand._id, ...update } }}).then(result => {
      message.success(`Errand Updated`);
      updateTicket(result.data?.updateErrand as IErrand)
    }).catch(err => {
        message.success(`Errand updaing failed`);
    })
  }

  const updateTeamMembers = (memberIds: any[]) => {
    const payload = { memberIds, members: memberIds.map(t => users.find(x => x._id === t)) }
    errandStore.updateErrand(payload);
    updateErrand({ members: memberIds })
  }

  if(!errandStore.errand._id) return;

  console.log(errandStore.errand)
 
  return (
    <>
    <div className="mb-4">
      <Progress percent={30} />
    </div>
    <div className="grid grid-cols-3 mb-4">
      <div className="col-span-1 mt-2">Status</div>
      <div>
        <Select defaultValue={errandStore.errand.status} style={{ width: 120 }} onChange={(status) => updateErrand({ status })} showArrow={false} bordered={false}>
          <Select.Option value="open">Open</Select.Option>
          <Select.Option value="in progress">In Progress</Select.Option>
          <Select.Option value="closed">Closed</Select.Option>
        </Select>
      </div>
    </div>
    <div className="grid grid-cols-3 mb-4">
      <div className="col-span-1 mt-2">Assignee</div>
      <div>
        <Select defaultValue={errandStore.errand?.assignee?._id} style={{ width: 120 }} onChange={(assignee) => updateErrand({ assignee })} showArrow={false} bordered={false}>
          {users.map(user => (<Select.Option value={user._id} key={user._id}>{user.firstName} {user.lastName}</Select.Option>))}
        </Select>
      </div>
    </div>
    <div className="grid grid-cols-3 mb-4">
      <div className="col-span-1 mt-2">Reporter</div>
      <div>
        <Select defaultValue={errandStore.errand?.reporter?._id} style={{ width: 120 }} onChange={(reporter) => updateErrand({ reporter })} showArrow={false} bordered={false}>
          {users.map(user => (<Select.Option value={user._id} key={user._id}>{user.firstName} {user.lastName}</Select.Option>))}
        </Select>
      </div>
    </div>
    <div className="mb-4">
      <div className="mb-2">Team Members</div>
      <div>
        <Select
          mode="multiple"
          placeholder="Inserted are removed"
          value={errandStore.errand.memberIds}
          onChange={updateTeamMembers}
          style={{ width: '100%' }}
        >
          {users.map(user => (
            <Select.Option key={user._id} value={user._id}>
              {user.firstName} {user.lastName}
            </Select.Option>
          ))}
        </Select>
      </div>
    </div>
    <div className="grid grid-cols-3 mb-4">
      <div className="col-span-1 mt-2">Priority</div>
      <div>
        <Select defaultValue={errandStore.errand.priority} style={{ width: 120 }} onChange={(priority) => updateErrand({ priority })} showArrow={true} bordered={false}>
          <Select.Option value="critical">Critical</Select.Option>
          <Select.Option value="high">High</Select.Option>
          <Select.Option value="normal">Normal</Select.Option>
          <Select.Option value="low">Low</Select.Option>
        </Select>
      </div>
    </div>
    </>
  );
}
export default ErrandMeta;