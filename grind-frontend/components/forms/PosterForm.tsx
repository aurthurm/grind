import { useAddPosterMutation } from '../../generated/graphql'
import React from 'react';
import { Button, Form, Input, message, Modal } from 'antd';
import { IPoster } from '../../models/poster';
import useBoardStore from '../../stores/board';


const PosterForm = ({ open, setOpen }: any) => {
    const boardStore = useBoardStore();
    const [savePosterMutation,] = useAddPosterMutation();

    const onFinish = (values: any) => {
        savePosterMutation({ variables: { payload: { ...values, board: boardStore.board?._id } }}).then(result => {
            message.success(`Poster added`);
            boardStore.addPoster(result.data?.createPoster as IPoster)
        }).catch(err => {
            message.success(`Poster failed`);
        })
        setOpen(false);
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
        <Modal
            title="Poster Form"
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
                <Button type="primary" htmlType="submit" block className="bg-blue-500">
                    Submit
                </Button>
            </Form>
        </Modal>
        </>
    )
}

export default PosterForm;
