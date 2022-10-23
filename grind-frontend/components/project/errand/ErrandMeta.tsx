import {  message, Progress, Select } from 'antd';
import React, { useEffect } from 'react';
import { DatePicker } from 'antd';
import useErrandStore from '../../../stores/errand';
import useUserStore from '../../../stores/users';
import { useEditErrandMutation, useGetUsersLazyQuery, useGetStampsLazyQuery, useGetLabelsLazyQuery } from '../../../generated/graphql';
import { IErrand } from '../../../models/errand';
import useTicketStore from '../../../stores/tickets';
import { IUser } from '../../../models/user';
import type { RangePickerProps } from 'antd/lib/date-picker';
import useMilestoneStore from '../../../stores/milestones';
import useBoardStore from '../../../stores/board';
import useLabelStore from '../../../stores/labels';
import useStampStore from '../../../stores/stamps';
import { ILabel } from '../../../models/label';
import { IStamp } from '../../../models/stamp';
const { RangePicker } = DatePicker;

const ErrandMeta = () => {
  const users = useUserStore((state) => state.users);
  const loadUsers = useUserStore((state) => state.loadUsers);
  const labelStore = useLabelStore();
  const stampStore = useStampStore();
  const errandStore = useErrandStore();
  const boardStore = useBoardStore();
  const [updateErrandMutation,] = useEditErrandMutation();
  const [queryUsers] = useGetUsersLazyQuery()
  const [queryStamps] = useGetStampsLazyQuery()
  const [queryLabel] = useGetLabelsLazyQuery()
  const updateTicket = useTicketStore((state) => state.updateTicket);
  const milestones = useMilestoneStore((state) => state.milestones);

  useEffect(() => {
    if(!users.length){
      queryUsers().then(result => {
        loadUsers(result.data?.users as IUser[])
      })
    }
    if(!labelStore.labels?.length){
      queryLabel().then(result => {
        labelStore.loadLabels(result.data?.labels as ILabel[])
      })
    }
    if(!stampStore.stamps?.length){
      queryStamps().then(result => {
        stampStore.loadStamps(result.data?.stamps as IStamp[])
      })
    }
  },[]);

  const onChangeDates: RangePickerProps['onChange'] = (_, dateString) => {
    const payload = { startDate: dateString[0], endDate: dateString[1] };
    if(dateString.includes("")) {
      errandStore.updateErrand(payload)
      return;
    };
    updateErrand(payload);
  };

  const updateErrand = (update: any) => {
    updateErrandMutation({ variables: { payload: { id: errandStore.errand._id, ...update } }}).then(result => {
      message.success(`Errand Updated`);
      errandStore.updateErrand(result.data?.updateErrand as IErrand)
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

  const updateStamps = (stampIds: any[]) => {
    const payload = { stampIds, stamps: stampIds.map(t => stampStore.stamps.find(x => x._id === t)) }
    errandStore.updateErrand(payload);
    updateErrand({ stamps: stampIds })
  }

  if(!errandStore.errand._id) {
    return (<>Cannot Load Errand</>);
  };
 
  return (
    <>
      {['TICKET','PROJECT'].includes(errandStore.errand?.category ?? '') === false ? '' : (
        <RangePicker className="my-4" onChange={onChangeDates} value={[errandStore.errand?.startDate, errandStore.errand?.endDate]}/>
      )}

      {['TICKET', 'ENGAGEMENT'].includes(errandStore.errand?.category ?? '') === false ? '' : (
        <div className="grid grid-cols-3 mb-4">
          <div className="col-span-1 mt-2">Status</div>
          <div>
            <Select defaultValue={errandStore.errand.label?._id} style={{ width: 120 }} onChange={(label) => updateErrand({ label })} showArrow={false} bordered={false}>
              {labelStore?.labels?.map(label => (<Select.Option value={label._id} key={label._id}>{label?.title}</Select.Option>))}
            </Select>
          </div>
        </div>
      )}

      {['PROJECT'].includes(errandStore.errand?.category ?? '') === false ? '' : (
        <div className="grid grid-cols-3 mb-4">
          <div className="col-span-1 mt-2">Status</div>
          <div>
            <Select defaultValue={errandStore.errand.poster?._id} style={{ width: 120 }} onChange={(poster) => updateErrand({ poster })} showArrow={false} bordered={false}>
              {boardStore?.board?.posters?.map(poster => (<Select.Option value={poster._id} key={poster._id}>{poster?.title}</Select.Option>))}
            </Select>
          </div>
        </div>
      )}

      {['TICKET','PROJECT'].includes(errandStore.errand?.category ?? '') === false ? '' : (
        <div className="grid grid-cols-3 mb-4">
          <div className="col-span-1 mt-2">Assignee</div>
          <div>
            <Select defaultValue={errandStore.errand?.assignee?._id} style={{ width: 120 }} onChange={(assignee) => updateErrand({ assignee })} showArrow={false} bordered={false}>
              {users.map(user => (<Select.Option value={user._id} key={user._id}>{user.firstName} {user.lastName}</Select.Option>))}
            </Select>
          </div>
        </div>
      )}

      {['TICKET','PROJECT'].includes(errandStore.errand?.category ?? '') === false ? '' : (
        <div className="grid grid-cols-3 mb-4">
          <div className="col-span-1 mt-2">Reporter</div>
          <div>
            <Select defaultValue={errandStore.errand?.reporter?._id} style={{ width: 120 }} onChange={(reporter) => updateErrand({ reporter })} showArrow={false} bordered={false}>
              {users.map(user => (<Select.Option value={user._id} key={user._id}>{user.firstName} {user.lastName}</Select.Option>))}
            </Select>
          </div>
        </div>
      )}

      {['TICKET','PROJECT', 'ENGAGEMENT'].includes(errandStore.errand?.category ?? '') === false ? '' : (
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
      )}

      {['TICKET','PROJECT', 'ENGAGEMENT'].includes(errandStore.errand?.category ?? '') === false ? '' : (
        <div className="grid grid-cols-3">
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
      )}

      {['TICKET','PROJECT'].includes(errandStore.errand?.category ?? '') === false ? '' : (
        <div className="mt-4">
          <div className="mb-2">Tags</div>
          <div>
            <Select
              mode="multiple"
              placeholder="Inserted are removed"
              value={errandStore.errand.stampIds}
              onChange={updateStamps}
              style={{ width: '100%' }}
            >
              {stampStore.stamps.map(stamp => (
                <Select.Option key={stamp._id} value={stamp._id}>
                  {stamp.title} 
                </Select.Option>
              ))}
            </Select>
          </div>
        </div>
      )}

      {['TICKET','PROJECT'].includes(errandStore.errand?.category ?? '') === false ? '' : (
        <div>
          <Progress percent={(() => {
            const perc = milestones.filter(m => m.complete).length/milestones.length * 100;
            return perc;
          })()} className="my-4" />
        </div>
      )}
    </>
  );
}
export default ErrandMeta;
