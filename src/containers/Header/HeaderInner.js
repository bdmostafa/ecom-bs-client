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
                <Col span={4} className="left-side">
                    <Image
                        width={100}
                        src={logo}
                    />
                </Col>
                <Col span={4}>
                {
                        user && 
                        <Link to="/users/me">
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            />
                        </Link>
                    }
                </Col>
                <Col span={4}>
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
    .left-side {
        float: left;
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
    top: -5px;
    left: -10px;
`;





// const { SubMenu } = Menu;

// const TopHeader = () => {
    
//     const [current, setCurrent] = useState('')

//     const handleClick = e => {
//         console.log('click ', e);
//         setCurrent({ current: e.key });
//     };

//     return (
//         <MenuWrapper onClick={handleClick} selectedKeys={[current]} mode="horizontal">
//             <Menu.ItemGroup className="menu-left" style={{ float: 'left' }}>
//                 <Menu.Item key="login">
//                     <LinkedMenu to="/users/login" rel="noopener noreferrer">
//                         Sign in
//                     </LinkedMenu>
//                 </Menu.Item>
//                 <Menu.Item key="register">
//                     <LinkedMenu to="users/create" rel="noopener noreferrer">
//                         Register
//                     </LinkedMenu>
//                 </Menu.Item>
//                 <Menu.Item key="shop">
//                     Shop
//                 </Menu.Item>
//             </Menu.ItemGroup>

//             <Menu.ItemGroup className="menu-right" style={{ float: 'right' }}>
//                 <Menu.Item key="profile">
//                     {
//                         user && 
//                         <Link to="/users/me">
//                             <Avatar
//                                 src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
//                             />
//                         </Link>
//                     }
                    
//                 </Menu.Item>
//                 <Menu.Item key="cart">
//                     <Link to="/cart">
//                         <CartArea className={cart?.length ? 'active' : ''}>
//                             <ShoppingCartOutlined />

//                             {cart.length ? (
//                                 <CartLength>
//                                     {cart.length}
//                                 </CartLength>
//                             ) : null}
//                         </CartArea>
//                     </Link>

//                 </Menu.Item>
//             </Menu.ItemGroup>
//         </MenuWrapper>
//     );

// };

// export default TopHeader;

// const MenuWrapper = styled(Menu)`
//     color: black;
//     border-top: 1px solid black;
//     border-bottom: 1px solid gray;

//     .menu-right .ant-menu-item-group-list {
//         display: flex;
//         margin-right: 20px;
//     }

//     .menu-left .ant-menu-item-group-list {
//         display: flex;
//     }
// `;

// const LinkedMenu = styled(Link)`
//     margin: 0px 0px;
//     color: blue;
// `;

