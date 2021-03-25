import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';

const Register = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <FormWrapper>
            <Title>Create an account</Title>
            <Text>Already have an account? Login <Link to="/users/login">Here</Link> </Text>
            <Form
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
                    name="cPassword"
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
                    <Button type="primary" htmlType="submit">
                        Sign In
                    </Button>
                </Form.Item>
            </Form>
        </FormWrapper>
    );
};

export default Register;

const FormWrapper = styled.div`
    margin: 0 auto;
    padding-top: 50px;
`;

const Title = styled.h2`
    color: black;
    text-align: center;
    font-size: 18px;
`;

const Text = styled.p`
    color: black;
    text-align: center;
    font-size: 12px;
`;