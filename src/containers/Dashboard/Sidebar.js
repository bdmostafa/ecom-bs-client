import React, { useEffect, useState } from 'react';
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
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
    const path = useLocation().pathname;
    const user = useSelector(state => state.users.user);

    // const history = useHistory();

    // useEffect(() => {
    //     // if (user?.role === 'admin') {
    //     //     if (path.startsWith('dashboard', 1)) {
    //     //         history.push('/dashboard/admin')
    //     //     }
    //     // }
    //     (user?.role === 'admin' && path === '/dashboard')
    //         ? history.replace('/dashboard/admin')
    //         : (user?.role === 'superAdmin' && path === '/dashboard')
    //             ? history.replace('/dashboard/superAdmin')
    //             : (user?.role === 'user' && path === '/dashboard')
    //                 ? history.replace('/dashboard/user')
    //                 : history.replace('/');

    // }, [user?.role]);

    // console.log(user?.role)
    const [collapsed, setCollapsed] = useState(false)

    const onCollapse = (collapsed) => {
        console.log(collapsed);
        setCollapsed(true)
    };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ minHeight: '100vh' }}>
            <div className="logo" />
            <Menu theme="light" defaultSelectedKeys={['sub1']} mode="inline">
                <Menu.Item key="1">
                    <h3>Dashboard</h3>
                </Menu.Item>
                {
                    (user?.role === 'admin' || user?.role === 'superAdmin') && (
                        <>
                            <SubMenu key="sub1" icon={<ShoppingOutlined />} title="Products">
                                {
                                    (user?.role === 'admin' || user?.role === 'superAdmin') &&
                                    <>
                                        <Menu.Item key="2">
                                            <Link to="/dashboard/all-products">All Products</Link>
                                        </Menu.Item>
                                        <Menu.Item key="4">
                                            <Link to={`/dashboard/${user?.role}/create-product`}>Create A Product</Link>
                                        </Menu.Item>
                                    </>
                                }

                                {
                                    user?.role === 'superAdmin' &&
                                    <>
                                        <Menu.Item key="3">
                                            <Link to={`/dashboard/${user?.role}/edit-products`}>Edit Products</Link>
                                        </Menu.Item>
                                        <Menu.Item key="5">
                                            <Link to={`/dashboard/${user?.role}/generate-products`}>Generate Products</Link>
                                        </Menu.Item>
                                    </>
                                }
                            </SubMenu>
                            <SubMenu key="sub2" icon={<ShoppingCartOutlined />} title="Orders">
                                {
                                    user?.role === 'superAdmin' &&
                                    <>
                                        <Menu.Item key="6">
                                            <Link to={`/dashboard/${user?.role}/all-orders`}>All Orders</Link>
                                        </Menu.Item>
                                        <Menu.Item key="8">
                                            <Link to={`/dashboard/${user?.role}/orders-by-date`}>Orders By Date</Link>
                                        </Menu.Item>
                                    </>
                                }

                                {
                                    (user?.role === 'admin' || user?.role === 'superAdmin') &&
                                    <>
                                        <Menu.Item key="7">
                                            <Link to={`/dashboard/${user?.role}/pending-orders`}>Pending Orders</Link>
                                        </Menu.Item>

                                        <Menu.Item key="9">
                                            <Link to={`/dashboard/${user?.role}/single-order`}>Single Order Data</Link>
                                        </Menu.Item>
                                    </>
                                }
                            </SubMenu>

                            <SubMenu key="sub3" icon={<UserOutlined />} title="Users">
                                {
                                    user?.role === 'admin' &&
                                    <Menu.Item key="14">
                                        <Link to={`/dashboard/${user?.role}/create-user`}>Create User</Link>
                                    </Menu.Item>
                                }

                                {
                                    (user?.role === 'admin' || user?.role === 'superAdmin') &&
                                    <Menu.Item key="10">
                                        <Link to={`/dashboard/${user?.role}/all-users`}>All Users</Link>
                                    </Menu.Item>
                                }

                                {
                                    user?.role === 'superAdmin' &&
                                    <>
                                        {/* <Menu.Item key="12">
                                            <Link to={`/dashboard/${user?.role}/delete-users-by-id`}>Delete Users</Link>
                                        </Menu.Item> */}

                                        <Menu.Item key="15">
                                            <Link to={`/dashboard/${user?.role}/create-admin`}>Create Admin</Link>
                                        </Menu.Item>
                                    </>
                                }
                            </SubMenu>
                        </>
                    )
                }

                {
                    user?.role === 'user' &&
                    <>
                        <Menu.Item key="2" icon={<ShoppingOutlined />}>
                            <Link to="/dashboard/all-products">All Products</Link>
                        </Menu.Item>
                        <Menu.Item key="7" icon={<ShoppingCartOutlined />} >
                            <Link to={`/dashboard/${user?.role}/my-orders`}>My Orders</Link>
                        </Menu.Item>
                        <Menu.Item key="11" icon={<UserOutlined />}>
                            <Link to={`/dashboard/${user?.role}/profile`}>Profile</Link>
                        </Menu.Item>
                    </>
                }

                <Menu.Item key="13" icon={<LogoutOutlined />} style={{ position: 'fixed', bottom: '50px' }}>
                    <Link to="/users/logout">Logout</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default Sidebar;