import React from 'react';
import styled from 'styled-components';
import { Col, Image, Row } from 'antd';
import { StarFilled } from '@ant-design/icons';
import AddToCart from '../Cart/AddToCart';

const SingleProductDetails = (props) => {
    return (
        <ProductDetailsWrapper>

            <Row gutter={[32, 32]} className="product-details">
                <Col xm={24} sm={24} md={24} lg={12}>
                    <ProductImage preview={false} src={props?.image}></ProductImage>
                </Col>
                <Col xm={24} sm={24} md={24} lg={12}>
                    <Title>{props?.title}</Title>
                    <span style={{ paddingRight: "5px" }}> 102 Product ratings </span>
                    {Array.from(Array(3), (e) => (
                        <span style={{ paddingLeft: "2px" }}>
                            <StarFilled style={{ color: "orange", fontSize: "20px" }} />
                        </span>
                    ))}
                    <ProductDescription>
                        <ul>
                            {props?.description?.split(". ").map((d) => (
                                <li>{d}</li>
                            ))}
                        </ul>
                    </ProductDescription>
                    <ProductCategory>Category: <span> {props?.category} </span></ProductCategory>
                    <CartArea>
                        <ListPrice>List price: <span> <del> ${(props?.price * 1.32).toFixed(2)}</del> </span></ListPrice>
                        <ListPrice>You save: <span> ${(props?.price * .32).toFixed(2)} (32% off)</span></ListPrice>
                        <ProductPrice>Price: <span> ${props?.price} </span></ProductPrice>

                        <AddToCart
                            product={props.product}
                        ></AddToCart>
                    </CartArea>
                </Col>
            </Row>
        </ProductDetailsWrapper>
    );
};

export default SingleProductDetails;

const ProductDetailsWrapper = styled.div`
    padding: 100px;

    .product-details {
        display: flex;
        background-color: #f7f7f7;
        padding: 50px;
    }
`;

const Title = styled.h2`
    color: black;
    text-align: left;
    font-size: 24px;
`;

const ProductDescription = styled.p`
    color: gray;
    text-align: left;
    font-size: 12px;
    border-top: 1px solid #e2e2e2;
    padding-top: 20px;
`;

const ProductCategory = styled.h4`
    color: black;
    text-align: left;
    font-weight: bold;

    span {
        font-style: italic;
    }
`;

const CartArea = styled.div`
    background: #e2e2e2;
    padding: 20px;
`;

const ListPrice = styled.p`
    color: black;
    text-align: left;
    font-weight: normal;

    span {
        font-style: italic;
    }
`;

const ProductPrice = styled.h3`
    color: black;
    text-align: left;
    font-weight: bold;

    span {
        font-style: italic;
    }
`;

const ProductImage = styled(Image)`
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    width: 100%;
    max-height: 460px;
`;