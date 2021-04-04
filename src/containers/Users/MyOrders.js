import { Table } from 'ant-table-extensions';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserOrders } from '../../Redux/Order/OrderActions';

const MyOrders = () => {
    const orders = useSelector((state) => state.orders.userOrders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserOrders());
    }, [dispatch]);

    const columns = [
        {
            title: 'Product',
            // dataIndex: 'product.title',
            render: (record) => record.product.title,
            onFilter: (value, record) => record.title.indexOf(value) === 0,
            sorter: (a, b) => a.product.title.length - b.product.title.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Price',
            render: (record) => record.product.price,
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.product.price - b.product.price,
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.quantity - b.quantity,
        },
        {
            title: 'Total Price',
            dataIndex: 'totalPrice',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.totalPrice - b.totalPrice,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            filterMultiple: false,
            onFilter: (value, record) => record.status.indexOf(value) === 0,
            sorter: (a, b) => a.status.length - b.status.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Date',
            dataIndex: 'createdAt',
            filterMultiple: false,
            onFilter: (value, record) => record.createdAt.indexOf(value) === 0,
            sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            sortDirections: ['descend', 'ascend'],
        },
    ];

    const data = orders;

    function onChange(pagination, filters, sorter, extra) { }

    return (
        <Table
            columns={columns}
            dataSource={data}
            onChange={onChange}
            searchable
            searchableProps={{ fuzzySearch: true }}
            exportable 
            exportableProps={{ showColumnPicker: true }}
        />
    );
};

export default MyOrders;