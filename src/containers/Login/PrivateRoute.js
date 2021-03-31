import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const user = useSelector((state) => state.users?.user);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.role === 'user' || user?.role === 'admin' || user?.role === 'superAdmin' ? (
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