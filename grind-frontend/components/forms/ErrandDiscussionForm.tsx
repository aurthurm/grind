import { useAddDscussionMutation, useEditDscussionMutation } from '../../generated/graphql'
import React, { useEffect, useState } from 'react';
import { Button, Form, message, Modal } from 'antd';
import { IErrand } from '../../models/errand';
import dynamic from "next/dynamic";
import useDiscussionStore from '../../stores/discussions';
import { IErrandDiscussion } from '../../models/errand-discussion';
const EditorCK = dynamic(() => import("../editors/EditorCK"), { ssr: false });

const ErrandDiscussionForm = ({ errand }: { errand: IErrand }) => {
    const discussionStore = useDiscussionStore();
    const [saveDiscussionMutation,] = useAddDscussionMutation();
    const [editDiscussionMutation,] = useEditDscussionMutation();
    const [description, setDescription] = useState("Start typing ....");

    useEffect(() => {
        if(discussionStore?.discussion) {
            setDescription(discussionStore?.discussion.content)
        }
    }, [discussionStore?.discussion])

    const onFinish = (values: any) => {
        if(!discussionStore?.discussion) {
            saveDiscussionMutation({ variables: { payload: { content: description, errand: errand._id } }}).then(result => {
                message.success(`Errand Discussion added`);
                discussionStore.addDiscussion(result.data?.createDiscussion as IErrandDiscussion)
            }).catch(err => {
                message.success(`Errand Discussion add failed`);
            })
        } else {
            editDiscussionMutation({ variables: { payload: { content: description, id: discussionStore?.discussion._id } }}).then(result => {
                message.success(`Errand Discussion edited`);
                discussionStore.updateDiscussion(result.data?.updateDiscussion as IErrandDiscussion)
            }).catch(err => {
                message.success(`Errand Discussion update failed`);
            })            
        }
        discussionStore.setOpenForm(false);
        discussionStore.setDiscussion(null);
        setDescription("Start typing ....");
    };
    
    const onFinishFailed = (errorInfo: any) => {
        discussionStore.setDiscussion(null);
        setDescription("Start typing ....");
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
                initialValues={{ remember: false }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                >
                <EditorCK value={description} onChange={setDescription} />
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
