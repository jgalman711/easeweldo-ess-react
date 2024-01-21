import axios from "axios";

const client = axios.create({
    baseURL: process.env.REACT_APP_ES_BASE_URL,
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