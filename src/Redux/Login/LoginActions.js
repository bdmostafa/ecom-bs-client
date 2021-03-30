import * as Types from './LoginTypes';
import url from '../url';
import { message } from "antd";

export const userLoginAction = () => {
    return {
        type: Types.LOGIN,
    };
};

export const loginSuccessAction = (user) => {
    return {
        type: Types.LOGIN_SUCCESS,
        payload: user,
    };
};

export const loginFailureAction = (errMessages) => {
    return {
        type: Types.LOGIN_FAILURE,
        payload: errMessages,
    };
};

export const userLogoutAction = () => {
    return {
        type: Types.LOGOUT,
    };
};

// Login action creators
export const userLogin = (userData) => async (dispatch) => {
        dispatch(userLoginAction);

        try {
            const user = await url.userLogin(userData);

            if(user.data) {
                dispatch(loginSuccessAction(user.data));
                message.success("Login Success");
                window.setTimeout(() => {
                    window.location.href = "/";
                }, 500);
                return;
            }
            
        } catch (err) {
            dispatch(loginFailureAction(err.message));
            message.error(err.message);
            return;
        }
};

// Login action creators
export const userLogout = () => async (dispatch) => {
    dispatch(userLoginAction);

    try {
        const user = await url.userLogout();

        if(user.data) {
            dispatch(userLogoutAction(user.data));
            message.success("Logout Success");
                window.setTimeout(() => {
                    window.location.href = "/";
                }, 500);
            return;
        }
        
    } catch (err) {
        dispatch(loginFailureAction(err.message));
        message.error(err.message);
        return;
    }
};