<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
  .tab-bar{
    height: 49px;
    background-color: #fff;
    box-shadow: 0 -1px 1px rgb(235, 234, 234);
    display: flex;
    align-items: center;
  }
</style>
