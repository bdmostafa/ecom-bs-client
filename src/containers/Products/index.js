import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, generateProducts } from '../../Redux/Product/ProductActions';

const Products = () => {
    const products = useSelector(state => state.products.products);
    console.log(products)

  const dispatch = useDispatch();

  const getProducts = useCallback(() => {
    dispatch(fetchAllProducts());
    dispatch(generateProducts());
  }, [dispatch]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

    return (
        <div>
            {products?.map(product => <p>{product.title}</p>)}
        </div>
    );
};

export default Products;