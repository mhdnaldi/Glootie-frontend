import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Product from './modules/product'
import Menu from './modules/menu'
import Settings from './modules/settings'
import History from './modules/history'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    Product,
    Menu,
    History,
    Settings
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user'],
      storage: window.sessionStorage
    })
  ]
})
