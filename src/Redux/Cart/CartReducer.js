import * as Types from './CartTypes';

const INITIAL_STATE = {
    cart: [],
  };
  const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case Types.ADD_TO_CART: {
        return {
          cart: [...state.cart, action.payload],
        };
      }

      case Types.INCREASE_QTY: {
        const idx = state.cart.findIndex((item) => item._id === action.payload);
        state.cart[idx].quantity = state.cart[idx].quantity + 1;
        return {
          cart: [...state.cart],
        };
      }

      case Types.DECREASE_QTY: {
        const idx = state.cart.findIndex((item) => item._id === action.payload);
        if (state.cart[idx].quantity > 1) {
          state.cart[idx].quantity = state.cart[idx].quantity - 1;
          return {
            cart: [...state.cart],
          };
        }
        return state;
      }

      case Types.REMOVE_FROM_CART: {
        const updatedCart = state.cart.filter(
          (item) => item._id !== action.payload
        );
        return {
          cart: updatedCart,
        };
      }
  
      default:
        return state;
    }
  };
  export default CartReducer;