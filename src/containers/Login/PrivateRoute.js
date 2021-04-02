import { message } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { fetchUser } from '../../Redux/User/UserActions';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const dispatch = useDispatch();
    dispatch(fetchUser());
    const user = useSelector((state) => state.users?.user);
console.log({...rest})
console.log(user)
    return (
        <Route
            {...rest}
            render={(props) => {
				if (user === null) {
					return <div />;
				} else if (user?.name) {
					return <Component {...props} />;
				} else {
					message.info("You need to sign in first");
					return <Redirect to="/users/login" />;
				}
			}}
        />
    );
};

export default PrivateRoute;