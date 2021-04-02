import React, { useCallback, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from '../HomePage';
import Login from '../Login/Login';
import Register from '../Login/Register';
import NoFound from '../404.js';
import Orders from '../Orders';
import UserDetails from '../Users';
import Profile from '../Users/Profile';
import Products from '../Products';
import { fetchAllProducts } from '../../Redux/Product/ProductActions';
import CategoryProducts from '../HomePage/PopularCategories/CategoryProducts';
import ProductDetails from '../Products/ProductDetails';
import Dashboard from '../Dashboard';
import { fetchUser } from '../../Redux/User/UserActions';
import PrivateRoute from '../Login/PrivateRoute';
import Logout from '../Login/Logout';
import Cart from '../Cart';

function App() {
  const dispatch = useDispatch();

  const apiCall = useCallback(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    apiCall();
  }, [apiCall]);

  return (
    <Layout style={{ background: 'white' }}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cart" component={Cart} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/users" component={UserDetails} />
          <PrivateRoute exact path="/users/me" component={Profile} />
          <PrivateRoute exact path="/dashboard/orders" component={Orders} />
          <PrivateRoute exact path="/dashboard/generate-products" component={Products} />
          <Route exact path="/users/create" component={Register} />
          <Route exact path="/users/login" component={Login} />
          <Route exact path="/users/logout" component={Logout} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/category/:catName" component={CategoryProducts} />
          <Route exact path="/products/:productId" component={ProductDetails} />
          <Route path="*" component={NoFound} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
