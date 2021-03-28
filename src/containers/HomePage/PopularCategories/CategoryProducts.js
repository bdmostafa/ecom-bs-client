import React from 'react';
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import ProductCard from '../../../components/ProductCard';
import { Row } from 'antd';
import styled from 'styled-components';

const CategoryProducts = () => {
    const { catName } = useParams();
    const products = useSelector(state => state.products.products);

    return (
        <CategoryProductsWrapper>
            <Title>{catName} products</Title>
            <Row gutter={[32, 32]} style={{ display: 'flex'}}>
                {products.filter(product => product.category === catName).map(product => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))}
            </Row>
        </CategoryProductsWrapper>
    );
};

export default CategoryProducts;

const CategoryProductsWrapper = styled.div`
    padding: 100px;
`;

const Title = styled.h2`
    color: black;
    text-align: center;
    font-size: 24px;
    padding: 20px;
`;