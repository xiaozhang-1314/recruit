import jsonAjax from "./jsonAjax";
import axios from "./ajax";

// 资讯组件
export const reqGetListCardData = () => jsonAjax.get("/information");

// 资讯页面-保存表单数据
export const reqPostUserInfo = () =>
  axios.post("/wapi/zpgeek/article/mediasubmit.json ");

// 百科页面根据关键词获取信息
export const reqGetTitleInfo = (keyword) => {
  return axios({
    url: `/wapi/moment/get/wikiV2/search?keyword=${keyword}&page=1&platform=3`,
    method: "get",
  });
};
