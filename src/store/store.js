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
      state.customers = state.customers.filter(customer => customer.id !== idCustomer)
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
