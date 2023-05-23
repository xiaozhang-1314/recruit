<template>
  <div class="profile">
    <!-- 头部navbar区域 -->
    <nav-bar class="profile-nav">
      <template #left>
        <span class="profile-nav-back" @click="goChat">&lt;</span>
      </template>
      <template #center>
        <p class="profile-title">详情信息</p>
      </template>
    </nav-bar>
    <div class="profile-img">
      <img class="big-img" :src="info.avatar" alt="">
      <div class="sm-img">
        <img :src="info.avatar" alt="">
        <p class="sm-name">{{info.username}}</p>
        <p v-if="info.company">{{info.company}}</p>
      </div>
    </div>
    <div>
      <p class="login-tip">相关信息</p>
      <BS class="other-profile-bs">
        <div class="login-info">
          <p>类型：{{type}}</p>
          <p>职位：{{info.post}}</p>
          <p>简介：{{info.info}}</p>
          <p v-if="info.salary">薪资：{{info.salary}}</p>
        </div>
      </BS>
      <Button class="go-chat" @click="goChat">进入聊天</Button>
    </div>
    <Toast v-show="showToast">{{toastContent}}</Toast>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar.vue'
import Button from 'components/content/Button/Button.vue'
import Toast from 'components/content/Toast/Toast.vue'
import BS from 'components/common/BS/BS.vue'

import { getUserById } from 'api'
import toast from '../../mixins/toast'

export default {
  name: 'OtherProfile',
  components: { NavBar, Button, Toast, BS },
  mixins: [ toast ],
  data() {
    return {
      info: {}
    }
  },
  methods: {
    // 获取用户信息
    async getPersonInfo() {
      const { params: { _id } } = this.$route
      const res = await getUserById({_id})
      if(res.meta.code != 0) {
        return this.open("数据获取失败")
      }
      this.info = res.data
    },

    goChat() {
      this.$router.go(-1)
    }
  },
  computed: {
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
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(240, 239, 239);
  }
  .profile .profile-nav{
    background-color: #008c8c;
    color: #fff;
    font-size: 22px;
  }
  .profile .profile-nav .profile-nav-back{
    margin-left: -35px;
    font-size: 24px;
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
    margin-bottom: 13px;
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
  .profile .login-tip{
    font-size: 14px;
    color: #999;
    padding-left: 10px;
  }
  .profile .login-info{
    margin: 10px 0;
    padding: 10px;
    line-height: 1.5;
    font-size: 14px;
    color: rgb(156, 156, 156);
  }
  .profile .login-info p{
    margin-bottom: 5px;
  }
  .profile .go-chat{
    margin-top: 10px;
  }
  .other-profile-bs{
    height: 250px;
    background-color: #fff;
    margin: 15px 0;
  }
</style>
