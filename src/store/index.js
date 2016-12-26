import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import createPersistedState from 'vuex-persistedstate'

import{ actions } from './actions'
import { getters } from './getters'
import mutations from './mutations'

import quiz from './modules/quiz'

const debug = process.env.NODE_ENV !== 'production'

export const state = {
    userInfo: {},
    users: {},
    resources: [],
    passedResources: [],
    answeredQuestions: [],
    postKey: '',
    modal: {
        el: '',     // el = modal container
        show: false // toggle visibility of modal attached to above el
    },
    loading: true
};

const plugins = [
    debug ? createLogger(): null,
    createPersistedState({
        paths: ['userInfo', 'postKey']
    })
];

Vue.use(Vuex);

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
    // root state
    state,
    actions,
    getters,
    mutations,
    modules: {
        quiz
    },
    // strict: debug, // <<<<<<<< todo: check why we're getting mutation errors if uncommented
    plugins
})