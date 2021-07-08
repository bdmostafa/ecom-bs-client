import React, { useCallback, useEffect } from 'react';
import OrdersTable from '../../components/OrdersTable';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrders } from '../../Redux/Order/OrderActions';

const AllOrders = () => {
    const orders = useSelector(state => state.orders.orders);
    console.log(orders)

  const dispatch = useDispatch();

  const getOrders = useCallback(() => {
    dispatch(fetchAllOrders());
  }, [dispatch]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

    return (
        <div>
            <OrdersTable orders={orders} />
        </div>
    );
};

export default AllOrders;