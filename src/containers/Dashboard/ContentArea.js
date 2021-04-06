import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import AllOrders from '../Orders';
import PendingOrders from '../Orders/PendingOrders';
import OrderByDate from '../Orders/OrderByDate';
import CreateProduct from '../Products/CreateProduct';
import EditableProducts from '../Products/EditableProducts';
import GenerateProducts from '../Products/GenerateProducts';
import ProductsTable from '../Products/ProductsTable';
import SingleOrder from '../Orders/SingleOrder';
import AllUsers from '../Users/AllUsers';
import Profile from '../Users/Profile';
import DeleteUser from '../Users/DeleteUser';
import { useSelector } from 'react-redux';
import MyOrders from '../Users/MyOrders';
import CreateUser from '../Users/CreateUser';
import styled from 'styled-components';

const ContentArea = () => {
  const path = useLocation().pathname;
  const user = useSelector(state => state.users.user);

  const history = useHistory();

  useEffect(() => {
      // if (user?.role === 'admin') {
      //     if (path.startsWith('dashboard', 1)) {
      //         history.push('/dashboard/admin')
      //     }
      // }
      (user?.role === 'admin' && path === '/dashboard')
          ? history.replace('/dashboard/admin')
          : (user?.role === 'superAdmin' && path === '/dashboard')
              ? history.replace('/dashboard/superAdmin')
              : (user?.role === 'user' && path === '/dashboard')
                  ? history.replace('/dashboard/user')
                  : history.replace('/');

  }, [user?.role]);

  return (
    <Layout className="site-layout">
      <Content style={{ margin: '0 16px' }}>
        <Heading> Hi, <span>{user?.name}</span>! Welcome to {user?.role === 'user' ? 'your' : user?.role} Dashboard! </Heading>
        {
          user?.role 
          && (path === '/dashboard/all-products' || path === '/dashboard/admin' || path === '/dashboard/super-admin')
          && <ProductsTable />
        }

        {
          user?.role === 'user'
            && ((path === '/dashboard/user/profile' || path === '/dashboard/user')
            ? <Profile />
            : path === '/dashboard/user/my-orders'
              ? <MyOrders />
              : <div></div>)
        }

        {
          user?.role === 'admin'
            && (path === '/dashboard/admin/create-product'
              ? <CreateProduct />
              : path === '/dashboard/admin/pending-orders'
                ? <PendingOrders />
                : path === 'dashboard/admin/single-order'
                  ? <SingleOrder />
                  : path === '/dashboard/admin/all-users'
                    ? <AllUsers />
                    : path === '/dashboard/admin/create-user'
                      ? <CreateUser role={user?.role} />
                      : <div></div>)
        }

        {
          user?.role === 'superAdmin'
            && (path === '/dashboard/superAdmin/edit-products'
              ? <EditableProducts />
              : path === '/dashboard/superAdmin/create-product'
                ? <CreateProduct />
                : path === '/dashboard/superAdmin/generate-products'
                  ? <GenerateProducts />
                  : path === '/dashboard/superAdmin/all-orders'
                    ? <AllOrders />
                    : path === '/dashboard/superAdmin/pending-orders'
                      ? <PendingOrders />
                      : path === '/dashboard/superAdmin/orders-by-date'
                        ? <OrderByDate />
                        : path === '/dashboard/superAdmin/single-order'
                          ? <SingleOrder />
                          : path === '/dashboard/superAdmin/all-users'
                            ? <AllUsers />
                            : path === '/dashboard/superAdmin/create-admin'
                              ? <CreateUser role={user?.role} />
                              : path === '/dashboard/superAdmin/delete-users-by-id'
                                ? <DeleteUser />
                                : <div></div>)
        }
      </Content>
      <Footer style={{ textAlign: 'center', padding: '0px 0px 20px 0px' }}>Ecom-bs ©2021 Developed by <a href="https://mdmostafa.com" target="_blank">Mostafa</a> </Footer>
    </Layout>
  );
};

export default ContentArea;

const Heading = styled.h2`
font-size: large;
text-align: center;
margin: 30px;

span {
  font-style: italic;
  color: cornflowerblue;
}
`;