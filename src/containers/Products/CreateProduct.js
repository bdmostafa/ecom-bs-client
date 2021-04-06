import React from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { Button, Input, Form } from 'antd';
import { createNewProduct } from '../../Redux/Product/ProductActions';

const CreateProduct = () => {
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
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Product title is required!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Product price is required!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Product description is required!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="category"
                    rules={[{ required: true, message: 'Product category is required!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Image"
                    name="image"
                    rules={[{ required: true, message: 'Product image is required!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%'}}>
                        Create Product
        </Button>
                </Form.Item>
            </Form>
        </FormWrapper>
    );
};

export default CreateProduct;

const FormWrapper = styled.div`
    margin: 0 auto;
    padding-top: 50px;
    max-width: max-content;
    border: 1px solid gray;
    padding: 30px;
    border-radius: 5px;
`;

const Title = styled.h2`
    color: black;
    text-align: center;
    font-size: 18px;
    margin-bottom: 20px;
`;

const Text = styled.p`
    color: black;
    text-align: center;
    font-size: 12px;
`;