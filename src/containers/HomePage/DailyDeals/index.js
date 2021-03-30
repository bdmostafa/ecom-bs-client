import { ArrowRightOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';
import { Card, Col, Divider, Image, Row } from 'antd';
import product from '../../../assets/product.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const DailyDeals = () => {
    const products = useSelector(state => state.products.products);

    const shuffleArray = products => {
        for (var i = products.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = products[i];
            products[i] = products[j];
            products[j] = temp;
        }
        return products;
    }
    const SixRandomProducts = shuffleArray(products).slice(0, 6)

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
                    SixRandomProducts.map((product, idx) =>
                        <Col key={idx} xs={24} sm={12} md={8} lg={6} xl={4}>
                            <Link to={`/products/${product._id}`}>
                                <ProductCard
                                    hoverable
                                    title={product.title}
                                    cover={<CardImage preview={false} alt={product.title} src={product.image} />}
                                >
                                    <CardBottom title={`$${product.price}`} description={<OffPrice> <del> ${(product.price * 1.32).toFixed(2)}</del> <span>${(product.price * .32).toFixed(2)} (32% off)</span></OffPrice>} />
                                </ProductCard>
                            </Link> 
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

const ProductCard = styled(Card)`
    height: 100%;
    .ant-card-head {
        font-weight: bold;
    }
`;

const CardImage = styled(Image)`
    width: 100%;
    max-height: 250px;
    padding: 30px;
`;

const SeeAll = styled.h4`
    color: black;
    text-align: left;
    font-size: 14px;
    font-weight: normal;
    margin-left: 20px;
`;

const CardBottom = styled(Meta)`
    position: absolute;
    bottom: 10px;
`;

const OffPrice = styled.span`
    color: gray;
`;