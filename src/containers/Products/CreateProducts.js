import React from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import Form from 'antd/lib/form/Form';
import { Button, Input } from 'antd';
import { createNewProduct } from '../../Redux/Product/ProductActions';

const CreateProducts = () => {
    const dispatch = useDispatch()

    const onFinish = (values) => {
        const productData = {
            title: values.title,
            price: values.price,
            description: values.description,
            category: values.category,
            image: values.image,
        }
        dispatch(createNewProduct(productData))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <FormWrapper>
            <Title>Create Product</Title>
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >

                <Form.Item
                    label="Product Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product title!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product price!',
                        },
                        {
                            type: 'number',
                            min: 0,
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product description!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="category"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product category!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Image"
                    name="image"
                    rules={[
                        {
                            required: true,
                            message: 'Please input product image url!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create Product
                    </Button>
                </Form.Item>
            </Form>
        </FormWrapper>
    );
};

export default CreateProducts;

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