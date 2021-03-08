import {API} from "@/api/api";
import axios from "axios";

const state = {};

const mutations = {};

const actions = {
    async add_idea(context, preload) {
        try {
            let response = await axios.post(API.SUBMIT_IDEA, preload);
            return response
        } catch (e) {
            console.log(e);
            return "error"
        }
    }
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