import axios from "axios";
import store from '../store/index';

const jwtInterceptor = axios.create({});

jwtInterceptor.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        console.log("YO")
        if (error.response.data === 'invalid token!') {
            console.log("YOYO")
            await store.dispatch("authModule/refresh")
        } else {
            return Promise.reject(error);
        }
    }
);

export default jwtInterceptor;
