<template>
  <div class="occupation">
    <!-- 搜索、地址 -->
    <div class="address">
      <div class="occupation_input">
        <div class="search">
          <select name="" id="" class="search-select">
            <option value="111" class="search-option">深圳</option>
          </select>
          <input
            type="text"
            class="search-input"
            placeholder="搜索职位、公司"
          />
          <button class="search-button">搜索</button>
        </div>
      </div>
      <!-- 公司条件筛选 -->
      <div class="company-condition">
        <!-- 公司地址 -->
        <div class="company_row">
          <span class="title">公司地点：</span>
          <span class="center">
            <a
              href="#"
              v-for="(zpData, index) in address"
              :key="index"
              class="selected"
            >
              <span>
                {{ zpData.name }}
              </span>
            </a>
          </span>
        </div>
        <!-- 行业类型 -->
        <div class="company_row">
          <span class="title">行业类型：</span>
          <span class="center">
            <a
              href="#"
              v-for="trade in industry"
              :key="trade.id"
              class="selected"
            >
              <span>
                {{ trade.name }}
              </span>
            </a>
          </span>
        </div>
        <!-- 融资阶段 -->
        <div class="company_row">
          <span class="title">融资阶段：</span>
          <span class="center">
            <a
              href="#"
              v-for="finance in financing"
              :key="finance.id"
              class="selected"
            >
              <span>
                {{ finance.name }}
              </span>
            </a>
          </span>
        </div>
        <!-- 公司规模 -->
        <div class="company_row">
          <span class="title">公司规模：</span>
          <span class="center">
            <a href="#" v-for="size in scale" :key="size.id" class="selected">
              <span>
                {{ size.name }}
              </span>
            </a>
            <a href="#" class="reset"><span>清空筛选条件</span></a>
          </span>
        </div>
      </div>
    </div>

    <!-- 内容 -->
    <div class="content-card">
      <div class="address">
        <!-- 导航 -->
        <div class="navigation card-width">
          <a href="#" class="url">默认推荐</a>
          <a href="#" class="btn"> 根据求职期望推荐</a>
        </div>
        <!-- 卡片 -->
        <div class="company-list">
          <ul>
            <li v-for="corp in company" :key="corp.id">
              <div class="box-card">
                <!-- <div class="card"> -->
                <a href="#" class="card-header">
                  <img :src="corp.imgUrl" alt="华为logo" class="card-img" />
                  <div class="card-company">
                    <h4>{{ corp.name }}</h4>
                    <span>{{ corp.label[0] }}</span>
                    <span>{{ corp.label[1] }}</span>
                  </div>
                </a>
                <a href="#" class="card-footer">
                  <p>
                    <span>热招</span>
                    <span class="card-footer-line"></span>
                    <span class="card-footer-content">{{ corp.position }}</span>
                    <span>{{ corp.salary }}</span>
                  </p>
                </a>
                <!-- </div> -->
              </div>
            </li>
          </ul>

          <!-- 分页 -->
          <div class="mt-20 pagination-position">
            <button class="el-icon-arrow-left size"></button>
            <button class="size">1</button>
            <button class="size">...</button>
            <button class="size">5</button>
            <button class="size">...</button>
            <button class="size">10</button>
            <button class="el-icon-arrow-right size"></button>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部标签 -->
    <div class=".footer-label">
      <div class="footer-card">
        <div class="footer-card-title">
          <span class="footer-card-title-item cur">热门职位</span>
          <span class="footer-card-title-item">热门城市</span>
          <span class="footer-card-title-item">热门企业</span>
          <span class="footer-card-title-item">附近城市</span>
        </div>
        <div class="footer-card-links">
          <div v-if="isShow === 1" class="footer-card-links-center cur">
            <a
              href="#"
              v-for="positionItem in popularPositions"
              :key="positionItem.id"
            >
              {{ positionItem.name }}
            </a>
          </div>
          <div v-else-if="isShow === 2" class="footer-card-links-center">
            <a
              href="#"
              v-for="citiesItem in popularCities"
              :key="citiesItem.id"
            >
              {{ citiesItem.name }}
            </a>
          </div>
          <div v-else-if="isShow === 3" class="footer-card-links-center">
            <a
              href="#"
              v-for="enterprisesItem in popularEnterprises"
              :key="enterprisesItem.id"
            >
              {{ enterprisesItem.name }}
            </a>
          </div>
          <div v-else class="footer-card-links-center">
            <a
              href="#"
              v-for="nearbyCitiesItem in nearbyCities"
              :key="nearbyCitiesItem.id"
            >
              {{ nearbyCitiesItem.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-tab">
      <a href="#">首页</a>
      <span class="card-footer-line"></span>
      <a href="#">公司大全</a>
      <span class="card-footer-line"></span>
      <a href="#">全国</a>
      <span class="card-footer-line"></span>
      <a href="#">行业不限</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "YCompany",
  data() {
    return {
      isShow: 1,
    };
  },
  mounted() {
    this.reqCompanyAddressList();
    this.reqIndustryList();
    this.reqFinancingList();
    this.reqScaleList();
    this.reqCompanyList();
    this.reqPopularPositionsList();
    this.reqPopularCitiesList();
    this.reqPopularEnterprisesList();
    this.reqNearbyCitiesList();
  },
  methods: {
    reqCompanyAddressList() {
      this.$store.dispatch("reqCompanyAddressList");
    },
    reqIndustryList() {
      this.$store.dispatch("reqIndustryList");
    },
    reqFinancingList() {
      this.$store.dispatch("reqFinancingList");
    },
    reqScaleList() {
      this.$store.dispatch("reqScaleList");
    },
    reqCompanyList() {
      this.$store.dispatch("reqCompanyList");
    },
    reqPopularPositionsList() {
      this.$store.dispatch("reqPopularPositionsList");
    },
    reqPopularCitiesList() {
      this.$store.dispatch("reqPopularCitiesList");
    },
    reqPopularEnterprisesList() {
      this.$store.dispatch("reqPopularEnterprisesList");
    },
    reqNearbyCitiesList() {
      this.$store.dispatch("reqNearbyCitiesList");
    },
  },
  computed: {
    ...mapState({
      address: (state) => state.company.address,
      industry: (state) => state.company.industry,
      financing: (state) => state.company.financing,
      scale: (state) => state.company.scale,
      company: (state) => state.company.company,
      popularPositions: (state) => state.company.popularPositions,
      popularCities: (state) => state.company.popularCities,
      popularEnterprises: (state) => state.company.popularEnterprises,
      nearbyCities: (state) => state.company.nearbyCities,
    }),
  },
};
</script>

<style scoped>
/* 通用 */
* {
  margin: 0;
  padding: 0;
}

.occupation {
  width: 100%;
}

.mt-20 {
  margin-top: 20px;
}

/* 搜索 */
.address {
  width: 1184px;
  margin: 0 auto;
}

.search-select {
  width: 136px;
  height: 50px;
  font-size: 16px;
  border-radius: 10% 0 0 10%;
  border-top: 2px solid #18c3b1;
  border-left: 2px solid #18c3b1;
  border-bottom: 2px solid #18c3b1;
  border-right: none;
}

.search-input {
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
  border-radius: 0 10% 10% 0;
  color: white;
  background-color: #18c3b1;
  border: 2px solid #18c3b1;
}

.search-option {
  text-align: center;
}

.search {
  vertical-align: middle;
  display: flex;
}

.occupation_input {
  width: 800px;
  margin-top: 20px;
  margin-bottom: 20px;
}

/* 公司条件筛选 */
.company-condition {
  overflow: hidden;
  margin: 0 auto;
  min-height: 200px;
  line-height: 25px;
  background-color: #ffffff;
}
.company_row {
  margin: 0 auto 13px;
  width: 1184px;
}
.company-condition .company_row .title {
  float: left;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  margin-right: 10px;
}

.company-condition .company_row span {
  margin: 0 3px;
}

.company-condition .company_row .center {
  display: block;
  overflow: hidden;
  margin-left: 70px;
}
.company-condition .company_row .center .selected span {
  font-size: 14px;
}

.company-condition .company_row a span {
  margin-right: 10px;
  color: #61687c;
}
.company-condition .company_row .reset {
  float: right;
  cursor: pointer;
  color: #999;
}

/* 内容 */
.content-card {
  background-color: rgb(246, 246, 248);
  /* height: 500px; */
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
}

.navigation a {
  font-size: 14px;
}

.navigation a.url {
  background-color: #fff;
  color: #00a6a7;
  width: 140px;
  line-height: 32px;
  margin-top: 2px;
  margin-left: 2px;
  border-radius: 6px;
  font-weight: 700;
  text-align: center;
  display: inline-block;
}

.navigation a.btn {
  background-color: #d5f1f3;
  color: #4f5151;
  width: 140px;
  line-height: 32px;
  margin-top: 2px;
  margin-left: 2px;
  border-radius: 6px;
  font-weight: 400;
  text-align: center;
  display: inline-block;
}

.clear-button {
  background-color: #fff;
  color: #aaa;
  border: none;
}

.card-width {
  width: 1184px;
  margin-bottom: 20px;
}

.company-list {
  width: 1184px;
  margin: 0 auto;
  overflow: hidden;
}
.company-list ul {
  height: auto;
  overflow: hidden;
  width: 110%;
}

.company-list ul li {
  height: 140px;
  width: 284px;
  float: left;
  border-radius: 12px;
  background: #fff;
  margin: 0 16px 21px 0;
}

.box-card {
  display: block;
  height: 145px;
  width: 284px;
  border-radius: 12px;
  background: #fff;
}
.box-card a {
  color: #414a60;
  display: block;
}

.card-header {
  margin-bottom: none;
  height: 97px;
  margin: 0 20px;
  padding-top: 20px;
}

.card-img {
  width: 54px;
  height: 54px;
  float: left;
  border-radius: 10px;
  border: solid 1px #f2f5fa;
}
.card-company {
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  margin-left: 68px;
}

.card-company h4 {
  height: 25px;
  line-height: 25px;
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-company span {
  color: #666;
  padding: 0 8px;
  background: #f8f8f8;
  font-size: 13px;
  border-radius: 4px;
  max-width: 66px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 22px;
}

.card-footer {
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  color: #666;
  background: linear-gradient(90deg, #f5fcfc 0, #fcfbfa 100%);
  border-radius: 0 0 12px 12px;
}

.card-footer p {
  width: 240px;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-footer-line {
  display: inline-block;
  width: 1px;
  height: 10px;
  vertical-align: middle;
  background: #e0e0e0;
  position: relative;
  top: -1px;
  margin: 0 6px;
}

.card-footer-content {
  color: #00c2b3;
  text-decoration: none;
  display: inline-block;
  vertical-align: top;
  max-width: 145px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.size {
  width: 26px;
  height: 26px;
  margin: 4px;
  background-color: #fff;
  border: 1px solid #fff;
}

.pagination-position {
  background: 0 0;
  padding: 15px 0 40px 0;
  text-align: center;
}

/* 底部标签 */
.footer-label {
  background: #fff;
  position: relative;
  padding-bottom: 12px;
  background-color: unset;
  border-top: none;
  margin-top: 0;
}
.footer-card {
  width: 1184px;
  min-height: 146px;
  background: #fff;
  border-radius: 12px;
  margin: 0 auto;
  padding-top: 20px;
}
.footer-card-title {
  padding: 0 20px;
  margin-right: 0;
  position: relative;
}
.footer-card-title::after {
  content: "";
  width: 1144px;
  height: 1px;
  position: absolute;
  left: 20px;
  bottom: 0;
  background-color: #e6e6e6;
  z-index: 1;
  box-sizing: border-box;
}
.footer-card-title-item {
  margin-right: 32px;
  font-size: 16px;
  display: inline-block;
  height: 32px;
  cursor: pointer;
  position: relative;
  color: #333;
}
.footer-card-title-item.cur {
  color: #00a6a7;
  font-weight: 700;
}
.footer-card-title-item.cur::after {
  content: "";
  width: 28px;
  height: 3px;
  background: linear-gradient(90deg, #16d9d8 0, #00bebd 100%);
  border-radius: 2px;
  position: absolute;
  top: 30px;
  margin-left: 15px;
  z-index: 2;
  left: 0;
}
.footer-card-links {
  padding: 18px 20px 15px;
  background: url(https://static.zhipin.com/zhipin-geek/v596/web/geek/images/links-bg.png)
    no-repeat top center;
}
.footer-card-links-center {
  font-size: 0;
  overflow: hidden;
  max-height: 145px;
}

.footer-card-links-center.cur {
  display: block;
}

.footer-card-links-center a {
  color: #666;
  margin: 0 28px 0 0;
  line-height: 26px;
  display: inline-block;
  font-size: 12px;
}

.footer-tab {
  width: 1184px;
  margin: 10px auto;
  font-size: 12px;
  color: #9fa3b0;
}
.footer-tab a {
  color: #9fa3b0;
  vertical-align: middle;
}

</style>
