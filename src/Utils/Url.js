
import axios from 'axios';

const url = 'http://localhost:5000'

const client = () => {
	return {
		// User Urls
		getUsers: () => {
			return axios.get(`${url}/users`, { withCredentials: true });
		},
		createUser: (userInfo) => {
			return axios.post(`${url}/users/create`, userInfo, { withCredentials: true });
		},
		getUser: () => {
			return axios.get(`${url}/users/me`, { withCredentials: true });
		},
		updateUser: (userInfo) => {
			return axios.put(`${url}/users/update/me`, userInfo, { withCredentials: true });
		},
		deleteUser: (id) => {
			return axios.delete(`${url}/users/delete/me`, id, { withCredentials: true });
		},
		deleteUsers: (id) => {
			return axios.delete(`${url}/users/delete`, id, { withCredentials: true });
		},

		// Login Urls
		userLogin: (userInfo) => {
			return axios.post(`${url}/users/login`, userInfo, { withCredentials: true, credentials: 'include' });
		},
		userLogout: () => {
			return axios.post(`${url}/users/logout`, { withCredentials: true, credentials: 'include' });
		},

		// Product Urls
		getAllProducts: () => {
			return axios.get(`${url}/products`, { withCredentials: true, credentials: 'include' });
		},
		getProduct: (id) => {
			return axios.get(`${url}/products/${id}`, { withCredentials: true, credentials: 'include' });
		},
		createProductNew: (productInfo) => {
			return axios.post(`${url}/products/create`, productInfo, { withCredentials: true, credentials: 'include' });
		},
		updateProduct: (id, productInfo) => {
			return axios.put(`${url}/products/update/${id}`, productInfo, { withCredentials: true, credentials: 'include' });
		},
		deleteProduct: (id) => {
			return axios.delete(`${url}/products/delete/${id}`, { withCredentials: true, credentials: 'include' });
		},
		generateProducts: () => {
			return axios.get(`${url}/products/generate-products`, { withCredentials: true, credentials: 'include' });
		},

		// Order Urls
		getAllOrders: () => {
			return axios.get(`${url}/orders`, { withCredentials: true, credentials: 'include' });
		},
		getOrder: (id) => {
			return axios.get(`${url}/orders/${id}`, { withCredentials: true, credentials: 'include' });
		},
		getUserOrders: () => {
			return axios.get(`${url}/orders/user/my-orders`, { withCredentials: true, credentials: 'include' });
		},
		getPendingOrders: () => {
			return axios.get(`${url}/orders/pending-orders`, { withCredentials: true, credentials: 'include' });
		},
		createOrder: (orderInfo) => {
			return axios.post(`${url}/orders/create`, orderInfo, { withCredentials: true, credentials: 'include' });
		},
		updateOrder: (id, orderInfo) => {
			return axios.put(`${url}/orders/update/${id}`, orderInfo, { withCredentials: true, credentials: 'include' });
		},
		deleteOrder: (id) => {
			return axios.delete(`${url}/orders/delete/${id}`, { withCredentials: true, credentials: 'include' });
		},
		getOrdersByDate: (dateInfo) => {
			return axios.get(`${url}/orders/orders-by-date`, dateInfo, { withCredentials: true, credentials: 'include' });
		},

	};
};

export default client();