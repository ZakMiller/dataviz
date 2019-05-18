import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: 'welcome to my world, bitch!',
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    message: (state: any) => state.message,
  },
});
