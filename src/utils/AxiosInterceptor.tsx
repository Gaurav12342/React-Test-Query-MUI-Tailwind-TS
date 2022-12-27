import { isLogin } from "./auth";
import axios from "axios";

const isLogged = JSON.parse(isLogin)
axios.defaults.baseURL = "http://restapi.adequateshop.com/api/";
axios.defaults.headers.common["Authorization"] = `Bearer ${isLogged?.Token}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
    (request) => {
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axios;