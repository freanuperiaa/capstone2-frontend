import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
  },
  mutations: {

    changeToLoggedIn(state) {
      state.isLoggedIn = true;
    },

    changeToLoggedOut(state) {
      state.isLoggedIn = false;
    },

  },
  actions: {
    
    loginUser(context) {
        context.commit('changeToLoggedIn');
    },

    logoutUser(context) {
        context.commit('changeToLoggedOut');
    }

  },

  getters: {
      isLoggedIn: state => {
          return state.isLoggedIn
      }
  },

  modules: {
  }
})
