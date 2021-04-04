import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Checkbox, Image } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { userLogin } from '../../Redux/Login/LoginActions';
import { fetchUser } from '../../Redux/User/UserActions';
import logo from '../../assets/ebayLogo.png';
import { withRouter } from 'react-router-dom';

const LoginPage = () => {
    const user = useSelector((state) => state.users?.user);
    const history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        console.log('Success:', values);
        const userData = {
            email: values.email,
            password: values.password
        }
        await dispatch(userLogin(userData));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if (user?.name) {
        history.replace(from);
        // window.location.reload();
    }
// console.log(location.state)
    return (
        <FormWrapper>
            <Link to="/">
                <Image preview={false} src={logo} style={{marginLeft: '100px', width: '50%'}}/>
            </Link>
            <Title>Login</Title>
            <Text>Don't have an account? Sign Up <Link to="/users/register">Here</Link> </Text>
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

export default withRouter(LoginPage);

const FormWrapper = styled.div`
    margin: 0 auto;
    padding: 110px;
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