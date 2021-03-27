import { Layout } from 'antd';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from '../HomePage';
import Login from '../Login/login';
import Register from '../Login';
import NoFound from '../NoFound';
import Orders from '../Orders';
import UserDetails from '../Users';
import LoggedInUser from '../Users/LoggedInUser';
import Products from '../Products';

function App() {
  return (
    <Layout style={{ background: 'white' }}>
      <Router>
        <Switch>
          <Route exact path="/users">
            <UserDetails />
          </Route>
          <Route path="/users/me">
            <LoggedInUser />
          </Route>
          <Route path="/users/create">
            <Register />
          </Route>
          <Route path="/users/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/generate-products">
            <Products />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <NoFound />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
