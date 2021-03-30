import { Col, Image, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ShoppingCartOutlined } from '@ant-design/icons';
import logo from '../../assets/ebayLogo.png';
import { useSelector } from 'react-redux';
import Avatar from 'antd/lib/avatar/avatar';

const HeaderInner = () => {
    const cart = useSelector((state) => state.cart.cart);
    const user = useSelector((state) => state.users.user);

    return (
        <HeaderWrapper>
            <Row gutter={[48, 32]}>
                <Col span={12} className="left-side">
                    <Link to="/">
                        <Image
                            width={100}
                            src={logo}
                            style4={{paddingLeft: '10px'}}
                        />
                    </Link>
                </Col>
                
                {
                        user && 
                        <Col offset={2}>
                        <Link to="/users/me">
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            />
                        </Link>
                        </Col>
                }
                
                
                {
                        !user && 
                        <Col offset={2}>
                        <Link to="/users/login">
                            Login
                        </Link>
                        </Col>
                }
                
                
                {
                        !user && 
                        <Col offset={2}>
                        <Link to="/users/create">
                            Register
                        </Link>
                        </Col>
                }
                
                <Col offset={2}>
                <Link to="/cart">
                        <CartArea className={cart?.length ? 'active' : ''}>
                            <ShoppingCartOutlined />

                            {cart.length ? (
                                <CartLength>
                                    {cart.length}
                                </CartLength>
                            ) : null}
                        </CartArea>
                    </Link>
                </Col>


            </Row>
        </HeaderWrapper>
    );
};

export default HeaderInner;

const HeaderWrapper = styled.div`
    background: black;
    padding: 10px;
    .left-side {
        float: left;
    }
    a {
        color: white;
    }
`;

const CartArea = styled.span`
    .active {
        background: peachpuff;
        padding: 7px;
        border-radius: 25%;
    }
`;

const CartLength = styled.span`
    position: relative;
    top: -10px;
    left: 3px;
`;
