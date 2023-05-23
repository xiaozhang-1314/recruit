<template>
  <div>
    <!-- 顶部导航 -->
    <div class="top">
      <div class="ab w yy">
        <!-- logo区域 -->
        <div class="logohezi">
          <a href="#"><i class="logo"></i></a>
        </div>
        <!-- 地区选择 area -->
        <div class="area">
          <i></i>
          <a href="#">
            <p>
              <span class="d">郑州</span>
              <span class="f">[切换城市]</span>
            </p>
          </a>
        </div>
        <!-- 首页nav -->
        <div class="nav">
          <ul>
            <li>
              <router-link
                to="/home"
                :class="{ c: this.$route.path === '/home' }"
                >首页</router-link
              >
            </li>
            <li>
              <router-link
                to="/occupation"
                :class="{ c: this.$route.path === '/occupation' }"
                >职位</router-link
              >
            </li>
            <li>
              <router-link
                to="/school"
                :class="{ c: this.$route.path === '/school' }"
                >校园</router-link
              >
            </li>
            <li>
              <router-link
                to="/returnee"
                :class="{ c: this.$route.path === '/returnee' }"
                >海归</router-link
              >
            </li>
            <li>
              <router-link
                to="/company"
                :class="{ c: this.$route.path === '/company' }"
                >公司</router-link
              >
            </li>
            <li>
              <router-link to="/app" :class="{ c: this.$route.path === '/app' }"
                >APP</router-link
              >
            </li>
            <li>
              <router-link
                to="/information"
                :class="{ c: this.$route.path === '/information' }"
                >资讯</router-link
              >
            </li>
            <li>
              <router-link
                to="/have"
                :class="{ c: this.$route.path === '/have' }"
                >有了</router-link
              >
            </li>
            <li>
              <router-link
                to="/baike"
                :class="{ c: this.$route.path === '/baike' }"
                >百科</router-link
              >
            </li>
          </ul>
        </div>
        <!-- 上传简历 -->
        <div class="jl">
          <span>
            <a href="#">上传简历</a>
            <a href="#">我要找工作</a>
            <a href="#">我要招聘</a>
            <input type="button" name="注册" id="zc" value="注册" />
            <input type="button" name="登录" id="dl" value="登录" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YHeader",
  methods: {
    clickOne(e) {
      console.log(e.target.nodeName);
      if (e.target.nodeName === "A") {
        e.target.classList.add("c");
      }
    },
  },
};
</script>

<style lang="less" scoped>
/* 导航首页 */

.nav {
  float: left;
  margin-left: 30px;
  line-height: 51px;
}

.nav ul li a:link {
  color: #ffffff;
}

.nav a:hover {
  color: #00d7c6;
}

.nav ul li {
  float: left;
  margin: 0 14px;
  font-size: 14px;
}
// .nav ul li a .c {
//   color: #00d7c6;
// }
.nav ul li .c {
  color: #00d7c6 !important;
}
</style>
