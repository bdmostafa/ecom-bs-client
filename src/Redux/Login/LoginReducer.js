import * as Types from './LoginTypes';

const INITIAL_STATE = {
    user: {},
    loading: false,
    errMessage: "",
  };

  const LoginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case Types.LOGIN:
        return {
          ...state,
          loading: true,
        };
      case Types.LOGIN_SUCCESS:
        return {
          user: action.payload,
          loading: false,
          errMessages: "",
        };
      case Types.LOGIN_FAILURE:
        return {
          user: {},
          loading: false,
          errMessage: action.payload,
        };
      case Types.LOGOUT:
        return {
          user: {},
          loading: false,
          errMessage: "",
        };
      default:
        return state;
    }
  };
  
  export default LoginReducer;