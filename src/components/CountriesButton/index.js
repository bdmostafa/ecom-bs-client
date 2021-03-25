import React from 'react';
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" icon={<UserOutlined />}>
            US
    </Menu.Item>
    </Menu>
);

const CountriesButton = props => {
    return (
        <Dropdown overlay={menu}>
            <Button>
                {props.title} <DownOutlined />
            </Button>
        </Dropdown>
    );
};

export default CountriesButton;