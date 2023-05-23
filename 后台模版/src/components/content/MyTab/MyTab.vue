<template>
  <tab-bar>
    <tab-item class="tab-item" v-for="item in list" :key="item.name" :to='item.to'>
      <i :class="['iconfont', item.icon]"></i>
      <span class="name">{{item.name}}</span>
      <span class="tab-item-msg" v-if="item.name==='消息'" v-show="total">{{total}}</span>
    </tab-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/TabBar/TabBar.vue'
import TabItem from 'components/common/TabBar/TabItem.vue'

import { getInfo } from 'utils/optInfo'

export default {
  name: 'MyTab',
  components: { TabBar, TabItem },
  data() {
    return {
      list: [
        {
          to: '/home',
          name: '首页',
          icon: 'icon-caidan'
        },
        {
          to: '/chatList',
          name: '消息',
          icon: 'icon-xiaoxi1'
        },
        {
          to: '/profile',
          name: '我的',
          icon: 'icon-geren'
        }
      ]
    }
  },
  computed: {
    total() {
      return this.$store.getters.totalUnRead(getInfo('__user__')._id)
    }
  }
}
</script>

<style scoped>
  .tab-item{
    position: relative;
  }
  .iconfont{
    margin: 5px 0 5px;
    font-size: 24px;
    font-weight: 700;
  }
  .name{
    font-size: 12px;
  }
  .tab-item .tab-item-msg{
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    position: absolute;
    right: 40px;
    top: -2px;
    background-color: red;
    border-radius: 50%;
    color: #fff;
    font-size: 12px;
  }
</style>
