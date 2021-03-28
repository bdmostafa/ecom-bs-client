import { Card, Col, Image, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductCard = ({ product: { _id, title, price, category, image, description } }) => {
    return (
        <Col xm={22} sm={16} md={12} lg={8}>
            <Link to={`/products/${_id}`}>
                <SingleProductCard
                    hoverable
                    cover={<ProductImg alt={title} src={image} />}
                >
                    <Meta title={title} description={<strong>{`$${price}`}</strong>} />
                </SingleProductCard>
            </Link>
        </Col>
    );
};

export default ProductCard;

const ProductImg = styled(Image)`
    // width: 175px;
`;

const SingleProductCard = styled(Card)`
    // height: 340px;
    padding: 20px;
`;