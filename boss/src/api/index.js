// 这个文件统一管理之后用到的所有请求(接口函数)
import ajax from "./ajax";
// 这个是json-server相关的虚拟接口
import request from "./request";
// 沈婷婷的接口
export const reqCityList = () =>
  ajax({ method: "get", url: "/wapi/zpgeek/common/data/citysites.json" });
export const reqCompanyInfo = () => request({ method: "get", url: "/sttdata" });
// 张飞的接口
/* 请求公司地址 */
export const reqCompanyAddressList = () =>
  request({
    url: "/city", // 请求地址
    method: "get", // 请求方式
  });
/* 请求行业类型 */
export const reqIndustryList = () =>
  request({
    url: "/industry", // 请求地址
    method: "get", // 请求方式
  });
/* 请求融资阶段 */
export const reqFinancingList = () =>
  request({
    url: "/financing", // 请求地址
    method: "get", // 请求方式
  });
/* 请求公司规模 */
export const reqScaleList = () =>
  request({
    url: "/scale", // 请求地址
    method: "get", // 请求方式
  });
/* 请求公司数据 */
export const reqCompanyList = () =>
  request({
    url: "/company", // 请求地址
    method: "get", // 请求方式
  });
/* 请求热门职位 */
export const reqPopularPositionsList = () =>
  request({
    url: "/popularPositions", // 请求地址
    method: "get", // 请求方式
  });
/* 请求热门城市 */
export const reqPopularCitiesList = () =>
  request({
    url: "/popularCities", // 请求地址
    method: "get", // 请求方式
  });
/* 请求热门企业 */
export const reqPopularEnterprisesList = () =>
  request({
    url: "/popularEnterprises", // 请求地址
    method: "get", // 请求方式
  });
/* 请求附近城市 */
export const reqNearbyCitiesList = () =>
  request({
    url: "/nearbyCities", // 请求地址
    method: "get", // 请求方式
  });
// 郑子涵接口
//获取城市相关的信息
export const getCityList = () =>
  ajax({ url: "/wapi/zpCommon/data/cityGroup.json", method: "get" });

//获取区域信息
export const getRegionList = (cityCode) =>
  ajax({
    url: `/wapi/zpgeek/businessDistrict.json?cityCode=${cityCode}`,
    method: "get",
  });

//获取右边5个
export const getRightInfo = () =>
  ajax({ url: "/wapi/zpgeek/search/job/condition.json", method: "get" });
//获取公司行业的数据
export const getCompanyList = () =>
  ajax({ url: "/wapi/zpCommon/data/industry.json", method: "get" });
//获取职业类型的数据
export const getOccupationList = () =>
  ajax({ url: "/wapi/zpCommon/data/position.json", method: "get" });
//获取招聘公司信息
export const getJobList = () => request({ url: "/zzhdata", method: "get" });

// 刘祖煜的接口
// 提交表单相关的接口
export const reqPostUserInfo = () =>
  axios.post("/wapi/zpgeek/article/mediasubmit.json ");

// 页面渲染获取数据
export const reqGetListCardData = () => request.get("/lzydata");
