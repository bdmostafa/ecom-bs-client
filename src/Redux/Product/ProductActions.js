import * as Types from './ProductTypes';
import url from '../../Utils/Url';
import { message } from 'antd';

export const fetchProductAction = () => {
    return {
        type: Types.FETCH_PRODUCT_DATA,
    };
};

export const productSuccessAction = () => {
    return {
        type: Types.PRODUCT_SUCCESS,
    };
};

export const productFailureAction = (errMessages) => {
    return {
        type: Types.PRODUCT_FAILURE,
        payload: errMessages,
    };
};

export const getAllProductsAction = (products) => {
    return {
        type: Types.GET_ALL_PRODUCTS,
        payload: products
    };
};

export const getProductAction = (product) => {
    return {
        type: Types.GET_PRODUCT,
        payload: product
    };
};

export const createProductAction = (product) => {
    return {
        type: Types.CREATE_PRODUCT,
        payload: product
    };
};

export const updateProductAction = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        payload: product,
    };
};

export const deleteProductAction = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        payload: id
    };
};

export const generateProductsAction = (products) => {
    return {
        type: Types.GENERATE_PRODUCTS,
        payload: products
    };
};

// Product action creators
export const fetchAllProducts = () => async (dispatch) => {
    dispatch(fetchProductAction);
    try {
        const products = await url.getAllProducts();

        if (products.data) {
            return dispatch(getAllProductsAction(products.data));
        }

    } catch (error) {
        return dispatch(productFailureAction(error));
    }
}

export const fetchProduct = (id) => async (dispatch) => {
    dispatch(fetchProductAction);
    try {
        const product = await url.getProduct(id);

        if (product.data) {
            return dispatch(getProductAction(product.data));
        }

    } catch (error) {
        return dispatch(productFailureAction(error));
    }
}

export const createNewProduct = (productInfo) => async (dispatch) => {
    dispatch(fetchProductAction);
    try {
        const product = await url.createProductNew(productInfo);

        if (product.data) {
            dispatch(createProductAction(product.data));
            message.success("Product created successfully!");
            window.setTimeout(() => {
                window.location.href = "/dashboard";
            }, 500);
            return;
        }

    } catch (error) {
        return dispatch(productFailureAction(error));
    }
}

export const updateProduct = (id, productInfo) => async (dispatch) => {
    dispatch(fetchProductAction);
    try {
        const product = await url.updateProduct(id, productInfo);
        if (product.data) {
            return dispatch(updateProductAction(product.data));
        }

    } catch (error) {
        return dispatch(productFailureAction(error));
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    dispatch(fetchProductAction);
    try {
        const product = await url.deleteProduct(id);

        if (product.data) {
            dispatch(deleteProductAction(product.data));
            message.success("Product deleted successfully!");
            window.setTimeout(() => {
                window.location.href = "/dashboard";
            }, 500);
            return;
        }

    } catch (error) {
        return dispatch(productFailureAction(error));
    }
}

export const generateProducts = () => async (dispatch) => {
    dispatch(fetchProductAction);
    try {
        const products = await url.generateProducts();

        if (products.data) {
            dispatch(generateProductsAction(products.data));
            message.success("10 Products generated from third party API successfully!");
            window.setTimeout(() => {
                // window.location.href = "/dashboard/all-products";
                window.history.back();
            }, 500);
            return;
        }

    } catch (error) {
        return dispatch(productFailureAction(error));
    }
}