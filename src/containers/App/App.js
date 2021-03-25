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

function App() {
  return (
    <Layout style={{background: 'white'}}>
      <Router>
          <Switch>
            <Route exact path="/users">
              <Register />
            </Route>
            <Route path="/users/login">
              <Login />
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
