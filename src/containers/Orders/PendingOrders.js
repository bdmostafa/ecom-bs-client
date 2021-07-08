import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrdersTable from '../../components/OrdersTable';
import { fetchPendingOrders } from '../../Redux/Order/OrderActions';

const PendingOrders = () => {
    const dispatch = useDispatch();
    const pendingOrders = useSelector(state => state.orders.pendingOrders);

    const getPendingOrders = useCallback(() => {
        dispatch(fetchPendingOrders());
      }, [dispatch]);
    
      useEffect(() => {
        getPendingOrders();
      }, [getPendingOrders]);

    // console.log(pendingOrders);
    return (
        <div>
            <OrdersTable orders={pendingOrders}/>
        </div>
    );
};

export default PendingOrders;