import Vue from 'vue'
import Vuex from 'vuex'
import ideaProcessModule from './modules/idea-process-module'
import profileModule from './modules/profile-module'
import authModule from './modules/auth-module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ideaProcessModule,
        profileModule,
        authModule
    }
})