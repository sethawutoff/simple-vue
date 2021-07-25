import Vue from 'vue'
import Vuex from 'vuex'
import store from '/data/Store.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        data:[],
        total: 0
    },
    getters:{
        Informations: (state) => state.data,
        total: (state) => state.total
    }, 
    mutations: {
        fetch(state, { res }){
            state.data = res.data
        },
        add(state, { payload }){
            state.data.push(payload)
            if (payload.income === 0) {
                state.total -= payload.expenses
            }
            else{
                state.total += payload.income
            }
        },
        CalTotal(state, { payload }){
            var sum = 0
            for(let i = 0; i < payload.length; i++){
                sum += payload[i].income
                sum -= payload[i].expenses
                state.total = sum
            }
        }
    },
    actions: {
        async fetchInformation({ commit }){
            let res = 
            {
                data: store
            }

            commit("fetch", { res })
        },
        AddInformation({ commit }, payload){
            commit("add", { payload })
        },
        CalTotal({ commit }, payload){
            commit("CalTotal", { payload })
        }
    },
    modules: {

    }
})