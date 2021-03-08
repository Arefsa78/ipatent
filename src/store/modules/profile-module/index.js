import {API} from "@/api/api";
import store from '../../../store'
import axios from "axios";

const state = {
    user: {},
    ideas: [],
    patents: []
};

const mutations = {
    setUser(state, item) {
        state.user = item;
    },
    setIdea(state, item) {
        state.ideas = item;
    },
    setPatent(state, item) {
        state.patents = item;
    }
};

const actions = {
    async getUser(context,) {
        console.log(axios.defaults.headers.common)
        const user_id = store.getters['authModule/userId']
        try {
            let response = await axios.get(`${API.USER}/${user_id}`);
            console.log(response)
            context.commit('setUser', response.data);
        } catch (e) {
            if (e.response.status == 404) {
                context.commit('setUser', {})
            }
        }
        try {
            let response = await axios.get(`${API.USER_IDEAS}/${user_id}?type=owner`);
            console.log(response)
            context.commit('setIdea', response.data);
        } catch (e) {
            if (e.response.status == 404) {
                context.commit('setIdea', [])
            }
        }
        try {
            let response = await axios.get(`${API.USER_PATENTS}/${user_id}?type=owner`);
            console.log(response)
            context.commit('setPatent', response.data);
        } catch (e) {
            if (e.response.status == 404) {
                context.commit('setPatent', [])
            }
        }
    },
};

const getters = {
    user: (state) => state.user,
    ideas: (state) => state.ideas,
    patents: (state) => state.patents,
};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}