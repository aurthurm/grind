import { Button, Collapse, List, Progress, Tag } from 'antd';
import type { NextPage } from 'next'
import Link from 'next/link';
import React, { useState } from 'react';
import { toMomentDate } from '../../../lib/utils';
import { IErrand } from '../../../models/errand';
import { IPoster } from '../../../models/poster';
import useBoardStore from '../../../stores/board';
import useSchemeStore from '../../../stores/schemes';
import AddErrandForm from '../../forms/AddErrandForm';
import PosterForm from '../../forms/PosterForm';
import AdminLayout from '../../layouts/admin';
const { Panel } = Collapse;

const BoardListing: NextPage = () => {
  const [posterId, setPosterId] = useState('');
  const [openErrandForm, setOpenErrandForm] = useState(false);
  const [openPosterForm, setOpenPosterForm] = useState(false);
  const scheme = useSchemeStore((state) => state.scheme);
  const posters = useBoardStore((state) => state.board?.posters);
  const boardStore = useBoardStore()

  const getHeader = (poster: IPoster) =>
    (
      <div className="flex justify-between">
        <Button type="primary" className="bg-blue-500 text-white px-2 py-1" onClick={() => newErrand(poster)}>+ {poster?.title}</Button>
        <div className="flex font-semibold text-gray-400">
          <div className="w-32 pl-2 border-x border-b-gray-300">Asignee</div>
          <div className="w-32 pl-2">Due Date</div>
          <div className="w-32 pl-2 border-x border-b-gray-300">status</div>
          <div className="w-48 pl-2 border-x border-b-gray-300">Tags</div>
        </div>
      </div>
    )
  
  const getColor = (errand: IErrand) => {
    let color;
    switch (errand.priority) {
      case "critical":
        color = "red"
        break;
      case "high":
        color = "amber"
        break;
      case "normal":
        color = "green"
        break;
      case "low":
        color = "grey"
        break;
      default:
        color = "yellow"
        break;
    }
    return color;
  }

  const getErrandListing = (errand: IErrand, poster: IPoster) => (
      <div className="flex justify-between border-b border-b-gray-300 py-2">
        <div className={`border-l-2 border-${getColor(errand)}-500 pl-2`}>
          <Progress type="circle" percent={errand?.progress} width={30} className="mr-4" /> 
          <Link href={`/admin/projects/${scheme?._id}/errand/${errand?._id}`} className="cursor-pointer">
            {errand?.title}
          </Link>
        </div>
        <div className="flex">
          <div className="w-32 pl-2 border-x border-b-gray-300">{errand.assignee?.firstName} {errand.assignee?.lastName}</div>
          <div className="w-32 pl-2">{toMomentDate(errand?.endDate)?.toDate().toLocaleDateString() ?? ''}</div>
          <div className="w-32 pl-2 border-x border-b-gray-300">{poster?.title}</div>
          <div className="w-48 pl-2 border-x border-b-gray-300">
            {errand.stamps?.map((stamp: any) => (
                <Tag key={stamp._id} color="#2db7f5">
                  {stamp?.title}
                </Tag>
            ))}
            </div>
        </div>
      </div>
   
  )

  const newErrand = (poster: IPoster) => {
    setPosterId(poster?._id);
    setOpenErrandForm(true);
  }
 
  return (
    <section>

      <Button type="primary" className="text-blue-500 mb-4" onClick={() => setOpenPosterForm(true)}>Add Poster</Button>

      <Collapse defaultActiveKey={['1']} ghost>
        {posters?.map((poster: IPoster) => {
          return (
            <Panel header={poster?.title} key={poster._id}>
              <List
                size="small"
                header={(() => getHeader(poster))()}
                bordered={false}
                dataSource={[{} as IErrand, ...(poster?.errands ?? [])]}
                renderItem={(errand: IErrand, index: number) => ( errand?._id ? getErrandListing(errand, poster) : <></>)}
              />
            </Panel>
          )
        })}
      </Collapse>

      {/* Modals */}
      <AddErrandForm 
        open={openErrandForm} 
        setOpen={setOpenErrandForm} 
        goTo={null} 
        category="PROJECT"
        extras={{ poster: posterId }}
        handleResponse={boardStore.addErrand}
        />
       <PosterForm open={openPosterForm} setOpen={setOpenPosterForm} />
    </section>
  )
}

(BoardListing as any).PageLayout = AdminLayout;
export default BoardListing;


