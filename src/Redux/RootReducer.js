import { combineReducers } from 'redux';
import LoginReducer from './Login/LoginReducer'
import OrderReducer from './Order/OrderReducer';
import ProductReducer from './Product/ProductReducer';
import UserReducer from './User/UserReducer'

const RootReducer = combineReducers({
	login: LoginReducer,
    users: UserReducer,
    products: ProductReducer,
    orders: OrderReducer
});

export default RootReducer;