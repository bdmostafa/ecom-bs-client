import { Col, Image, Row, Menu, Dropdown, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import logo from '../../assets/ebayLogo.png';
import { DownOutlined } from '@ant-design/icons';
import SearchProduct from '../../components/SearchProduct';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderSearch = () => {
    const products = useSelector(state => state.products.products);
    const [categoriesName, setCategoriesName] = useState([]);

    useEffect(() => {
        // list all categories name
        let listOfCategories = products.map(product => product.category)
        // sort and remove duplicates
        listOfCategories = listOfCategories.sort().filter((v, i) => listOfCategories.indexOf(v) === i);

        setCategoriesName(listOfCategories);

    }, [products])

    const menu = (
        <Menu>
            {categoriesName.map(cat => (
                <Menu.Item>
                    <Link to={{ pathname: `/products/category/${cat}`, param: cat }}>
                        {cat}
                    </Link>
                </Menu.Item>

            ))}
        </Menu>
    );

    return (
        <Row gutter={[8, 8]} style={{ alignItems: 'center' }}>
            <Col span={2}>
                <Link to="/">
                    <Image
                        width={100}
                        src={logo}
                    />
                </Link>
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