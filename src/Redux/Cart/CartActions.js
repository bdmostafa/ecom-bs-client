import * as Types from './CartTypes';

export const addToCartAction = (item) => {
    return {
      type: Types.ADD_TO_CART,
      payload: item,
    };
  };
  
  export const increaseQtyAction = (itemId) => {
    return {
      type: Types.INCREASE_QTY,
      payload: itemId,
    };
  };
  export const decreaseQtyAction = (itemId) => {
    return {
      type: Types.DECREASE_QTY,
      payload: itemId,
    };
  };

  export const removeFromCartAction = (itemId) => {
    return {
      type: Types.REMOVE_FROM_CART,
      payload: itemId,
    };
  };