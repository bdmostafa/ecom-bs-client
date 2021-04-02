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

    const [selectedProduct, setSelectedProduct] = useState({});

    useEffect(() => {
        // const product = products?.filter(product => product._id === productId);

        // if(product) setSelectedProduct({...product[0], quantity: 1});
        if (productId) dispatch(fetchProduct(productId))
        
    }, [productId]);

    const product = useSelector(state => state.products.product);
console.log(product)
    return (
        <>
            <HeaderInner />
            <SingleProductDetails
                image={product?.image}
                title={product?.title}
                description={product?.description}
                category={product?.category}
                price={product?.price}
                product={product}
            >
            </SingleProductDetails>
            <Footer />
        </>
    );
};

export default ProductDetails;