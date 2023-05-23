<template>
  <div class="home">
    <!-- 头部navbar区域 -->
    <nav-bar class="home-nav">
      <template #left>
        <span class="home-search" @click="goSearch"><i class="iconfont icon-sousuo"></i></span>
      </template>
      <template #center>
        <p class="home-title">校招直聘</p>
      </template>
      <template #right>
        <span class="home-login">
          <span @click="goLogin" v-show="!logined">登录/注册</span>
          <span v-show="logined" class="home-mine" @click="goProfile"><i class="iconfont icon-geren"></i></span>
        </span>
      </template>
    </nav-bar>
    <BS class="home-bs" ref="homeBs">
      <!-- 轮播图区域 -->
      <Slide class="home-slide" :nums='slideList' />
      <!-- 招聘信息列表区域 -->
      <post-item v-if="postList.length" v-for="item in postList" :key="item._id" :postObj='item' />
      <!-- 无招聘信息 -->
      <p v-else>还没有任何招聘信息哦</p>
    </BS>
    <Toast v-show="showToast">{{toastContent}}</Toast>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar.vue'
import BS from 'components/common/BS/BS.vue'
import Slide from 'components/common/Slide/Slide.vue'
import Toast from 'components/content/Toast/Toast.vue'
import PostItem from 'components/content/PostItem/PostItem.vue'

import isLogin from '../../mixins/isLogin'
import { getInfo } from 'utils/optInfo'
import { getUserList } from 'api'
import toast from '../../mixins/toast'

export default {
  name: 'Home',
  components: { NavBar, BS, Slide, Toast, PostItem },
  mixins: [isLogin, toast],
  data() {
    return {
      slideList: [
        'https://img0.baidu.com/it/u=3738099385,1937222982&fm=26&fmt=auto&gp=0.jpg',
        'https://img2.baidu.com/it/u=2186523027,3972765946&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=363',
        'https://img0.baidu.com/it/u=1261793572,3459012903&fm=26&fmt=auto&gp=0.jpg',
        'https://img2.baidu.com/it/u=1084617077,3705794227&fm=26&fmt=auto&gp=0.jpg',
        'https://img0.baidu.com/it/u=2491213369,135154052&fm=26&fmt=auto&gp=0.jpg'
      ],
      postList: []
    }
  },
  methods: {
    // 获取职位列表
    async getPostList() {
      const type = getInfo('__user__').type === 'hr' ? 'worker' : 'hr'
      const res = await getUserList()
      if(res.meta.code != 0) {
        return this.open("数据获取失败")
      }
      this.postList = res.data.filter(item => item.type === type)
    },
    goLogin() {
      this.$router.push('/login')
    },
    goProfile() {
      this.$router.push('/profile')
    },
    goSearch() {
      this.$router.push('/search')
    }
  },
  activated() {
    this.getPostList()
    const _id = getInfo('__user__')._id
    if(_id && !this.$store.state.chatList.length) {
      this.$store.dispatch('getChatInfo')
    }
    this.$nextTick(() => {
      this.$refs.homeBs.refresh()
    })
  }
}
</script>

<style scoped>
  .home{
    position: fixed;
    top: 0;
    bottom: 49px;
    left: 0;
    right: 0;
    background-color: rgb(240, 239, 239);
  }
  .home .home-nav{
    background-color: #008c8c;
    color: #fff;
  }
  .home .home-nav .home-search .iconfont{
    font-size: 22px;
    margin-left: -30px;
  }
  .home .home-nav .home-login{
    font-size: 14px;
  }
  .home .home-nav .home-title{
    width: 160px;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .home .home-nav .home-mine .iconfont{
    font-size: 22px;
    margin-right: -20px;
  }
  .home .home-bs{
    height: calc(100% - 44px);
  }
  .home .home-bs p{
    font-size: 16px;
    color: #999;
    padding: 10px;
  }
</style>
