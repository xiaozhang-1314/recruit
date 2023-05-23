<template>
  <div class="wrap">
    <div class="search">
      <div class="search-title">
        <p>职业百科</p>
      </div>
      <div class="count-title">
        <p>BOSS职业百科词条已收录<span>1016 </span>个职业</p>
      </div>
      <div class="count-sub-title">
        快速了解不同职业的晋升之路、薪资待遇，更有转行数据及热议问答，助你轻松入行。
      </div>
      <div class="search-input-wrap">
        <div class="search-input" style="margin-top: 15px">
          <input placeholder="搜索职位" class="inp" v-model="keyword" />
          <button class="btn">搜索</button>
          <div class="searchList" v-show="keyword">
            <div class="searchList-title" v-if="zpData.list.length">
              猜你喜欢
            </div>
            <div class="searchList-title" v-else>暂无相关职业</div>
            <div
              class="search-info"
              v-for="(data, index) in newList"
              :key="index"
              v-html="data"
              @mouseenter="enter(index)"
              @mouseleave="leave(index)"
              :class="currentIndex === index ? 'infoLight' : ''"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="title-link">
      <div class="title-link-title">
        <p>职业榜单</p>
      </div>
      <ul class="link-all">
        <li>
          <div class="link-info">
            <div class="link-info-title">
              <i class="iconfont icon-Fire"></i>
              热搜职业榜
            </div>
            <ul>
              <li>
                <span>1、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s0ac3daa93b4ee7011XN4/"
                    class="title"
                    data-v-1173cd11=""
                    >视频编辑</a
                  >
                  <div class="info-content">
                    Ta 们是剪辑声画光影的神剪手，懂观众，懂作品！
                  </div>
                </div>
              </li>
              <li>
                <span>2、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s753105953573e3a21nd_/"
                    class="title"
                    data-v-1173cd11=""
                    >建筑工程师</a
                  >
                  <div class="info-content">
                    建筑工程专家，专业、严谨、认真，他们为建筑保驾护航。
                  </div>
                </div>
              </li>
              <li>
                <span>3、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s13eaf412269029ab1nF4/"
                    class="title"
                    data-v-1173cd11=""
                    >品牌公关</a
                  >
                  <div class="info-content">
                    Ta
                    们懂市场、懂品牌、懂用户，有品位、有创意，为好的品牌添光加彩。
                  </div>
                </div>
              </li>
              <li>
                <span>4、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s6f1548895897b57e1XZ8/"
                    class="title"
                    data-v-1173cd11=""
                    >信贷管理专员</a
                  >
                  <div class="info-content">
                    提供信贷咨询，了解用户诉求，有专业的素质和亲和力。
                  </div>
                </div>
              </li>
              <li>
                <span>5、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s86cb1aae5fcd7f221Xd-/"
                    class="title"
                    data-v-1173cd11=""
                    >保险顾问</a
                  >
                  <div class="info-content">
                    全方位信息都能了解，是属于你的你的保险专家。
                  </div>
                </div>
              </li>
              <li>
                <span>6、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s86cb1aae5fcd7f221Xd-/"
                    class="title"
                    data-v-1173cd11=""
                    >保险顾问</a
                  >
                  <div class="info-content">
                    全方位信息都能了解，是属于你的你的保险专家。
                  </div>
                </div>
              </li>
              <li>
                <span>7、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s86cb1aae5fcd7f221Xd-/"
                    class="title"
                    data-v-1173cd11=""
                    >保险顾问</a
                  >
                  <div class="info-content">
                    全方位信息都能了解，是属于你的你的保险专家。
                  </div>
                </div>
              </li>
              <li>
                <span>8、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s86cb1aae5fcd7f221Xd-/"
                    class="title"
                    data-v-1173cd11=""
                    >保险顾问</a
                  >
                  <div class="info-content">
                    全方位信息都能了解，是属于你的你的保险专家。
                  </div>
                </div>
              </li>
              <li>
                <span>9、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s86cb1aae5fcd7f221Xd-/"
                    class="title"
                    data-v-1173cd11=""
                    >保险顾问</a
                  >
                  <div class="info-content">
                    全方位信息都能了解，是属于你的你的保险专家。
                  </div>
                </div>
              </li>
              <li>
                <span>10、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s86cb1aae5fcd7f221Xd-/"
                    class="title"
                    data-v-1173cd11=""
                    >保险顾问</a
                  >
                  <div class="info-content">
                    全方位信息都能了解，是属于你的你的保险专家。
                  </div>
                </div>
              </li>
              <li>
                <span>11、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s86cb1aae5fcd7f221Xd-/"
                    class="title"
                    data-v-1173cd11=""
                    >保险顾问</a
                  >
                  <div class="info-content">
                    全方位信息都能了解，是属于你的你的保险专家。
                  </div>
                </div>
              </li>
              <li>
                <span>12、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s86cb1aae5fcd7f221Xd-/"
                    class="title"
                    data-v-1173cd11=""
                    >保险顾问</a
                  >
                  <div class="info-content">
                    全方位信息都能了解，是属于你的你的保险专家。
                  </div>
                </div>
              </li>
              <li>
                <span>13、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s86cb1aae5fcd7f221Xd-/"
                    class="title"
                    data-v-1173cd11=""
                    >保险顾问</a
                  >
                  <div class="info-content">
                    全方位信息都能了解，是属于你的你的保险专家。
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class="link-info">
            <div class="link-info-title">
              <i class="iconfont icon-yuan"></i> 薪酬涨幅榜
            </div>
            <ul>
              <li>
                <span>1、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s5b8a055db33d86943n1y/"
                    class="title"
                    data-v-1173cd11=""
                    >检验科医师</a
                  >
                  <div class="info-content">
                    相比上月增长
                    <p class="hl">4.65%</p>
                  </div>
                </div>
              </li>
              <li>
                <span>2、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/sb10e1d34310c572303xz/"
                    class="title"
                    data-v-1173cd11=""
                    >投资总监</a
                  >
                  <div class="info-content">
                    相比上月增长
                    <p class="hl" data-v-1173cd11="">4.09%</p>
                  </div>
                </div>
              </li>
              <li>
                <span>3、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s92daec64f29990741nR73g~~/"
                    class="title"
                    data-v-1173cd11=""
                    >财务总监</a
                  >
                  <div class="info-content">
                    相比上月增长
                    <p class="hl" data-v-1173cd11="">3.7%</p>
                  </div>
                </div>
              </li>
              <li>
                <span>4、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/sb1b10c135875c0470XR7/"
                    class="title"
                    data-v-1173cd11=""
                    >文科教师</a
                  >
                  <div class="info-content">
                    相比上月增长
                    <p class="hl" data-v-1173cd11="">3.6%</p>
                  </div>
                </div>
              </li>
              <li>
                <span>5、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s539fc69ff2f68ca11HJ4/"
                    class="title"
                    data-v-1173cd11=""
                    >医药研发</a
                  >
                  <div class="info-content">
                    相比上月增长
                    <p class="hl" data-v-1173cd11="">3.26%</p>
                  </div>
                </div>
              </li>
              <li>
                <span>6、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s539fc69ff2f68ca11HJ4/"
                    class="title"
                    data-v-1173cd11=""
                    >医药研发</a
                  >
                  <div class="info-content">
                    相比上月增长
                    <p class="hl" data-v-1173cd11="">3.26%</p>
                  </div>
                </div>
              </li>
              <li>
                <span>7、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s539fc69ff2f68ca11HJ4/"
                    class="title"
                    data-v-1173cd11=""
                    >医药研发</a
                  >
                  <div class="info-content">
                    相比上月增长
                    <p class="hl" data-v-1173cd11="">3.26%</p>
                  </div>
                </div>
              </li>
              <li>
                <span>8、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s539fc69ff2f68ca11HJ4/"
                    class="title"
                    data-v-1173cd11=""
                    >医药研发</a
                  >
                  <div class="info-content">
                    相比上月增长
                    <p class="hl" data-v-1173cd11="">3.26%</p>
                  </div>
                </div>
              </li>
              <li>
                <span>9、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s539fc69ff2f68ca11HJ4/"
                    class="title"
                    data-v-1173cd11=""
                    >医药研发</a
                  >
                  <div class="info-content">
                    相比上月增长
                    <p class="hl" data-v-1173cd11="">3.26%</p>
                  </div>
                </div>
              </li>
              <li>
                <span>10、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s539fc69ff2f68ca11HJ4/"
                    class="title"
                    data-v-1173cd11=""
                    >医药研发</a
                  >
                  <div class="info-content">
                    相比上月增长
                    <p class="hl" data-v-1173cd11="">3.26%</p>
                  </div>
                </div>
              </li>
              <li>
                <span>11、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s539fc69ff2f68ca11HJ4/"
                    class="title"
                    data-v-1173cd11=""
                    >医药研发</a
                  >
                  <div class="info-content">
                    相比上月增长
                    <p class="hl" data-v-1173cd11="">3.26%</p>
                  </div>
                </div>
              </li>
              <li>
                <span>12、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s539fc69ff2f68ca11HJ4/"
                    class="title"
                    data-v-1173cd11=""
                    >医药研发</a
                  >
                  <div class="info-content">
                    相比上月增长
                    <p class="hl" data-v-1173cd11="">3.26%</p>
                  </div>
                </div>
              </li>
              <li>
                <span>13、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s539fc69ff2f68ca11HJ4/"
                    class="title"
                    data-v-1173cd11=""
                    >医药研发</a
                  >
                  <div class="info-content">
                    相比上月增长
                    <p class="hl" data-v-1173cd11="">3.26%</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class="link-info">
            <div class="link-info-title">
              <i class="iconfont icon-fjdd_icon_love_sel"></i> 新兴职业榜
            </div>
            <ul>
              <li>
                <span>1、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s21726b56d1a2df5f1nV70w~~/"
                    >茶艺师</a
                  >
                  <div class="info-content">
                    真正的品茶能手，懂得如何做好茶、品好茶。
                  </div>
                </div>
              </li>
              <li>
                <span>2、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s4e08b1e2840fe3411nRz2Q~~/"
                    class="title"
                    data-v-1173cd11=""
                    >研学旅行指导师</a
                  >
                  <div class="info-content">
                    为学生的研学提供好的方案，保证学生在研学途中的安全~
                  </div>
                </div>
              </li>
              <li>
                <span>3、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/sbd8acfb91a7859a41nR73Q~~/"
                    class="title"
                    data-v-1173cd11=""
                    >海鲜养殖员</a
                  >
                  <div class="info-content">
                    你所能吃到的美味海鲜，都是 Ta 们养殖的！
                  </div>
                </div>
              </li>
              <li>
                <span>4、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/sa203aa8fc82bf9d81nR42A~~/"
                    class="title"
                    data-v-1173cd11=""
                    >职业乐手</a
                  >
                  <div class="info-content">
                    吹拉弹唱不再是个特长，搞乐器，Ta 们是专业的！
                  </div>
                </div>
              </li>
              <li>
                <span>5、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s11b2b8717cf93d891nR53w~~/"
                    class="title"
                    data-v-1173cd11=""
                    >京东运营</a
                  >
                  <div class="info-content">
                    最熟悉京东运营技巧，掌握京东流量规则的运营人员～
                  </div>
                </div>
              </li>
              <li>
                <span>6、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s98123955b2c581ef1nRz2A~~/"
                    class="title"
                    data-v-1173cd11=""
                    >民宿管家</a
                  >
                  <div class="info-content">
                    精心打理民宿、为旅者热情推荐地道玩法，游客来来往往，而 Ta
                    一直都在～
                  </div>
                </div>
              </li>
              <li>
                <span>7、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s98123955b2c581ef1nRz2A~~/"
                    class="title"
                    data-v-1173cd11=""
                    >民宿管家</a
                  >
                  <div class="info-content">
                    精心打理民宿、为旅者热情推荐地道玩法，游客来来往往，而 Ta
                    一直都在～
                  </div>
                </div>
              </li>
              <li>
                <span>8、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s98123955b2c581ef1nRz2A~~/"
                    class="title"
                    data-v-1173cd11=""
                    >民宿管家</a
                  >
                  <div class="info-content">
                    精心打理民宿、为旅者热情推荐地道玩法，游客来来往往，而 Ta
                    一直都在～
                  </div>
                </div>
              </li>
              <li>
                <span>9、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s98123955b2c581ef1nRz2A~~/"
                    class="title"
                    data-v-1173cd11=""
                    >民宿管家</a
                  >
                  <div class="info-content">
                    精心打理民宿、为旅者热情推荐地道玩法，游客来来往往，而 Ta
                    一直都在～
                  </div>
                </div>
              </li>
              <li>
                <span>10、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s98123955b2c581ef1nRz2A~~/"
                    class="title"
                    data-v-1173cd11=""
                    >民宿管家</a
                  >
                  <div class="info-content">
                    精心打理民宿、为旅者热情推荐地道玩法，游客来来往往，而 Ta
                    一直都在～
                  </div>
                </div>
              </li>
              <li>
                <span>11、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s98123955b2c581ef1nRz2A~~/"
                    class="title"
                    data-v-1173cd11=""
                    >民宿管家</a
                  >
                  <div class="info-content">
                    精心打理民宿、为旅者热情推荐地道玩法，游客来来往往，而 Ta
                    一直都在～
                  </div>
                </div>
              </li>
              <li>
                <span>12、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s98123955b2c581ef1nRz2A~~/"
                    class="title"
                    data-v-1173cd11=""
                    >民宿管家</a
                  >
                  <div class="info-content">
                    精心打理民宿、为旅者热情推荐地道玩法，游客来来往往，而 Ta
                    一直都在～
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class="link-info">
            <div class="link-info-title">
              <i class="iconfont icon-plus-circle"></i>
              新增词条榜
            </div>
            <ul>
              <li>
                <span>1、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s84009f65cc5264401nV73w~~/"
                    class="title"
                    data-v-1173cd11=""
                    >少儿编程老师</a
                  >
                  <div class="info-content">
                    懂教育方法，懂儿童心理，还会写代码！
                  </div>
                </div>
              </li>
              <li>
                <span>2、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s7724c54ab049d3271nR63g~~/"
                    class="title"
                    data-v-1173cd11=""
                    >舞蹈老师</a
                  >
                  <div class="info-content">
                    擅长用身体和律动感染观众，也能一手带出优秀的学员！
                  </div>
                </div>
              </li>
              <li>
                <span>3、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s82156eac9293d20e1nV73A~~/"
                    class="title"
                    data-v-1173cd11=""
                    >甲醛治理师</a
                  >
                  <div class="info-content">
                    为你的健康保驾护航，Ta 们是清除甲醛的专家。
                  </div>
                </div>
              </li>
              <li>
                <span>4、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s3f9ba8fa6e292c031nR63Q~~/"
                    class="title"
                    data-v-1173cd11=""
                    >法语翻译</a
                  >
                  <div class="info-content">
                    人前说着一口流利、优雅的法语，人后认真查阅资料，努力翻译到天衣无缝！
                  </div>
                </div>
              </li>
              <li>
                <span>5、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s331bba604af397a31nV73g~~/"
                    class="title"
                    data-v-1173cd11=""
                    >细胞培养员</a
                  >
                  <div class="info-content">
                    Ta
                    们是微观世界的“工程师”，帮助使细胞在无菌环境中生存、生长！
                  </div>
                </div>
              </li>
              <li>
                <span>6、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s331bba604af397a31nV73g~~/"
                    class="title"
                    data-v-1173cd11=""
                    >细胞培养员</a
                  >
                  <div class="info-content">
                    Ta
                    们是微观世界的“工程师”，帮助使细胞在无菌环境中生存、生长！
                  </div>
                </div>
              </li>
              <li>
                <span>7、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s331bba604af397a31nV73g~~/"
                    class="title"
                    data-v-1173cd11=""
                    >细胞培养员</a
                  >
                  <div class="info-content">
                    Ta
                    们是微观世界的“工程师”，帮助使细胞在无菌环境中生存、生长！
                  </div>
                </div>
              </li>
              <li>
                <span>8、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s331bba604af397a31nV73g~~/"
                    class="title"
                    data-v-1173cd11=""
                    >细胞培养员</a
                  >
                  <div class="info-content">
                    Ta
                    们是微观世界的“工程师”，帮助使细胞在无菌环境中生存、生长！
                  </div>
                </div>
              </li>
              <li>
                <span>9、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s331bba604af397a31nV73g~~/"
                    class="title"
                    data-v-1173cd11=""
                    >细胞培养员</a
                  >
                  <div class="info-content">
                    Ta
                    们是微观世界的“工程师”，帮助使细胞在无菌环境中生存、生长！
                  </div>
                </div>
              </li>
              <li>
                <span>10、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s331bba604af397a31nV73g~~/"
                    class="title"
                    data-v-1173cd11=""
                    >细胞培养员</a
                  >
                  <div class="info-content">
                    Ta
                    们是微观世界的“工程师”，帮助使细胞在无菌环境中生存、生长！
                  </div>
                </div>
              </li>
              <li>
                <span>11、</span>
                <div class="info">
                  <a
                    href="https://baike.zhipin.com/wiki/s331bba604af397a31nV73g~~/"
                    class="title"
                    data-v-1173cd11=""
                    >细胞培养员</a
                  >
                  <div class="info-content">
                    Ta
                    们是微观世界的“工程师”，帮助使细胞在无菌环境中生存、生长！
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <div class="title-secret">
      <div class="title-secret-title">
        <p>职业探秘</p>
      </div>
      <ul class="secret-all">
        <li>
          <!--a标签跳转的路径 href="https://m.zhipin.com/activity/html/developer?activityId=7fa64281f360e90f1ndz2Q~~&source=wiki" -->
          <a
            @click.prevent="showBox"
            href="https://m.zhipin.com/activity/html/developer?activityId=7fa64281f360e90f1ndz2Q~~&source=wiki"
          >
            <div class="card-wrap">
              <img
                src="https://img.bosszhipin.com/beijin/cms/07a60e28e71d167aa8b963b2c2771fe9fbcf1fe2146e01096e1e8f8db8373f6912f0448e60eb4676be9d48bd100232ec.jpg"
                ref="imgRef"
              />
            </div>
            <p class="card-title">「职业百科」求职情报局</p>
          </a>
        </li>
        <li>
          <a
            @click.prevent="showBox"
            href="https://m.zhipin.com/activity/html/developer?activityId=9cedec95f753e9091nZ83g~~&source=wiki"
          >
            <div class="card-wrap">
              <img
                src="https://img.bosszhipin.com/beijin/cms/1de51b8fcf920ed4c663a9b41d5f1369fbcf1fe2146e01096e1e8f8db8373f69882466c4b4354e1d84d5606bfb0bdf31.jpg"
              />
            </div>
            <p class="card-title">那些傻傻分不清楚的职业们—编辑篇</p>
          </a>
        </li>
        <li>
          <a
            @click.prevent="showBox"
            href="https://m.zhipin.com/activity/html/developer?activityId=885f705640bc0c361nR82A~~&source=wiki"
          >
            <div class="card-wrap">
              <img
                src="https://img.bosszhipin.com/beijin/cms/0e2fb606602d406c481e503ee211c539fbcf1fe2146e01096e1e8f8db8373f6976ebcef32c924876a76cf47375d5d24d.jpeg"
              />
            </div>
            <p class="card-title">揭秘“后浪”时代萌芽而出的新职业</p>
          </a>
        </li>
        <li>
          <a
            @click.prevent="showBox"
            href="https://m.zhipin.com/activity/html/developer?activityId=c3a2a28c4f6e64821nR-2w~~&source=wiki"
          >
            <div class="card-wrap">
              <img
                src="https://img.bosszhipin.com/beijin/cms/9bb82e68ee1dc2653373ac54bbd910b4fbcf1fe2146e01096e1e8f8db8373f6964894dd2c02e4d72aa571119175b14a4.jpg"
              />
            </div>
            <p class="card-title">职场纪实类播客节目·活不好干</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="title-secret">
      <div class="title-secret-title">
        <p>职业故事</p>
      </div>
      <ul class="secret-all">
        <li>
          <a href="https://youle.zhipin.com/video/1f697996a2bbd517pBJ43t2-FFtX">
            <div class="card-wrap">
              <div class="icon-wrap">
                <i class="iconfont icon-wrap icon-play-filling"></i>
              </div>
              <img
                src="https://img.bosszhipin.com/beijin/cms/5d480a30b978be98229075e48d2be97776bae8ab9724d2ec3909d5e99539d0fc44e9bb7f9a244ae5b6ec840f98672db9.jpg"
              />
            </div>
            <p class="card-title">
              项目经理是如何有条不紊的拆解工作、把握项目进度和质量、处理项目中的突发事件的呢？去看看！
            </p>
          </a>
        </li>
        <li>
          <a href="https://youle.zhipin.com/video/768b6af2febd594apBJ439S_EFNS">
            <div class="card-wrap">
              <div class="icon-wrap">
                <i class="iconfont icon-play-filling"></i>
              </div>
              <img
                src="https://img.bosszhipin.com/beijin/cms/8ed1fcce282dce650196b4379ebdda09fbcf1fe2146e01096e1e8f8db8373f6989f6096ec69b4f999dbd0e82e7b805d5.jpg"
              />
            </div>
            <p class="card-title">
              “日常工作就是打杂的吧”，行政被误解有多深？一起去看看！
            </p>
          </a>
        </li>
        <li>
          <a href="https://youle.zhipin.com/video/8a5cec9aa2e95eacpBJ439S_EFRV">
            <div class="card-wrap">
              <div class="icon-wrap">
                <i class="iconfont icon-play-filling"></i>
              </div>
              <img
                src="https://img.bosszhipin.com/beijin/cms/1d2914bd3410663ab96f9bbb36fbddf6fbcf1fe2146e01096e1e8f8db8373f696218d8678f334045b8af57681106a797.jpg"
              />
            </div>
            <p class="card-title">
              1 个月就能完成半年 KPI 的销售新人，他做对了什么？
            </p>
          </a>
        </li>
        <li>
          <a href="https://youle.zhipin.com/video/48f9122521797b1bpBJ439S_EFpW">
            <div class="card-wrap">
              <div class="icon-wrap">
                <i class="iconfont icon-play-filling"></i>
              </div>
              <img
                src="https://img.bosszhipin.com/beijin/cms/cdac0fa8863ee7c148eade542e107d9076bae8ab9724d2ec3909d5e99539d0fce5f34b5736f14bbf85d87a3938337709.jpg"
              />
            </div>
            <p class="card-title">把爱好变成工作的运营专员，真的赚到钱了吗？</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="sidebar" v-show="isShowSidebar">
      <div class="sidebar-wrap">
        <div class="closeSidebar" @click="isShowSidebar = false">x</div>
        <!-- <img src="" ref="sideImgRef" /> -->
        <iframe
          src=""
          ref="iframeRef"
          frameborder="0"
          width="100%"
          height="1000px"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { reqGetTitleInfo } from "@/zwapi";
import { mapState } from "vuex";
import { heightLight } from "@/utils/heightLight";
export default {
  name: "BaiKe",
  data: () => {
    return {
      keyword: "",
      currentIndex: -1,
      isShowSidebar: false,
    };
  },
  watch: {
    keyword: {
      async handler(newVal, oldVal) {
        const result = await reqGetTitleInfo(this.keyword);
        // console.log(this);
        this.$store.dispatch("baike/saveTitleInfo", result.zpData);
      },
    },
  },
  methods: {
    enter(index) {
      this.currentIndex = index;
    },
    leave(index) {
      this.currentIndex = -1;
    },
    showBox(e) {
      // 如果点击的是图片，则获取图片的父元素父元素，就是a标签
      if (e.target.nodeName === "IMG") {
        // console.log(e.target.parentNode.parentNode.href);
        // console.log(e.target.nodeName);
        this.$refs.iframeRef.src = e.target.parentNode.parentNode.href;
      }
      // 如果点击的是p标签，则获取父元素，父元素就是a标签
      else if (e.target.nodeName === "P") {
        // console.log(e.target.parentNode.href);
        // console.log(e.target.nodeName);
        this.$refs.iframeRef.src = e.target.parentNode.href;
      }
      // 剩下的点击的都是a标签
      else {
        // console.log(e.target.href);
        // console.log(e.target.nodeName);
        this.$refs.iframeRef.src = e.target.href;
      }
      this.isShowSidebar = true;
      // console.log(e.target.nodeName);
    },
  },
  computed: {
    ...mapState("baike", ["zpData"]),
    newList() {
      return this.zpData.list.map((item) =>
        heightLight(item.name, this.keyword)
      );
    },
  },
};
</script>

<style lang="less" scoped>
.link-info {
  display: flex;
  flex-direction: column;
  height: 369px;
  border: 1px solid #e8e9eb;
  width: 285px;
  ul {
    overflow-y: auto;

    li {
      cursor: pointer;
      margin-top: 10px;
    }
  }
  ul::-webkit-scrollbar {
    width: 5px;
    background-color: #fff;
  }
  ul:hover::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  // ul:vertical::-webkit-scrollbar-track{
  //   background-color: violet;
  // }
  ul:hover::-webkit-scrollbar-thumb {
    background-color: #ddd;
  }

  span {
    font-size: 18px;
    font-weight: 400;
    color: #45474d;
    line-height: 22px;
    margin-right: 12px;
    margin-left: 10px;
    float: left;
    width: 14px;
    text-align: right;
  }
  .info {
    display: flex;
    flex-direction: column;
    a {
      font-size: 16px;
      font-weight: 500;
      color: #13151b;
      line-height: 22px;
      word-break: break-all;
      padding-right: 16px;
    }
    .info-content {
      font-size: 13px;
      font-weight: 400;
      color: #a2a5b3;
      line-height: 18px;
      margin-top: 4px;
      padding-right: 16px;
      p {
        color: red;
        padding-left: 8px;
      }
    }
  }

  .link-info-title {
    font-size: 18px;
    font-weight: 600;
    color: #727680;
    line-height: 28px;
    white-space: nowrap;
    margin-left: 5px;
    margin-top: 20px;
  }
}
.infoLight {
  background-color: #ccc;
}
.wrap {
  background-color: #f7f8fa;
  width: 100%;
  position: relative;

  overflow: hidden;
  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    // height: 100%;
    width: 500px;
    // transition: all 2s;
    animation: move 0.5s;
    @keyframes move {
      0% {
        transform: translateX(500px);
      }
      100% {
        transform: translateX(0px);
      }
    }
    // background-color: turquoise;
    .sidebar-wrap {
      position: relative;
      transition: all 0.5s;

      // img {
      //   width: 100%;
      //   height: 100%;
      // }

      .closeSidebar {
        position: fixed;
        top: 0;
        right: 0;
        width: 40px;
        height: 30px;
        line-height: 30px;
        background-color: rgb(74, 63, 63);
        border-radius: 0 0 0 20px;
        opacity: 0.3;
        text-align: center;
        color: #fff;
        font-size: 20px;
      }
    }
  }
  .title-link {
    background-color: white;
    height: 520px;
    margin: 20px 60px;
    overflow: hidden;
    .title-link-title {
      margin: 20px 20px;
      p {
        font-size: 40px;
        font-weight: 600;
      }
    }
    .link-all {
      display: flex;
      justify-content: space-around;
      margin: 30px 0px;
    }
  }
  .search {
    background-color: #f7f8fa;
    height: 260px;
    width: 100%;
    text-align: center;
    .search-title {
      p {
        font-size: 32px;
        font-weight: 600;
        color: #12141a;
        line-height: 45px;
        margin-bottom: 25px;
      }
    }

    .count-title {
      font-size: 18px;
      font-weight: 500;
      color: #12141a;
      line-height: 25px;
      margin-bottom: 8px;
      span {
        color: #00b8bf;
        margin: 0 8px;
      }
    }
    .count-sub-title {
      font-size: 14px;
      font-weight: 400;
      color: #737680;
      line-height: 28px;
    }
    .search-input-wrap {
      display: flex;
      justify-content: center;
      .search-input {
        width: 720px;
        height: 50px;
        position: relative;
        display: flex;
        align-items: center;
        .searchList {
          text-align: left;
          width: 600px;
          min-height: 45px;
          background: #fff;
          box-shadow: 0 2px 10px 0 rgb(0 0 0 / 8%);
          border-radius: 8px;
          border: 1px solid #edeef0;
          padding: 6px 20px;
          position: absolute;
          left: 0;
          bottom: 0;
          // -webkit-transform: translateY(100%);
          // -ms-transform: translateY(100%);
          transform: translateY(100%);
          padding-top: 8px;
          .searchList-title {
            font-size: 14px;
            font-weight: 400;
            color: #a9adb3;
            line-height: 20px;
          }
          .search-info {
            font-size: 16px;
            font-weight: 500;
            line-height: 35px;
            cursor: pointer;
          }
        }
        .inp {
          flex: 1;
          height: 50px;
          background: #fff;
          border-radius: 8px 0 0 8px;
          border: 1px solid #e6e8eb;
          font-size: 18px;
          color: #12141a;
          font-weight: 400;
          float: left;
          line-height: 25px;
          padding: 0 24px;
          position: relative;
          box-sizing: border-box;
        }
        .btn {
          height: 50px;
          width: 120px;
          border-radius: 0 8px 8px 0;
          background: #00b8bf;
          border: none;
          cursor: pointer;
          font-size: 20px;
          font-weight: 400;
          color: #fff;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          line-height: 28px;
        }
      }
    }
  }
  .title-secret {
    background-color: #fff;
    margin: 30px 60px;
    height: 300px;
    .title-secret-title {
      margin: 20px;
      p {
        font-size: 40px;
        font-weight: 600;
      }
    }
    .secret-all {
      display: flex;
      justify-content: space-between;
      li {
        margin: 0px 30px;
        height: 149px;
        width: 270px;
        a {
          // background-color: red;
          display: block;
        }

        .card-wrap {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
          &:hover img {
            transform: scale(1.1);
          }
          img {
            width: 100%;
            height: 100%;
            transition: all 0.3s;
            // transform-style: preserve-3d;
          }
          .icon-wrap {
            // width: 50px;
            // height: 50px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0.6;
            z-index: 2;
            .icon-play-filling {
              font-size: 60px;
              color:#ccc;
              // transform-style: preserve-3d;
            }
          }
          // img:hover + .icon-wrap {
          //   opacity: 0.5;
          //   // z-index: 999;
          // }
          //  img:hover {
          //   transform: scale(1.1);
          // }
        }
        .card-wrap:hover .icon-wrap {
          color:#727680;
          opacity: 0.8;
        }
        .card-wrap,
        img {
          border-radius: 10px;
        }
        .card-title {
          width: 100%;
          font-size: 16px;
          font-weight: 400;
          color: #12141a;
          line-height: 22px;
          margin-top: 10px;
          max-width: 100%;
          display: -webkit-box;
          word-break: break-all;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          max-height: 44px;
        }
      }
    }
  }
  .title-story {
    background-color: #fff;
    margin: 20px 60px;
    height: 300px;
  }
}
</style>
