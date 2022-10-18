import { useAddBoardMutation } from '../../generated/graphql'
import React from 'react';
import { Button, Form, Input, message, Modal } from 'antd';
import useSchemeStore from '../../stores/schemes';
import { IBoard } from '../../models/board';


const BoardForm = ({ open, setOpen }: any) => {
    const schemeStore = useSchemeStore();
    const [saveBoardMutation,] = useAddBoardMutation();

    const onFinish = (values: any) => {
        saveBoardMutation({ variables: { payload: { ...values, scheme: schemeStore.scheme?._id } }}).then(result => {
            message.success(`Errand Board added`);
            schemeStore.addBoard(result.data?.createBoard as IBoard)
        }).catch(err => {
            message.success(`Errand Board failed`);
        })
        setOpen(false);
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
        <Modal
            title="Board Form"
            open={open}
            onCancel={() => setOpen(false)}
            footer={null}
            width={600}
            centered
        >
            <Form
                name="basic"
                labelCol={{ span: 5 }}
                initialValues={{ 
                    remember: false,  
                    title: '',
                    description: '', 
                    complete: false
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="horizontal"
                >
                <Form.Item name="title" label="Title"
                rules={[{ required: true, message: 'Title is required!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <Input.TextArea />
                </Form.Item>
                <Button type="primary" htmlType="submit" block className="bg-blue-500">
                    Submit
                </Button>
            </Form>
        </Modal>
        </>
    )
}

export default BoardForm;
