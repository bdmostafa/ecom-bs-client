import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseQtyAction, increaseQtyAction, removeFromCartAction } from "../../Redux/Cart/CartActions";
import styled from 'styled-components';
import Counter from "./Counter";
import { DeleteOutlined } from "@ant-design/icons";

const CartItem = ({ data }) => {
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

    return (
		<>
			<CartItemWrapper>
				<CartItemLine>
					<Link to={`/products/${data._id}`}>
						<ProductImage src={data.image} alt={data.title} />
					</Link>
					<h3 style={{ overflowWrap: 'break-word'}}>
						<Link to={`/products/${data._id}`}>{data.title}</Link>
					</h3>
					<Counter
						count={data.quantity}
						{...{ handleIncreaseQty, handleDecreaseQty }}
					/>
					<PriceSpan>
						${(data.price).toFixed(2)} (Per Unit)
					</PriceSpan>
					<PriceSpan>
						${(data.price * data.quantity).toFixed(2)} (Total)
					</PriceSpan>
                    <DeleteOutlined onClick={handleClearCart} />
				</CartItemLine>
				<hr />
			</CartItemWrapper>
		</>
	);
};

export default CartItem;

const CartItemWrapper = styled.div`

`;

const ProductImage = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 10px;
`;

const CartItemLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px;
`;

const PriceSpan = styled.span`
	color: black;
	margin: 10px;
`;