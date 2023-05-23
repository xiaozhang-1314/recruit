const state = {
  zpData: {
    hasMore:false,
    list: [],
  },
};
const actions = {
  saveTitleInfo({ commit }, info) {
    commit("SAVE_INFO", info);
  },
};
const mutations = {
  SAVE_INFO(state, data) {
    state.zpData = data;
  },
};
const getters = {};

export default {
  // 开启命名空间
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
