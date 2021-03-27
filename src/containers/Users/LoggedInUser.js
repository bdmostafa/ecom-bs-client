import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from '../../Redux/User/UserActions';

const LoggedInUser = () => {
    const user = useSelector((state) => state.users.user);
    console.log(user);

    const dispatch = useDispatch()

    const getUser = useCallback(() => {
        dispatch(fetchUser());
      }, [dispatch]);

      useEffect(() => {
        getUser();
      }, [getUser]);

    return (
        <div>
            {user?.name}
        </div>
    );
};

export default LoggedInUser;