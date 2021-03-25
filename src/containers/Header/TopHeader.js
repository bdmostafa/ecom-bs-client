import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon, { ShoppingCartOutlined, BellOutlined, DownOutlined } from '@ant-design/icons';

import { Menu } from 'antd';

import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const TopHeader = () => {
    const [current, setCurrent] = useState('')

    const handleClick = e => {
        console.log('click ', e);
        setCurrent({ current: e.key });
    };

    return (
        <MenuWrapper onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.ItemGroup className="menu-left" style={{float: 'left'}}>
                <span>Hi! {" "}</span>
                <Menu.Item key="login">
                    
                    <LinkedMenu to="/login" target="_blank" rel="noopener noreferrer">
                        Sign in
                    </LinkedMenu>
                </Menu.Item>
                <Menu.Item key="register">
                    <LinkedMenu to="/register" target="_blank" rel="noopener noreferrer">
                        Register
                    </LinkedMenu>
                </Menu.Item>
                <Menu.Item key="dailyDeals">
                    Daily Deals
                </Menu.Item>
                <Menu.Item key="helpNContact">
                    Help & Contact
                </Menu.Item>
            </Menu.ItemGroup>

            <Menu.ItemGroup className="menu-right" style={{float: 'right'}}>
                <Menu.Item key="shipTo">
                    Ship to
                </Menu.Item>
                <Menu.Item key="sell">
                    Sell
                </Menu.Item>
                <SubMenu key="watchList" title={<span>Watchlist <DownOutlined /></span>}>
                    <Menu.Item key="Watchlist:1">Watchlist 1</Menu.Item>
                    <Menu.Item key="Watchlist:2">Watchlist 2</Menu.Item>
                </SubMenu>
                <SubMenu key="myEBay" title={<span>My eBay <DownOutlined /></span>}>
                    <Menu.Item key="myebay:1">myebay 1</Menu.Item>
                    <Menu.Item key="myebay:2">myebay 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="notification">
                    <BellOutlined />
                </Menu.Item>
                <Menu.Item key="cart">
                    <ShoppingCartOutlined />
                </Menu.Item>
            </Menu.ItemGroup>
        </MenuWrapper>
    );

};

export default TopHeader;

const MenuWrapper = styled(Menu)`
    color: black;
    border-top: 1px solid black;
    border-bottom: 1px solid gray;

    .menu-right .ant-menu-item-group-list {
        display: flex;
        margin-right: 20px;
    }

    .menu-left .ant-menu-item-group-list {
        display: flex;
    }
`;

const LinkedMenu = styled(Link)`
    margin: 0px 5px;
    color: blue;
`;