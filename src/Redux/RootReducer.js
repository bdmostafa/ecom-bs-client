import { combineReducers } from 'redux';
import CartReducer from './Cart/CartReducer';
import LoginReducer from './Login/LoginReducer'
import MiscReducer from './Misc/MiscReducer';
import OrderReducer from './Order/OrderReducer';
import ProductReducer from './Product/ProductReducer';
import UserReducer from './User/UserReducer'

const RootReducer = combineReducers({
	login: LoginReducer,
    users: UserReducer,
    products: ProductReducer,
    orders: OrderReducer,
    cart: CartReducer,
    misc: MiscReducer
});

export default RootReducer;