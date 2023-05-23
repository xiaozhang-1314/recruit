module.exports = [
  // 每一个对象,将来都会生成一个后端路由

  // 热门公司
  {
    method: "get",
    url: "/wapi/getHotCompnayCity",
    data: {
      code: 0,
      message: "Success",
      zpData: [
        {
          cityName: "深圳",
          data: [],
        },
        {
          cityName: "北京",
          data: [],
        },
        {
          cityName: "上海",
          data: [],
        },
        {
          cityName: "广州",
          data: [],
        },
        {
          cityName: "全国",
          data: [],
        },
      ],
    },
  },
];
