import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ children, ...rest }) => {
    const loggedInUser = useSelector((state) => state.login?.loggedInUser);
    const user = useSelector((state) => state.users?.user);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.role === 'admin' ? (
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

export default AdminRoute;