import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from "@/router";
import axios from "axios";

// "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security  --user-data-dir=~/chromeTemp

Vue.config.productionTip = false
Vue.prototype.$axios = axios
const token = localStorage.getItem('ipatentToken');
if (token) {
    Vue.prototype.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

axios.interceptors.response.use((response) => {
    // Return a successful response back to the calling service
    return response;
}, async (error) => {
    const req = error.config;
    console.log(req);
    // Return any error which is not due to authentication back to the calling service
    if (error.response.data === 'expired token!') {
        console.log("YOYO");
        console.log(axios.defaults.headers.common['Authorization']);
        const t = await store.dispatch("authModule/refresh");
        console.log(axios.defaults.headers.common['Authorization']);
        console.log("YOYO2");
        req.headers.Authorization = "Bearer " + t;
        let resp2 = await axios(req);
        console.log("YOYO3");
        return resp2;
    }
    console.log("NO YOYO");

    // Logout user if token refresh didn't work or user is disabled
    if (error.response.data === "invalid token!") {
        await store.dispatch("authModule/logout")
        router.replace({name: 'HomePage'});

        return Promise.reject(error);
    }

    return Promise.reject(error);
});


new Vue({
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount('#app')
