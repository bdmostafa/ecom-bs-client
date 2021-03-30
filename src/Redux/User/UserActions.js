import * as Types from './UserTypes';
import url from '../url';

export const fetchUserAction = () => {
    return {
        type: Types.FETCH_USER_DATA,
    };
};

export const userSuccessAction = () => {
    return {
        type: Types.USER_SUCCESS,
    };
};

export const userFailureAction = (errMessages) => {
    return {
        type: Types.USER_FAILURE,
        payload: errMessages,
    };
};

export const getAllUsersAction = (users) => {
    return {
        type: Types.GET_ALL_USERS,
        payload: users
    };
};

export const getUserAction = (user) => {
    return {
        type: Types.GET_USER,
        payload: user
    };
};

export const createUserAction = (user) => {
    return {
        type: Types.CREATE_USER,
        payload: user
    };
};

export const updateUserAction = (user) => {
    return {
        type: Types.UPDATE_USER,
        payload: user,
    };
};

export const deleteUserAction = (id) => {
    return {
        type: Types.DELETE_USER,
        payload: id
    };
};

export const deleteUsersAction = (id) => {
    return {
        type: Types.DELETE_USERS,
        payload: id
    };
};

// User action creators
export const fetchAllUsers = () => async (dispatch) => {
    dispatch(fetchUserAction);
    try {
        const users = await url.getUsers();

        if (users.data) {
            return dispatch(getAllUsersAction(users.data));
        }

    } catch (error) {
        return dispatch(userFailureAction(error));
    }
}

export const fetchUser = () => async (dispatch) => {
    dispatch(fetchUserAction);
    try {
        const user = await url.getUser();

        if (user.data) {
            return dispatch(getUserAction(user.data));
        }

    } catch (error) {
        return dispatch(userFailureAction(error));
    }
}

export const createUser = (userInfo) => async (dispatch) => {
    try {
        const user = await url.createUser(userInfo);

        if (user.data) {
            return dispatch(createUserAction(user.data));
        }

    } catch (error) {
        return dispatch(userFailureAction(error));
    }
}

export const updateUser = (userInfo) => async (dispatch) => {
    dispatch(fetchUserAction);
    try {
        const user = await url.updateUser(userInfo);

        if (user.data) {
            return dispatch(updateUserAction(user.data));
        }

    } catch (error) {
        return dispatch(userFailureAction(error));
    }
}

export const deleteUser = (id) => async (dispatch) => {
    dispatch(fetchUserAction);
    try {
        const user = await url.deleteUser(id);
console.log(user)
        if (user.data) {
            return dispatch(deleteUserAction(user.data));
        }

    } catch (error) {
        return dispatch(userFailureAction(error));
    }
}

export const deleteUsers = (id) => async (dispatch) => {
    dispatch(fetchUserAction);
    try {
        const user = await url.deleteUsers(id);

        if (user.data) {
            return dispatch(deleteUsersAction(user.data));
        }

    } catch (error) {
        return dispatch(userFailureAction(error));
    }
}