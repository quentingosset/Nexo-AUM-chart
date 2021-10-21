import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    mocs: []
  },
  mutations: {
    setMOC(state, moc) {
      state.mocs = moc;
    }
  }
});

export default store;
