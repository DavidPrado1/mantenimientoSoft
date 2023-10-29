import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state : { // = data
    products:[],
    cart:[],
    user:"",
    cartItems:0,
    checkoutStatus: null,
    highprice: 1500,
    sale: false,
    busqueda: ""
  },
  getters,
  actions,
  mutations
})
