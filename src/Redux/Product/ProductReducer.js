import * as Types from './ProductTypes';

const INITIAL_STATE = {
  loading: false,
  products: [],
  err: "",
};

const ProductReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCT_DATA:
      return {
        ...state,
        loading: true,
      };
    case Types.PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        err: "",
      };
    case Types.PRODUCT_FAILURE:
      return {
        loading: false,
        products: [],
        err: action.payload,
      };

    case Types.GET_ALL_PRODUCTS:
      return {
        loading: false,
        products: action.payload,
        err: ""
      };

    case Types.GET_PRODUCT:
      return {
        loading: false,
        user: action.payload,
        err: ""
      };

    case Types.CREATE_PRODUCT:
      return {
        loading: false,
        user: action.payload,
        err: ""
      };

    case Types.UPDATE_PRODUCT: {
      const index = state.products.findIndex(
        (product) => product._id == action.payload._id
      );
      state.products[index] = action.payload;

      return {
        ...state,
        loading: false,
        products: [...state.products],
        err: "",
      };
    }

    case Types.DELETE_PRODUCT: {
      const updatedProducts = state.products.filter(
        (product) => product._id !== action.payload
      );
      return {
        ...state,
        loading: false,
        products: updatedProducts,
        err: "",
      };
    }

    case Types.GENERATE_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
        err: "",
      };

    default:
      return state;
  }
};

export default ProductReducer;