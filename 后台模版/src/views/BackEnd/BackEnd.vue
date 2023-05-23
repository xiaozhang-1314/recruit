<template>
  <div class="back-end">
    <!-- 头部navbar区域 -->
    <nav-bar class="back-end-nav">
      <template #center>
        <p class="back-end-title">直聘后台</p>
      </template>
      <template #right>
        <i class="iconfont icon-tuichu" @click="out"></i>
      </template>
    </nav-bar>
    <div class="control-bar">
      <span v-for="(item, i) in list" :key="i">
        <router-link :to="item.to">{{item.name}}</router-link>
      </span>
    </div>
    <router-view />
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar.vue'

import { removeInfo } from 'utils/optInfo'

export default {
  name: 'BackEnd',
  components: { NavBar },
  data() {
    return {
      list: [{to: '/backEnd/user', name: '人员管理'}, {to: '/backEnd/chats', name: '聊天信息管理'}]
    }
  },
  methods: {
    out() {
      removeInfo('__user__')
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped>
   .back-end .back-end-nav{
    background-color: #008c8c;
    color: #fff;
    font-size: 22px;
  }
  .back-end .back-end-nav .iconfont{
    margin-right: -25px;
    font-size: 20px;
  }
  .back-end .control-bar{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .back-end .control-bar span{
    padding: 12px 0 0;
    color: #333;
  }
  .back-end .control-bar span .router-link-active{
    color: #008c8c;
    padding-bottom: 8px;
    border-bottom: 2px solid #008c8c;
    font-weight: 600;
  }
</style>
