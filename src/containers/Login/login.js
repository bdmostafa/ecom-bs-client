import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Checkbox, Image } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userLogin } from '../../Redux/Login/LoginActions';
import { fetchUser } from '../../Redux/User/UserActions';
import logo from '../../assets/ebayLogo.png';

const LoginPage = () => {
    const loggedInUser = useSelector((state) => state.login?.loggedInUser);
    const [user, setUser] = useState({});

    const history = useHistory();
    const dispatch = useDispatch()

    const onFinish = (values) => {
        console.log('Success:', values);
        const userData = {
            email: values.email,
            password: values.password
        }
        dispatch(userLogin(userData));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        setUser(loggedInUser)
        if(user?.role) {
            history.push('/dashboard')
        }
    }, [loggedInUser])

    return (
        <FormWrapper>
            <Image src={logo} style={{marginLeft: '50px'}}/>
            <Title>Login</Title>
            <Text>Don't have an account? Sign in <Link to="/users/create">Here</Link> </Text>
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >

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

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </FormWrapper>
    );
};

export default LoginPage;

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