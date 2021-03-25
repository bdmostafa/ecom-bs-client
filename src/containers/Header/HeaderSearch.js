import { Col, Image, Row, Menu, Dropdown, Input } from 'antd';
import React from 'react';
import logo from '../../assets/ebayLogo.png';
import { DownOutlined } from '@ant-design/icons';
import SearchProduct from '../../components/SearchProduct';

const HeaderSearch = () => {
    const menu = (
        <Menu>
          <Menu.ItemGroup title="Mens">
            <Menu.Item>Shirt</Menu.Item>
            <Menu.Item>Pant</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Women">
            <Menu.Item>Shari</Menu.Item>
            <Menu.Item>Lehenga</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      );

    return (
        <Row gutter={[8, 8]} style={{alignItems: 'center'}}>
            <Col span={2}>
            <Image
                width={100}
                src={logo}
            />
            </Col>
            <Col span={4}>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Shop By Category <DownOutlined />
                </a>
            </Dropdown>
            </Col>
            <Col span={16}>
                <SearchProduct
                    size="large"
                    placeholder="Search for anything"
                    enterButton="Search"
                />
            </Col>
            <Col span={2}>
                Advanced
            </Col>
        </Row>
    );
};

export default HeaderSearch;