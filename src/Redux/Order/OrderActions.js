import * as Types from './OrderTypes';
import url from '../url';
import { message } from 'antd';

export const fetchOrderAction = () => {
    return {
        type: Types.FETCH_ORDER_DATA,
    };
};

export const orderSuccessAction = () => {
    return {
        type: Types.ORDER_SUCCESS,
    };
};

export const orderFailureAction = (errMessages) => {
    return {
        type: Types.ORDER_FAILURE,
        payload: errMessages,
    };
};

export const getAllOrdersAction = (orders) => {
    return {
        type: Types.GET_ALL_ORDERS,
        payload: orders
    };
};

export const getOrderAction = (order) => {
    return {
        type: Types.GET_ORDER,
        payload: order
    };
};

export const getPendingOrdersAction = (orders) => {
    return {
        type: Types.GET_PENDING_ORDERS,
        payload: orders
    };
};

export const getOrdersByDateAction = (orders) => {
    return {
        type: Types.GET_ORDERS_BY_DATE,
        payload: orders
    };
};

export const createOrderAction = (order) => {
    return {
        type: Types.CREATE_ORDER,
        payload: order
    };
};

export const updateOrderAction = (order) => {
    return {
        type: Types.UPDATE_ORDER,
        payload: order,
    };
};

// Order action creators
export const fetchAllOrders = () => async (dispatch) => {
    dispatch(fetchOrderAction);
    try {
        const orders = await url.getAllOrders();

        if (orders.data) {
            return dispatch(getAllOrdersAction(orders.data));
        }

    } catch (error) {
        return dispatch(orderFailureAction(error));
    }
}

export const fetchOrder = (id) => async (dispatch) => {
    dispatch(fetchOrderAction);
    try {
        const order = await url.getOrder(id);

        if (order.data) {
            return dispatch(getOrderAction(order.data));
        }

    } catch (error) {
        return dispatch(orderFailureAction(error));
    }
}

export const fetchPendingOrders = () => async (dispatch) => {
    dispatch(fetchOrderAction);
    try {
        const orders = await url.getPendingOrders();

        if (orders.data) {
            return dispatch(getPendingOrdersAction(orders.data));
        }

    } catch (error) {
        return dispatch(orderFailureAction(error));
    }
}

export const fetchOrdersByDate = (date) => async (dispatch) => {
    dispatch(fetchOrderAction);
    try {
        const orders = await url.getOrdersByDate(date);

        if (orders.data) {
            return dispatch(getOrdersByDateAction(orders.data));
        }

    } catch (error) {
        return dispatch(orderFailureAction(error));
    }
}

export const createOrder = (orderInfo) => async (dispatch) => {
    dispatch(fetchOrderAction);
    try {
        const order = await url.createOrder(orderInfo);

        if (order.data) {
            dispatch(createOrderAction(order.data));
            message.success("Order created successfully.");
            return;
        }

    } catch (error) {
        dispatch(orderFailureAction(error));
        message.error(error.message)
    }
}

export const updateOrder = (id, orderInfo) => async (dispatch) => {
    dispatch(fetchOrderAction);
    try {
        const order = await url.updateOrder(id, orderInfo);

        if (order.data) {
            return dispatch(updateOrderAction(order.data));
        }

    } catch (error) {
        return dispatch(orderFailureAction(error));
    }
}

// export const deleteOrder = (id) => async (dispatch) => {
//     dispatch(fetchProductAction);
//     try {
//         const product = await url.deleteProduct(id);

//         if (product.data) {
//             return dispatch(deleteProductAction(product.data));
//         }

//     } catch (error) {
//         return dispatch(productFailureAction(error));
//     }
// }