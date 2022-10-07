import { useAddMilestoneMutation } from '../../generated/graphql'
import React from 'react';
import { Button, Checkbox, Form, Input, message, Modal, Select } from 'antd';
import { IErrand } from '../../models/errand';
import useMilestoneStore from '../../stores/milestones';
import { IMilestone } from '../../models/milestone';
import useUserStore from '../../stores/users';

const ErrandMilestoneForm = ({ errand }: { errand: IErrand }) => {
    const users = useUserStore((state) => state.users);
    const milestoneStore = useMilestoneStore();
    const [saveMilestoneMutation, { loading, data, error }] = useAddMilestoneMutation();

    const onFinish = (values: any) => {
        saveMilestoneMutation({ variables: { payload: { ...values, errand: errand._id } }}).then(result => {
            message.success(`Errand Milestone added`);
            milestoneStore.addMilestone(result.data?.createMilestone as IMilestone)
        }).catch(err => {
            message.success(`Errand Milestone failed`);
        })
        milestoneStore.setMilestone(null);
        milestoneStore.setOpenForm(false);
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
        <Modal
            title="Milestone Form"
            open={milestoneStore.openForm}
            onCancel={() => milestoneStore.setOpenForm(false)}
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
                <Form.Item name="complete" label="Complete">
                    <Checkbox />
                </Form.Item>
                <Button type="primary" htmlType="submit" block className="bg-blue-500">
                    Submit
                </Button>
            </Form>
        </Modal>
        </>
    )
}

export default ErrandMilestoneForm;
