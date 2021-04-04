import React from 'react';
import { Image, Table } from 'antd';
import { useSelector } from "react-redux";

const ProductsTable = () => {
    const products = useSelector(state => state.products.products);

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            onFilter: (value, record) => record.title.indexOf(value) === 0,
            sorter: (a, b) => a.title.length - b.title.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Image',
            dataIndex: 'image',
            render: (image) => <Image src={image} style={{ width: '75px' }} />
        },
        {
            title: 'Price',
            dataIndex: 'price',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            filterMultiple: false,
            onFilter: (value, record) => record.description.indexOf(value) === 0,
            sorter: (a, b) => a.description.length - b.description.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Category',
            dataIndex: 'category',
            filterMultiple: false,
            onFilter: (value, record) => record.category.indexOf(value) === 0,
            sorter: (a, b) => a.category.length - b.category.length,
            sortDirections: ['descend', 'ascend'],
        },
    ];

    const data = products;

    function onChange(pagination, filters, sorter, extra) {}
    
    return (
        <Table columns={columns} dataSource={data} onChange={onChange} />
    );
};

export default ProductsTable;




