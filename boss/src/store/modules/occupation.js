import {
  getJobList,
  getCityList,
  getRegionList,
  getRightInfo,
  getCompanyList,
  getOccupationList,
} from "@/api";
export default {
  state: {
    cityAbout: {},
    businessDistrict: {},
    getRightInfo: {},
    companyList: [],
    occupationList: [],
    jobList: {},
  },
  mutations: {
    UPDATA_CITYLIST(state, cityAbout) {
      state.cityAbout = cityAbout;
    },
    UPDATA_REGION(state, businessDistrict) {
      state.businessDistrict = businessDistrict.businessDistrict;
    },
    UPDATA_RIGHTINFO(state, getRightInfo) {
      state.getRightInfo = getRightInfo;
    },
    UPDATA_COMPANYINFO(state, companyList) {
      state.companyList = companyList;
    },
    UPDATA_OCCUPATIONLIST(state, occupationList) {
      state.occupationList = occupationList;
    },
    UPDATA_JOBLIST(state, jobList) {
      state.jobList = jobList;
    },
  },
  actions: {
    //获取城市相关信息
    async getCityList({ commit }, cityCode) {
      const res = await getCityList(cityCode);
      if (res.code === 0) {
        commit("UPDATA_CITYLIST", res.zpData);
      }
    },
    //获取区域相关信息
    async getRegionList({ commit }, cityCode) {
      const res = await getRegionList(cityCode);
      console.log(res);
      if (res.code === 0) {
        commit("UPDATA_REGION", res.zpData);
      }
    },
    //获取右边5个的数据
    async getRightInfo({ commit }) {
      const res = await getRightInfo();
      commit("UPDATA_RIGHTINFO", res.zpData);
    },
    //获取公司行业数据
    async getCompanyList({ commit }) {
      const res = await getCompanyList();
      commit("UPDATA_COMPANYINFO", res.zpData);
    },
    //获取职业类型数据
    async getOccupationList({ commit }) {
      const res = await getOccupationList();
      commit("UPDATA_OCCUPATIONLIST", res.zpData);
    },
    //获取公司招聘信息
    async getJobList({ commit }) {
      const res = await getJobList();
      commit("UPDATA_JOBLIST", res);
    },
  },
  getters: {
    cityGroup(state) {
      return state.cityAbout.cityGroup || [];
    },
    cityList(state) {
      return state.cityAbout.hotCityList || [];
    },
    locationCity(state) {
      return state.cityAbout.locationCity || [];
    },
    subLevelModelList(state) {
      return state.businessDistrict?.subLevelModelList || [];
    },

    degreeList(state) {
      return state.getRightInfo.degreeList;
    },
    experienceList(state) {
      return state.getRightInfo.experienceList;
    },
    salaryList(state) {
      return state.getRightInfo.salaryList;
    },
    scaleList(state) {
      return state.getRightInfo.scaleList;
    },
    stageList(state) {
      return state.getRightInfo.stageList;
    },

    limit1(state) {
      return state.jobList.limit1;
    },
    limit2(state) {
      return state.jobList.limit2;
    },
    limit3(state) {
      return state.jobList.limit3;
    },
  },
};
