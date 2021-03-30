import * as Types from './MiscTypes';

const INITIAL_STATE = {
	loginMode: false,
	sidebarIsOpen: false,
	searchTerm: "",
};

const MiscReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Types.ENABLE_LOGIN_MODE:
			return { ...state, loginMode: true };

		case Types.DISABLE_LOGIN_MODE:
			return { ...state, loginMode: false };

		case Types.SET_SEARCH_TERM:
			return { ...state, searchTerm: action.payload };

		default:
			return state;
	}
};

export default MiscReducer;