export default {
    namespaced: true,
    actions: {
        addNameWang(context, value) {
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_NAME', value)
            }
        }
    },
    mutations: {
        ADD_NAME(state, value) {
            state.personList.push(value)
        }
    },
    state: {
        personList: [
            {name: '张三'},
        ]
    },
    getters: {
        lastPersonName(state) {
            return state.personList.pop().name
        }
    }
}