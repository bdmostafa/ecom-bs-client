  
import axios from 'axios';

const url = 'http://localhost:5000'

const client = () => {
	return {
        // User Urls
		getUsers: () => {
			return axios.get(`${url}/users`);
		},
		createUser: (userInfo) => {
			return axios.post(`${url}/users/create`, userInfo, {withCredentials: true, credentials: 'include'});
		},
        getUser: () => {
			return axios.get(`${url}/users/me`);
		},
        updateUser: (userInfo) => {
			return axios.patch(`${url}/users/update/me`, userInfo);
		},
        deleteUser: (id) => {
			return axios.delete(`${url}/users/delete/me`, id);
		},
        deleteUsers: (id) => {
			return axios.delete(`${url}/users/delete`, id);
		},

        // Login Urls
        userLogin: (userInfo) => {
			return axios.post(`${url}/users/login`, userInfo, {withCredentials: true, credentials: 'include'});
		},
        userLogout: () => {
			return axios.post(`${url}/users/logout`);
		},

        // Product Urls
        getAllProducts: () => {
			return axios.get(`${url}/products`);
		},
		getProduct: (id) => {
			return axios.get(`${url}/products/${id}`);
		},
        createProduct: (productInfo) => {
			return axios.post(`${url}/products/create`, productInfo);
		},
        updateProduct: (id, productInfo) => {
			return axios.patch(`${url}/products/update/${id}`, productInfo);
		},
        deleteProduct: (id) => {
			return axios.delete(`${url}/products/delete/${id}`);
		},
        generateProducts: () => {
			return axios.get(`${url}/products/generate-products`);
		},

         // Order Urls
         getAllOrders: () => {
			return axios.get(`${url}/orders`);
		},
		getOrder: (id) => {
			return axios.get(`${url}/orders/${id}`);
		},
		getPendingOrders: () => {
			return axios.get(`${url}/orders/pending-orders`);
		},
        createOrder: (orderInfo) => {
			return axios.post(`${url}/orders/create`, orderInfo);
		},
        updateOrder: (id, orderInfo) => {
			return axios.patch(`${url}/orders/update/${id}`, orderInfo);
		},
        deleteOrder: (id) => {
			return axios.delete(`${url}/orders/delete/${id}`);
		},
        getOrdersByDate: (date) => {
			return axios.get(`${url}/orders/orders-by-date`, date);
		},

	};
};

export default client();