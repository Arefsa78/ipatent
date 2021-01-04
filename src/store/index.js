import Vue from 'vue'
import Vuex from 'vuex'
import ideaProcessModule from './modules/idea-process-module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ideaProcessModule,
    }
})