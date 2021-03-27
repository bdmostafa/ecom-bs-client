import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from '../../Redux/User/UserActions';

const AllUsers = () => {
    const users = useSelector((state) => state.users.users);

    const dispatch = useDispatch()

    const getUsers = useCallback(() => {
        dispatch(fetchAllUsers());
      }, [dispatch]);

      useEffect(() => {
        getUsers();
      }, [getUsers]);

    return (
        <div>
            {users?.map(user => <p>{user.name}</p>)}
        </div>
    );
};

export default AllUsers;