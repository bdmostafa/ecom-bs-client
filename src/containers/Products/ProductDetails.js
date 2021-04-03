import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router';
import styled from 'styled-components';
import SingleProductDetails from '../../components/SingleProductDetails';
import { fetchProduct } from '../../Redux/Product/ProductActions';
import Footer from '../Footer';
import HeaderInner from '../Header/HeaderInner';

const ProductDetails = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) dispatch(fetchProduct(productId))
    }, [productId]);

    let updatedProduct = {};
    const product = useSelector(state => state.products.product);
    updatedProduct = {
        ...product,
        quantity: 1
    }

    return (
        <>
            <HeaderInner />
            <SingleProductDetails
                image={product?.image}
                title={product?.title}
                description={product?.description}
                category={product?.category}
                price={product?.price}
                product={updatedProduct}
            >
            </SingleProductDetails>
            <Footer />
        </>
    );
};

export default ProductDetails;