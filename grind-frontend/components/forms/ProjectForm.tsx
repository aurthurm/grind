import { useAddSchemeMutation } from '../../generated/graphql'
import React from 'react';
import { Button, Form, Input, message, Modal, Select } from 'antd';
import useSchemeStore from '../../stores/schemes';
import useUserStore from '../../stores/users';
import { useRouter } from 'next/router';
import { IScheme } from '../../models/scheme';

interface IProjectFormProps {
    goTo: string 
}

const ProjectForm = ({ goTo }: IProjectFormProps ) => {
    const router = useRouter()
    const users = useUserStore((state) => state.users);
    const schemeStore = useSchemeStore();
    const [saveSchemeMutation,] = useAddSchemeMutation();

    const onFinish = (values: any) => {
        saveSchemeMutation({ variables: { payload: { ...values } }}).then(result => {
            message.success(`Errand Scheme added`);
            schemeStore.addScheme(result.data?.createScheme as IScheme)
            if(goTo && result.data?.createScheme._id) {
                router.push(`${goTo}${result.data?.createScheme._id}`);
            }
        }).catch(err => {
            message.success(`Errand Scheme failed`);
        })
        schemeStore.setScheme(null);
        schemeStore.setOpenForm(false);
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        schemeStore.setOpenForm(false);
    };

    return (
        <>
        <Modal
            title="Project Form"
            open={schemeStore.openForm}
            onCancel={() => schemeStore.setOpenForm(false)}
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
                <Form.Item name="assignee" label="Assignee">
                    <Select >
                        {users.map(user => (<Select.Option value={user._id} key={user._id}>{user.firstName} {user.lastName}</Select.Option>))}
                    </Select>
                </Form.Item>
                <Button type="primary" htmlType="submit" block className="bg-blue-500">
                    Submit
                </Button>
            </Form>
        </Modal>
        </>
    )
}

export default ProjectForm;
