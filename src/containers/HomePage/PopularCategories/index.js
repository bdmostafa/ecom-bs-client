import { Col, Image, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import shoe from '../../../assets/shoe.png';

const PopularCategories = () => {
    return (
        <CategoriesWrapper>
            <Title>Explore Popular Categories</Title>
            <Row gutter={[32, 32]}>
                <Col span={4}>
                    <CircleImage src={shoe} />
                    <CategoriesName> Shoe </CategoriesName>
                </Col>
                <Col span={4}>
                    <CircleImage src={shoe} />
                </Col>
                <Col span={4}>
                    <CircleImage src={shoe} />
                </Col>
                <Col span={4}>
                    <CircleImage src={shoe} />
                </Col>
                <Col span={4}>
                    <CircleImage src={shoe} />
                </Col>
                <Col span={4}>
                    <CircleImage src={shoe} />
                </Col>
            </Row>
        </CategoriesWrapper>
    );
};

export default PopularCategories;

const CategoriesWrapper = styled.div`
    padding: 50px;
`;

const Title = styled.h2`
    color: black;
    text-align: left;
    font-size: 18px;
`;

const CircleImage = styled(Image)`
    border-radius: 50%;
`;

const CategoriesName = styled.p`
    color: black;
    text-align: center;
    font-size: 14px;
`;