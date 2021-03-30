import { ArrowRightOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';
import { Card, Col, Row } from 'antd';
import product from '../../../assets/product.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const DailyDeals = () => {
    const products = useSelector(state => state.products.products);
    const firstSixProducts = products.slice(0, 6)
    console.log(firstSixProducts)
    return (
        <DailyDealsWrapper>
            <Heading>
                <Title>Daily Deals</Title>
                <Link to="/products">
                    <SeeAll>
                        See All {" "}
                        <ArrowRightOutlined />
                    </SeeAll>
                </Link>
            </Heading>

            <Row gutter={[32, 32]}>
                {
                    firstSixProducts.map((product, idx) => 
                        <Col key={idx} span={4}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={product.image} />}
                    >
                    <Meta title={`$${product.price}`} description={<OffPrice> <del> ${(product.price * 1.32).toFixed(2)}</del> <span>${(product.price * .32).toFixed(2)} (32% off)</span></OffPrice>} />
                    </Card>
                </Col>
                    )
                }
            </Row>
            

        </DailyDealsWrapper>
    );
};

export default DailyDeals;

const DailyDealsWrapper = styled.div`
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

const OffPrice = styled.span`
    color: gray;
`;