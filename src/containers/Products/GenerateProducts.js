import { CloudDownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import {useDispatch} from 'react-redux'
import { generateProducts } from '../../Redux/Product/ProductActions';
import styled from 'styled-components';

const GenerateProducts = () => {
    const dispatch = useDispatch();

    const handleGenerateProducts = () => {
        dispatch(generateProducts())
    };
    return (
        <Wrapper>
            <h2>Generate products from third party API</h2>
            <Button type="primary" icon={<CloudDownloadOutlined />} size='large' onClick={(e) => e.stopPropagation(), handleGenerateProducts}>
                Generate Products
            </Button>
        </Wrapper>
    );
};

export default GenerateProducts;

const Wrapper = styled.div`
    display: list-item;
    text-align: center;
    margin: 50px;
`;