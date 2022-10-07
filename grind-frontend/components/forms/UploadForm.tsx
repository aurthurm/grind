import React from 'react';
import { message, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { UploadProps } from 'antd/lib/upload';
import { BACKEND_API } from '../../lib/constants';

const { Dragger } = Upload;

interface IFileUploadProps {
  extras: any
}

const FileUploadForm = ({ extras }: IFileUploadProps) => {

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: `${BACKEND_API}/media-manager/upload`,
    data: extras,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
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
