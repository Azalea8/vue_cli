import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const actions = {
    /*increment(context, value) {
        context.commit('INCREMENT', value)
    },
    decrement(context, value) {
        context.commit('DECREMENT', value)
    },*/
    incrementOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('INCREMENT', value)
        }
    },
    incrementWait(context, value) {
        setTimeout(() => {
            context.commit('INCREMENT', value)
        }, 500)
    },
}

const mutations = {
    INCREMENT(state, value) {
        state.sum += value
    },
    DECREMENT(state, value) {
        state.sum -= value
    },
    ADD_NAME(state, value) {
        state.personList.push(value)
    }
}

const state = {
    sum: 0,
    personList: [
        {name: '张三'},
    ]
}

const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

export default new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
    getters: getters,
})