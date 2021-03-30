import * as Types from './UserTypes';
import url from '../url';
import { message } from 'antd';

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
            dispatch(getAllUsersAction(users.data));
            message.success("All Users Loaded Successfully");
            return;
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
            dispatch(createUserAction(user.data));
            message.success("You have been registered successfully.")
            return;
        }

    } catch (error) {
        dispatch(userFailureAction(error));
        message.error(error.message)
        return;
    }
}

export const updateUser = (userInfo) => async (dispatch) => {
    dispatch(fetchUserAction);
    try {
        const user = await url.updateUser(userInfo);

        if (user.data) {
            dispatch(updateUserAction(user.data));
            message.success("Your info has been updated successfully.")
            return;
        }

    } catch (error) {
        dispatch(userFailureAction(error));
        message.error(error.message)
        return;
    }
}

export const deleteUser = (id) => async (dispatch) => {
    dispatch(fetchUserAction);
    try {
        const user = await url.deleteUser(id);

        if (user.data) {
            dispatch(deleteUserAction(user.data));
            message.success("You have been unregistered successfully.");
            return;
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
            dispatch(deleteUsersAction(user.data));
            message.success("One user has been deleted successfully.");
            return;
        }

    } catch (error) {
        return dispatch(userFailureAction(error));
    }
}