import axios from 'axios';
import {API} from "@/api/api";
import VueJwtDecode from 'vue-jwt-decode'


const state = {
    token: localStorage.getItem("ipatentToken") || '',
};

const mutations = {
    setToken(state, payload) {
        state.token = payload;
    },
};

const actions = {
    async login(context, payload) {
        try {
            let response = await axios.post(API.LOGIN, payload);
            console.log("TOKEN: ")
            console.log(response.data.accessToken)
            context.commit("setToken", response.data.accessToken);
            localStorage.setItem("ipatentToken", state.token);
            axios.defaults.headers.common['Authorization'] = "Bearer " + state.token;
        } catch (e) {
            console.log(e)
            if (e.response.status === 400) {
                throw Error("نام کاربری یا رمز عبور اشتباه است!");
            } else if (e.response.status === 401) {
                throw Error('اکانت شما هنوز تایید نشده است!');
            } else if (e.response.status >= 500) {
                throw Error("خطا در برقزاری ارتباط با سرور!");
            }
        }

    },
    async signup(context, payload) {
        console.log(payload)
        try {
            // eslint-disable-next-line no-unused-vars
            let response = await axios.post(API.SIGNUP, payload);
            console.log("DONE")
            await this.$router.replace({name: 'Login'})
        } catch (e) {
            console.log("ERRRRRRRRRRR");
            console.log(e);
        }
    },
    async refresh(context,) {
        let response = await axios.get(API.REFRESH);
        console.log("TOKEN(REFRESH): ")
        console.log(response.data.accessToken)
        context.commit("setToken", "Bearer " + response.data.accessToken);
        localStorage.setItem("ipatentToken", state.token);
        axios.defaults.headers.common['Authorization'] = state.token;
    },
    logout(context) {
        axios.defaults.headers.common['Authorization'] = '';
        localStorage.removeItem("ipatentToken");
        context.commit('setToken', "");
    },
};

const getters = {
    isAuthenticated: (state) => {
        return state.token !== ""
    },
    userId: (state) => {
        return VueJwtDecode.decode(state.token).data.user_id;
    }
};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
