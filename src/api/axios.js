import axios from "axios";

const client = axios.create({
    baseURL: "https://api.easeweldo.tech/api/"
});

client.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default client;