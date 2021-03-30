import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../Redux/Login/LoginActions';
import { useCookies, withCookies } from 'react-cookie'

const Logout = () => {
    const dispatch = useDispatch();
    const [cookies, setCookie, removeCookie] = useCookies(["auth"]);
    useEffect(() => {
		dispatch(userLogout())
        removeCookie("auth");
		window.location.href = "/";
	}, []);

    return (
        <div></div>
    );
};

export default withCookies(Logout);