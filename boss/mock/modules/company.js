module.exports = [
  // 每一个对象，将来都会生成一个后端路由
  {
    method: "get",
    url: "/mock/getCompanyInfo",
    response: {
      ok: true,
      code: 200,
      message: "成功",
      data: [
        {
          id: "1",
          name: "华为",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "10-15k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/upload/com/logo/20200429/8f64c9d0b30a53c434b26799ca78966cec9b49ecaf1604cb263748f03d5c2b0f.png?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "2",
          name: "腾讯",
          intro: "不需要融资",
          jobo: "互联网",
          detail: "热招",
          jobt: "java工程师",
          pay: "20-40k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/bar/20200430/4204e9c9f200b00b77fb59d093acd281be1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "3",
          name: "顺丰科技",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "25-50K·15薪",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/banner/de4268c1b162e27a058962a048850a43cfcd208495d565ef66e7dff9f98764da.png?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "4",
          name: "北京字节跳动",
          intro: "D轮及以上",
          jobo: "移动互联网",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: " 25-35K",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/chatphoto/20201123/424d60a634b16f6d498bb81a1ecc4fb882e5997348729a6cfe816ad90c892e55_s.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "5",
          name: "今日头条",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/chatphoto/20201123/424d60a634b16f6d498bb81a1ecc4fb882e5997348729a6cfe816ad90c892e55_s.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "6",
          name: "百度",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/banner/00c9c1238ae2c986f3e7741be97a9669cfcd208495d565ef66e7dff9f98764da.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "7",
          name: "阿里巴巴",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/upload/com/workfeel/20220316/7bf6f160950405e9282fe33181a1523803562870c4e2cc4a242ac4eb7bbd10d1694083156ab76fdb.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "8",
          name: "NIO蔚来",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/banner/f074178f63c9b52aec4d08baaace477ccfcd208495d565ef66e7dff9f98764da.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "9",
          name: "滴滴出行",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190408/c23f08b24983fffa26a3a8ba19a463523cc05a6873981b80bf124ddd6c45f629_s.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "10",
          name: "bilibili",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/bar/brand/12456.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "11",
          name: "高德地图",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/logo/35de95244eb9fc821dcd844c1b3acd64be1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "12",
          name: "微博",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/bar/20200629/7d893d759ab92844234643d8d033008dbe1bd4a3bd2a63f070bdbdada9aad826.png?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "13",
          name: "今日头条",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/chatphoto/20201123/424d60a634b16f6d498bb81a1ecc4fb882e5997348729a6cfe816ad90c892e55_s.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "14",
          name: "汽车之家",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img2.bosszhipin.com/mcs/chatphoto/20160205/70ff8dce6461bb6fae2f6b9c49f40eb2e161f93b9ebb12b46ead26209e349357.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "15",
          name: "网易",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/banner/4201efdb842badc0697ac5f6db469402cfcd208495d565ef66e7dff9f98764da.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "16",
          name: "途虎养车",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/upload/com/logo/20190814/3807339f0f33e5ba73d365e1134559eac02f361fbf9ce523be7d685ba2e2e592.png?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "17",
          name: "华为",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "10-15k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/upload/com/logo/20200429/8f64c9d0b30a53c434b26799ca78966cec9b49ecaf1604cb263748f03d5c2b0f.png?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "18",
          name: "腾讯",
          intro: "不需要融资",
          jobo: "互联网",
          detail: "热招",
          jobt: "java工程师",
          pay: "20-40k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/bar/20200430/4204e9c9f200b00b77fb59d093acd281be1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "19",
          name: "顺丰科技",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "25-50K·15薪",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/banner/de4268c1b162e27a058962a048850a43cfcd208495d565ef66e7dff9f98764da.png?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "20",
          name: "北京字节跳动",
          intro: "D轮及以上",
          jobo: "移动互联网",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: " 25-35K",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/chatphoto/20201123/424d60a634b16f6d498bb81a1ecc4fb882e5997348729a6cfe816ad90c892e55_s.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "21",
          name: "今日头条",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/chatphoto/20201123/424d60a634b16f6d498bb81a1ecc4fb882e5997348729a6cfe816ad90c892e55_s.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "22",
          name: "百度",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/banner/00c9c1238ae2c986f3e7741be97a9669cfcd208495d565ef66e7dff9f98764da.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "23",
          name: "阿里巴巴",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/upload/com/workfeel/20220316/7bf6f160950405e9282fe33181a1523803562870c4e2cc4a242ac4eb7bbd10d1694083156ab76fdb.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "24",
          name: "NIO蔚来",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/banner/f074178f63c9b52aec4d08baaace477ccfcd208495d565ef66e7dff9f98764da.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "25",
          name: "滴滴出行",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/chatphoto/20190408/c23f08b24983fffa26a3a8ba19a463523cc05a6873981b80bf124ddd6c45f629_s.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "26",
          name: "bilibili",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/bar/brand/12456.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "27",
          name: "高德地图",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/logo/35de95244eb9fc821dcd844c1b3acd64be1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "28",
          name: "微博",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/bar/20200629/7d893d759ab92844234643d8d033008dbe1bd4a3bd2a63f070bdbdada9aad826.png?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "29",
          name: "今日头条",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/chatphoto/20201123/424d60a634b16f6d498bb81a1ecc4fb882e5997348729a6cfe816ad90c892e55_s.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "30",
          name: "汽车之家",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img2.bosszhipin.com/mcs/chatphoto/20160205/70ff8dce6461bb6fae2f6b9c49f40eb2e161f93b9ebb12b46ead26209e349357.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "31",
          name: "网易",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/mcs/banner/4201efdb842badc0697ac5f6db469402cfcd208495d565ef66e7dff9f98764da.jpg?x-oss-process=image/resize,w_120,limit_0",
        },
        {
          id: "32",
          name: "途虎养车",
          intro: "不需要融资",
          jobo: "计算机软件",
          detail: "热招",
          jobt: "前端开发工程师",
          pay: "15-25k",
          logoUrl:
            "https://img.bosszhipin.com/beijin/upload/com/logo/20190814/3807339f0f33e5ba73d365e1134559eac02f361fbf9ce523be7d685ba2e2e592.png?x-oss-process=image/resize,w_120,limit_0",
        },
      ],
    },
  },
];
