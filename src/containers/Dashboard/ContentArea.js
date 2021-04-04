import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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

const ContentArea = () => {
  const path = useLocation().pathname;
  const user = useSelector(state => state.users.user);

  return (
    <Layout className="site-layout">
      <Content style={{ margin: '0 16px' }}>

        {
          user?.role === 'user'
            && (path === '/dashboard/user/profile' || path === '/dashboard/user')
            ? <Profile />
            : path === '/dashboard/user/my-orders'
              ? <MyOrders />
              : <ProductsTable />
        }

        {
          user?.role === 'admin'
            && (path === '/dashboard/all-products' || path === 'dashboard/admin')
            ? <ProductsTable />
            : path === '/dashboard/admin/create-product'
              ? <CreateProduct />
              : path === '/dashboard/admin/pending-orders'
                ? <PendingOrders />
                : path === 'dashboard/admin/single-order'
                  ? <SingleOrder />
                  : path === '/dashboard/admin/all-users'
                    ? <AllUsers />
                    : path === '/dashboard/admin/create-user'
                      ? <CreateUser />
                      : <div></div>
        }

        {
          user?.role === 'superAdmin'
            && (path === '/dashboard/all-products' || path === '/dashboard/super-admin')
            ? <ProductsTable />
            : path === '/dashboard/super-admin/edit-products'
              ? <EditableProducts />
              : path === '/dashboard/super-admin/create-product'
                ? <CreateProduct />
                : path === '/dashboard/super-admin/generate-products'
                  ? <GenerateProducts />
                  : path === '/dashboard/super-admin/all-orders'
                    ? <AllOrders />
                    : path === '/dashboard/super-admin/pending-orders'
                      ? <PendingOrders />
                      : path === '/dashboard/super-admin/orders-by-date'
                        ? <OrderByDate />
                        : path === '/dashboard/super-admin/single-order'
                          ? <SingleOrder />
                          : path === '/dashboard/super-admin/all-users'
                            ? <AllUsers />
                            : path === '/dashboard/super-admin/create-admin'
                              ? <CreateUser />
                              : path === '/dashboard/super-admin/delete-users-by-id'
                                ? <DeleteUser />
                                : <div></div>
        }
      </Content>
      <Footer style={{ textAlign: 'center', padding: '0px 0px 20px 0px' }}>Ecom-bs ©2021 Developed by <a href="https://mdmostafa.com" target="_blank">Mostafa</a> </Footer>
    </Layout>
  );
};

export default ContentArea;