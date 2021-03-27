import * as Types from './OrderTypes';

const INITIAL_STATE = {
  loading: false,
  orders: [],
  err: "",
};

const OrderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.FETCH_ORDER_DATA:
      return {
        ...state,
        loading: true,
      };
    case Types.ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        err: "",
      };
    case Types.ORDER_FAILURE:
      return {
        loading: false,
        orders: [],
        err: action.payload,
      };

    case Types.GET_ALL_ORDERS:
      return {
        loading: false,
        orders: action.payload,
        err: ""
      };

    case Types.GET_ORDER:
      return {
        loading: false,
        order: action.payload,
        err: ""
      };

    case Types.GET_PENDING_ORDERS:
      return {
        loading: false,
        pendingOrders: action.payload,
        err: ""
      };

    case Types.GET_ORDERS_BY_DATE:
      return {
        loading: false,
        OrdersByDate: action.payload,
        err: ""
      };

    case Types.CREATE_ORDER:
      return {
        loading: false,
        order: action.payload,
        err: ""
      };

    case Types.UPDATE_ORDER: {
      const index = state.orders.findIndex(
        (order) => order._id == action.payload._id
      );
      state.orders[index] = action.payload;

      return {
        ...state,
        loading: false,
        orders: [...state.orders],
        err: "",
      };
    }

    default:
      return state;
  }
};

export default OrderReducer;