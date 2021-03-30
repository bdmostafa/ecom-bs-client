import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import GlobalStyles from './GlobalStyles';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  // <React.StrictMode>
  <CookiesProvider>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
    </CookiesProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
