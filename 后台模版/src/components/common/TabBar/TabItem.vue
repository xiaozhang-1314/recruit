<template>
  <router-link :to="to" class="tab-item">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'TabItem',
  props: {
    to: {
      type: String,
      default: 'index'
    }
  }
}
</script>

<style scoped>
  .tab-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  .router-link-active{
    color: #008c8c;
  }
</style>
