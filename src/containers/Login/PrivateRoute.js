import { message } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest} ) => {
    const user = useSelector((state) => state.users?.user);

console.log(user)
    return (
        <Route
            // {...rest}
            // render={(props) => {
			// 	if (user === null) {
			// 		return null;
			// 	} else if (user) {
			// 		console.log('okk')
			// 		return <Component {...props} />;
			// 	} else {
			// 		console.log('okkkk')
			// 		message.info("You need to sign in first");
			// 		return <Redirect to={{pathname: "/users/login", state: {from: props.location}}} />;
			// 	}
			// }}
			{...rest}
            render={({ location }) =>
            user === null ? (
                <Redirect
                        to={{
                            pathname: "/users/login",
                            state: { from: location }
                        }}
                    />
                    
                ) : (
                    children
                )
            }
        />
    );
};

export default PrivateRoute;