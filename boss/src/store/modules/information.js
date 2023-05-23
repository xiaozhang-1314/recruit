  // 引入资讯页面的请求接口
import { reqPostUserInfo,reqGetListCardData } from "@/api";
const state = {
  listC: [],
  listN: [],
};
const actions = {
  async getListCardData({ commit }) {
    const result = await reqGetListCardData();
    if (result.code === 200) {
      commit("SAVE_LIST_CARD_DATA", result);
      commit("SAVE_LIST_NEWS_DATA", result);
    }
  },
  async submitInfo({ commit }, formData) {
    const result = await reqPostUserInfo(formData);
    if (result.code === 2) {
      console.log("成功");
    } else {
      console.log("失败");
    }
  },
};
const mutations = {
  SAVE_LIST_CARD_DATA(state, payload) {
    state.listC = payload.csData.listCard;
  },
  SAVE_LIST_NEWS_DATA(state, payload) {
    state.listN = payload.csData.listNews1;
  },
};
const getters = {};

// 4. 导出
export default {
  namespaced: true, //设置命名空间
  state,
  actions,
  mutations,
  getters,
};
