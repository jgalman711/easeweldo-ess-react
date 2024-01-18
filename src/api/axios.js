import axios from "axios";

const client = axios.create({
    baseURL: "https://api.easeweldo.tech/api/"
});

export default client;