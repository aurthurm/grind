import { useAddErrandMutation } from '../../generated/graphql'
import React, { useState } from 'react';
import { Button, Form, Input, message, Modal } from 'antd';
import useTicketStore from '../../stores/tickers'
import { IErrand } from '../../models/errand';
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
const EditorCK = dynamic(() => import("../../components/editors/EditorCK"), { ssr: false });

const AddErrandForm = ({ open, setOpen, goTo }: any) => {
    const router = useRouter()
    const [saveErrandMutation, { loading, data, error }] = useAddErrandMutation();
    const [description, setDescription] = useState("Start typing ....");
    const addTicket = useTicketStore((state) => state.addTicket);

    const handleCancel = (e: React.MouseEvent<HTMLElement>) => setOpen(false);

    const onFinish = (values: any) => {
        saveErrandMutation({ variables: { payload: values }}).then(result => {
            message.success(`Errand Added`);
            addTicket(result.data?.createErrand as IErrand)
            if(goTo && result.data?.createErrand._id) {
                router.push(`${goTo}${result.data?.createErrand._id}`);
            }
        }).catch(err => {
            message.success(`Errand adding failed`);
        })
        setOpen(false);
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
        <Modal
            title="Errand Form"
            open={open}
            onCancel={handleCancel}
            footer={null}
        >
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                >
                <Form.Item
                    name="title"
                    rules={[{ required: true, message: 'Errand name is required!' }]}
                >
                    <Input placeholder="Errand Title" />
                </Form.Item>

                <Form.Item
                    name="description"
                    rules={[{ required: true, message: 'Errand Description is required!' }]}
                >
                    <EditorCK value={"description"} onChange={setDescription} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" className="bg-blue-700">
                        Save Errand
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
        </>
    )
}

export default AddErrandForm;
