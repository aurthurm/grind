import { CheckOutlined, CloseCircleOutlined, DeleteOutlined, DownloadOutlined, FileOutlined } from '@ant-design/icons';
import { Avatar, Button, List, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useGetMediasLazyQuery } from '../../../generated/graphql';
import { formatBytes, getInitials } from '../../../lib/utils';
import useErrandStore from '../../../stores/errand';
import useMilestoneStore from '../../../stores/milestones';
import FileUploadForm from '../../forms/UploadForm';
import ErrandMilestoneForm from '../../forms/ErrandDiscussionForm';
import { IMediaFile } from '../../../models/media';
import { BACKEND_API, BACKEND_HOST } from '../../../lib/constants';

const ErrandFiles = () => {
  const errand = useErrandStore((state) => state.errand);
  const [getMedias, {  loading, error }] = useGetMediasLazyQuery();
  const [medias, setMedias] = useState<IMediaFile[]>([]);

  useEffect(() => {
    getMedias({ variables:  { target: 'errand', targetId: errand._id }}).then(result => {
      setMedias(result?.data?.medias as IMediaFile[])
    }).catch(err => {
      message.success(`Failed to fetch errand media files`);
      console.log(err);
    })
  }, [errand])

  const  downloadMedia = (media: IMediaFile) => {
    var element = document.createElement('a');
    element.setAttribute('href', `${BACKEND_HOST}/${media.path}`);
    element.style.display = 'none';
    element.setAttribute('target', '_blank');
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const deleteMedia = (media: IMediaFile) => {
    fetch(`${BACKEND_API}/media-manager/${media._id}`, {
        method: 'DELETE',
    }).then(res => {
      console.log(res.json())
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      const filter = medias.filter(m => m._id !== media._id);
      setMedias(filter);
    })
  }

  if(loading) {
    return (<><p>Loading Milestones</p></>)
  }

  if(error) {
    return (<><p>Error Loading Milestones</p></>)
  }

  return (
    <>
      <FileUploadForm  extras={{ target: "errand", targetId: errand._id }} />
      <List
        size="small"
        dataSource={medias}
        renderItem={item => (
            <List.Item
            actions={[
              <Button key={`dwn-${item._id}`} type="primary" shape="circle" icon={<DownloadOutlined />} className="bg-blue-500" size='small' onClick={() => downloadMedia(item)} />,
              <Button key={`dlt-${item._id}`} type="primary" shape="circle" icon={<DeleteOutlined />} className="bg-red-500" size='small' onClick={() => deleteMedia(item)} danger/>
            ]}
            >
              <List.Item.Meta
                avatar={
                  <FileOutlined className="text-green-500 text-l" />
                }
                title={item.originalname}
                description={(
                  <p>Size: {formatBytes(item.size)}</p>
                )}
              />
            </List.Item>
        )}
      />
      {/* Modals */}
      <ErrandMilestoneForm errand={errand} />
    </>
  );
}
export default ErrandFiles;
