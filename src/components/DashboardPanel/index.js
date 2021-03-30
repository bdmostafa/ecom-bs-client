import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class DashboardPanel extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['sub1']} mode="inline">
            <Menu.Item key="1">
           
            </Menu.Item>
            <SubMenu key="sub1" icon={<ShoppingOutlined />} title="Products">
              <Menu.Item key="3">All Products</Menu.Item>
              <Menu.Item key="4">Create A Product</Menu.Item>
              <Menu.Item key="5">Generate Products</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<ShoppingCartOutlined />} title="Orders">
              <Menu.Item key="6">All Orders</Menu.Item>
              <Menu.Item key="7">Pending Orders</Menu.Item>
              <Menu.Item key="8">Orders By Date</Menu.Item>
              <Menu.Item key="9">Single Order</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<UserOutlined />} title="Users">
              <Menu.Item key="10">All Users</Menu.Item>
              <Menu.Item key="11">LoggedIn User</Menu.Item>
              <Menu.Item key="12">Delete Users</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ecom-bs ©2021 Developed by <a href="https://mdmostafa.com" target="_blank">Mostafa</a> </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default DashboardPanel;