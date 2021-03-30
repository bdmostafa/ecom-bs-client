import { Card, Col, Image, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductCard = ({ product: { _id, title, price, category, image, description } }) => {
    return (
        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <Link to={`/products/${_id}`}>
                <SingleProductCard
                    hoverable
                    cover={<ProductImg alt={title} src={image} preview={false} />}
                >
                    <CardBottom title={<span style={{overflowWrap: 'break-word'}}>{title}</span>} description={<strong>{`$${price}`}</strong>} />
                </SingleProductCard>
            </Link>
        </Col>
    );
};

export default ProductCard;

const ProductImg = styled(Image)`
    width: 150px;
    padding: 10px;
    margin-left: 30px;
`;

const SingleProductCard = styled(Card)`
    height: 350px;
    padding: 20px;
`;

const CardBottom = styled(Meta)`
    position: absolute;
    bottom: 10px;
    width: 170px;
`;