import { DeleteOutlined, MinusCircleFilled, PlusCircleFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increaseQtyAction, decreaseQtyAction, addToCartAction, removeFromCartAction } from '../../Redux/Cart/CartActions';
import styled from 'styled-components';

const AddToCart = ({ product }) => {
    const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.cart.cart);
    const [isInCart, setIsInCart] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const handleIncreaseQty = (e) => {
        dispatch(increaseQtyAction(product._id));
    };

    const handleDecreaseQty = (e) => {
        dispatch(decreaseQtyAction(product._id));
    };

    useEffect(() => {
        // console.log(cartItem.findIndex((item) => item._id == product._id))
        if (cartItem.findIndex((item) => item._id == product._id) >= 0) {
            setIsInCart(true);
            setDisabled(false);
        } 

        else {
            setIsInCart(false);
            setDisabled(true);
        }

    }, [cartItem, product])

    const handleAddToCart = (e) => {
        if (!isInCart) {
            dispatch(addToCartAction(product));
        } else {
            alert('This Product is Already In Cart')
        }
    };
    const handleRemoveFromCart = (e) => {
        dispatch(removeFromCartAction(product._id));
    };
// console.log("cart=====", isInCart)
    return (
        <CartWrapper>
            <QtyBtn>
                <Button disabled={disabled} onClick={handleDecreaseQty}>
                    <MinusCircleFilled />
                </Button>
                <Qty>{ product?.quantity }</Qty>
                <Button disabled={disabled} onClick={handleIncreaseQty}>
                    <PlusCircleFilled />
                </Button>
            </QtyBtn>
            {
                !isInCart ? (
                    <Button
                        type="primary"
                        icon={<ShoppingCartOutlined />}
                        onClick={handleAddToCart}
                    >
                        Add To Cart
                    </Button>
                ) : (

                    <Button
                        type="primary"
                        icon={<DeleteOutlined />}
                        onClick={handleRemoveFromCart}
                    >
                        Remove Item
                    </Button>
                )
            }

        </CartWrapper>
    );
};

export default AddToCart;

const CartWrapper = styled.div``;

const QtyBtn = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const Qty = styled.p`
    font-size: 22px;
    margin: 0px 20px;
`;