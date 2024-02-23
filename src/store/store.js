import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    customers: [],
  },
  mutations: {
    addCustomer(state, newCustomer) {
      state.customers.push(newCustomer)
    },
    deleteCustomer(state, idCustomer) {
      
      let newstate = state.customers.filter(state.customers.id != idCustomer)
      return newstate
    },
  },
  actions: {
    addCustomerAction({ commit }, newCustomer) {
      commit("addCustomer", newCustomer)
    },
    deleteCustomerAction({ commit }, idCustomer) {
      commit("deleteCustomer", idCustomer)
    },
  },
  getters: {
    allCustomers: (state) => {
      return state.customers
    },
  },
  modules: {},
})

export default store
