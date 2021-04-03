import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseQtyAction, increaseQtyAction, removeFromCartAction } from "../../Redux/Cart/CartActions";
import styled from 'styled-components';
import Counter from "./Counter";
import { DeleteOutlined } from "@ant-design/icons";
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;

const CartItems = ({ data }) => {
    const dispatch = useDispatch();

    const handleIncreaseQty = () => {
        dispatch(increaseQtyAction(data._id));
    };

    const handleDecreaseQty = () => {
        dispatch(decreaseQtyAction(data._id));
    };

    const handleClearCart = () => {
        dispatch(removeFromCartAction(data._id));
    };

    const dataSource = [
        
        // {
        //     key: '1',
        //     firstName: 'John',
        //     lastName: 'Brown',
        //     age: 32,
        //     address: 'New York No. 1 Lake Park',
        //     tags: ['nice', 'developer'],
        // }
    ];
    for(let i = 0; i < data.length; i++) {
        dataSource.push({
            key: i,
            _id: data._id,
            image: data.image,
            title: data.title,
            quantity: data.quantity,
            price: data.price,
        })
    }
console.log(dataSource)
    return (
        <Table dataSource={dataSource}>
            <Column
                title="Image"
                dataIndex="image"
                key="image"
                render={(_, record) =>(
                    console.log(record)
                    // <Link to={`/products/${record._id}`}>
                    //     <ProductImage src={record.image} alt={record.title} />
                    // </Link>
                )}
            />
            <Column
                title="Title"
                dataIndex="title"
                key="title"
                render={(_, record) =>(
                    console.log(record)
                    // <Link to={`/products/${record._id}`}>{record.title}</Link>
                )}
            />
            <Column
                title="Quantity"
                dataIndex="quantity"
                key="quantity"
                render={quantity =>
                    <Counter
                        count={quantity}
                        {...{ handleIncreaseQty, handleDecreaseQty }}
                    />
                }
            />
            <Column
                title="Unit Price"
                key="price"
                render={ price =>(
                    <span> ${price} </span>
                )}
            />
            <Column
                title="Multiplied Price"
                key="price"
                // render={(_, record) =>(record.price * record.quantity).toFixed(2)}
            />
            <Column
                title="Action"
                key="action"
                render={<DeleteOutlined onClick={handleClearCart} />}
            />
        </Table>
    );
};

export default CartItems;

const ProductImage = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 10px;
`;