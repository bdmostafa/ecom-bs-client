import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router';
import styled from 'styled-components';
import SingleProductDetails from '../../components/SingleProductDetails';
import Footer from '../Footer';
import HeaderInner from '../Header/HeaderInner';

const ProductDetails = () => {
    const { productId } = useParams();

    const products = useSelector(state => state.products.products);

    const [selectedProduct, setSelectedProduct] = useState({});

    useEffect(() => {
        const product = products?.filter(product => product._id === productId);

        if(product) setSelectedProduct({...product[0], quantity: 1});
        
    }, [productId])

    return (
        <>
            <HeaderInner />
            <SingleProductDetails
                image={selectedProduct?.image}
                title={selectedProduct?.title}
                description={selectedProduct?.description}
                category={selectedProduct?.category}
                price={selectedProduct?.price}
                product={selectedProduct}
            >
            </SingleProductDetails>
            <Footer />
        </>
    );
};

export default ProductDetails;