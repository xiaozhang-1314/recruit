
module.exports = [
  // 每一个对象，将来都会生成一个后端路由
  {
    method: 'get',
    url: '/mock/getJobImgs',
    response: {
      code: 200,
      message: '成功',
      ok: true,
      data: [
        {
          id: 1,
          name: '「职业百科」求职情报局',
          imgUrl:
            'https://img.bosszhipin.com/beijin/cms/07a60e28e71d167aa8b963b2c2771fe9fbcf1fe2146e01096e1e8f8db8373f6912f0448e60eb4676be9d48bd100232ec.jpg',
        },
        {
          id: 2,
          name: '那些傻傻分不清楚的职业们—编辑篇',
          imgUrl:
            'https://img.bosszhipin.com/beijin/cms/1de51b8fcf920ed4c663a9b41d5f1369fbcf1fe2146e01096e1e8f8db8373f69882466c4b4354e1d84d5606bfb0bdf31.jpg',
        },
        {
          id: 3,
          name: '揭秘“后浪”时代萌芽而出的新职业',
          imgUrl:
            'https://img.bosszhipin.com/beijin/cms/0e2fb606602d406c481e503ee211c539fbcf1fe2146e01096e1e8f8db8373f6976ebcef32c924876a76cf47375d5d24d.jpeg',
        },
        {
          id: 4,
          name: '职场纪实类播客节目·活不好干',
          imgUrl:
            'https://img.bosszhipin.com/beijin/cms/9bb82e68ee1dc2653373ac54bbd910b4fbcf1fe2146e01096e1e8f8db8373f6964894dd2c02e4d72aa571119175b14a4.jpg',
        },
      ],
    },
  },
  {
    method: 'get',
    url: '/mock/getJobVideoImg',
    response: {
      code: 200,
      message: '成功',
      ok: true,
      data: [
        {
          id: 1,
          name: '项目经理是如何有条不紊的拆解工作、把握项目进度和质量、处理项目中的突发事件的呢？去看看！',
          imgUrl:
            'https://img.bosszhipin.com/beijin/cms/fae0f5db34cfb4db402e6c1f400502a2fbcf1fe2146e01096e1e8f8db8373f69e37b1024849746a3ab2b80e309d88093.jpg',
        },
        {
          id: 2,
          name: '“日常工作就是打杂的吧”，行政被误解有多深？一起去看看！',
          imgUrl:
            'https://img.bosszhipin.com/beijin/cms/8ed1fcce282dce650196b4379ebdda09fbcf1fe2146e01096e1e8f8db8373f6989f6096ec69b4f999dbd0e82e7b805d5.jpg',
        },
        {
          id: 3,
          name: '1 个月就能完成半年 KPI 的销售新人，他做对了什么？',
          imgUrl:
            'https://img.bosszhipin.com/beijin/cms/1d2914bd3410663ab96f9bbb36fbddf6fbcf1fe2146e01096e1e8f8db8373f696218d8678f334045b8af57681106a797.jpg',
        },
        {
          id: 4,
          name: '把爱好变成工作的运营专员，真的赚到钱了吗？',
          imgUrl:
            'https://img.bosszhipin.com/beijin/cms/1c3a695a459c949bfdcc94bccaf88c38fbcf1fe2146e01096e1e8f8db8373f69c232c337e8264db6a780e87931333d58.jpg',
        },
      ],
    },
  },
  {
    method: 'get',
    url: '/mock/getJobList',
    response: {
      code: 200,
      message: '成功',
      ok: true,
      data:[
        {
          id: 1,
          icon: 'https://img.bosszhipin.com/beijin/cms/fafc9b56d5f26d448950245d547bb032fbcf1fe2146e01096e1e8f8db8373f697ccc7c26441c49fe99a47d3e6b626989.png',
          title: '热搜职业榜',
          jobItem: [
            {
              id: 1,
              name: '视频编辑',
              content: 'Ta 们是剪辑声画光影的神剪手，懂观众，懂作品！',
            },
            {
              id: 2,
              name: '建筑工程师',
              content: '建筑工程专家，专业、严谨、认真，他们为建筑保驾护航。',
            },
            {
              id: 3,
              name: '品牌公关',
              content:
                'Ta 们懂市场、懂品牌、懂用户，有品位、有创意，为好的品牌添光加彩。',
            },
            {
              id: 4,
              name: '信贷管理专员',
              content: '提供信贷咨询，了解用户诉求，有专业的素质和亲和力。',
            },
            {
              id: 5,
              name: '保险顾问',
              content: '全方位信息都能了解，是属于你的你的保险专家。',
            },
            {
              id: 6,
              name: '酒店经理',
              content:
                '那些高端大气上档次的酒店里，少不了 Ta 们为你服务的身影！',
            },
            {
              id: 7,
              name: '行政专员',
              content: '维护组织稳定，提供后勤保障，是业务方的后备军。',
            },
            {
              id: 8,
              name: '人力资源专员',
              content: '为公司发掘人才，练就“慧眼识珠”能力！',
            },
            {
              id: 9,
              name: '国内电商运营',
              content: '电商行业火爆，职位空缺大，有“钱途”',
            },
            {
              id: 10,
              name: '数据分析师',
              content: '转行热门职业！大数据时代，市场需求大',
            },
            {
              id: 11,
              name: 'Java 工程师',
              content: '高效、稳定、安全，掌握 Java 编程就是这么自信～',
            },
            {
              id: 12,
              name: 'Web 前端工程师',
              content: '精通 HTML、CSS、JavaScript，用户所喜爱的网站界面，都是 Ta 们搞上去的！',
            },
            {
              id: 13,
              name: '直播运营',
              content: '策划直播玩法、布局、脚本设计，打造爆款直播间全靠 Ta 们！',
            },
            {
              id: 14,
              name: '项目经理',
              content: '技术与统筹兼备，让项目有条不紊开发进行。',
            },
            {
              id: 15,
              name: '物流专员',
              content: '协调货物收发、配送、管理，避免爆仓压货',
            },
          ],
        },
        {
          id: 2,
          icon: 'https://img.bosszhipin.com/beijin/cms/b8186d5424740bcec6b8dd2acde7d884fbcf1fe2146e01096e1e8f8db8373f69134220582eb844e69dbd08b2c1b0d41d.png',
          title: '薪酬涨幅榜',
          jobItem: [
            {
              id: 1,
              name: '网络营销',
              content: '相比上月增长',
              percentage: '7.55%',
            },
            {
              id: 2,
              name: '客服总监',
              content: '相比上月增长',
              percentage: '6.73%',
            },
            {
              id: 3,
              name: '会籍顾问',
              content: '相比上月增长',
              percentage: '5.91%',
            },
            {
              id: 4,
              name: '整形师',
              content: '相比上月增长',
              percentage: '5.37%',
            },
            {
              id: 5,
              name: '审计师',
              content: '相比上月增长',
              percentage: '5.34%',
            },
            {
              id: 6,
              name: '攥稿人',
              content: '相比上月增长',
              percentage: '4.82%',
            },
            {
              id: 7,
              name: '培训策划师',
              content: '相比上月增长',
              percentage: '4.79%',
            },
            {
              id: 8,
              name: '医疗器械研发工程师',
              content: '相比上月增长',
              percentage: '4.63%',
            },
            {
              id: 9,
              name: '临床研究',
              content: '相比上月增长',
              percentage: '4.37%',
            },
          ],
        },
        {
          id: 3,
          icon: 'https://img.bosszhipin.com/beijin/cms/f0392d80b4564896fe3d2587d6a5ec96fbcf1fe2146e01096e1e8f8db8373f699a52cda6ce7d4ea9a2106a1ed6cc97ca.png',
          title: '新兴职业榜',
          jobItem: [
            {
              id: 1,
              name: '茶艺师',
              content: '真正的品茶能手，懂得如何做好茶、品好茶。',
            },
            {
              id: 2,
              name: '研学旅行指导师',
              content: '为学生的研学提供好的方案，保证学生在研学途中的安全~',
            },
            {
              id: 3,
              name: '职业乐手',
              content: '吹拉弹唱不再是个特长，搞乐器，Ta 们是专业的！',
            },
            {
              id: 4,
              name: '京东运营',
              content: '最熟悉京东运营技巧，掌握京东流量规则的运营人员～',
            },
            {
              id: 5,
              name: '民宿管家',
              content:
                '精心打理民宿、为旅者热情推荐地道玩法，游客来来往往，而 Ta 一直都在～',
            },
            {
              id: 6,
              name: '剧本杀编剧',
              content:
                '拥有强大的推理能力，Ta 笔下的故事让玩家身临其境、直呼高能～',
            },
            {
              id: 7,
              name: '化妆品研发工程师',
              content: '专业的成分党，平衡安全性和感官美学，为你研制美丽配方～',
            },
            {
              id: 8,
              name: '淘宝运营',
              content: '从选品到销售的网店操盘手，在销量数据里分析财富密码。',
            },
            {
              id: 9,
              name: '解决方案专家',
              content: 'Ta 们是可靠的行业顾问，用技术手段帮企业解决经营难题。',
            },
          ],
        },
        {
          id: 4,
          icon: 'https://img.bosszhipin.com/beijin/cms/e4659ee42402c2f0c1adebe316e05477fbcf1fe2146e01096e1e8f8db8373f697bb4ef362574452791fd6cbb7433ed11.png',
          title: '新增词条榜',
          jobItem: [
            {
              id: 1,
              name: '少儿编程老师',
              content: '懂教育方法，懂儿童心理，还会写代码！',
            },
            {
              id: 2,
              name: '舞蹈老师',
              content: '擅长用身体和律动感染观众，也能一手带出优秀的学员！',
            },
            {
              id: 3,
              name: '甲醛治理师',
              content: '为你的健康保驾护航，Ta 们是清除甲醛的专家。',
            },
            {
              id: 4,
              name: '法语翻译',
              content:
                '人前说着一口流利、优雅的法语，人后认真查阅资料，努力翻译到天衣无缝！',
            },
            {
              id: 5,
              name: '细胞培养员',
              content:
                'Ta 们是微观世界的“工程师”，帮助使细胞在无菌环境中生存、生长！',
            },
            {
              id: 6,
              name: '羽毛球教练',
              content: 'Ta 们是拥有高超的羽毛球技巧和丰富教学经验的老师！',
            },
            {
              id: 7,
              name: '建筑节能减排咨询师',
              content: 'Ta 们是为大楼减排，为城市减负的新一代“指挥家”！',
            },
            {
              id: 8,
              name: '农业数字化技术员',
              content:
                '把数字科技带进乡村，让“智慧农业”模式普及化，Ta 们是认真的！',
            },
            {
              id: 9,
              name: '剧本杀主持人',
              content: '剧本杀的节奏大师，带你快速进入角色，增强沉浸式体验！',
            },
          ],
        },
      ] ,
    },
  },
]
