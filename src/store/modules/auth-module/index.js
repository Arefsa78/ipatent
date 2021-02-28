import axios from 'axios';
import {API} from "@/api/api";

const state = {
    token: localStorage.getItem("ipatentToken") || '',
};

const mutations = {
    setToken(state, payload) {
        state.token = payload;
    }
};

const actions = {
    async login(context, payload) {
        try {
            let response = await axios.post(API.LOGIN, payload);
            console.log("TOKEN: ")
            console.log(response.data.token)
            context.commit("setToken", "Token " + response.data.token);
            localStorage.setItem("ipatentToken", state.token);
            axios.defaults.headers.common['Authorization'] = state.token;
        } catch (e) {
            console.log(e)
            if (e.response.status === 400) {
                throw Error("نام کاربری یا رمز عبور اشتباه است!");
            } else if (e.response.status === 401 ){
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
            // await this.$router.replace({name: 'Login'})
        } catch (e) {
            console.log("ERRRRRRRRRRR");
            console.log(e);
        }
    },
    logout(context) {
        axios.defaults.headers.common['Authorization'] = '';
        localStorage.removeItem("ShiveToken");
        context.commit('setToken', "");
    },
};

const getters = {
    isAuthenticated: (state) => {
        return state.token !== ""
    }
};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
