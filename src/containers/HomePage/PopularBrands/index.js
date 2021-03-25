import { Col, Image, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import apple from '../../../assets/apple.png';
import { ArrowRightOutlined } from '@ant-design/icons';

const PopularBrands = () => {
    return (
        <BrandsWrapper>
            <Heading>
                <Title>Explore Popular Brands</Title>
                <SeeAll>
                    See All {" "}
                    <ArrowRightOutlined />
                </SeeAll>
            </Heading>

            <Row gutter={[32, 32]}>
                <Col span={4}>
                    <CircleImage src={apple} />
                    <CategoriesName> Apple </CategoriesName>
                </Col>
                <Col span={4}>
                    <CircleImage src={apple} />
                </Col>
                <Col span={4}>
                    <CircleImage src={apple} />
                </Col>
                <Col span={4}>
                    <CircleImage src={apple} />
                </Col>
                <Col span={4}>
                    <CircleImage src={apple} />
                </Col>
                <Col span={4}>
                    <CircleImage src={apple} />
                </Col>
            </Row>
        </BrandsWrapper>
    );
};

export default PopularBrands;

const BrandsWrapper = styled.div`
    padding: 50px;
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.h2`
    color: black;
    text-align: left;
    font-size: 18px;
`;

const SeeAll = styled.h4`
    color: black;
    text-align: left;
    font-size: 14px;
    font-weight: normal;
    margin-left: 20px;
`;

const CircleImage = styled(Image)`
    border-radius: 50%;
`;

const CategoriesName = styled.p`
    color: black;
    text-align: center;
    font-size: 14px;
`;