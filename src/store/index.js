import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
    isLoggedIn(state) {
      console.log(state.user);
      return !!state.user;
    }
  },
  actions: {
    logIn({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit("logUser", {
            name: "janet kaur",
            id: 37624
          });
          resolve("user created");
        }, 2000);
      });
    },
    logOut({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit("logUser", null);
          resolve("user logged out");
        }, 2000);
      });
    }
  },
  mutations: {
    logUser(state, payload) {
      console.log("logged");
      state.user = payload;
    }
  }
});
