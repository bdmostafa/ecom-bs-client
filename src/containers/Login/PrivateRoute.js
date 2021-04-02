import { message } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const user = useSelector((state) => state.users?.user);

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
					return <Redirect to={{pathname: "/users/login", state: {from: props.location}}} />;
				}
			}}
        />
    );
};

export default PrivateRoute;