import React from 'react';
import { useSelector } from 'react-redux';

const PendingOrders = () => {
    const pendingOrders = useSelector(state => state.orders.pendingOrders);
    console.log(pendingOrders);
    return (
        <div>
            pending orders
        </div>
    );
};

export default PendingOrders;