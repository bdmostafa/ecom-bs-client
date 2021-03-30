import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const loggedInUser = useSelector((state) => state.login?.loggedInUser);
    const user = useSelector((state) => state.users?.loggedInUser);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser?.name || user?.name ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/users/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;