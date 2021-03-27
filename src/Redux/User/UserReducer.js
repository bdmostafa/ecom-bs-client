import * as Types from './UserTypes';

const INITIAL_STATE = {
  loading: false,
  users: [],
  err: "",
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.FETCH_USER_DATA:
      return {
        ...state,
        loading: true,
      };
    case Types.USER_SUCCESS:
      return {
        ...state,
        loading: false,
        err: "",
      };
    case Types.USER_FAILURE:
      return {
        loading: false,
        users: [],
        err: action.payload,
      };

    case Types.GET_ALL_USERS:
      return {
        loading: false,
        users: action.payload,
        err: ""
      };

    case Types.GET_USER:
      return {
        loading: false,
        user: action.payload,
        err: ""
      };

    case Types.CREATE_USER:
      return {
        loading: false,
        user: action.payload,
        err: ""
      };

    case Types.UPDATE_USER: {
      const index = state.users.findIndex(
        (user) => user._id == action.payload._id
      );
      state.users[index] = action.payload;
      console.log(state.users);

      return {
        ...state,
        loading: false,
        users: [...state.users],
        err: "",
      };
    }
    case Types.DELETE_USER: {
      const updatedUsers = state.users.filter(
        (user) => user._id !== action.payload
      );
      return {
        ...state,
        loading: false,
        users: updatedUsers,
        err: "",
      };
    }
    case Types.DELETE_USERS: {
      const updatedUsers = state.users.filter(
        (user) => user._id !== action.payload
      );
      return {
        ...state,
        loading: false,
        users: updatedUsers,
        err: "",
      };
    }
    default:
      return state;
  }
};

export default UserReducer;