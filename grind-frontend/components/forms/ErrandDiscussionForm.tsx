import { useAddDscussionMutation } from '../../generated/graphql'
import React, { useState } from 'react';
import { Button, Form, message, Modal } from 'antd';
import { IErrand } from '../../models/errand';
import dynamic from "next/dynamic";
import useDiscussionStore from '../../stores/discussions';
import { IErrandDiscussion } from '../../models/errand-discussion';
const EditorCK = dynamic(() => import("../editors/EditorCK"), { ssr: false });

const ErrandDiscussionForm = ({ errand }: { errand: IErrand }) => {
    const discussionStore = useDiscussionStore();
    const [saveDiscussionMutation, { loading, data, error }] = useAddDscussionMutation();
    const [description, setDescription] = useState("Start typing ....");

    const onFinish = (values: any) => {
        saveDiscussionMutation({ variables: { payload: { content: values.description, errand: errand._id } }}).then(result => {
            message.success(`Errand Discussion added`);
            discussionStore.addDiscussion(result.data?.createDiscussion as IErrandDiscussion)
        }).catch(err => {
            message.success(`Errand Discussion failed`);
        })
        discussionStore.setOpenForm(false);
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
        <Modal
            title="Discussion Form"
            open={discussionStore.openForm}
            onCancel={() => discussionStore.setOpenForm(false)}
            footer={null}
            width={600}
            centered
        >
            <Form
                name="basic"
                labelCol={{ span: 10 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                >
                <Form.Item
                    name="description"
                    rules={[{ required: true, message: 'Discussion Message is required!' }]}
                >
                    <EditorCK value={"description"} onChange={setDescription} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" className="bg-blue-700">
                        Save Discussion
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
        </>
    )
}

export default ErrandDiscussionForm;
