import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    ShoppingOutlined,
    ShoppingCartOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar =() => {
    const [collapse, setCollapse] = useState(false)
    // state = {
    //     collapsed: false,
    // };

    const onCollapse = () => {
        // console.log(collapsed);
        // this.setState({ collapsed });
        setCollapse(true)
    };
        const user = useSelector((state) => state.users.user);
        // const { collapsed } = this.state;
        return (
            <Sider collapsible collapsed={collapse} onCollapse={() => onCollapse()} style={{ minHeight: '100vh' }}>
                <div className="logo" />
                <Menu theme="light" defaultSelectedKeys={['sub1']} mode="inline">
                    <Menu.Item key="1">
                        <h3>Dashboard</h3>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<ShoppingOutlined />} title="Products">
                        <Menu.Item key="2">
                            <Link to="/dashboard/all-products">All Products</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/dashboard/edit-products">Edit Products</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/dashboard/create-product">Create A Product</Link>
                        </Menu.Item>
                        {
                            user?.role === 'superAdmin' && 
                            <Menu.Item key="5">
                                <Link to="/dashboard/generate-products">Generate Products</Link>
                            </Menu.Item>
                        }
                        
                    </SubMenu>
                    <SubMenu key="sub2" icon={<ShoppingCartOutlined />} title="Orders">
                        <Menu.Item key="6">
                            <Link to="/dashboard/all-orders">All Orders</Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link to="/dashboard/pending-orders">Pending Orders</Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Link to="/dashboard/orders-by-date">Orders By Date</Link>
                        </Menu.Item>
                        <Menu.Item key="9">
                        <Link to="/dashboard/single-order">Single Order Data</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<UserOutlined />} title="Users">
                        <Menu.Item key="10">
                            <Link to="/dashboard/all-users">All Users</Link>
                        </Menu.Item>
                        <Menu.Item key="11">
                            <Link to="/dashboard/loggedIn-users">LoggedIn User</Link>
                        </Menu.Item>
                        <Menu.Item key="12">
                            <Link to="/dashboard/delete-users-by-id">Delete Users</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="13" icon={<LogoutOutlined />}>
                            <Link to="/users/logout">Logout</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
}

export default Sidebar;