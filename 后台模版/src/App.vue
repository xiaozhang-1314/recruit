<template>
  <router-view v-slot="{ Component }">
    <keep-alive :exclude="['ChatDetail', 'PerfectInfo']">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <my-tab class="my-tab-bar" v-if="$route.meta.showTab" />
</template>

<script>
import MyTab from 'components/content/MyTab/MyTab.vue'

export default {
  name: 'App',
  components: { MyTab }
}
</script>

<style>
  @import url("//at.alicdn.com/t/font_2533622_mr6mcudzkt.css");
  @import url('~assets/css/index.css');
  .my-tab-bar{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
</style>
