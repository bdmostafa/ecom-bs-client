import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AllOrders from '../Orders';
import PendingOrders from '../Orders/PendingOrders';
import OrderByDate from '../Orders/OrderByDate';
import CreateProducts from '../Products/CreateProducts';
import EditableProducts from '../Products/EditableProducts';
import GenerateProducts from '../Products/GenerateProducts';
import ProductsTable from '../Products/ProductsTable';
import SingleOrder from '../Orders/SingleOrder';
import AllUsers from '../Users/AllUsers';
import Profile from '../Users/Profile';
import DeleteUser from '../Users/DeleteUser';

const ContentArea = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <Layout className="site-layout">
      <Content style={{ margin: '0 16px' }}>
        {
          currentPath === '/dashboard/all-products'
            ? <ProductsTable />
            : currentPath === '/dashboard/edit-products'
              ? <EditableProducts />
              : currentPath === '/dashboard/create-product'
                ? <CreateProducts />
                : currentPath === '/dashboard/generate-products'
                  ? <GenerateProducts />
                  : currentPath === '/dashboard/all-orders'
                    ? <AllOrders />
                    : currentPath === '/dashboard/pending-orders'
                      ? <PendingOrders />
                      : currentPath === '/dashboard/orders-by-date'
                        ? <OrderByDate />
                        : currentPath === '/dashboard/single-order'
                          ? <SingleOrder />
                          : currentPath === '/dashboard/all-users'
                            ? <AllUsers />
                            : currentPath === '/dashboard/loggedIn-users'
                              ? <Profile />
                              : currentPath === '/dashboard/delete-users-by-id'
                                ? <DeleteUser />
                                : <ProductsTable />
        }
      </Content>
      <Footer style={{ textAlign: 'center', padding: '0px 0px 20px 0px' }}>Ecom-bs ©2021 Developed by <a href="https://mdmostafa.com" target="_blank">Mostafa</a> </Footer>
    </Layout>
  );
};

export default ContentArea;