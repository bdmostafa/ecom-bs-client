import React from 'react';
import { useSelector } from "react-redux";
import ProductCard from '../../components/ProductCard';
import styled from 'styled-components';
import { Image, Row } from 'antd';
import logo from '../../assets/ebayLogo.png';
import HeaderInner from '../Header/HeaderInner';

const Products = () => {
    const products = useSelector(state => state.products.products);

    return (
        <AllProductsWrapper>
            <HeaderInner />
            {/* <Image src={logo} style={{marginLeft: '50px'}}/> */}
            <Title>All Products</Title>
            <Row gutter={[32, 32]} style={{display: 'flex'}}>
            {products?.map(product => (
                <ProductCard
                    key={product._id}
                    product={product}
                />
            ))}
            </Row>
        </AllProductsWrapper>
    );
};

export default Products;

const AllProductsWrapper = styled.div`
    padding: 50px;
    // display: flex;
`;

const Title = styled.h2`
    color: black;
    text-align: center;
    font-size: 24px;
    padding: 20px;
`;