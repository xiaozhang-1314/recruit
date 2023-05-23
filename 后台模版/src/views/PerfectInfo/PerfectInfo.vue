<template>
  <div class="perfect-info">
    <!-- 头部navbar区域 -->
    <nav-bar class="perfect-nav">
      <template #center>
        <p class="perfect-title">信息完善</p>
      </template>
    </nav-bar>
    <BS class="perfect-bs">
      <!-- 选择头像区域 -->
      <choose-avatar @chooseAv='chooseAv' />
      <!-- hr完善区域 -->
      <hr-perfect v-if="type" :avatar='avatar' />
      <!-- worker完善区域 -->
      <worker-perfect v-if="!type" :avatar='avatar' />
    </BS>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar.vue'
import BS from 'components/common/BS/BS.vue'

import ChooseAvatar from './ChildContent/ChooseAvatar.vue'
import HrPerfect from './ChildContent/HrPerfect.vue'
import WorkerPerfect from './ChildContent/WorkerPerfect.vue'

import { getInfo } from 'utils/optInfo'

export default {
  name: 'PerfectInfo',
  components: { NavBar, ChooseAvatar, HrPerfect, WorkerPerfect, BS },
  data() {
    return {
      avatar: ''
    }
  },
  methods: {
    // 获取头像地址
    chooseAv(avatar) {
      this.avatar = avatar
    }
  },
  computed: {
    type() {
      const type = getInfo('__user__').type
      return type === 'hr' ? true : false
    }
  }
}
</script>

<style scoped>
  .perfect-info{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .perfect-info .perfect-nav{
    background-color: #008c8c;
    color: #fff;
    font-size: 20px;
  }
  .perfect-info .perfect-bs{
    height: calc(100% - 44px);
  }
</style>
