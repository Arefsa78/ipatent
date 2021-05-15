import axios from 'axios';
import {Promise} from "es6-promise";
import {router} from '../app';
import {store} from "vuex"

export default () => {
    console.log("KIIIIIIIIIIIIIIIIIIIIIIR");

    axios.interceptors.response.use((response) => {
        // Return a successful response back to the calling service
        return response;
    }, async (error) => {
        // Return any error which is not due to authentication back to the calling service
        console.log("KIIIIIIIIIIIIIIIIIIIIIIR");
        console.log(error);
        if (error.response.data === 'invalid token!') {
            console.log("YOYO")
            await store.dispatch("authModule/refresh")
        }

        // Logout user if token refresh didn't work or user is disabled
        if (error.response.data === "expired token!") {

            await store.dispatch("authModule/logout")
            router.replace({name: 'HomePage'});

            return new Promise((resolve, reject) => {
                reject(error);
            });
        }

        return Promise.reject(error);
    });
}
