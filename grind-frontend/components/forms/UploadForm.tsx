import React from 'react';
import { message, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { UploadProps } from 'antd/lib/upload';
import { BACKEND_API } from '../../lib/constants';
import { IMediaFile } from '../../models/media';

const { Dragger } = Upload;

interface IFileUploadProps {
  extras: any
  handleUploaded: (val: IMediaFile) => void
}

const FileUploadForm = ({ handleUploaded, extras }: IFileUploadProps) => {

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: `${BACKEND_API}/media-manager/upload`,
    data: extras,
    showUploadList: false,
    onChange(info) {
      const { status } = info.file;
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        handleUploaded(info.file?.response?.media);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

    return (
        <>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon h-2">
              <InboxOutlined style={{ fontSize: 24 }} />
            </p>
          </Dragger>
        </>
    )
}

export default FileUploadForm;
