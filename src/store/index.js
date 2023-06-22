import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const actions = {
    increment(context, value){
        context.commit('INCREMENT', value)
    }
}

const mutations = {
    INCREMENT(state, value) {
        state.sum += value
    }
}

const state = {
    sum: 0,
}

export default new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
})