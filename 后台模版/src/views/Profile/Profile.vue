<template>
  <div class="profile">
    <!-- 头部navbar区域 -->
    <nav-bar class="profile-nav">
      <template #center>
        <p class="profile-title">我的</p>
      </template>
    </nav-bar>
    <div class="profile-img">
      <img class="big-img" :src="imgUrl" alt="" v-if="logined">
      <div class="sm-img">
        <img :src="imgUrl" alt="">
        <p class="sm-name" v-if="logined">{{info.username}}</p>
        <p v-if="info.company">{{info.company}}</p>
      </div>
    </div>
    <!-- 已登陆 -->
    <div v-if="logined">
      <p class="login-tip">相关信息</p>
      <BS class="profile-box">
        <div class="login-info">
          <p>类型：{{type}}</p>
          <p>职位：{{info.post}}</p>
          <p>简介：{{info.info}}</p>
          <p v-if="info.salary">薪资：{{info.salary}}</p>
        </div>
      </BS>
      <Button class="login-btn" @click="goPerfect">完善资料</Button>
      <Button class="login-btn out" @click="out">退出</Button>
    </div>
    <!-- 未登录 -->
    <div v-if="!logined">
      <p class='unlogin-tip'>你还未登录，请先登录！</p>
      <Button class="unlogin-btn" @click="goLogin">登录</Button>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar.vue'
import Button from 'components/content/Button/Button.vue'
import BS from 'components/common/BS/BS.vue'

import isLogin from '../../mixins/isLogin'
import { getInfo, removeInfo } from 'utils/optInfo'

export default {
  name: 'Profile',
  components: { NavBar, Button, BS },
  mixins: [isLogin],
  data() {
    return {
      info: {}
    }
  },
  methods: {
    // 获取用户信息
    getPersonInfo() {
      const info = getInfo('__user__')
      this.info = info
    },

    // 去登陆
    goLogin() {
      this.$router.push('/login')
    },

    // 退出登录
    out() {
      removeInfo('__user__')
      this.$store.commit('out')
      location.reload()
      // this.$router.replace('/home')
    },

    // 跳转完善信息
    goPerfect() {
      this.$router.push('/perfectInfo/' + this.info._id)
    }
  },
  computed: {
    imgUrl() {
      return this.logined ? this.info.avatar : 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1688272823,3962891762&fm=26&gp=0.jpg'
    },

    type() {
      return this.info.type === 'hr' ? '招聘者' : '求职者'
    }
  },
  activated() {
    this.getPersonInfo()
  }
}
</script>

<style scoped>
  .profile{
    position: fixed;
    top: 0;
    bottom: 49px;
    left: 0;
    right: 0;
    background-color: rgb(240, 239, 239);
  }
  .profile .profile-nav{
    background-color: #008c8c;
    color: #fff;
    font-size: 22px;
  }
  .profile .profile-box{
    height: 190px;
    margin: 10px 0;
    background-color: #fff;
  }
  .profile .profile-img{
    height: 215px;
    position: relative;
    border-bottom: 1px solid #ccc;
    margin-bottom: 25px;
    background-color: rgba(0, 140, 140, 0.7);
  }
  .profile .profile-img .big-img{
    width: 100%;
    height: 100%;
    filter: blur(5px);
  }
  .profile .profile-img .sm-img{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 30%;
    font-size: 12px;
    color: #fff;
    font-weight: 600;
    text-align: center;
  }
  .profile .profile-img .sm-img img{
    width: 48px;
    height: 48px;
    margin-bottom: 13px;
    border-radius: 50%;
  }
  .profile .profile-img .sm-img p{
    padding: 6px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, .1);
    margin-bottom: 10px;
  }
  .profile .profile-img .sm-img p.sm-name{
    font-size: 25px;
  }
  .profile .unlogin-btn{
    margin-top: 15px;
  }
  .profile .unlogin-tip,
  .profile .login-tip{
    font-size: 14px;
    color: #999;
    padding-left: 10px;
  }
  .profile .unlogin-tip{
    height: 190px;
    padding: 10px;
    background-color: #fff;
  }
  .profile .login-info{
    padding: 10px;
    line-height: 1.5;
    font-size: 14px;
    color: rgb(156, 156, 156);
  }
  .profile .login-info p{
    margin-bottom: 5px;
  }
  .profile .login-btn{
    margin-bottom: 10px;
  }
  .profile .login-btn.out{
    background-color: rgb(221, 3, 3);
  }
</style>
