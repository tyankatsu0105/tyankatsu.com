export default {
  namespaced: true,

  state: {
    isHeaderOpen: false
  },

  mutations: {
    SHOULD_HEADER_OPEN(state, isHeaderOpen) {
      state.isHeaderOpen = isHeaderOpen;
    }
  },

  actions: {
    shouldHeaderOpen({ commit }, isHeaderOpen) {
      commit("SHOULD_HEADER_OPEN", isHeaderOpen);
    }
  }
};