<template>
  <div class="occupation">
    <!-- 搜索、地址 -->
    <div class="address">
      <div class="content">
        <div class="occupation_input">
          <div class="search">
            <el-button class="search" type="text">
              <span value="111" class="search-option search-select">深圳</span>
              <a class="search-icon el-icon-caret-bottom"></a>
            </el-button>
            <input
              type="text"
              class="search-input"
              placeholder="搜索职位、公司"
            />
            <button class="search-button">搜索</button>
          </div>
        </div>
        <div class="city">
          城市：
          <button
            class="city-item"
            v-for="(city, index) in cityList"
            :key="index"
            @click="getRegionList(city.code)"
          >
            {{ city.name }}
          </button>
        </div>
        <div class="region" v-show="subLevelModelList.length">
          区域：
          <button
            class="city-item"
            v-for="region in subLevelModelList.slice(0, 10)"
            :key="region.code"
            @click="showRegion(region)"
          >
            {{ region.name }}
          </button>
          <div class="regionValue">
            <button
              class="city-item"
              v-show="regionValueList.length"
              v-for="regionValue in regionValueList"
              :key="regionValue.code"
            >
              {{ regionValue.name }}
            </button>
          </div>
        </div>
      </div>

      <!-- 下拉列表 -->
      <div class="select-flex">
        <div class="content-flex">
          <div class="select-style">
            <span class="select-item-position" ref="zzh">
              <div @mouseleave="selectHidden">
                <div
                  class="span-color"
                  @mouseenter="
                    isHidden = false;
                    $refs.zzh.style.height = '296px';
                  "
                >
                  公司行业 <span class="el-icon-caret-bottom"> </span>
                </div>
                <div
                  class="option-style span-color-option"
                  :class="{ ['hover-hidden']: isHidden }"
                >
                  <div
                    class="option-select"
                    v-for="(companyList, index) in this.$store.state.occupation
                      .companyList"
                    :key="index"
                  >
                    <div class="option-herder">{{ companyList.name }}</div>
                    <div class="option-content">
                      <div
                        class="option-content-item"
                        v-for="(
                          companyListValue, index
                        ) in companyList.subLevelModelList"
                        :key="index"
                      >
                        {{ companyListValue.name }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div @mouseleave="selectHidden">
                <div
                  class="span-color"
                  @mouseenter="
                    isHiddenOccu = false;
                    $refs.zzh.style.height = '296px';
                  "
                >
                  职位类型 <span class="el-icon-caret-bottom"> </span>
                </div>
                <ul
                  class="occupation-style span-color-occupation"
                  :class="{ ['hover-hidden']: isHiddenOccu }"
                >
                  <li
                    v-for="(occupationList, index) in this.$store.state
                      .occupation.occupationList"
                    :key="index"
                  >
                    {{ occupationList.name }}
                  </li>
                </ul>
              </div>

              <div @mouseleave="selectHidden">
                <div
                  class="span-color"
                  @mouseenter="
                    isHiddenEduc = false;
                    $refs.zzh.style.height = '296px';
                  "
                >
                  学历要求 <span class="el-icon-caret-bottom"> </span>
                </div>
                <ul
                  class="education-style span-color-education"
                  :class="{ ['hover-hidden']: isHiddenEduc }"
                >
                  <li v-for="(degreeList, index) in degreeList" :key="index">
                    {{ degreeList.name }}
                  </li>
                </ul>
              </div>

              <div @mouseleave="selectHidden">
                <div
                  class="span-color"
                  @mouseenter="
                    isHiddenSalary = false;
                    $refs.zzh.style.height = '296px';
                  "
                >
                  薪资待遇 <span class="el-icon-caret-bottom"></span>
                </div>
                <ul
                  class="salary-style span-color-salary"
                  :class="{ ['hover-hidden']: isHiddenSalary }"
                >
                  <li
                    v-for="(experienceList, index) in experienceList"
                    :key="index"
                  >
                    {{ experienceList.name }}
                  </li>
                </ul>
              </div>

              <div @mouseleave="selectHidden">
                <div
                  class="span-color"
                  @mouseenter="
                    isHiddenWork = false;
                    $refs.zzh.style.height = '296px';
                  "
                >
                  工作经验 <span class="el-icon-caret-bottom"></span>
                </div>
                <ul
                  class="work-style span-color-work"
                  :class="{ ['hover-hidden']: isHiddenWork }"
                >
                  <li v-for="(salaryList, index) in salaryList" :key="index">
                    {{ salaryList.name }}
                  </li>
                </ul>
              </div>

              <div @mouseleave="selectHidden">
                <div
                  class="span-color"
                  @mouseenter="
                    isHiddenScale = false;
                    $refs.zzh.style.height = '296px';
                  "
                >
                  公司规模 <span class="el-icon-caret-bottom"></span>
                </div>
                <ul
                  ref="option-style"
                  class="scale-style span-color-scale"
                  :class="{ ['hover-hidden']: isHiddenScale }"
                >
                  <li v-for="(scaleList, index) in scaleList" :key="index">
                    {{ scaleList.name }}
                  </li>
                </ul>
              </div>

              <div @mouseleave="selectHidden">
                <div
                  class="span-color"
                  @mouseenter="
                    isHiddenFina = false;
                    $refs.zzh.style.height = '296px';
                  "
                >
                  融资阶段 <span class="el-icon-caret-bottom"></span>
                </div>
                <ul
                  class="financing-style span-color-financing"
                  :class="{ ['hover-hidden']: isHiddenFina }"
                >
                  <li v-for="(stageList, index) in stageList" :key="index">
                    {{ stageList.name }}
                  </li>
                </ul>
              </div>
            </span>
          </div>
          <button class="clear-button">清空筛选条件</button>
        </div>
      </div>
    </div>

    <!-- 内容 -->
    <div class="content-card">
      <div class="content-card-box">
        <div class="content-card-left">
          <div class="card-flex" v-for="(data, index) in jobList" :key="index">
            <el-Card class="mt-20 card-width" shadow="hover">
              <div class="card">
                <div class="card-left">
                  <a :href="data.url" target="_blank" class="jobName-margin">
                    {{
                      data.jobName +
                      "    " +
                      "[" +
                      data.cityName +
                      "·" +
                      data.areaDistrict +
                      "·" +
                      data.businessDistrict +
                      "]"
                    }}
                  </a>
                  <span class="salaryDesc-color">{{ data.salaryDesc }} </span>
                  <span class="jobExperience-style">
                    {{ data.jobExperience }}
                  </span>
                  <span class="jobExperience-style">
                    {{ data.jobDegree }}
                  </span>
                  <span class="info-public el-icon-s-comment">{{
                    data.bossName + "|" + data.bossTitle
                  }}</span>
                </div>
                <div class="card-right">
                  <img class="content-img" :src="data.brandLogo" />
                  <div>
                    <div class="brandName-margin">{{ data.brandName }}</div>
                    <span class="brandIndustry-style">{{
                      data.brandIndustry
                    }}</span>
                    <span class="brandIndustry-style">{{
                      data.brandStageName
                    }}</span>
                    <span class="brandIndustry-style">{{
                      data.brandScaleName
                    }}</span>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="card-footer-left">
                  <span
                    v-for="(skills, index) in data.skills"
                    :key="skills + '' + index"
                  >
                    {{ skills + "|" }}
                  </span>
                </div>
                <div class="card-footer-right">
                  <span
                    v-for="(welfareList, index) in data.welfareList"
                    :key="index + '' + welfareList"
                  >
                    {{ welfareList + "," }}
                  </span>
                </div>
              </div>
            </el-Card>
          </div>
          <!-- 分页 -->
          <div class="mt-20 pagination-position">
            <button
              class="el-icon-arrow-left size"
              :class="{ ['pagination-position-active']: isDisable11 }"
              @click="updateSub"
              :disabled="isDisable1"
              @mouseenter="moveLeft"
              @mouseleave="leaveLeft"
            ></button>
            <button
              class="size"
              :class="{
                active: isShow1,
                ['pagination-position-active']: isShow11,
              }"
              @click="updateIsShow(1)"
              @mouseenter="isShow11 = true"
              @mouseleave="isShow11 = false"
            >
              1
            </button>
            <button
              class="size"
              :class="{
                active: isShow2,
                ['pagination-position-active']: isShow22,
              }"
              @click="updateIsShow(2)"
              @mouseenter="isShow22 = true"
              @mouseleave="isShow22 = false"
            >
              2
            </button>
            <button
              class="size"
              :class="{
                active: isShow3,
                ['pagination-position-active']: isShow33,
              }"
              @click="updateIsShow(3)"
              @mouseenter="isShow33 = true"
              @mouseleave="isShow33 = false"
            >
              3
            </button>
            <button
              @mouseenter="moveRight"
              @mouseleave="leaveRight"
              :disabled="isDisable2"
              class="el-icon-arrow-right size"
              @click="updateAdd"
              :class="{ ['pagination-position-active']: isDisable22 }"
            ></button>
          </div>
        </div>
        <div class="content-card-right">
          <div class="nav-occupation">
            <div class="nav-occupation-herder">看过的职业</div>
            <div class="nav-occupation-content">
              <div class="nav-occupation-flex">
                <div>
                  <div>西安比亚迪</div>
                  <div class="nav-occupation-color">比亚迪</div>
                </div>
                <div>
                  <div class="nav-occupation-number">5-7k</div>
                  <div class="nav-occupation-color">西安</div>
                </div>
              </div>
              <div class="nav-occupation-flex">
                <div>
                  <div>室内设计师</div>
                  <div class="nav-occupation-color">中云集团</div>
                </div>
                <div>
                  <div class="nav-occupation-number">10-12k</div>
                  <div class="nav-occupation-color">深圳·南山区</div>
                </div>
              </div>
              <div class="nav-occupation-flex">
                <div>
                  <div>Java工程师</div>
                  <div class="nav-occupation-color">网辰互联</div>
                </div>
                <div>
                  <div class="nav-occupation-number">5-10k</div>
                  <div class="nav-occupation-color">深圳·宝安区</div>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <img src="./images/myimage.png" alt="" />
          <img
            src="https://img.bosszhipin.com/static/file/2022/0yvtgtkdjk1653961014037.png"
            alt=""
          />
          <img
            src="https://img.bosszhipin.com/static/file/2022/ne3elze9ld1653961014120.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Occupation",
  data() {
    return {
      isHidden: true,
      isHiddenOccu: true,
      isHiddenEduc: true,
      isHiddenSalary: true,
      isHiddenFina: true,
      isHiddenScale: true,
      isHiddenWork: true,
      isShowColor: false,
      isShow1: true,
      isShow2: false,
      isShow3: false,
      isShow11: false,
      isShow22: false,
      isShow33: false,
      isDisable1: true,
      isDisable2: false,
      isDisable11: false,
      isDisable22: false,
      jobList: [],
      regionValueList: [],
    };
  },
  mounted() {
    this.getCityList();
    this.getRightInfo();
    this.getCompanyList();
    this.getOccupationList();
    this.getJobList();
  },
  methods: {
    //移入左边按钮
    moveLeft() {
      this.isDisable11 = true;
    },
    //移出左边按钮
    leaveLeft() {
      this.isDisable11 = false;
    },
    //移入右边按钮
    moveRight() {
      this.isDisable22 = true;
    },
    //移出右边按钮
    leaveRight() {
      this.isDisable22 = false;
    },
    //移出显示.select-item-position[data-v-350c5492]
    selectHidden() {
      this.$refs["zzh"].style.height = 0;
      this.isHidden = true;
      this.isHiddenOccu = true;
      this.isHiddenEduc = true;
      this.isHiddenSalary = true;
      this.isHiddenFina = true;
      this.isHiddenScale = true;
      this.isHiddenWork = true;
    },
    //分页减一
    updateSub() {
      if (this.isShow2) {
        this.updateIsShow(1);
      }
      if (this.isShow3) {
        this.updateIsShow(2);
      }
    },
    //分页加一
    updateAdd() {
      if (this.isShow1) {
        this.updateIsShow(2);
        return;
      }
      if (this.isShow2) {
        this.updateIsShow(3);
      }
    },
    //分页高亮,获取分页数据
    updateIsShow(num) {
      if (num === 1) {
        this.jobList = this.limit1;
        this.isDisable1 = true;
        this.isDisable2 = false;
        this.isShow1 = true;
        this.isShow2 = false;
        this.isShow3 = false;
      } else if (num === 2) {
        this.jobList = this.limit2;
        this.isDisable1 = false;
        this.isDisable2 = false;
        this.isShow2 = true;
        this.isShow1 = false;
        this.isShow3 = false;
      } else {
        this.jobList = this.limit3;
        this.isDisable2 = true;
        this.isDisable1 = false;
        this.isShow3 = true;
        this.isShow1 = false;
        this.isShow2 = false;
      }
    },
    //获取职业类型数据
    getOccupationList() {
      this.$store.dispatch("getOccupationList");
    },
    //获取公司行业下拉数据
    getCompanyList() {
      this.$store.dispatch("getCompanyList");
    },
    //获取右边5个
    getRightInfo() {
      this.$store.dispatch("getRightInfo");
    },
    //获取城市
    getCityList() {
      this.$store.dispatch("getCityList");
    },
    //获取区域
    getRegionList(code) {
      this.$store.dispatch("getRegionList", code);
    },
    //显示第二行的区域
    showRegion(region) {
      this.regionValueList = region.subLevelModelList.slice(0, 12);
    },
    //获取公司招聘信息
    getJobList() {
      this.$store.dispatch("getJobList");
    },
  },
  watch: {
    subLevelModelList() {
      this.regionValueList = [];
    },
    limit1: {
      handler() {
        this.jobList = this.limit1;
      },
    },
    jobList: {
      handler() {
        this.isDisable11 = false;
        this.isDisable22 = false;
      },
    },
  },
  computed: {
    ...mapGetters([
      "cityList",
      "subLevelModelList",
      "degreeList",
      "experienceList",
      "salaryList",
      "scaleList",
      "stageList",
      "limit1",
      "limit2",
      "limit3",
    ]),
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.occupation {
  width: 100%;
}

.address {
  width: 1184px;
  margin: 0 auto;
}

.el-select .el-input {
  width: 130px;
}

.select-style {
  /* float: left; */
  height: 32px;
  width: 884px;

  border: none;
  border-radius: 10%;
  font-size: 14px;
  line-height: 32px;
}

.search-select {
  width: 136px;
  height: 50px;
  font-size: 16px;
  border-radius: 10px 0 0 10px;
  border-top: 2px solid #18c3b1;
  border-left: 2px solid #18c3b1;
  border-bottom: 2px solid #18c3b1;
  border-right: none;
}

.search-input {
  outline: none;
  height: 50px;
  width: 628px;
  padding-left: 20px;
  border-top: 2px solid #18c3b1;
  border-right: 2px solid #18c3b1;
  border-bottom: 2px solid #18c3b1;
  border-left: none;
}

.search-button {
  width: 116px;
  height: 50px;
  font-size: 20px;
  border-radius: 0 10px 10px 0;
  color: white;
  background-color: #18c3b1;
  border: 2px solid #18c3b1;
}

.search-option {
  text-align: center;
  line-height: 50px;
}

.search:hover {
  color: #00a6a7;
  background-color: #fff;
}

.search {
  vertical-align: middle;
  display: flex;
}

.search button {
  border: none;
}

.search a {
  height: 50px;
  transform: translateY(-1px);
}

.search span {
  display: inline-block;
}

/* .input-with-select {
  background-color: #fff;
  border: 2px solid #18c3b1;
} */

.occupation_input {
  width: 800px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.occupation-select {
  margin-top: 20px;
  margin-right: 20px;
}

.mt-20 {
  margin-top: 20px;
}

.clear-button {
  background-color: #fff;
  color: #aaa;
  border: none;
}

.select-flex {
  width: 1184px;
  display: flex;
  justify-content: space-between;
}

.card-width {
  width: 1184px;
  margin-bottom: 20px;
  border-radius: 10px 10px 10px 10px;
}

.card-text {
  line-height: 30px;
}

.content-card {
  background-color: rgb(246, 246, 248);
  /* height: 500px; */
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
}

.card {
  display: flex;
}

.card-left {
  width: 420px;
}

.card-right {
  width: 400px;
  left: 484px;
}

.card-footer {
  width: 884px;
  height: 48px;
  padding: 15px 24px 0 0;
  top: 400px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #666;
}

.card-flex {
  width: 884px;
  display: flex;
  justify-content: center;
}

.size {
  width: 26px;
  height: 26px;
  margin: 4px;
  background-color: #fff;
  border: 1px solid #fff;
}

.pagination-position {
  display: flex;
  justify-content: center;
}

.pagination-position button {
  border-radius: 10px;
}

.city-item {
  margin-bottom: 10px;
  margin-left: 15px;
  margin-right: 15px;
  border: none;
  font-size: 15px;
  background-color: #fff;
}

.regionValue {
  margin-left: 50px;
}

.select-companyList {
  position: absolute;
  width: 884px;
  height: 252px;
  overflow: hidden;
  justify-content: space-between;
}

.search-icon {
  line-height: 50px;
  border-top: 2px solid #18c3b1;
  border-bottom: 2px solid #18c3b1;
  color: #ccc;
}

.select-span {
  display: inline;
  padding: 8px 24px 8px 8px;
  margin: 25% auto;
  position: relative;
  top: 4px;
  bottom: 0;
  left: 165px;
  right: 0;
  background-color: #fff;
}

.select-span-herder {
  width: 182px;
  position: relative;
  top: 35px;
  bottom: 0;
  left: -100px;
  right: 0;
}

.span-color {
  background-color: rgb(246, 246, 248);
  display: inline-block;
  width: 92px;
  height: 32px;
  text-align: center;
  border-radius: 10px 10px 10px 10px;
}

.content-flex {
  margin: 10px 0;
  width: 1184px;
  display: flex;
  justify-content: space-between;
}

.select-companyList {
  position: relative;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
}

.select-item-position {
  position: relative;
  /* background-color: aqua; */
  /* overflow: hidden; */
  display: flex;
  justify-content: space-between;
  width: 886px;
  height: 296px;
}

.companyList-width {
  width: 884px;
}

.occupation-value-span {
  width: 702px;
}

.content-img {
  margin-right: 20px;
  width: 54px;
  height: 54px;
  float: left;
}

.jobName-margin {
  margin-bottom: 15px;
  display: block;
  color: #000;
}

.salaryDesc-color {
  color: #fe574a;
  margin-right: 10px;
}

.jobExperience-style {
  color: #666666;
  margin-right: 10px;
  font-size: 13px;
  background-color: #f8f8f8;
  padding: 2px 8px;
}

.info-public {
  color: #666666;
  font-size: 12px;
  padding: 1px 8px 1px 29px;
}

.brandName-margin {
  margin-bottom: 10px;
}

.brandIndustry-style {
  font-size: 13px;
  padding: 2px 8px;
  color: #666666;
  background-color: #f8f8f8;
}

:deep(.el-card__body) {
  padding: 20px 20px 0 20px;
  width: 884px;
}

.card-footer-left {
  width: 400px;
  height: 16.8px;
  overflow: hidden;
  float: left;
}

.card-footer-right {
  width: 442px;
}

.content-card-box {
  margin: 0 auto;
  width: 1184px;
  display: flex;
  justify-content: space-between;
}

.nav-occupation {
  margin-top: 20px;
}

.nav-occupation-herder {
  width: 284px;
  height: 46px;
  padding: 12px 24px;
  font-size: #222222;
  background-color: rgba(24, 220, 255, 0.084);
}

.nav-occupation-content {
  width: 284px;
  height: 203px;
  padding: 4px 8px;
  background-color: #fff;
}

.nav-occupation-color {
  color: #999999;
  font-size: 12px;
}

.nav-occupation-number {
  color: #fe574a;
}

.nav-occupation-flex {
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
}

.content-card-right img {
  width: 284px;
  border-radius: 20px;
  margin-top: 20px;
}

.content-card-right {
  margin-left: 10px;
}

.active {
  background-color: #00bebd;
  color: #fff;
}

.pagination-position-active {
  background-color: #00bebd;
  color: #fff;
}

.option-style {
  /* display: none; */
  overflow: hidden;
  overflow-y: scroll;
  width: 886px;
  height: 296px;
  padding: 4px 0;
  background-color: #eee;
  margin-top: 10px;
}

.option-style::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.option-style::-webkit-scrollbar-corner {
  background-color: #f1f1f1;
}

.option-style::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: #ddd;
  border-radius: 10px;
}

.option-style::-webkit-scrollbar-track-piece {
  background-color: #f1f1f1;
  border-radius: 0;
  -webkit-border-radius: 0;
}

.option-herder {
  width: 182px;
  /* background-color: greenyellow; */
  padding: 0 16px;
  font-size: 14px;
  color: #222;
}

.option-content {
  /* background-color: pink; */
  width: 702px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.option-content-item {
  line-height: 20px;
  width: 170px;
  height: 36px;
  font-size: 14px;
  color: #333;
  padding: 8px 24px 8px 8px;
}

.option-select {
  display: flex;
}

.hover-hidden {
  display: none;
}

.occupation-style {
  width: 168px;
  height: 286px;
  padding: 4px 8px;
  background-color: #eee;
  margin-top: 10px;
  position: relative;
  left: 110px;
  overflow: scroll;
  overflow: hidden;
}

.occupation-style::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.occupation-style::-webkit-scrollbar-corner {
  background-color: #f1f1f1;
}

.occupation-style::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: #ddd;
  border-radius: 10px;
}

.occupation-style::-webkit-scrollbar-track-piece {
  background-color: #f1f1f1;
  border-radius: 0;
  -webkit-border-radius: 0;
}

.occupation-style li {
  color: #333;
  width: 152px;
  height: 36px;
  font-size: 14px;
  line-height: 20px;
  background-color: #eee;
  padding: 8px 16px;
}

.education-style {
  width: 168px;
  height: 286px;
  padding: 4px 8px;
  background-color: #eee;
  margin-top: 10px;
  position: relative;
  left: 225px;
  overflow: scroll;
  overflow: hidden;
}

.education-style li {
  color: #333;
  width: 152px;
  height: 36px;
  font-size: 14px;
  line-height: 20px;
  background-color: #eee;
  padding: 8px 16px;
}

.salary-style {
  width: 168px;
  height: 286px;
  padding: 4px 8px;
  background-color: #eee;
  margin-top: 10px;
  position: relative;
  left: 340px;
  overflow: scroll;
  overflow: hidden;
}

.salary-style li {
  color: #333;
  width: 152px;
  height: 36px;
  font-size: 14px;
  line-height: 20px;
  background-color: #eee;
  padding: 8px 16px;
}

.work-style {
  width: 168px;
  height: 286px;
  padding: 4px 8px;
  background-color: #eee;
  margin-top: 10px;
  position: relative;
  left: 450px;
  overflow: scroll;
  overflow: hidden;
}

.work-style li {
  color: #333;
  width: 152px;
  height: 36px;
  font-size: 14px;
  line-height: 20px;
  background-color: #eee;
  padding: 8px 16px;
}

.scale-style {
  width: 168px;
  height: 286px;
  padding: 4px 8px;
  background-color: #eee;
  margin-top: 10px;
  position: relative;
  left: 565px;
  overflow: scroll;
  overflow: hidden;
}

.scale-style li {
  color: #333;
  width: 152px;
  height: 36px;
  font-size: 14px;
  line-height: 20px;
  background-color: #eee;
  padding: 8px 16px;
}

.financing-style {
  width: 168px;
  height: 286px;
  padding: 4px 8px;
  background-color: #eee;
  margin-top: 10px;
  position: relative;
  left: 670px;
  overflow: scroll;
  overflow: hidden;
}

.financing-style li {
  color: #333;
  width: 152px;
  height: 36px;
  font-size: 14px;
  line-height: 20px;
  background-color: #eee;
  padding: 8px 16px;
}

.span-color-option {
  position: absolute;
  left: 0;
  top: 30px;
}
.span-color-occupation {
  position: absolute;
  left: 130px;
  top: 30px;
}
.span-color-education {
  position: absolute;
  top: 30px;
  left: 260px;
}
.span-color-salary {
  position: absolute;
  top: 30px;
  left: 400px;
}
.span-color-work {
  position: absolute;
  top: 30px;
  left: 530px;
}
.span-color-scale {
  position: absolute;
  top: 30px;
  left: 660px;
}
.span-color-financing {
  position: absolute;
  top: 30px;
  left: 800px;
}

.city-pinyin {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #424a5e;
}
</style>
