import { useAddErrandMutation } from '../../generated/graphql'
import React from 'react';
import { Button, DatePicker, Form, Input, message, Modal } from 'antd';
import { IErrand } from '../../models/errand';
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
const EditorCK = dynamic(() => import("../../components/editors/EditorCK"), { ssr: false });

const AddErrandForm = ({ open, setOpen, goTo, category, extras, handleResponse }: any) => {
    const router = useRouter()
    const [saveErrandMutation, _] = useAddErrandMutation();

    const handleCancel = (e: React.MouseEvent<HTMLElement>) => setOpen(false);

    const onFinish = (values: any) => {
        saveErrandMutation({ variables: { payload: {...values, category, ...extras } }}).then(result => {
            message.success(`Errand Added`);
            handleResponse(result.data?.createErrand as IErrand)
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
                    <EditorCK value={"description"} onChange={() => 'Start typing'} />
                </Form.Item>

                <div className="flex">
                    {['PROJECT'].includes(category) ?
                    <Form.Item className="w-1/2" name="startDate" label="Start Date" rules={[{ required: ['PROJECT'].includes(category), message: 'Start Date is required!' }]}>
                        <DatePicker />
                    </Form.Item> : null}
                    {['PROJECT', 'TICKET'].includes(category) ?
                    <Form.Item className="w-1/2" name="endDate" label="End Date" rules={[{ required: ['PROJECT', 'TICKET'].includes(category), message: 'End Date is required!' }]}>
                        <DatePicker />
                    </Form.Item> : null}
                </div>

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
