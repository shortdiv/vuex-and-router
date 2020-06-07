import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    currentlyServicingMachine: "Wash Bucket",
    inventory: [
      {
        productName: "Yay Chips",
        supply: 10
      },
      {
        productName: "Chips of Cookies",
        supply: 15
      },
      {
        productName: "Bag of Bretzels",
        supply: 3
      },
      {
        productName: "Corn Crisps",
        supply: 11
      },
      {
        productName: "Triangle Chips",
        supply: 2
      },
      {
        productName: "Cheese Dust",
        supply: 0
      }
    ]
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
    },
    selectMachine({ commit }, payload) {
      commit("selectMachine", payload);
    }
  },
  mutations: {
    logUser(state, payload) {
      state.user = payload;
    },
    selectMachine(state, payload) {
      state.currentlyServicingMachine = payload.name;
    }
  }
});
