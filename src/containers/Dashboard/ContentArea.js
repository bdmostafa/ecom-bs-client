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

const ContentArea = () => {
  const path = useLocation().pathname;
  // const [currentPath, setCurrentPath] = useState('');

  // useEffect(() => {
  //   setCurrentPath(location.pathname);
  // }, [location]);

  return (
    <Layout className="site-layout">
      <Content style={{ margin: '0 16px' }}>
        {
          path === '/dashboard/all-products'
            ? <ProductsTable />
            : path === '/dashboard/edit-products'
              ? <EditableProducts />
              : path === '/dashboard/create-product'
                ? <CreateProduct />
                : path === '/dashboard/generate-products'
                  ? <GenerateProducts />
                  : path === '/dashboard/all-orders'
                    ? <AllOrders />
                    : path === '/dashboard/pending-orders'
                      ? <PendingOrders />
                      : path === '/dashboard/orders-by-date'
                        ? <OrderByDate />
                        : path === '/dashboard/single-order'
                          ? <SingleOrder />
                          : path === '/dashboard/all-users'
                            ? <AllUsers />
                            : path === '/dashboard/loggedIn-users'
                              ? <Profile />
                              : path === '/dashboard/delete-users-by-id'
                                ? <DeleteUser />
                                : <ProductsTable />
        }
      </Content>
      <Footer style={{ textAlign: 'center', padding: '0px 0px 20px 0px' }}>Ecom-bs ©2021 Developed by <a href="https://mdmostafa.com" target="_blank">Mostafa</a> </Footer>
    </Layout>
  );
};

export default ContentArea;