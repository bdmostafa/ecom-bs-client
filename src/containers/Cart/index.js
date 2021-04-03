import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { Col, message, Row } from "antd";
import CartItem from "../../components/Cart/CartItem";
import NotFound from "../../components/NoFound";
import { createOrder } from "../../Redux/Order/OrderActions";
import HeaderInner from "../Header/HeaderInner";
import styled from 'styled-components';
import CartItems from "../../components/Cart/CartItems";
import { withRouter } from 'react-router-dom';
import { removeFromCartAction } from "../../Redux/Cart/CartActions";


const Cart = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const cartItems = useSelector((state) => state.cart.cart);
    const user = useSelector((state) => state.users.user);

    const subTotal = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);

    const initialValues = {
        name: "",
        email: "",
        street: "",
        city: "",
        country: "",
        zip: "",
        card_no: "",
        expire_date: "",
        cvc: "",
    };

    const handleFormSubmit = async (values) => {
        let orderItems = cartItems.map((item) => ({
            product: item._id,
            quantity: item.quantity,
        }));

        if (user) {
            await dispatch(createOrder(orderItems));
            // for(let i = 0; i > orderItems.length; i++) {
            //     dispatch(removeFromCartAction(orderItems[i]._id));
            // } 
        } else {
            message.error("Please Login First");
            history.push('/users/login');
        }
    };

    // console.log(cartItems)
    return (
        <>
            <HeaderInner />
            {cartItems.length ? (
                <Row gutter={[32, 32]} style={{ padding: '50px', display: 'flex', justifyContent: 'center', textAlign: '-webkit-center' }}>
                    <Col xs={24} sm={24} md={24} lg={16} xl={18} >
                        <h2>Shopping Cart</h2>

                        {cartItems.map((cartItem) => (
                            <CartItem key={cartItem._id} data={cartItem} />
                        ))}
                        {/* <CartItems data={cartItems} /> */}

                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <h3>Subtotal: {" "}${parseInt(subTotal).toFixed(2)}</h3>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={6}>
                        <PaymentWrapper>
                            <div style={{ background: 'gray', padding: '5px' }}>
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={handleFormSubmit}
                                >
                                    <Form>
                                        <p>
                                            Shipping information
											</p>
                                        <div>
                                            <Field
                                                name="name"
                                                type="text"
                                                required=""
                                                placeholder={user ? user.name : "Your Name"}
                                            />
                                        </div>
                                        <div style={{ marginTop: '5px' }}>
                                            <Field
                                                name="email"
                                                type="text"
                                                required=""
                                                placeholder={user ? user.email : "Your Email"}
                                                aria-label="Email"
                                            />
                                        </div>
                                        <div style={{ marginTop: '5px' }}>
                                            <Field
                                                name="street"
                                                type="text"
                                                required=""
                                                placeholder="Street"
                                                aria-label="Street"
                                            />
                                        </div>
                                        <div style={{ marginTop: '5px' }}>
                                            <Field
                                                name="city"
                                                type="text"
                                                required=""
                                                placeholder="City"
                                                aria-label="City"
                                            />
                                        </div>
                                        <div>
                                            <Field
                                                name="country"
                                                type="text"
                                                required=""
                                                placeholder="Country"
                                                aria-label="Country"
                                            />
                                        </div>
                                        <div>
                                            <Field
                                                name="zip"
                                                type="text"
                                                required=""
                                                placeholder="Zip"
                                                aria-label="Zip"
                                            />
                                        </div>
                                        <p>
                                            Payment information
											</p>
                                        <div>
                                            <Field
                                                name="card_no"
                                                type="text"
                                                required=""
                                                placeholder="Card Number"
                                                aria-label="Cart Number"
                                            />
                                        </div>
                                        <div>
                                            <Field
                                                name="expire_date"
                                                type="text"
                                                required=""
                                                placeholder="MM/YY"
                                            />
                                        </div>
                                        <div>
                                            <Field
                                                name="cvc"
                                                type="text"
                                                required=""
                                                placeholder="CVC"
                                            />
                                        </div>
                                        <div style={{ marginTop: '10px' }}>
                                            <button
                                                type="submit"
                                                style={{ padding: '5px' }}
                                            >
                                                Pay Now
												</button>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </PaymentWrapper>
                    </Col>
                </Row>
            ) : (
                <NotFound
                    msg="Your Cart is Empty"
                    BtnText="Go to product page"
                    goBackLink="/products"
                />
            )}
        </>
    );
};

export default withRouter(Cart);

const PaymentWrapper = styled.div`
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
    width: 250px;
`;