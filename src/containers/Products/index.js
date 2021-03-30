import React, { useState } from 'react';
import { useSelector } from "react-redux";
import ProductCard from '../../components/ProductCard';
import styled from 'styled-components';
import { Image, Pagination, Row } from 'antd';
import logo from '../../assets/ebayLogo.png';
import HeaderInner from '../Header/HeaderInner';
import Footer from '../Footer';

const Products = () => {
    const products = useSelector(state => state.products.products);
    const [val, setVal] = useState({
        minValue: 0,
        maxValue: 8
    });

    const handleChange = value => {
        if (value <= 1) {
            setVal({
                minValue: 0,
                maxValue: 8
            });
        } else {
            setVal({
                minValue: val.maxValue,
                maxValue: value * 8
            });
        }
    };

    return (
        <AllProductsWrapper>
            <HeaderInner />
            <Title>All Products</Title>
            <PaginateDiv>
                <Pagination
                    style={{ padding: "10px" }}
                    defaultCurrent={1}
                    defaultPageSize={8}
                    onChange={handleChange}
                    total={50}
                />
            </PaginateDiv>
            <Row gutter={[32, 32]} style={{ display: 'flex' }}>
                {products?.length > 0 &&
                    products.slice(val.minValue, val.maxValue).map(product => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))}

            </Row>
            <Pagination
                style={{ padding: "10px" }}
                defaultCurrent={1}
                defaultPageSize={8}
                onChange={handleChange}
                total={50}
            />
            <Footer />
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
    padding: 10px;
    margin-top: 10px;
`;

const PaginateDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`;