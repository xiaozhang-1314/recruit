<template>
  <div>
    <div class="header-img"></div>
    <div class="container-wrap">
      <!-- 版心区 -->
      <div class="container">
        <!-- 搜索框 -->
        <div class="search-wrap">
          <div class="search-header">
            <a
              class="searchTwo"
              :class="{ choosed: flag === 1 }"
              @click="changeColor(1)"
            >
              找全职
            </a>
            <a
              class="searchTwo"
              :class="{ choosed: flag === 2 }"
              @click="changeColor(2)"
              >找实习</a
            >
          </div>
          <div class="search-footer" style="background-color: #fff">
            <el-input placeholder="搜索职位、公司" class="input-with-select">
              <div slot="prepend" class="input-option">
                <button type="text" class="input-option-btn">深圳</button>
                <div class="el-icon-caret-bottom"></div>
              </div>
              <el-button slot="append" class="input-btn">搜索</el-button>
            </el-input>
          </div>
        </div>
        <!-- 筛选区 -->
        <div class="filtrate">
          <div class="filtrate-left">
            <el-card class="tabs-card" shadow="hover">
              <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
                <el-tab-pane label="按专业筛选" name="first" class="tab-name">
                  <div class="tab-class">农学</div>
                  <div class="tab-class">大数据</div>
                  <div class="tab-class">财务管理</div>
                  <div class="tab-class">农学</div>
                  <div class="tab-class">农学</div>
                </el-tab-pane>
                <el-tab-pane label="按职业筛选" name="second" class="tab-name">
                  <div class="tab-class-one">互联网技术/运营/产品</div>
                  <div class="tab-class-one">设计/销售/房地产</div>
                  <div class="tab-class-one">人力/法律</div>
                </el-tab-pane>
              </el-tabs>
            </el-card>
          </div>
          <div class="filtrate-right">
            <div>
              <!-- <el-card>
                <h3>农学</h3>
                <el-tabs></el-tabs>
              </el-card> -->
            </div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      ><img
                        src="	https://img.bosszhipin.com/beijin/upload/image/20221009/0348b729854a9be501c9d03375644799.png"
                        alt=""
                    /></a>
                  </td>
                  <td>
                    <a
                      ><img
                        src="	https://img.bosszhipin.com/beijin/upload/image/20221009/0348b729854a9be501c9d03375644799.png"
                        alt=""
                    /></a>
                  </td>
                  <td>
                    <a
                      ><img
                        src="	https://img.bosszhipin.com/beijin/upload/image/20221009/0348b729854a9be501c9d03375644799.png"
                        alt=""
                    /></a>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" rowspan="2">
                    <a
                      ><img
                        src="	https://img.bosszhipin.com/beijin/upload/image/20221123/13d50b1a41701a245cc5e854f66ca179.jpg"
                        alt=""
                    /></a>
                  </td>
                  <td>
                    <a
                      ><img
                        src="	https://img.bosszhipin.com/beijin/upload/image/20221009/0348b729854a9be501c9d03375644799.png"
                        alt=""
                    /></a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      ><img
                        src="	https://img.bosszhipin.com/beijin/upload/image/20221009/0348b729854a9be501c9d03375644799.png"
                        alt=""
                    /></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 校招直播 -->
        <h1 class="mt-40">校招直播</h1>
        <div class="live-wrap">
          <el-card class="live" shadow="hover">
            <div class="live-img">
              <img
                style="width: 100%"
                src="https://boss-bj.oss-cn-beijing.aliyuncs.com/beijin/upload/school/live/20221114/b93206e5b50f9083c2a0430385dfc88f37301bf53bb60fc7302315be83e396a4bb4f822d8affda8c?x-oss-process=image/resize,p_50"
                alt=""
              />
            </div>
            <div class="live-text">
              <p>家传记者和新媒体编辑招聘</p>
              <span>新媒体编辑等2个职位</span>
            </div>
          </el-card>
          <el-card class="live" shadow="hover">
            <div class="live-img">
              <img
                style="width: 100%"
                src="https://boss-bj.oss-cn-beijing.aliyuncs.com/beijin/upload/school/live/20221114/b93206e5b50f9083c2a0430385dfc88f37301bf53bb60fc7302315be83e396a4bb4f822d8affda8c?x-oss-process=image/resize,p_50"
                alt=""
              />
            </div>
            <div class="live-text">
              <p>家传记者和新媒体编辑招聘</p>
              <span>新媒体编辑等2个职位</span>
            </div>
          </el-card>
          <el-card class="live" shadow="hover">
            <div class="live-img">
              <img
                style="width: 100%"
                src="https://boss-bj.oss-cn-beijing.aliyuncs.com/beijin/upload/school/live/20221114/b93206e5b50f9083c2a0430385dfc88f37301bf53bb60fc7302315be83e396a4bb4f822d8affda8c?x-oss-process=image/resize,p_50"
                alt=""
              />
            </div>
            <div class="live-text">
              <p>家传记者和新媒体编辑招聘</p>
              <span>新媒体编辑等2个职位</span>
            </div>
          </el-card>
          <el-card class="live" shadow="hover">
            <div class="live-img">
              <img
                style="width: 100%"
                src="https://boss-bj.oss-cn-beijing.aliyuncs.com/beijin/upload/school/live/20221114/b93206e5b50f9083c2a0430385dfc88f37301bf53bb60fc7302315be83e396a4bb4f822d8affda8c?x-oss-process=image/resize,p_50"
                alt=""
              />
            </div>
            <div class="live-text">
              <p>家传记者和新媒体编辑招聘</p>
              <span>新媒体编辑等2个职位</span>
            </div>
          </el-card>
          <el-card class="live" shadow="hover">
            <div class="live-img">
              <img
                style="width: 100%"
                src="https://boss-bj.oss-cn-beijing.aliyuncs.com/beijin/upload/school/live/20221114/b93206e5b50f9083c2a0430385dfc88f37301bf53bb60fc7302315be83e396a4bb4f822d8affda8c?x-oss-process=image/resize,p_50"
                alt=""
              />
            </div>
            <div class="live-text">
              <p>家传记者和新媒体编辑招聘</p>
              <span>新媒体编辑等2个职位</span>
            </div>
          </el-card>
          <el-card class="live" shadow="hover">
            <div class="live-img">
              <img
                style="width: 100%"
                src="https://boss-bj.oss-cn-beijing.aliyuncs.com/beijin/upload/school/live/20221114/b93206e5b50f9083c2a0430385dfc88f37301bf53bb60fc7302315be83e396a4bb4f822d8affda8c?x-oss-process=image/resize,p_50"
                alt=""
              />
            </div>
            <div class="live-text">
              <p>家传记者和新媒体编辑招聘</p>
              <span>新媒体编辑等2个职位</span>
            </div>
          </el-card>
          <el-card class="live" shadow="hover">
            <div class="live-img">
              <img
                style="width: 100%"
                src="https://boss-bj.oss-cn-beijing.aliyuncs.com/beijin/upload/school/live/20221114/b93206e5b50f9083c2a0430385dfc88f37301bf53bb60fc7302315be83e396a4bb4f822d8affda8c?x-oss-process=image/resize,p_50"
                alt=""
              />
            </div>
            <div class="live-text">
              <p>家传记者和新媒体编辑招聘</p>
              <span>新媒体编辑等2个职位</span>
            </div>
          </el-card>
          <el-card class="live" shadow="hover">
            <div class="live-img">
              <img
                style="width: 100%"
                src="https://boss-bj.oss-cn-beijing.aliyuncs.com/beijin/upload/school/live/20221114/b93206e5b50f9083c2a0430385dfc88f37301bf53bb60fc7302315be83e396a4bb4f822d8affda8c?x-oss-process=image/resize,p_50"
                alt=""
              />
            </div>
            <div class="live-text">
              <p>家传记者和新媒体编辑招聘</p>
              <span>新媒体编辑等2个职位</span>
            </div>
          </el-card>
        </div>

        <!-- 热门公司 -->
        <h1 class="mt-40 r1">热门公司</h1>
        <span
          class="r-span"
          v-for="(chooseCity, index) in chooseCityList"
          :class="isActive === index ? 'isChoosed' : ''"
          :key="index"
          @click="chooseCityHandle(chooseCity, index)"
        >
          {{ chooseCity }}
        </span>
        <div class="enrollment-wrap">
          <el-card
            class="enrollment"
            shadow="hover"
            v-for="(company, index) in chooseCompanyList"
            :key="index"
          >
            <div class="enrollment-inner">
              <img :src="company.brandLogo" alt="" class="enrollment-img" />
              <div class="enrollment-text">
                <p>{{ company.brandName }}</p>
                <span>{{ company.brandStageName }}</span>
                <span>{{ company.brandScaleName }}</span>
                <span>{{ company.brandIndustry }}</span>
              </div>
              <p class="enrollment-p">
                {{ company.welfareList.join(",") }}
              </p>
              <div class="enrollment-bottom">
                <a>校招职位</a>
                <a>实习职位</a>
                <a>公司评价</a>
              </div>
            </div>
          </el-card>
        </div>

        <h1 class="mt-40 r1">热门校招</h1>
        <span
          class="r-span"
          v-for="(chooseJob, index) in chooseJobList"
          :class="isActiveOne === index ? 'isChoosed' : ''"
          :key="chooseJob"
          @click="chooseJobHandle(chooseJob, index)"
        >
          {{ chooseJob }}
        </span>
        <div class="enrollment-wrap">
          <el-card
            class="enrollment enrollment-school"
            shadow="hover"
            v-for="company in chooseJobCompanyList"
            :key="company.itemId"
          >
            <div class="enrollment-inner-school">
              <p>{{ company.jobName }}</p>
              <span>{{ company.cityName }}</span>
              <span>{{ company.jobExperience }}</span>
              <span>{{ company.jobDegree }}</span>
              <p class="pay">{{ company.salaryDesc }}</p>
            </div>
            <div class="enrollment-bottom">
              <span class="enrollment-bottom-span">
                {{ company.brandName }}
              </span>
              <span>{{ company.brandIndustry }}</span>
            </div>
          </el-card>
        </div>
        <!-- 查看更多 -->
        <p class="ck">
          <a router-link to="/occupation" class="ck-a">查看更多 </a>
        </p>
        <!-- 求职指导 -->
        <h1 class="mt-40">求职指导</h1>
        <div class="enrollment-wrap">
          <el-card class="enrollment intention" shadow="hover">
            <h3>求职锦囊</h3>
            <h4>多维度求职必备知识</h4>
          </el-card>
          <el-card class="enrollment guide" shadow="hover">
            <h3>面试宝典</h3>
            <h4>各类面试真题应有尽有</h4>
          </el-card>
          <el-card class="enrollment encyclopedia" shadow="hover">
            <h3>职类百科</h3>
            <h4>求职路上不迷茫</h4>
          </el-card>
        </div>
        <!-- 建立模板 -->
        <h1 class="mt-40 mb-40">建立模板</h1>
        <div class="resume-wrap">
          <el-card class="resume" shadow="hover">
            <div class="img-box">
              <div>
                <img
                  src="https://img.bosszhipin.com/static/file/2022/7p6aqdunv51658140073953.png"
                />
              </div>
              <div>
                <img
                  src="https://img.bosszhipin.com/static/file/2022/7p6aqdunv51658140073953.png"
                />
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqCityList, reqCompanyInfo } from "@/api/index";
export default {
  name: "SSchool",
  data() {
    return {
      isActive: 0,
      isActiveOne: 0,
      cityList: [],
      flag: 1,
      companyList: [],
      chooseCompanyList: [],
      chooseJobCompanyList: [],
      chooseCityList: ["深圳", "上海", "广州", "北京", "全国"],
      chooseJobList: ["全职", "兼职", "校招"],
      input1: "",
      input2: "",
      input3: "",
      select: "",
      activeName: "second",
    };
  },
  mounted() {
    //获取城市列表
    this.getCityList();
    //获取公司信息
    this.getCompanyList();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    async getCityList() {
      const res = await reqCityList();
      this.cityList = res.zpData;
      // console.log(this.cityList);
    },
    async getCompanyList() {
      const res = await reqCompanyInfo();
      this.companyList = res.jobList;
      // console.log(this.companyList);
    },
    // 切换找全职和找实习(
    changeColor(num) {
      this.flag = num;
    },
    //选择不同城市切换招聘信息
    chooseCityHandle(chooseCity, index) {
      this.isActive = index;
      if (chooseCity === "全国") {
        this.chooseCompanyList = this.companyList;
      } else {
        this.chooseCompanyList = this.companyList.filter((item) => {
          return item.cityName === chooseCity;
        });
      }
    },
    //选择不同职业类型切换招聘信息
    chooseJobHandle(chooseJob, index) {
      this.isActiveOne = index;
      this.chooseJobCompanyList = this.companyList.filter((item) => {
        return item.jobType === chooseJob;
      });
    },
  },
  // 监视并更新页面
  watch: {
    companyList: {
      handler() {
        this.chooseCompanyList = this.companyList.filter((item) => {
          return item.cityName === "深圳";
        });
        this.chooseJobCompanyList = this.companyList.filter((item) => {
          return item.jobType === "全职";
        });
      },
    },
  },
};
</script>

<style scoped>
.wrap {
  background-color: #e5f4f7;
}
.header-img {
  height: 180px;
  background: url(https://img.bosszhipin.com/static/file/2022/n77e402fln1657505842097.png)
    center/auto 180px no-repeat #00a8a8;
}

.container-wrap {
  background-color: #e5f4f7;
}
.container {
  width: 1184px;
  /* height: 800px; */
  margin: auto;
}
.tab-class {
  display: inline-block;
  width: 110px;
}

.tab-name {
  font-size: 16px;
}

:deep(.el-input__inner) {
  font-size: 16px;
  height: 50px;
  border: none;
  display: block;
}
:deep(.el-input-group__prepend) {
  padding: 0;
  border: none;
  background-color: #00a8a8;
}
:deep(.el-input-group__append) {
  height: 52px;
  background-color: #00a8a8;

  border: none;
}

.input-option {
  width: 170px;
  height: 52px;
  background-color: #fff;
  border-radius: 0px 0px 0px 12px;
  border: none;
  overflow: auto;
}
.input-option-btn {
  width: 100px;
  height: 52px;
  background-color: #fff;
  border: none;
  font-size: 16px;
  color: #c0c4cf;
  border-radius: 0px 0px 0px 12px;
  overflow: auto;
}
.input-btn {
  width: 100px;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
}
/* 改变input内placeholder的值 */
.input-option::-webkit-input-placeholder {
  font-size: 14px;
  text-align: center;
  color: #c0c4cf;
}
.search-footer {
  width: 900px;
  border: 3px #00a8a8 solid;
  border-radius: 0px 12px 12px 12px;
  background-color: #00a8a8;
  padding: 0;
  margin: 0;
}
.search-wrap {
  width: 900px;
  margin: auto;
  padding: 50px 0px 50px 0px;
  border: none;
}
/* .search-btn {
  background-color: #00d7c4;
} */
.choosed {
  background-color: #00a8a8;
}
.searchTwo {
  /* background-color: #00d7c4; */
  display: inline-block;
  width: 102px;
  height: 36px;
  border-radius: 12px 12px 0 0;
  font-size: 14px;
  text-align: center;
  line-height: 36px;
  color: black;
}
.search-header {
  width: 204px;
  height: 36px;
  border-radius: 12px 12px 0 0;
  background-color: #fff;
  margin: 0;
  padding: 0;
}
.tab-name {
  font-size: 14px;
}
.tabs-card {
  width: 384px;
  height: 343.61px;
  border-radius: 12px;
}
.filtrate {
  height: 335px;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-evenly;
  border-radius: 12px;
}
.filtrate-right img {
  vertical-align: top;
  border-radius: 12px;
}

.live-img {
  height: 158px;
  border-bottom: 1px black solid;
}
.live-text {
  height: 78px;
  font-size: 16px;
  text-align: center;
  line-height: 30px;
}
.live-text span {
  font-size: 13px;
}
.live {
  width: 284px;
  border-radius: 12px;
  margin-top: 10px;
}
.live-wrap {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.enrollment {
  width: 384px;
  height: 194px;
  border-radius: 12px;
  position: relative;
  margin-top: 10px;
  margin-left: 10px;
}
.enrollment-wrap {
  margin-top: 10px;
  display: flex;
  /* justify-content: space-between; */
  justify-content: left;
  flex-wrap: wrap;
}
.enrollment-img {
  width: 56px;
  height: 56px;
}
.enrollment-text {
  display: inline-block;
  vertical-align: top;
}
.enrollment-inner {
  vertical-align: middle;
  font-size: 20px;
  line-height: 20px;
  font-weight: normal;
}
.enrollment-inner span {
  line-height: 14px;
  font-size: 14px;
  background-color: #f8f8f8;
  padding: 0px 10px 0px 10px;
  border-radius: 5px;
}
.enrollment-inner p {
  margin-bottom: 10px;
}
.enrollment-p {
  font-size: 14px;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.enrollment-bottom {
  border-radius: 0px 0px 12px 12px;
  text-align: center;
  font-size: 16px;
  line-height: 48px;
  width: 384px;
  height: 48px;
  background-color: #f8f8f8;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
}
.enrollment-inner-school p {
  font-size: 20px;
  margin-bottom: 20px;
}
.enrollment-inner-school span {
  line-height: 16px;
  font-size: 16px;
  background-color: #f8f8f8;
  padding: 0px 10px 0px 10px;
  border-radius: 5px;
  margin-right: 10px;
}

.enrollment-school {
  height: 168px;
}

.pay {
  font-size: 18px;
  color: red;
  position: absolute;
  right: 20px;
  top: 20px;
}
.mt-40 {
  margin-top: 40px;
}
.mb-40 {
  margin-bottom: 40px;
}
.resume {
  height: 200px;
  width: 100%;
  border-radius: 12px;
  background-color: #ecfff8;
}
.resume-wrap {
  padding-bottom: 40px;
  border-radius: 12px;
}
.r1 {
  display: inline-block;
}
.r-span {
  display: inline-block;
  text-align: center;
  line-height: 18px;
  font-size: 18px;
  width: 70px;
  height: 30px;
  margin-left: 30px;
  border-radius: 8px;
  padding: 5px;
}
.isChoosed {
  color: #ffff;
  background-color: #00a8a8;
}
.ck-a {
  margin-top: 20px;
  height: 50px;
  line-height: 50px;
  border-radius: 12px;
  background-color: #00a8a8;
}
.intention {
  background: url(https://img.bosszhipin.com/static/file/2022/8a39plukqx1658136367815.png)
    center/auto 180px #fef6f5 no-repeat;
}
.intention:hover {
  background-size: 100%;
}
.guide {
  background: url(https://img.bosszhipin.com/static/file/2022/6vkv43lhdq1658136368042.png)
    center/auto 180px #ecfff8 no-repeat;
  /* background-color: #ecfff8;
  background-image: url(https://img.bosszhipin.com/static/file/2022/6vkv43lhdq1658136368042.png); */
}
.guide:hover {
  background-size: 100%;
}
.encyclopedia {
  background: url(https://img.bosszhipin.com/static/file/2022/54v60zekcu1658136368151.png)
    center/auto 180px #eaf2ff no-repeat;
  /* background-color: #eaf2ff;
  background-image: url(https://img.bosszhipin.com/static/file/2022/54v60zekcu1658136368151.png); */
}
.encyclopedia:hover {
  background-size: 100%;
}
.live:hover {
  color: #00a8a8;
  font-weight: 900;
  font-size: large;
}
.img-box {
  width: 664px;
  height: 726px;
  /* background-color: #00a8a8; */
  /* overflow: hidden; */
  margin-left: 540px;
  position: relative;
}
.img-box img {
  width: 100%;
}
.img-box img {
  animation: fadenum 5s;
  animation-iteration-count: infinite;
  position: absolute;
}

@keyframes fadenum {
  0% {
    top: 0px;
  }
  25% {
    top: -200px;
  }
  50% {
    top: -400px;
  }
  75% {
    top: -200px;
  }
  100% {
    top: 0px;
  }
}

</style>
