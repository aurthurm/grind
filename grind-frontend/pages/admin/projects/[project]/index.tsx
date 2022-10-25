import { Avatar, Button, Divider, message, Radio, Select } from 'antd';
import { Typography } from 'antd';
import type { NextPage } from 'next'
import AdminLayout from '../../../../components/layouts/admin';
import { useRouter } from 'next/router';
import { IScheme } from '../../../../models/scheme';
import { useGetSchemeLazyQuery, useGetPostersLazyQuery, useGetUsersLazyQuery, useEditSchemeMutation } from '../../../../generated/graphql';
import useSchemeStore from '../../../../stores/schemes';
import { getInitials } from '../../../../lib/utils';
import BoardForm from '../../../../components/forms/BoardForm';
import useBoardStore from '../../../../stores/board';
import BoardDetail from '../../../../components/project/board/BoardDetail';
import { useEffect, useState } from 'react';
import { IBoard } from '../../../../models/board';
import { IPoster } from '../../../../models/poster';
import useUserStore from '../../../../stores/users';
import { IUser } from '../../../../models/user';
const { Title } = Typography;

const ProjectsPage: NextPage = () => {
  const [openBoardForm, setOpenBoardForm] = useState(false);
  const users = useUserStore((state) => state.users);
  const loadUsers = useUserStore((state) => state.loadUsers);
  const [queryUsers] = useGetUsersLazyQuery()
  const schemeStore = useSchemeStore();
  const boardStore = useBoardStore();
  const [getScheme, { loading: schemeLoading, error: erandError}] = useGetSchemeLazyQuery()
  const [getPosters,] = useGetPostersLazyQuery()
  const [updateSchemeMutation,] = useEditSchemeMutation();
  const router = useRouter()

  useEffect(() => {
    if(!users.length){
      queryUsers().then(result => {
        loadUsers(result.data?.users as IUser[])
      })
    }
  },[]);
  
  useEffect(() => {
    schemeStore.setScheme(null);
    fetchScheme()
    if(!router.query.project) return;
  }, [router]);

  const fetchScheme = () => {
    getScheme({ variables:  { id: router.query.project as string }}).then(result => {
      schemeStore.setScheme(result?.data?.scheme as IScheme)
    }).catch(err => {
      message.success(`Failed to fetch scheme data`);
      console.log(err);
    })
  }

  const updateScheme = (update: any) => {
    updateSchemeMutation({ variables: { payload: { id: schemeStore.scheme?._id, ...update } }}).then(result => {
      message.success(`Scheme Updated`);
      schemeStore.updateScheme(result.data?.updateScheme as IScheme)
    }).catch(err => {
        message.success(`Scheme updaing failed`);
    })
  }

  if (schemeLoading) {
    return (
      <h2>
        <a href="#loading" aria-hidden="true" className="aal_anchor" id="loading">
          <svg aria-hidden="true" className="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16">
            <path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
            </path>
          </svg>
        </a>
        Loading Scheme Data
      </h2>
    );
  }

  if (erandError) {
    console.error(erandError);
    return null;
  }

  const updateSchemeMembers = (memberIds: any[]) => {
    const payload = { 
      scheme:schemeStore.scheme?._id ,
      memberIds, 
      members: memberIds.map(t => users.find(x => x._id === t)) 
    }
    schemeStore.updateScheme(payload);
    updateScheme({ members: memberIds })
  }

  const handleBoardSelect = (board: IBoard) => {
    boardStore.setBoard(board);

    // fetch posters and errands
    getPosters({ variables:  { board: board._id }}).then(result => {
      boardStore.setPosters(result?.data?.posters as IPoster[])
    }).catch(err => {
      message.success(`Failed to fetch posters data`);
      console.log(err);
    })

    // fetch discussions
  }

  return (
    <>
      <section className="pl-8 pt-4 w-full">
        <Title level={2}>{schemeStore.scheme?.title}</Title>
        
        <Divider className="" />
        <div className="flex justify-start items-center gap-6 text">
          <Title level={5} className="w-32">Assignee</Title>
          <Select 
          defaultValue={schemeStore?.scheme?.assignee?._id} 
          className="border-b border-gray-300" 
          style={{ minWidth: 240 }}
          onChange={(assignee) => updateScheme({ assignee })} showArrow={false} bordered={false}>
            {users.map(user => (<Select.Option value={user._id} key={user._id}>{user.firstName} {user.lastName}</Select.Option>))}
          </Select>
        </div>
        <div className="flex justify-start items-center gap-6 mt-4">
          <Title level={5} className="w-32">Members</Title>
          <Select
              mode="multiple"
              placeholder="Inserted are removed"
              value={schemeStore?.scheme?.memberIds}
              onChange={updateSchemeMembers}
              style={{ minWidth: 240 }}
            >
              {users.map(user => (
                <Select.Option key={user._id} value={user._id}>
                  {user.firstName} {user.lastName}
                </Select.Option>
              ))}
          </Select>
        </div>
        <Divider />

        <section className="my-4">
          <Radio.Group defaultValue="a" buttonStyle="solid">
            {schemeStore.scheme?.boards?.map(board => {
              return (<Radio.Button value={board._id} key={board._id} onClick={() => handleBoardSelect(board)}>{board?.title}</Radio.Button>)
            })}
            <Button type="primary" className="ml-2 text-blue-500" onClick={() => setOpenBoardForm(true)}>+ Board</Button>
          </Radio.Group>
        </section>
        
        <BoardDetail />
        
      </section>

       {/* Modals */}
       <BoardForm open={openBoardForm} setOpen={setOpenBoardForm} />
    </>
  )
}

(ProjectsPage as any).PageLayout = AdminLayout;
export default ProjectsPage;
