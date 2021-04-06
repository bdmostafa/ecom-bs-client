import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { createUser } from '../../Redux/User/UserActions';

const CreateUser = ({ role }) => {
    const dispatch = useDispatch();
    const onFinish = (values) => {
        console.log('Success:', values);
        dispatch(createUser(values));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <FormWrapper>
            <Heading>Create {role === 'admin' ? 'User' : 'Admin'}</Heading>
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password again!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%'}}>
                    Create {role === 'admin' ? 'User' : 'Admin'}
        </Button>
                </Form.Item>
            </Form>
        </FormWrapper>
    );
};

export default CreateUser;

const FormWrapper = styled.div`
margin: 0 auto;
    padding-top: 50px;
    max-width: max-content;
    border: 1px solid gray;
    padding: 30px;
    border-radius: 5px;
`;

const Heading = styled.h3`
padding: 20px;
text-align: center;
`;