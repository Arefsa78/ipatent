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


new Vue({
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount('#app')
