  
import axios from 'axios';

const url = 'http://localhost:5000'

const client = () => {
	return {
        // User Urls
		getUsers: () => {
			return axios.get(`${url}/users`, { withCredentials: true });
		},
		createUser: (userInfo) => {
			return axios.post(`${url}/users/create`, userInfo);
		},
        getUser: () => {
			return axios.get(`${url}/users/me`, { withCredentials: true });
		},
        updateUser: (userInfo) => {
			return axios.patch(`${url}/users/update/me`, userInfo, { withCredentials: true });
		},
        deleteUser: (id) => {
			return axios.delete(`${url}/users/delete/me`, id, { withCredentials: true });
		},
        deleteUsers: (id) => {
			return axios.delete(`${url}/users/delete`, id, { withCredentials: true });
		},

        // Login Urls
        userLogin: (userInfo) => {
			return axios.post(`${url}/users/login`, userInfo, {withCredentials: true, credentials: 'include'});
		},
        userLogout: () => {
			return axios.post(`${url}/users/logout`, { withCredentials: true, credentials: 'include' });
		},

        // Product Urls
        getAllProducts: () => {
			return axios.get(`${url}/products`);
		},
		getProduct: (id) => {
			return axios.get(`${url}/products/${id}`);
		},
        createProductNew: (productInfo) => {
			return axios.post(`${url}/products/create`, productInfo, { withCredentials: true, credentials: 'include' });
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
		getUserOrders: () => {
			return axios.get(`${url}/orders/user/my-orders`, { withCredentials: true, credentials: 'include' });
		},
		getPendingOrders: () => {
			return axios.get(`${url}/orders/pending-orders`);
		},
        createOrder: (orderInfo) => {
			return axios.post(`${url}/orders/create`, orderInfo, { withCredentials: true, credentials: 'include' });
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