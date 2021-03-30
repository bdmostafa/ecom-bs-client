import * as Types from './MiscTypes';

export const enableLoginAction = () => {
    return {
        type: Types.ENABLE_LOGIN_MODE,
    };
};

export const disableLoginAction = () => {
    return {
        type: Types.DISABLE_LOGIN_MODE,
    };
};

export const searchTermAction = (searchTerm) => {
    return {
        type: Types.SET_SEARCH_TERM,
        payload: searchTerm
    };
};